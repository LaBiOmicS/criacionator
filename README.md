# 🍌 Criacionator 3000

> **O Gerador Infalível de Falácias Criacionistas & Sua Destruição Científica Impiedosa**  
> *"Porque se o homem veio do macaco, por que ainda existem bananas com zíper natural e pastores vendendo terreno no céu?"*

Uma aplicação web satírica e educativa feita para rodar diretamente no **GitHub Pages**, combinando o humor do absurdo com a solidez da divulgação científica (no espírito de Carl Sagan, Richard Dawkins, Stephen Jay Gould e dos divulgadores científicos brasileiros).

---

## 🚀 Como Colocar no GitHub Pages em 2 Minutos

Como o projeto é construído 100% com tecnologias estáticas da web (**HTML5 puro, CSS3 moderno e Vanilla JavaScript**), ele não requer Node.js, compilação nem servidor de backend.

### Passo a Passo:

1. **Inicie o repositório git local e suba para o seu GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Criacionator 3000 inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Ative o GitHub Pages:**
   - Acesse o seu repositório no GitHub.
   - Vá em **Settings** (Configurações) > **Pages** (no menu lateral esquerdo).
   - Em **Build and deployment** > **Source**, selecione:
     - Branch: `main`
     - Pasta: `/ (root)`
   - Clique em **Save**.

3. **Pronto!** Em cerca de 1 a 2 minutos, o GitHub disponibilizará o link público:
   `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

## ✨ Funcionalidades Principais

1. **Dual Card / Comparador Lado a Lado**:
   - **Lado A (O Dogma & A Revelação)**: Apresenta o argumento criacionista com toda a retórica pomposa, analogias estapafúrdias de WhatsApp ("tornado montando Boeing 747"), citações bíblicas distorcidas e o **Deliriômetro** animado com notas sarcásticas de 0 a 10.
   - **Lado B (A Marretada da Realidade)**: Identifica formalmente a falácia lógica (ex: *Argumento da Incredulidade Pessoal*, *Espantalho Termodinâmico*, *Deus das Lacunas*), explica com humor afiado por que o argumento é absurdo e detalha o que a biologia evolutiva, a geologia e a física quântica realmente comprovam.

2. **Fontes Científicas Reais com DOIs e Links**:
   - Cada refutação científica cita artigos reais revisados por pares em periódicos de prestígio internacional (**Nature**, **Science**, **PNAS**, **American Journal of Physics**, livros de referência e o **TalkOrigins Archive**), com links diretos para leitura e verificação.

3. **Geração Dinâmica via IA com Google Gemini API**:
   - Você pode conectar sua própria chave gratuita da API do Gemini (obtida no [Google AI Studio](https://aistudio.google.com/app/apikey)).
   - Escolha entre diferentes personas de pregadores:
     - *O Pastor Radialista de WhatsApp das 6h*
     - *O Pseudo-Cientista de Jaleco e Doutorado Teológico*
     - *O Literalista Bíblico dos Dinossauros Vegetarianos na Arca*
     - *O Teórico da Conspiração Científica Mundial*
   - A IA gera dinamicamente tanto o argumento absurdo quanto sua refutação com fontes científicas reais em formato JSON estruturado!
   - **Segurança da Chave**: A chave da API fica armazenada exclusivamente no `localStorage` do seu navegador. Ela nunca passa por nenhum servidor intermediário e é enviada diretamente e apenas para a API oficial do Google.

4. **Base Embutida Pronta (Funciona Offline)**:
   - Se você não quiser configurar uma chave de API, o site vem pré-carregado com uma coleção rica de **12 dos mais famosos clássicos do criacionismo mundial**, totalmente navegáveis e filtráveis por categoria.

5. **Modo Quiz Interativo / Desafio da Razão**:
   - Teste seus amigos! O site esconde a refutação científica e faz uma pergunta de múltipla escolha para o usuário adivinhar qual é o erro biológico antes de revelar os artigos científicos.

6. **Efeitos Sonoros Sintéticos (Web Audio API)**:
   - Efeitos sonoros gerados diretamente pelo oscilador de áudio do navegador (harpa celestial satírica para o criacionismo, som de laser/marreta para a ciência e fanfarra para o quiz). Zero arquivos MP3 pesados para carregar.

7. **Leitura com Voz (Web Speech API)**:
   - Ouça o argumento criacionista narrado em tom dramático e a refutação explicada com clareza com um clique no botão de alto-falante.

8. **Compartilhamento & Cópia Rápida**:
   - Botão para copiar texto pronto e formatado para grupos de WhatsApp, Telegram, Reddit ou Twitter.

---

## 📂 Estrutura de Arquivos

```
.
├── index.html          # Estrutura semântica da página, acessível e responsiva
├── .nojekyll           # Evita que o GitHub Pages tente processar pastas estáticas
├── README.md           # Documentação completa
├── css/
│   └── styles.css      # Estilização moderna, tema escuro com acentos âmbar e ciano
└── js/
    ├── data.js         # Base curada de falácias clássicas e fontes científicas
    ├── sound.js        # Sintetizador de efeitos sonoros nativo via Web Audio API
    ├── gemini.js       # Comunicação com a API do Google Gemini (JSON estruturado)
    └── app.js          # Lógica da interface, eventos, quiz, TTS e favoritos
```

---

## 🧪 Como Testar Localmente

Se quiser rodar a página no seu computador antes de subir para o GitHub:

```bash
# Com Python 3:
python3 -m http.server 8000

# Depois abra no navegador:
# http://localhost:8000
```

---

## ⚖️ Licença e Aviso Legal

Este projeto tem finalidade exclusivamente recreativa, satírica e de divulgação científica/educação pública, resguardada pela liberdade de expressão e de crítica acadêmica. Todas as citações científicas são reais e verificáveis na literatura biológica e física.
