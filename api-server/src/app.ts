import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { createProxyMiddleware } from "http-proxy-middleware";
import router from "./routes";
import { logger } from "./lib/logger";
import { CODE_SERVER_PORT, isCodeServerReady } from "./lib/codeServer";

const app: Express = express();

app.use(cors({ origin: "*" }));

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) { return { id: req.id, method: req.method, url: req.url?.split("?")[0] }; },
      res(res) { return { statusCode: res.statusCode }; },
    },
  }),
);

// ── API body parsers + routes (all under /api) ────────────────────────────────
app.use("/api", express.json({ limit: "50mb" }));
app.use("/api", express.urlencoded({ extended: true }));
app.use("/api", router);

const proxyResHandler = {
  proxyRes: (proxyRes: any) => {
    delete proxyRes.headers["x-frame-options"];
    delete proxyRes.headers["content-security-policy"];
    delete proxyRes.headers["content-security-policy-report-only"];
    proxyRes.headers["access-control-allow-origin"] = "*";
  },
  error: (_err: any, _req: any, res: any) => {
    if (typeof (res as any).status === "function") {
      const html = `<!DOCTYPE html>
<html>
<head><meta name="viewport" content="width=device-width, initial-scale=1"><style>
body{background:#1e1e1e;color:#ccc;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:20px;padding:20px;box-sizing:border-box;text-align:center}
h2{color:#fff;margin:0}p{color:#888;margin:0;font-size:14px}
button{background:#007acc;color:#fff;border:0;padding:14px 28px;border-radius:10px;font-size:16px;cursor:pointer;font-weight:700}
</style></head>
<body>
<div style="font-size:56px">⏳</div>
<h2>VS Code iniciando…</h2>
<p>Aguarde alguns segundos e recarregue.</p>
<button onclick="location.reload()">↺ Recarregar</button>
</body></html>`;
      (res as any).status(isCodeServerReady() ? 502 : 503).send(html);
    }
  },
};

// ── VS Code (code-server) proxy — /vscode entry point ─────────────────────────
// The Replit proxy routes /vscode → this server. We strip the /vscode prefix
// so code-server (running at /) sees the request without it.
const codeServerVscodeProxy = createProxyMiddleware({
  target: `http://127.0.0.1:${CODE_SERVER_PORT}`,
  changeOrigin: true,
  ws: true,
  pathFilter: (path) => path.startsWith("/vscode"),
  pathRewrite: { "^/vscode": "" },
  on: proxyResHandler,
});

// ── VS Code asset paths proxy (/_static, /_cs, /stable-*) ────────────────────
// These paths are used by code-server for static assets. The Replit proxy
// routes them to this server so code-server can serve them correctly.
const codeServerAssetsProxy = createProxyMiddleware({
  target: `http://127.0.0.1:${CODE_SERVER_PORT}`,
  changeOrigin: true,
  ws: true,
  pathFilter: (path) =>
    !path.startsWith("/api") &&
    !path.startsWith("/vscode") &&
    (path.startsWith("/_static") ||
      path.startsWith("/_cs") ||
      path.startsWith("/stable-")),
  on: proxyResHandler,
});

app.use(codeServerVscodeProxy);
app.use(codeServerAssetsProxy);

export default app;
export { codeServerVscodeProxy as codeServerProxy };
