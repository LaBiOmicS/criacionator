# 🍌 Criacionator 3000

> **O Gerador de Falácias Criacionistas & Sua Demolição Científica Impiedosa**  
> *"Da Sopa Primordial ao Homo sapiens: 4,5 Bilhões de Anos de Fatos vs 6.000 Anos de Delírio"*

Uma aplicação web interativa, satírica e educativa para combate ao negacionismo científico e divulgação da biologia evolutiva, astrofísica e geologia moderna. Funciona 100% no navegador via **GitHub Pages**, combinando inteligência artificial (Google Gemini API) e uma vasta biblioteca com **mais de 100 falácias históricas catalogadas** com artigos revisados por pares (**Nature**, **Science**, **PNAS**, **TalkOrigins Archive**).

🌐 **Site no Ar (GitHub Pages):** [https://labiomics.github.io/criacionator/](https://labiomics.github.io/criacionator/)

---

## 🏛️ Créditos Acadêmicos & Institucionais

**Desenvolvido no LaBiOmicS — Laboratório de Bioinformática e Ciências Ômicas, Universidade de Mogi das Cruzes.**  
**Coordenação:** Prof. Dr. Fabiano Bezerra Menegidio · [fabianomenegidio@umc.br](mailto:fabianomenegidio@umc.br)

---

## ✨ Funcionalidades Principais

### 1. 🧬 Hero Evolutivo do Tempo Profundo (*Deep Time*)
- **Visualizador Interativo da Linha do Tempo da Terra (4,54 Ga &rarr; Presente)**:
  - 🌍 **4,54 Ga** — Formação da Terra (Hadeano & oceanos primitivos)
  - 🦠 **3,80 Ga** — LUCA, Abiogênese & Mundo de RNA
  - ☀️ **2,40 Ga** — Grande Evento de Oxigenação (Cianobactérias mudam o planeta)
  - 🔬 **1,80 Ga** — Origem dos Eucariontes (Endossimbiose e mitocôndrias)
  - 🦐 **540 Ma** — Explosão Cambriana (Radiação dos filos e planos corporais)
  - 🐟➡️🦎 **375 Ma** — Transição Água-Terra (*Tiktaalik*, *Acanthostega* e tetrápodes)
  - 🦕 **230 Ma** — Era dos Dinossauros & Aves com Penas
  - ☄️ **66 Ma** — Extinção K-Pg (Asteroide de Chicxulub & radiação dos mamíferos)
  - 🦧 **7 Ma** — Linhagem Hominínea (Bipedalismo, *Australopithecus* e gênero *Homo*)
  - 🧠 **300 ka** — *Homo sapiens* (Nossa espécie e a consciência humana)
  - 🛑 **6.000 anos (0,0001% do tempo)** — *O Mito da Terra Jovem* (onde apologistas fingem que Adão passeava de mãos dadas com tiranossauros carnívoros comendo alface).
- Clicar em qualquer marco evolutivo filtra imediatamente os argumentos e dispara evidências científicas relacionadas!

### 2. 📚 Mais de 100 Falácias Históricas Catalogadas (104 itens)
Uma biblioteca curada e categorizada cobrindo:
1. **🧬 Origem da Vida & Abiogênese**: O mito da geração espontânea de Pasteur, experimentos de Miller-Urey, quiralidade dos aminoácidos, mundo de RNA, hidrotermais oceânicos.
2. **🐒 Evolução Humana & Primatas**: O homem do Piltdown, "se viemos do macaco por que ainda existem macacos?", elos perdidos, fusão do cromossomo 2 humano, bipedalismo de Lucy.
3. **🧩 Design Inteligente & Complexidade**: O relojoeiro de Paley, flagelo bacteriano, complexidade irredutível de Michael Behe, a evolução gradual do olho de Nilsson & Pelger.
4. **🦕 Dinossauros & Paleontologia**: Células e colágeno de *T. rex* de Mary Schweitzer, pegadas falsas do Rio Paluxy, aves são dinossauros terópodes vivos, pulmões unidirecionais.
5. **🔬 Genética & Mutações**: O mito de que mutações "não geram informação nova", experimento de longo prazo de Richard Lenski (*E. coli* cítrica), duplicações gênicas, nylonase.
6. **⏳ Geologia & Terra Jovem**: Confiabilidade das isócronas radiométricas, poeira lunar, Grand Canyon esculpido em milhões de anos, decaimento do campo magnético da Terra (geodínamo).
7. **🌡️ 2ª Lei da Termodinâmica**: O erro grosseiro de ignorar que a Terra é um sistema aberto banhado por 174 petawatts contínuos de energia solar.
8. **📖 Literalismo Bíblico & Arca de Noé**: A física do Dilúvio, dispersão pós-Arca, volume de água, problema térmico da precipitação e biologia de populações.

### 3. 🔍 Busca e Filtros em Tempo Real no Catálogo
- Barra de busca instantânea com suporte a palavras-chave (ex: *"banana"*, *"olho"*, *"arca"*, *"entropia"*, *"neandertal"*, *"tiranossauro"*).
- Filtro por categorias com contagem dinâmica de correspondências.
- Carregamento com 1 clique diretamente no comparador lado a lado.

### 4. ⚔️ Comparador Dual (Duelo de Perspectivas)
- **Lado A (O Dogma & A Revelação)**: Retórica pomposa de pregador, analogias de WhatsApp (*"tornado montando Boeing 747 num ferro-velho"*), citações bíblicas distorcidas e o **Deliriômetro de Watts** (0 a 10).
- **Lado B (A Demolição Científica)**: Identificação formal da falácia lógica, explicação bem-humorada de por que é um disparate completo, a ciência real e **fontes científicas verificadas** com links e DOIs oficiais.

### 5. ✨ Geração Dinâmica via IA (Google Gemini API)
- Chave de API opcional armazenada localmente com segurança no `localStorage` do usuário.
- Seleção de personas (O Pastor de WhatsApp, O Pseudo-Cientista de Jaleco, O Literalista Bíblico, O Teórico da Conspiração).
- Redundância inteligente automática (`gemini-2.5-flash` &rarr; `gemini-3.5-flash` &rarr; `gemini-3.5-flash-lite`).

### 6. 🎯 Modo Quiz Interativo & Efeitos Sonoros Nativos
- Modo desafio para adivinhar a falácia antes de revelar os artigos científicos.
- Efeitos sonoros gerados puramente no navegador via **Web Audio API** (harpa satírica, laser científico e sons de feedback).
- Narração em voz alta via **Web Speech API**.

---

## 📂 Estrutura de Arquivos

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD GitHub Actions para deploy no GitHub Pages
├── index.html              # Interface semântica, hero evolutivo e modais
├── .nojekyll               # Evita processamento pelo Jekyll
├── README.md               # Documentação do projeto
├── css/
│   └── styles.css          # Design responsivo, tema escuro, timeline e animações
└── js/
    ├── data.js             # Base curada com 104 falácias e artigos científicos
    ├── sound.js            # Sintetizador Web Audio API para efeitos sonoros
    ├── gemini.js           # Integração com API Google Gemini com fallback
    └── app.js              # Lógica da aplicação, busca, timeline e modais
```

---

## 🧪 Como Executar Localmente

Como o projeto é 100% estático (HTML, CSS e JS nativos), não é necessário instalar dependências:

```bash
# Clone o repositório
git clone https://github.com/LaBiOmicS/criacionator.git
cd criacionator

# Inicie um servidor local (Python 3)
python3 -m http.server 8000

# Acesse no seu navegador:
# http://localhost:8000
```

---

## ⚖️ Licença e Compromisso Científico

Iniciativa acadêmica e satírica para educação científica, pensamento crítico e combate à desinformação biológica. Todas as fontes científicas citadas no catálogo correspondem a artigos legítimos, experimentos empíricos e trabalhos revisados por pares na literatura internacional.
