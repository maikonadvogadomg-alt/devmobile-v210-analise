# PLANO DO PROJETO: DevMobile-v2.1.0-analise

> Gerado automaticamente pelo SK Code Editor em 30/04/2026, 19:37:06
> **56 arquivo(s)** | **~23.964 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript

**Para rodar o projeto:**
```bash
npm install
```

---

## ESTRUTURA DE ARQUIVOS

```
DevMobile-v2.1.0-analise/
├── api-server/
│   └── src/
│       ├── lib/
│       │   ├── .gitkeep
│       │   ├── codeServer.ts
│       │   └── logger.ts
│       ├── middlewares/
│       │   └── .gitkeep
│       ├── routes/
│       │   ├── ai-proxy.ts
│       │   ├── db.ts
│       │   ├── github.ts
│       │   ├── health.ts
│       │   ├── index.ts
│       │   ├── preview.ts
│       │   ├── search.ts
│       │   ├── terminal.ts
│       │   └── termux.ts
│       ├── app.ts
│       └── index.ts
└── mobile/
    ├── app/
    │   ├── (tabs)/
    │   │   ├── _layout.tsx
    │   │   ├── ai.tsx
    │   │   ├── editor.tsx
    │   │   ├── index.tsx
    │   │   ├── plugins.tsx
    │   │   ├── settings.tsx
    │   │   ├── tasks.tsx
    │   │   └── terminal.tsx
    │   ├── _layout.tsx
    │   └── +not-found.tsx
    ├── components/
    │   ├── AIChat.tsx
    │   ├── AIMemoryModal.tsx
    │   ├── CampoLivreModal.tsx
    │   ├── CheckpointsModal.tsx
    │   ├── CodeEditor.tsx
    │   ├── CombinarAppsModal.tsx
    │   ├── ErrorBoundary.tsx
    │   ├── ErrorFallback.tsx
    │   ├── FileSidebar.tsx
    │   ├── FloatingAI.tsx
    │   ├── GitHubModal.tsx
    │   ├── HtmlPlayground.tsx
    │   ├── KeyboardAwareScrollViewCompat.tsx
    │   ├── LibrarySearch.tsx
    │   ├── ManualModal.tsx
    │   ├── MessageRenderer.tsx
    │   ├── MonacoEditor.tsx
    │   ├── PreviewPanel.tsx
    │   ├── ProjectOverviewModal.tsx
    │   ├── ProjectPlanModal.tsx
    │   ├── SystemStatus.tsx
    │   ├── Terminal.tsx
    │   ├── VoiceAssistant.tsx
    │   └── VSCodeView.tsx
    ├── context/
    │   └── AppContext.tsx
    ├── hooks/
    │   ├── useApiBase.ts
    │   └── useColors.ts
    ├── utils/
    │   ├── projectPlan.ts
    │   └── zipUtils.ts
    ├── app.json
    └── eas.json
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript

---

## ROTAS DA API (endpoints detectados automaticamente)

```
USE    /api  (em api-server/src/app.ts)
USE    /api  (em api-server/src/app.ts)
USE    /api  (em api-server/src/app.ts)
POST   /ai/chat  (em api-server/src/routes/ai-proxy.ts)
POST   /db/test-connection  (em api-server/src/routes/db.ts)
POST   /db/execute  (em api-server/src/routes/db.ts)
GET    /github/user  (em api-server/src/routes/github.ts)
GET    /github/repos  (em api-server/src/routes/github.ts)
POST   /github/clone  (em api-server/src/routes/github.ts)
POST   /github/create-repo  (em api-server/src/routes/github.ts)
POST   /github/push-files  (em api-server/src/routes/github.ts)
GET    /healthz  (em api-server/src/routes/health.ts)
GET    /preview/check  (em api-server/src/routes/preview.ts)
USE    /preview/port/:port  (em api-server/src/routes/preview.ts)
GET    /search  (em api-server/src/routes/search.ts)
POST   /terminal/exec  (em api-server/src/routes/terminal.ts)
POST   /terminal/interrupt  (em api-server/src/routes/terminal.ts)
GET    /terminal/status  (em api-server/src/routes/terminal.ts)
POST   /terminal/write  (em api-server/src/routes/terminal.ts)
GET    /terminal/ls  (em api-server/src/routes/terminal.ts)
GET    /terminal/read  (em api-server/src/routes/terminal.ts)
DELETE /terminal/session/:sessionId  (em api-server/src/routes/terminal.ts)
GET    /termux/server.mjs  (em api-server/src/routes/termux.ts)
GET    /termux/setup.sh  (em api-server/src/routes/termux.ts)
GET    /termux/download  (em api-server/src/routes/termux.ts)
GET    /termux/info  (em api-server/src/routes/termux.ts)
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
PATH=seu_valor_aqui
LOG_LEVEL=seu_valor_aqui
EXPO_PUBLIC_DOMAIN=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `api-server/src/app.ts` — Ponto de entrada do backend
- `api-server/src/index.ts` — Ponto de entrada do backend
- `api-server/src/routes/index.ts` — Ponto de entrada do backend
- `mobile/app/(tabs)/index.tsx` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 `mobile/`
> Pasta 'mobile' — agrupamento de arquivos relacionados.

**`app.json`** _(56 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`eas.json`** _(50 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

---

### 📁 `api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(88 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(46 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `mobile/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(70 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

---

### 📁 `mobile/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(972 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AIMemoryModal.tsx`** _(203 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CampoLivreModal.tsx`** _(989 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CheckpointsModal.tsx`** _(173 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`CodeEditor.tsx`** _(337 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarAppsModal.tsx`** _(352 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`FileSidebar.tsx`** _(615 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`FloatingAI.tsx`** _(897 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubModal.tsx`** _(975 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`HtmlPlayground.tsx`** _(706 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`KeyboardAwareScrollViewCompat.tsx`** _(30 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`LibrarySearch.tsx`** _(327 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`ManualModal.tsx`** _(723 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`MessageRenderer.tsx`** _(265 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`MonacoEditor.tsx`** _(163 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`PreviewPanel.tsx`** _(493 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`ProjectOverviewModal.tsx`** _(504 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`ProjectPlanModal.tsx`** _(369 linhas)_
Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.

**`SystemStatus.tsx`** _(480 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(745 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VSCodeView.tsx`** _(616 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`VoiceAssistant.tsx`** _(954 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `mobile/context/`
> Gerenciamento de estado global — dados compartilhados entre telas.

**`AppContext.tsx`** _(1141 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

---

### 📁 `mobile/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useApiBase.ts`** _(62 linhas)_
HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.

**`useColors.ts`** _(25 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `mobile/utils/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`projectPlan.ts`** _(208 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zipUtils.ts`** _(403 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

**`codeServer.ts`** _(156 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `api-server/src/middlewares/`
> Pasta 'middlewares' — agrupamento de arquivos relacionados.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

---

### 📁 `api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-proxy.ts`** _(87 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`db.ts`** _(67 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(236 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(23 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`preview.ts`** _(57 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`terminal.ts`** _(294 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`termux.ts`** _(157 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `mobile/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(152 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`ai.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`editor.tsx`** _(1567 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`index.tsx`** _(3209 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`plugins.tsx`** _(1234 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings.tsx`** _(1527 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`tasks.tsx`** _(522 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`terminal.tsx`** _(81 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: DevMobile-v2.1.0-analise
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 56 | Linhas: ~23.964
Rotas API: 26 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: PATH, LOG_LEVEL, EXPO_PUBLIC_DOMAIN

Estrutura principal:
  api-server/src/app.ts
  api-server/src/index.ts
  api-server/src/lib/.gitkeep
  api-server/src/lib/codeServer.ts
  api-server/src/lib/logger.ts
  api-server/src/middlewares/.gitkeep
  api-server/src/routes/ai-proxy.ts
  api-server/src/routes/db.ts
  api-server/src/routes/github.ts
  api-server/src/routes/health.ts
  api-server/src/routes/index.ts
  api-server/src/routes/preview.ts
  api-server/src/routes/search.ts
  api-server/src/routes/terminal.ts
  api-server/src/routes/termux.ts
  mobile/app.json
  mobile/app/(tabs)/_layout.tsx
  mobile/app/(tabs)/ai.tsx
  mobile/app/(tabs)/editor.tsx
  mobile/app/(tabs)/index.tsx
  mobile/app/(tabs)/plugins.tsx
  mobile/app/(tabs)/settings.tsx
  mobile/app/(tabs)/tasks.tsx
  mobile/app/(tabs)/terminal.tsx
  mobile/app/+not-found.tsx
  mobile/app/_layout.tsx
  mobile/components/AIChat.tsx
  mobile/components/AIMemoryModal.tsx
  mobile/components/CampoLivreModal.tsx
  mobile/components/CheckpointsModal.tsx
  mobile/components/CodeEditor.tsx
  mobile/components/CombinarAppsModal.tsx
  mobile/components/ErrorBoundary.tsx
  mobile/components/ErrorFallback.tsx
  mobile/components/FileSidebar.tsx
  mobile/components/FloatingAI.tsx
  mobile/components/GitHubModal.tsx
  mobile/components/HtmlPlayground.tsx
  mobile/components/KeyboardAwareScrollViewCompat.tsx
  mobile/components/LibrarySearch.tsx
  mobile/components/ManualModal.tsx
  mobile/components/MessageRenderer.tsx
  mobile/components/MonacoEditor.tsx
  mobile/components/PreviewPanel.tsx
  mobile/components/ProjectOverviewModal.tsx
  mobile/components/ProjectPlanModal.tsx
  mobile/components/SystemStatus.tsx
  mobile/components/Terminal.tsx
  mobile/components/VSCodeView.tsx
  mobile/components/VoiceAssistant.tsx
  mobile/context/AppContext.tsx
  mobile/eas.json
  mobile/hooks/useApiBase.ts
  mobile/hooks/useColors.ts
  mobile/utils/projectPlan.ts
  mobile/utils/zipUtils.ts
```

---

*Plano gerado pelo SK Code Editor — 30/04/2026, 19:37:06*