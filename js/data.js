/**
 * Criacionator 3000 — Catálogo de Falácias Criacionistas & Refutações Científicas
 * Desenvolvido no LaBiOmicS — Laboratório de Bioinformática e Ciências Ômicas
 * Universidade de Mogi das Cruzes (UMC)
 * Coordenação: Prof. Dr. Fabiano Bezerra Menegidio · fabianomenegidio@umc.br
 *
 * Base de dados curada com mais de 100 clássicos do criacionismo e suas refutações científicas
 * com artigos revisados por pares (Nature, Science, PNAS, etc.) e TalkOrigins Archive.
 */

const ARGUMENTOS_CLASSICOS = [
  {
    "id": "abiogenese-tornado",
    "titulo": "A evolução é como um tornado num ferro-velho montando um Boeing 747!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "A probabilidade de uma célula viva se formar por processos naturais aleatórios é idêntica à de um furacão passar por um ferro-velho e deixar montado um Boeing 747 abastecido!",
    "analogia_absurda": "Chacoalhar uma caixa com engrenagens soltas e esperar sair um Rolex suíço funcionando.",
    "citacao_ou_versiculo": "Analogia atribuída a Fred Hoyle (1981).",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Engenheiro de Avião de Papel",
    "falacia_logica": "Falsa Equivalência Probabilística + Acaso Cego em Passo Único",
    "por_que_e_idiota": "A evolução biológica e a seleção natural NÃO são mero acaso! A mutação introduz variação, mas a seleção natural é um processo cumulativo não-aleatório que filtra e preserva vantagens adaptativas a cada geração.",
    "a_ciencia_real": "A seleção cumulativa transforma probabilidades infinitesimais em certezas estatísticas. A abiogênese começou com pequenas moléculas autorreplicantes em fontes hidrotermais (Mundo de RNA), não com uma célula moderna inteira pronta de uma só vez.",
    "fontes_cientificas": [
      {
        "autor_ano": "Dawkins, R. (1986)",
        "titulo": "The Blind Watchmaker",
        "periodico": "W. W. Norton",
        "doi_ou_link": "https://www.worldcat.org/title/blind-watchmaker/oclc/13498877"
      },
      {
        "autor_ano": "Joyce, G. F. (2002)",
        "titulo": "The antiquity of RNA-based evolution",
        "periodico": "Nature, 418(6894), 214–221",
        "doi_ou_link": "https://doi.org/10.1038/418214a"
      }
    ],
    "quiz": {
      "pergunta": "Por que a analogia do Boeing de Fred Hoyle é cientificamente incorreta?",
      "opcoes": [
        "A evolução é um processo cumulativo não-aleatório de bilhões de anos, não um sorteio único ao acaso.",
        "Boeings não voam sem piloto.",
        "Ferros-velhos não têm titânio.",
        "Tornados geram sustentação aerodinâmica."
      ],
      "correta": 0,
      "explicacao_rapida": "Seleção natural é cumulativa, não um sorteio aleatório de passo único!"
    }
  },
  {
    "id": "abiogenese-pasteur",
    "titulo": "Pasteur provou a 'Lei da Biogênese': vida só surge de outra vida!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Louis Pasteur refutou a geração espontânea em 1862 provando com seus frascos pescoço de cisne que vida só vem de vida pré-existente. Logo, a abiogênese evolutiva contraria a lei científica de Pasteur!",
    "analogia_absurda": "Achar que deixar bife estragar na pia faz nascer ratos e moscas do nada.",
    "citacao_ou_versiculo": "Louis Pasteur: 'La génération spontanée est une chimère.'",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Microbiologista de Frasco Quebrado",
    "falacia_logica": "Equívoco Semântico Histórico (Confundir Geração Espontânea Medieval com Abiogênese Química Primitiva)",
    "por_que_e_idiota": "Pasteur refutou a crença medieval de que organismos modernos complexos (moscas e bactérias) brotavam magicamente de caldo em poucas horas na atmosfera rica em oxigênio atual! Ele nunca testou nem refutou a evolução química pré-biótica em oceanos primitivos anaeróbicos ao longo de centenas de milhões de anos.",
    "a_ciencia_real": "A abiogênese estuda a síntese química prebiótica gradual de compostos orgânicos, vesículas lipídicas e polímeros autorreplicantes em condições anóxicas primitivas catalisadas por minerais.",
    "fontes_cientificas": [
      {
        "autor_ano": "Farley, J. (1977)",
        "titulo": "The Spontaneous Generation Controversy from Descartes to Oparin",
        "periodico": "Johns Hopkins University Press",
        "doi_ou_link": "https://doi.org/10.56021/9780801819025"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB000: Pasteur proved that life cannot come from nonlife",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB000.html"
      }
    ],
    "quiz": {
      "pergunta": "O que Pasteur de fato refutou em 1862?",
      "opcoes": [
        "A crença medieval de que organismos modernos brotam magicamente de matéria inerte em poucas horas.",
        "A teoria da relatividade de Einstein.",
        "A física quântica dos átomos.",
        "A existência de bactérias no leite."
      ],
      "correta": 0,
      "explicacao_rapida": "Pasteur refutou a geração espontânea instantânea, não a evolução química pré-biótica!"
    }
  },
  {
    "id": "abiogenese-miller-urey-alcatrao",
    "titulo": "O experimento de Miller-Urey só produziu alcatrão tóxico e veneno!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "O famoso experimento de 1953 com descargas elétricas simulando a Terra primitiva foi um fracasso total: ele gerou apenas alcatrão marrom inútil e venenos como cianeto e formaldeído, não vida!",
    "analogia_absurda": "Misturar ingredientes errados e chamar o bolo queimado de alta confeitaria.",
    "citacao_ou_versiculo": "Panfleto Criacionista: 'A sopa primordial era na verdade um caldo de veneno!'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Chef de Cozinha Prebiótica",
    "falacia_logica": "Supressão de Evidência Científica (Cherry-Picking Negativo)",
    "por_que_e_idiota": "Dizer que gerou 'veneno' é ignorância bioquímica básica: cianeto de hidrogênio e formaldeído são precisamente os intermediários químicos cruciais necessários para sintetizar bases nitrogenadas de RNA e açúcares (como na síntese de Strecker)! Além disso, Miller produziu mais de 20 aminoácidos essenciais para a vida.",
    "a_ciencia_real": "Em 2008, reanálises com espectrometria de massas moderna dos frascos originais de Miller preservados mostraram mais de 23 aminoácidos e aminas diferentes sintetizados espontaneamente, incluindo compostos idênticos aos achados no meteorito Murchison.",
    "fontes_cientificas": [
      {
        "autor_ano": "Miller, S. L. (1953)",
        "titulo": "A production of amino acids under possible primitive earth conditions",
        "periodico": "Science, 117(3046), 528–529",
        "doi_ou_link": "https://doi.org/10.1126/science.117.3046.528"
      },
      {
        "autor_ano": "Johnson, A. P. et al. (2008)",
        "titulo": "The Miller volcanic spark discharge experiment",
        "periodico": "Science, 322(5900), 404",
        "doi_ou_link": "https://doi.org/10.1126/science.1161527"
      }
    ],
    "quiz": {
      "pergunta": "O que reanálises modernas dos frascos originais de Miller revelaram?",
      "opcoes": [
        "A síntese espontânea de mais de 23 aminoácidos biológicos essenciais.",
        "Que o experimento continha café solúvel.",
        "Que os tubos de vidro eram feitos de plástico.",
        "Que nenhuma molécula orgânica havia se formado."
      ],
      "correta": 0,
      "explicacao_rapida": "Foram identificados mais de 23 aminoácidos biológicos essenciais formados espontaneamente!"
    }
  },
  {
    "id": "abiogenese-quiralidade",
    "titulo": "A quiralidade dos aminoácidos: impossível só usar aminoácidos canhotos!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Os seres vivos usam exclusivamente aminoácidos levógiros (canhotos - L) para formar proteínas. Em experimentos de laboratório sem vida, obtém-se sempre uma mistura racêmica de 50% canhotos e 50% destros. Como a evolução selecionou 100% de canhotos sem um Criador?",
    "analogia_absurda": "Jogar 100 moedas para o alto e exigir que todas caiam do lado da cara.",
    "citacao_ou_versiculo": "Jonathan Sarfati (Creation Ministries): 'A homoquiralidade é o pesadelo químico do evolucionista.'",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Químico que confunde luva esquerda com mão boba",
    "falacia_logica": "Argumento da Incredulidade Pessoal + Ignorância de Mecanismos de Quebra de Simetria",
    "por_que_e_idiota": "A simetria quiral é quebrada na natureza por processos puramente físicos: luz ultravioleta circularmente polarizada no espaço (nebulosas estelares) destrói preferencialmente um dos enantiômeros, além de superfícies cristalinas minerais (como calcita e quartzo) que adsorvem apenas uma forma quiral.",
    "a_ciencia_real": "Meteoritos carbonáceos primordiais pristinos, como o meteorito Murchison, contêm excesso enantiomérico natural de aminoácidos L-quirais de até 18% sintetizados abioticamente no espaço sideral antes mesmo da Terra existir!",
    "fontes_cientificas": [
      {
        "autor_ano": "Cronin, J. R. & Pizzarello, S. (1997)",
        "titulo": "Enantiomeric excesses in meteoritic amino acids",
        "periodico": "Science, 275(5302), 951–955",
        "doi_ou_link": "https://doi.org/10.1126/science.275.5302.951"
      },
      {
        "autor_ano": "Hazen, R. M. et al. (2001)",
        "titulo": "Selective adsorption of L- and D-amino acids on calcite faces",
        "periodico": "PNAS, 98(10), 5487–5490",
        "doi_ou_link": "https://doi.org/10.1073/pnas.091093398"
      }
    ],
    "quiz": {
      "pergunta": "Onde cientistas já detectaram excesso de aminoácidos canhotos (L) formados naturalmente sem vida?",
      "opcoes": [
        "No meteorito Murchison e em amostras do asteroide Ryugu.",
        "Em embalagens plásticas de supermercado.",
        "No centro do Sol.",
        "Apenas no fundo de poços de petróleo."
      ],
      "correta": 0,
      "explicacao_rapida": "Meteoritos e asteroides possuem excesso enantiomérico de aminoácidos L formado no espaço!"
    }
  },
  {
    "id": "abiogenese-dna-proteina-paradoxo",
    "titulo": "O paradoxo do ovo e da galinha: precisa de DNA para fazer proteína e de proteína para ler DNA!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Para produzir proteínas, a célula precisa das instruções codificadas no DNA. Mas para duplicar e ler o DNA, a célula precisa de dezenas de enzimas proteicas complexas como a DNA Polimerase! Como um poderia ter surgido antes do outro sem um Criador arquitetando os dois juntos?",
    "analogia_absurda": "Precisar de uma chave para abrir a gaveta onde a chave está guardada.",
    "citacao_ou_versiculo": "Bordão criacionista: 'O DNA precisa da proteína, a proteína precisa do DNA: xeque-mate!'",
    "nivel_delirio": 9.0,
    "rotulo_delirio": "Detetive de Ovos Primordiais",
    "falacia_logica": "Falsa Dicotomia + Ignorância da Hipótese do Mundo de RNA",
    "por_que_e_idiota": "O paradoxo foi resolvido na década de 1980 com a descoberta das RIBOZIMAS (moléculas de RNA com capacidade catalítica enzimática), que rendeu o Prêmio Nobel de Química de 1989 a Thomas Cech e Sidney Altman. O RNA pode desempenhar AMBOS os papéis simultaneamente!",
    "a_ciencia_real": "No ancestral 'Mundo de RNA', o RNA servia tanto como repositório de informação genética (como o DNA atual) quanto como catalisador de reações bioquímicas (como as enzimas proteicas atuais). O DNA e as proteínas evoluíram mais tarde como especializações posteriores mais estáveis.",
    "fontes_cientificas": [
      {
        "autor_ano": "Cech, T. R. (1986)",
        "titulo": "A model for the RNA-catalyzed replication of RNA",
        "periodico": "PNAS, 83(12), 4360–4363",
        "doi_ou_link": "https://doi.org/10.1073/pnas.83.12.4360"
      },
      {
        "autor_ano": "Gilbert, W. (1986)",
        "titulo": "Origin of life: The RNA world",
        "periodico": "Nature, 319(6055), 618",
        "doi_ou_link": "https://doi.org/10.1038/319618a0"
      }
    ],
    "quiz": {
      "pergunta": "Qual molécula consegue armazenar código genético E funcionar como enzima catalisadora ao mesmo tempo?",
      "opcoes": [
        "O RNA (ribozimas).",
        "A glicose cristalizada.",
        "O colesterol animal.",
        "O gás metano comprimido."
      ],
      "correta": 0,
      "explicacao_rapida": "Ribozimas de RNA acumulam função genética e enzimática catalítica simultaneamente!"
    }
  },
  {
    "id": "abiogenese-probabilidade-borel",
    "titulo": "A Lei das Probabilidades de Borel prova que a vida é matematicamente impossível!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "O matemático Émile Borel calculou que probabilidades menores que 1 em 10^50 são eventos impossíveis no universo. Calcularam que a probabilidade de uma única proteína funcional surgir ao acaso é de 1 em 10^130. Portanto, a abiogênese viola as leis da matemática!",
    "analogia_absurda": "Ganhar na Mega-Sena acumulada 20 semanas consecutivas jogando o mesmo bilhete.",
    "citacao_ou_versiculo": "A. E. Wilder-Smith: 'A probabilidade matemática da abiogênese é zero absoluto.'",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Contador de Zeros Cósmicos",
    "falacia_logica": "Aplicação Invalida de Estatística + Premissa Falsa de Combinação Aleatória Cega",
    "por_que_e_idiota": "Esses cálculos assumem erroneamente que: 1) apenas UMA sequência exata de aminoácidos funciona para uma dada função (quando na verdade milhões de variantes neutras funcionam); 2) a reação ocorreu uma única vez no universo; e 3) não há afinidade química nem seleção intermediária favorável.",
    "a_ciencia_real": "Proteínas funcionais não são montadas por sorteio de bingo. Experimentos de evolução in vitro (phage display e SELEX) demonstram que em bibliotecas aleatórias de peptídeos, funções catalisadoras e de ligação surgem com frequência surpreendentemente alta em populações moleculares sujeitas a seleção.",
    "fontes_cientificas": [
      {
        "autor_ano": "Keefe, A. D. & Szostak, J. W. (2001)",
        "titulo": "Functional proteins from a random-sequence library",
        "periodico": "Nature, 410(6829), 715–718",
        "doi_ou_link": "https://doi.org/10.1038/35070613"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB010: Odds of a primitive protein",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB010.html"
      }
    ],
    "quiz": {
      "pergunta": "O que os experimentos de Szostak com sequências aleatórias de peptídeos demonstraram na Nature?",
      "opcoes": [
        "Que proteínas funcionais ativas surgem espontaneamente em bibliotecas aleatórias.",
        "Que nenhuma proteína funciona se não for desenhada à mão.",
        "Que os computadores não sabem calcular probabilidades.",
        "Que aminoácidos se repelem como ímãs."
      ],
      "correta": 0,
      "explicacao_rapida": "Proteínas ativas com função catalítica surgem em bibliotecas com sequências aleatórias!"
    }
  },
  {
    "id": "abiogenese-atp-sintase",
    "titulo": "A ATP Sintase é um motor elétrico rotativo divino que nenhuma química cega poderia criar!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "A ATP Sintase possui estator, rotor subcelular e eixo central que gira a mais de 9.000 rotações por minuto para produzir a moeda energética da vida (ATP). Isso é nanotecnologia de ponta! Nenhuma reação química cega em poça de lama conseguiria projetar um motor elétrico rotativo!",
    "analogia_absurda": "Encontrar um motor de Ferrari funcionando no fundo de uma caverna e achar que a água da chuva esculpiu as velas de ignição.",
    "citacao_ou_versiculo": "Folheto do Design Inteligente: 'A nanotecnologia de Deus na crista mitocondrial.'",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Mecânico de Nanomotores Teológicos",
    "falacia_logica": "Argumento da Incredulidade Pessoal + Falácia da Falsa Analogia Mecânica",
    "por_que_e_idiota": "A ATP Sintase não surgiu pronta do nada; ela é um clássico exemplo de quimera molecular modular formada pela fusão de dois complexos pré-existentes mais simples: o domínio F0 (um poro translocador de prótons passivo) e o domínio F1 (uma hexâmero ATPase de ligação homóloga a helicases de DNA ancestrais).",
    "a_ciencia_real": "Bactérias primitivas e arqueias possuem formas intermediárias e variantes mais simples de bombas de prótons que funcionavam unidirecionalmente para regular o pH celular antes da evolução da síntese de ATP acoplada.",
    "fontes_cientificas": [
      {
        "autor_ano": "Mulkidjanian, A. Y. et al. (2007)",
        "titulo": "On the origin of ion-motive electron-transport chains and F1F0-type ATP synthases",
        "periodico": "Nature Reviews Microbiology, 5(11), 892–899",
        "doi_ou_link": "https://doi.org/10.1038/nrmicro1779"
      },
      {
        "autor_ano": "Cross, R. L. & Taiz, L. (1990)",
        "titulo": "Gene duplication as a means for altering H+/ATP ratios during the evolution of F0F1 ATP synthases",
        "periodico": "FEBS Letters, 259(2), 227–229",
        "doi_ou_link": "https://doi.org/10.1016/0014-5793(90)80301-S"
      }
    ],
    "quiz": {
      "pergunta": "Como a ATP Sintase moderna evoluiu de estruturas pré-existentes mais simples?",
      "opcoes": [
        "Pela fusão modular de um poro translocador de prótons com uma enzima hexamérica ATPase ancestral.",
        "Caiu pronta de um cometa em formato de parafuso.",
        "Surgiu espontaneamente de um raio em 1945.",
        "Foi esculpida por bactérias usando formões."
      ],
      "correta": 0,
      "explicacao_rapida": "Evoluiu pela união modular de um poro de prótons passivo com uma ATPase homóloga a helicases!"
    }
  },
  {
    "id": "abiogenese-membrana-lipidica",
    "titulo": "A membrana celular não se fecha sozinha: sem parede não há célula!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Uma célula sem membrana plasmática se dissolve instantaneamente na água. Mas para construir fosfolipídios complexos, precisa do maquinário enzimático de dentro da célula! Logo, a primeira célula nunca poderia ter se fechado sem um Criador montando a cápsula!",
    "analogia_absurda": "Construir uma casa de tijolos começando pelo teto flutuando no ar.",
    "citacao_ou_versiculo": "Criacionista em debate: 'Quem colocou a cerca na primeira célula?'",
    "nivel_delirio": 8.5,
    "rotulo_delirio": "Pedreiro de Vesículas Lipídicas",
    "falacia_logica": "Ignorância de Físico-Química e Termodinâmica de Lipídios Anfipáticos",
    "por_que_e_idiota": "Ácidos graxos simples (que se formam facilmente em fontes hidrotermais e meteoritos) são moléculas anfipáticas com caudas hidrofóbicas e cabeças hidrófilas. Quando colocados em água, eles SE AUTO-ORGANIZAM ESPONTANEAMENTE em vesículas e micelas fechadas em questão de segundos para minimizar a energia livre termodinâmica!",
    "a_ciencia_real": "Experimentos do laboratório de Jack Szostak (Nobel de Medicina) demonstraram que protocélulas de vesículas de ácidos graxos não apenas se formam sozinhas, como crescem espontaneamente ao incorporar novos lipídios e se dividem quando agitadas, permitindo até a replicação interna de oligonucleotídeos de RNA.",
    "fontes_cientificas": [
      {
        "autor_ano": "Hanczyc, M. M., Fujikawa, S. M., & Szostak, J. W. (2003)",
        "titulo": "Experimental models of primitive cellular compartments: encapsulation, growth, and division",
        "periodico": "Science, 302(5645), 618–622",
        "doi_ou_link": "https://doi.org/10.1126/science.1089904"
      },
      {
        "autor_ano": "Deamer, D. (2011)",
        "titulo": "First Life: Discovering the Connections between Stars, Cells, and How Life Began",
        "periodico": "University of California Press",
        "doi_ou_link": "https://www.ucpress.edu/book/9780520274457/first-life"
      }
    ],
    "quiz": {
      "pergunta": "O que acontece espontaneamente quando ácidos graxos simples são colocados em solução aquosa?",
      "opcoes": [
        "Auto-organizam-se em vesículas fechadas com bicamadas lipídicas devido ao efeito hidrofóbico.",
        "Explodem imediatamente emitindo luz verde.",
        "Ficam parados em cubos perfeitos de gelo.",
        "Transformam-se em sal de cozinha."
      ],
      "correta": 0,
      "explicacao_rapida": "Auto-organizam-se espontaneamente em vesículas fechadas por atração e efeito hidrofóbico!"
    }
  },
  {
    "id": "abiogenese-codigo-universal",
    "titulo": "O código genético é universal: se tivesse evoluído, cada ser teria sua tabela!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Todas as bactérias, plantas, animais e humanos leem exatamente os mesmos códons (AUG para metionina, UAA para stop). Se o código tivesse evoluído por acaso, haveria centenas de códigos genéticos incompatíveis pelo planeta. A universalidade do código prova uma assinatura única de um Autor!",
    "analogia_absurda": "Todos os computadores do mundo rodando o mesmo software proprietário divino.",
    "citacao_ou_versiculo": "A. E. Wilder-Smith: 'A linguagem única da vida manifesta o único Autor do Logos.'",
    "nivel_delirio": 8.4,
    "rotulo_delirio": "Linguista de Balcão",
    "falacia_logica": "Ignorância da Biologia Molecular Comparada + Confusão sobre LUCA",
    "por_que_e_idiota": "Primeiro: o código genético NÃO é 100% universal! Existem dezenas de variantes conhecidas no código mitocondrial de vertebrados, em leveduras (*Candida*) e em protozoários ciliados onde códons de parada codificam aminoácidos (como glutamina ou triptofano)! Segundo: o código quase-universal é a maior evidência de ANCESTRALIDADE COMUM UNIVERSAL (LUCA), não de design!",
    "a_ciencia_real": "Se houvesse um Criador que desenhou cada 'tipo' separadamente do zero, Ele poderia ter usado códigos completamente diferentes para cada espécie. O fato de que uma bactéria consegue ler e transcrever um gene humano de insulina (como na biotecnologia farmacêutica) prova que compartilhamos um ancestral comum compartilhado!",
    "fontes_cientificas": [
      {
        "autor_ano": "Knight, R. D., Freeland, S. J., & Landweber, L. F. (2001)",
        "titulo": "Rewiring the keyboard: evolvability of the genetic code",
        "periodico": "Nature Reviews Genetics, 2(1), 49–58",
        "doi_ou_link": "https://doi.org/10.1038/35047500"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB030: Universal genetic code",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB030.html"
      }
    ],
    "quiz": {
      "pergunta": "O que a universalidade básica do código genético e suas variantes mitocondriais provam?",
      "opcoes": [
        "A ancestralidade comum universal de toda a vida a partir de uma população ancestral única (LUCA).",
        "Que Adão e Eva falavam latim clássico.",
        "Que as bactérias foram criadas no século XIX.",
        "Que os animais marinhos não têm DNA."
      ],
      "correta": 0,
      "explicacao_rapida": "Comprova a ancestralidade comum de todas as criaturas da biosfera a partir do LUCA!"
    }
  },
  {
    "id": "abiogenese-hidrotermal-fria",
    "titulo": "As fontes hidrotermais no fundo do mar destruiriam moléculas orgânicas com calor!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Cientistas dizem que a vida surgiu nas fumarolas hidrotermais do fundo do oceano, mas a água ali sai a 350°C! Qualquer aminoácido ou açúcar é destruído e calcinado em temperaturas extremas. Como a vida poderia ter nascido numa panela de pressão fervente?",
    "analogia_absurda": "Jogar ovos em óleo a 300°C e esperar que nasçam pintinhos fritos.",
    "citacao_ou_versiculo": "Panfleto criacionista: 'Fumarolas submarinas fritam a evolução!'",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Fritador de Sopa Primordial",
    "falacia_logica": "Espantalho Geotérmico (Confundir Fumarolas Negras Vulcânicas com Chaminés Alcalinas Brancas)",
    "por_que_e_idiota": "Os cientistas NÃO apontam fumarolas negras ultra-aquecidas ácidas (*black smokers*), mas sim FONTES HIDROTERMAIS ALCALINAS (como o campo hidrotermal *Lost City*), onde a água é morna (40°C a 90°C), rica em hidrogênio molecular dissolvido e permeada por microcanais de ferro-enxofre que agem como catalisadores inorgânicos ideais!",
    "a_ciencia_real": "Os gradientes naturais de prótons entre a água alcalina da fonte (pH ~10) e a água do mar primordial ligeiramente ácida (pH ~6) forneceram uma força próton-motriz natural idêntica à quimiosmose que todas as células vivas usam até hoje para sintetizar energia via ATP sintase.",
    "fontes_cientificas": [
      {
        "autor_ano": "Martin, W. & Russell, M. J. (2003)",
        "titulo": "On the origins of cells: a hypothesis for the evolutionary transitions from abiotic geochemistry to chemoautotrophic prokaryotes",
        "periodico": "Philosophical Transactions of the Royal Society B, 358(1429), 59–85",
        "doi_ou_link": "https://doi.org/10.1098/rstb.2002.1183"
      },
      {
        "autor_ano": "Lane, N. (2015)",
        "titulo": "The Vital Question: Energy, Evolution, and the Origins of Complex Life",
        "periodico": "W. W. Norton",
        "doi_ou_link": "https://wwnorton.com/books/The-Vital-Question/"
      }
    ],
    "quiz": {
      "pergunta": "Por que as fontes hidrotermais alcalinas (como Lost City) são ideais para a origem da vida?",
      "opcoes": [
        "Porque possuem gradientes naturais de prótons e temperaturas mornas em microcavidades minerais catalíticas.",
        "Porque a água é gaseificada naturalmente com sabor limão.",
        "Porque não há gravidade no fundo do mar.",
        "Porque tubarões pré-históricos protegiam os aminoácidos."
      ],
      "correta": 0,
      "explicacao_rapida": "Apresentam gradientes eletroquímicos de prótons naturais e temperaturas brandas em labirintos minerais!"
    }
  },
  {
    "id": "abiogenese-meteorito-murchison",
    "titulo": "Dizer que a vida veio do espaço por meteoritos é admitting que a abiogênese na Terra é impossível!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Quando cientistas falam de panspermia ou compostos em meteoritos, eles admitem a derrota: sabem que a vida nunca poderia ter surgido na Terra e precisam apelar para extraterrestres mágicos para salvar o darwinismo da falência!",
    "analogia_absurda": "Mudar de casa porque não sabe fritar um ovo e achar que na casa nova o ovo frita sozinho.",
    "citacao_ou_versiculo": "Criacionista em debate universitário: 'Chutar a abiogênese para o espaço é fuga cósmica!'",
    "nivel_delirio": 8.3,
    "rotulo_delirio": "Astrônomo de Terra-Plana",
    "falacia_logica": "Distorção Argumentativa + Falsa Equivalência entre Panspermia e Origem Prebiótica",
    "por_que_e_idiota": "A descoberta de moléculas orgânicas complexas em meteoritos (aminoácidos, açúcares e nucleobases de RNA) NÃO é desespero; é a PROVA EMPÍRICA FÍSICA de que a química prebiótica orgânica ocorre espontaneamente e em abundância estelar no cosmos inteiro através de processos físico-químicos naturais universais!",
    "a_ciencia_real": "Amostras pristinas colhidas diretamente no espaço por sondas espaciais (Hayabusa2 no asteroide Ryugu e OSIRIS-REx no asteroide Bennu) continham uracila, niacina e mais de 20 aminoácidos diferentes formados em meio interestelar há 4,6 bilhões de anos, mostrando que os blocos da vida choveram na Terra jovem.",
    "fontes_cientificas": [
      {
        "autor_ano": "Naraoka, H. et al. (2023)",
        "titulo": "Soluble organic molecules in samples of the carbonaceous asteroid (162173) Ryugu",
        "periodico": "Science, 379(6634), eabn9033",
        "doi_ou_link": "https://doi.org/10.1126/science.abn9033"
      },
      {
        "autor_ano": "Oba, Y. et al. (2022)",
        "titulo": "Identifying the wide diversity of extraterrestrial purine and pyrimidine nucleobases in carbonaceous meteorites",
        "periodico": "Nature Communications, 13, 2008",
        "doi_ou_link": "https://doi.org/10.1038/s41467-022-29612-x"
      }
    ],
    "quiz": {
      "pergunta": "O que as amostras trazidas do asteroide Ryugu pela sonda Hayabusa2 comprovaram?",
      "opcoes": [
        "A presença de nucleobases de RNA (como uracila) e dezenas de aminoácidos formados abioticamente no espaço.",
        "Que existem bactérias verdes com antenas voando em asteroides.",
        "Que o espaço sideral é feito de açúcar cristal.",
        "Que os asteroides são pedaços da Arca de Noé."
      ],
      "correta": 0,
      "explicacao_rapida": "Comprovaram nucleobases de RNA e aminoácidos sintetizados abioticamente no vácuo estelar!"
    }
  },
  {
    "id": "abiogenese-paradoxo-diluicao",
    "titulo": "O paradoxo da diluição nos oceanos: polímeros orgânicos nunca se concentrariam!",
    "categoria": "abiogenese",
    "categoria_label": "🧬 Origem da Vida & Abiogênese",
    "argumento_criacionista": "Se moléculas orgânicas tivessem surgido nos oceanos primitivos, elas teriam sido instantaneamente diluídas em trilhões de litros de água salgada. A hidrólise quebra as ligações peptídicas. Como polímeros puderam se formar num mar imenso?",
    "analogia_absurda": "Pingar uma gota de corante no meio do Oceano Atlântico e esperar que o mar inteiro fique azul-turquesa.",
    "citacao_ou_versiculo": "Artigo da Answers in Genesis: 'A sopa primordial era aguada demais para alimentar um micróbio.'",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Químico de Balde Furado",
    "falacia_logica": "Espantalho de Volume (Ignorar Mecanismos Minerais e Evaporativos de Concentração Local)",
    "por_que_e_idiota": "A evolução prebiótica nunca postulou que a vida surgiu 'espalhada aleatoriamente em alto-mar aberto'! Ela ocorreu em MICROAMBIENTES CONCENTRADORES: poças geotérmicas evaporativas sujeitas a ciclos de umedecimento e secagem, lamas argilosas (como montmorilonita) e microporos de rochas hidrotermais.",
    "a_ciencia_real": "Argilas minerais como a montmorilonita atuam como catalisadores espetaculares: suas superfícies cristalinas carregadas eletrostaticamente atraem nucleotídeos ativados, concentram as moléculas e aceleram a polimerização de cadeias de RNA em ordens de magnitude sem necessidade de enzimas.",
    "fontes_cientificas": [
      {
        "autor_ano": "Ferris, J. P. (2006)",
        "titulo": "Montmorillonite-catalysed formation of RNA oligomers: the possible role of catalysis in the origins of life",
        "periodico": "Philosophical Transactions of the Royal Society B, 361(1474), 1777–1789",
        "doi_ou_link": "https://doi.org/10.1098/rstb.2006.1903"
      },
      {
        "autor_ano": "Damer, B. & Deamer, D. (2020)",
        "titulo": "The Hot Spring Hypothesis for an Origin of Life",
        "periodico": "Astrobiology, 20(4), 429–452",
        "doi_ou_link": "https://doi.org/10.1089/ast.2019.2045"
      }
    ],
    "quiz": {
      "pergunta": "Como minerais como a montmorilonita resolvem o suposto problema da diluição prebiótica?",
      "opcoes": [
        "Adsorvem e concentram nucleotídeos em suas camadas cristalinas, catalisando a polimerização do RNA.",
        "Eles evaporam toda a água do planeta instantaneamente.",
        "Eles produzem ácido sulfúrico concentrado.",
        "Eles filtram os átomos ateus do barro."
      ],
      "correta": 0,
      "explicacao_rapida": "Superfícies minerais atraem, alinham e catalisam a polimerização de moléculas orgânicas!"
    }
  },
  {
    "id": "humana-homem-macaco-linear",
    "titulo": "Se o homem veio do macaco, por que ainda existem macacos nos zoológicos?",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Se a evolução é contínua e nós viemos dos chimpanzés, por que os macacos da Amazônia e da África não estão virando gente agora? A evolução parou ou eles desistiram no meio do caminho?",
    "analogia_absurda": "Esperar que todos os ramos de uma árvore se transformem na folha mais alta.",
    "citacao_ou_versiculo": "Bordão clássico de tiozão do zap de domingo.",
    "nivel_delirio": 8.4,
    "rotulo_delirio": "Taxonomista de Zoológico Municipal",
    "falacia_logica": "Falsa Premissa de Anagênese Linear + Ignorância de Cladogênese",
    "por_que_e_idiota": "Humanos NÃO evoluíram de nenhuma espécie vivente de macaco! Compartilhamos um ancestral comum hominídeo extinto há cerca de 6 a 8 milhões de anos. Perguntar isso é como perguntar: 'Se você veio dos seus avós, por que seus primos de primeiro grau ainda existem?'",
    "a_ciencia_real": "A evolução não tem um objetivo final de 'virar humano'; cada espécie continua evoluindo para se adaptar ao seu nicho ecológico. Os chimpanzés modernos são tão evoluídos e bem-sucedidos em seu ambiente florestal quanto os humanos em seus nichos culturais.",
    "fontes_cientificas": [
      {
        "autor_ano": "Patterson, N. et al. (2006)",
        "titulo": "Genetic analysis of chimpanzee and human speciation",
        "periodico": "Nature, 441(7097), 1103–1108",
        "doi_ou_link": "https://doi.org/10.1038/nature04789"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB910: If humans evolved from apes, why are there still apes?",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB910.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual é a relação filogenética real entre seres humanos e chimpanzés modernos?",
      "opcoes": [
        "São linhagens primas que divergiram de um ancestral comum extinto há 6-8 milhões de anos.",
        "Chimpanzés são humanos que sofreram degeneração genética por comer banana.",
        "Humanos foram clonados a partir de macacos em 1900.",
        "Não possuem nenhum parentesco biológico."
      ],
      "correta": 0,
      "explicacao_rapida": "São linhagens irmãs/primas que compartilham um ancestral hominídeo extinto!"
    }
  },
  {
    "id": "humana-homem-piltdown",
    "titulo": "O Homem de Piltdown foi uma fraude, logo TODOS os fósseis da evolução são fraudes!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Cientistas inventaram o Homem de Piltdown forjando um crânio humano com mandíbula de orangotango. Isso prova que os evolucionistas são mentirosos desesperados e que todos os outros fósseis como Lucy e Homo erectus são falsificações de museu!",
    "analogia_absurda": "Descobrir uma nota falsa de 100 reais e declarar que todo o dinheiro do sistema financeiro mundial é fictício.",
    "citacao_ou_versiculo": "Duane Gish (ICR): 'Piltdown expôs o engodo da paleoantropologia ateia!'",
    "nivel_delirio": 9.3,
    "rotulo_delirio": "Detetive de Crânio Amador",
    "falacia_logica": "Falácia da Generalização Apressada + Falácia da Composição",
    "por_que_e_idiota": "O Homem de Piltdown foi desmascarado COMO FRAUDE PELOS PRÓPRIOS CIENTISTAS em 1953 (por Kenneth Oakley, Wilfrid Le Gros Clark e Joseph Weiner) com testes químicos de flúor e datação radiométrica, porque ele NÃO SE ENCAIXAVA com as centenas de fósseis hominídeos legítimos descobertos na África e Ásia!",
    "a_ciencia_real": "A fraude foi corrigida pelo método científico autocorretivo. O criacionismo, por outro lado, continua repetindo as mesmas alegações falsas e refutadas há mais de um século sem nunca se autocorrigir.",
    "fontes_cientificas": [
      {
        "autor_ano": "Weiner, J. S., Oakley, K. P., & Le Gros Clark, W. E. (1953)",
        "titulo": "The solution of the Piltdown problem",
        "periodico": "Bulletin of the British Museum (Natural History), 2(3), 139–146",
        "doi_ou_link": "https://www.jstor.org/stable/2405527"
      },
      {
        "autor_ano": "Gould, S. J. (1980)",
        "titulo": "The Panda's Thumb: More Reflections in Natural History (Chapter: The Piltdown Conspiracy)",
        "periodico": "W. W. Norton",
        "doi_ou_link": "https://wwnorton.com/books/The-Pandas-Thumb/"
      }
    ],
    "quiz": {
      "pergunta": "Quem descobriu e desmascarou formalmente a fraude do Homem de Piltdown em 1953?",
      "opcoes": [
        "Os próprios cientistas paleoantropólogos através de testes físicos de flúor e nitrogênio.",
        "Um grupo de pastores em uma escavação de domingo.",
        "Um vidente que sonhou com orangotangos.",
        "Ninguém, o fóssil ainda é considerado verdadeiro pela ONU."
      ],
      "correta": 0,
      "explicacao_rapida": "Os próprios cientistas utilizando métodos rigorosos de análise química e paleoantropológica!"
    }
  },
  {
    "id": "humana-homem-nebraska",
    "titulo": "O Homem de Nebraska foi construído a partir de um dente de porco!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Os cientistas inventaram um ancestral humano inteiro chamado Hesperopithecus a partir de um único dente fossilizado que depois descobriram ser de um porco selvagem extinto! A ciência inventa homens-macacos a partir de dentes de porco!",
    "analogia_absurda": "Achar uma porca de parafuso na calçada e desenhar uma espaçonave interestelar completa.",
    "citacao_ou_versiculo": "Bordão criacionista: 'O elo perdido que virou bacon!'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Criador de Suínos Pré-Históricos",
    "falacia_logica": "Espantalho Histórico + Confusão entre Ilustração de Jornal Tabloide e Consenso Científico",
    "por_que_e_idiota": "O dente foi achado em 1922 por Harold Cook e descrito preliminarmente por Henry Fairfield Osborn com cautela explícita. O desenho sensacionalista de um casal de homens das cavernas foi publicado pelo jornal ilustrado tabloide *Illustrated London News*, NUNCA por um periódico científico revisado por pares!",
    "a_ciencia_real": "Quando mais fósseis do animal foram encontrados pelos próprios paleontólogos em 1927, eles mesmos publicaram na Science que o dente pertencia a um pecarídeo fóssil (*Prosthennops*). O consenso científico durou menos de 5 anos e foi descartado pela própria ciência.",
    "fontes_cientificas": [
      {
        "autor_ano": "Gregory, W. K. (1927)",
        "titulo": "Hesperopithecus apparently not an ape nor a man",
        "periodico": "Science, 66(1720), 579–581",
        "doi_ou_link": "https://doi.org/10.1126/science.66.1720.579"
      },
      {
        "autor_ano": "Wolf, J. & Mellett, J. S. (1985)",
        "titulo": "The role of 'Nebraska Man' in the creation-evolution debate",
        "periodico": "Creation/Evolution, 16, 31–43",
        "doi_ou_link": "http://www.talkorigins.org/faqs/hominids/nebraska.html"
      }
    ],
    "quiz": {
      "pergunta": "Quem publicou a ilustração sensacionalista do 'Homem de Nebraska' peludo com sua esposa?",
      "opcoes": [
        "Um jornal popular sensacionalista de Londres (Illustrated London News), não os cientistas.",
        "A revista Nature em sua capa oficial.",
        "Charles Darwin em seu diário de bordo secreto.",
        "A Academia Pontifícia de Ciências."
      ],
      "correta": 0,
      "explicacao_rapida": "Foi um jornal tabloide ilustrado popular, prontamente descartado pela ciência real!"
    }
  },
  {
    "id": "humana-lucy-chimpanze",
    "titulo": "A fóssil Lucy (Australopithecus) era apenas uma chimpanzé fêmea arborícola!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "O famoso fóssil Lucy de 3,2 milhões de anos tinha cérebro minúsculo do tamanho do de um chimpanzé, dedos curvos e braços longos. Ela era simplesmente uma macaca comum que vivia em cima de árvores, não um ancestral bípede humano!",
    "analogia_absurda": "Colocar maquiagem num macaco e chamá-lo de candidato a prefeito.",
    "citacao_ou_versiculo": "Answers in Genesis: 'Lucy foi apenas uma macaca extinta que nunca andou como gente.'",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Anatomista de Árvore Genealógica",
    "falacia_logica": "Negação Anatômica Ostensiva (Ignorar Bacia, Fêmur e Joelho)",
    "por_que_e_idiota": "Lucy tinha crânio pequeno, SIM, mas sua bacia ilíaca é curta e larga, a articulação do joelho possui ângulo em valgo pronunciado e a curvatura da coluna vertebral é lordótica humana — anatomia 100% diagnóstica de BIPEDALISMO HABITUAL OBRIGATÓRIO no solo!",
    "a_ciencia_real": "As famosas pegadas fósseis de Laetoli (Tanzânia), preservadas em cinza vulcânica endurecida de 3,6 milhões de anos, mostram a passada bípede perfeita de dois hominíneos com arco plantar e hálux não-oponível idêntico ao pé humano moderno.",
    "fontes_cientificas": [
      {
        "autor_ano": "Johanson, D. C. & Taieb, M. (1976)",
        "titulo": "Plio-Pleistocene hominid discoveries in Hadar, Ethiopia",
        "periodico": "Nature, 260(5549), 293–297",
        "doi_ou_link": "https://doi.org/10.1038/260293a0"
      },
      {
        "autor_ano": "Leakey, M. D. & Hay, R. L. (1979)",
        "titulo": "Pliocene footprints in the Laetolil Beds at Laetoli, northern Tanzania",
        "periodico": "Nature, 278(5702), 317–323",
        "doi_ou_link": "https://doi.org/10.1038/278317a0"
      }
    ],
    "quiz": {
      "pergunta": "Quais traços do esqueleto de Lucy comprovam inequivocamente que ela andava em pé (bípede)?",
      "opcoes": [
        "Pelve curta e alargada, ângulo de valgo no fêmur e côndilos do joelho adaptados ao bipedalismo ereto.",
        "Asas de penas coloridas sob os ombros.",
        "Presença de nadadeiras articuladas.",
        "Quatro dentes de sabre de tigre."
      ],
      "correta": 0,
      "explicacao_rapida": "A pelve em bacia alargada e o joelho com ângulo de valgo provam bipedalismo habitual!"
    }
  },
  {
    "id": "humana-femur-lucy-quilometros",
    "titulo": "O joelho de Lucy foi achado a mais de dois quilômetros de distância do resto do esqueleto!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "O paleontólogo Donald Johanson admitiu em palestras que a articulação do joelho que prova que Lucy andava em pé foi encontrada a mais de dois quilômetros de distância em outro estrato! Eles misturaram ossos de lugares diferentes para inventar o bipedalismo!",
    "analogia_absurda": "Comprar a peça de um Fusca na zona leste e montar num caminhão na zona oeste.",
    "citacao_ou_versiculo": "Mito viralizado em palestras de Kent Hovind nos anos 1990.",
    "nivel_delirio": 9.5,
    "rotulo_delirio": "Boateiro de Escavação com Fita Métrica",
    "falacia_logica": "Calúnia Factual + Falsa Confusão entre Fósseis Distintos (AL 129-1 vs. AL 288-1)",
    "por_que_e_idiota": "Isso é uma mentira descarada inventada por Kent Hovind. Em 1973, Johanson descobriu UMA articulação de joelho isolada (fóssil AL 129-1). No ano seguinte, em 1974, a DOIS QUILÔMETROS DALI, ele achou o ESQUELETO COMPLETO DE LUCY (AL 288-1, com 40% do esqueleto preservado, INCLUINDO SEUS PRÓPRIOS DOIS JOELHOS, FÊMURES E PELVE!).",
    "a_ciencia_real": "Nenhum osso foi misturado: o joelho de 1973 é catalogado como espécime AL 129-1, e o esqueleto de Lucy tem seus próprios ossos originais catalogados como AL 288-1. Ambas as descobertas provam o bipedalismo de indivíduos diferentes da mesma espécie *Australopithecus afarensis*.",
    "fontes_cientificas": [
      {
        "autor_ano": "Johanson, D. C. & Edey, M. (1981)",
        "titulo": "Lucy: The Beginnings of Humankind",
        "periodico": "Simon & Schuster",
        "doi_ou_link": "https://www.worldcat.org/title/lucy-the-beginnings-of-humankind/oclc/6814674"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CC003: Johanson found Lucy's knee miles away",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CC/CC003.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual é a verdade histórica sobre o joelho e o esqueleto de Lucy?",
      "opcoes": [
        "Lucy tinha seus próprios joelhos no seu esqueleto de 1974; o joelho achado a 2 km era outro indivíduo (AL 129-1) da mesma espécie.",
        "O joelho era feito de resina odontológica.",
        "Johanson esqueceu onde enterrou os ossos.",
        "Os ossos eram de uma foca marinha."
      ],
      "correta": 0,
      "explicacao_rapida": "Lucy tinha seus próprios fêmures e joelhos; a descoberta de 1973 era outro fóssil da mesma espécie!"
    }
  },
  {
    "id": "humana-neanderthal-raquitismo",
    "titulo": "O Homem de Neandertal era apenas um humano moderno idoso que sofria de artrite e raquitismo!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Os ossos curvados e a testa saliente dos Neandertais eram apenas deformidades causadas por osteoartrite, falta de vitamina D (raquitismo) e velhice extrema de patriarcas bíblicos que viveram centenas de anos após o dilúvio!",
    "analogia_absurda": "Ver um velhinho corcunda na fila do banco e dizer que ele é uma espécie alienígena.",
    "citacao_ou_versiculo": "Rudolf Virchow (1856): hipótese médica descartada no século XIX.",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Reumatologista de Caverna",
    "falacia_logica": "Anacronismo Científico de 170 Anos + Ignorância de Genômica de DNA Antigo",
    "por_que_e_idiota": "A hipótese do raquitismo de Rudolf Virchow foi refutada ainda no século XIX quando dezenas de esqueletos de crianças, jovens e bebês neandertais perfeitamente saudáveis foram desenterrados com a mesma morfologia crânio-facial robusta, crista supraorbital, toro occipital e mandíbula sem queixo!",
    "a_ciencia_real": "Para sepultar de vez a mentira: em 2010, Svante Pääbo (Prêmio Nobel de Medicina de 2022) sequenciou o GENOMA COMPLETO DO NEANDERTAL a partir de ossos fósseis de 40.000 anos, provando que eles eram uma linhagem divergente de hominíneos com marcadores genéticos únicos que hibridizaram com o Homo sapiens (humanos euroasiáticos modernos carregam 1% a 2% de DNA neandertal).",
    "fontes_cientificas": [
      {
        "autor_ano": "Green, R. E. et al. (2010)",
        "titulo": "A draft sequence of the Neandertal genome",
        "periodico": "Science, 328(5979), 710–722",
        "doi_ou_link": "https://doi.org/10.1126/science.1188021"
      },
      {
        "autor_ano": "Pääbo, S. (2014)",
        "titulo": "Neanderthal Man: In Search of Lost Genomes",
        "periodico": "Basic Books",
        "doi_ou_link": "https://www.basicbooks.com/titles/svante-paabo/neanderthal-man/9780465033195/"
      }
    ],
    "quiz": {
      "pergunta": "O que o sequenciamento de DNA antigo de Neandertal (Nobel de 2022) comprovou?",
      "opcoes": [
        "Que eles tinham genoma próprio divergente e hibridizaram com ancestrais do Homo sapiens.",
        "Que eram humanos modernos idosos com osteoporose severa.",
        "Que eram parentes de elefantes africanos.",
        "Que o DNA antigo não dura mais de 3 dias."
      ],
      "correta": 0,
      "explicacao_rapida": "Comprovou um genoma próprio divergente com introgressão de 1% a 2% em populações não-africanas!"
    }
  },
  {
    "id": "humana-caixao-mesa-bilhar",
    "titulo": "Todos os fósseis hominídeos do mundo cabem dentro de um único caixão ou numa mesa de bilhar!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Os cientistas não têm evidências: se você juntar todos os fósseis de supostos homens-macacos já escavados no mundo inteiro, eles cabem numa única caixa de sapatos ou numa mesa de bilhar!",
    "analogia_absurda": "Achar que todos os livros do mundo cabem numa prateleira de banheiro.",
    "citacao_ou_versiculo": "Lyall Watson em artigo de 1982, repetido até hoje em púlpitos.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Agente Funerário de Museu",
    "falacia_logica": "Erro Estatístico Monumental por Defasagem Temporal de 40 Anos",
    "por_que_e_idiota": "Isso era uma hipérbole poética errada dita em 1982. Hoje, os museus e centros de pesquisa da África, Europa e Ásia guardam mais de 8.000 espécimes fósseis hominídeos catalogados representando milhares de indivíduos de mais de 20 espécies diferentes (de *Sahelanthropus* a *Homo sapiens arcaico*).",
    "a_ciencia_real": "Apenas na caverna de Rising Star (África do Sul), o sítio de *Homo naledi* rendeu mais de 1.550 fragmentos fósseis de pelo menos 15 indivíduos em uma única câmara! Em Sima de los Huesos (Atapuerca, Espanha), foram escavados mais de 6.000 ossos de 28 indivíduos de *Homo heidelbergensis*.",
    "fontes_cientificas": [
      {
        "autor_ano": "Berger, L. R. et al. (2015)",
        "titulo": "Homo naledi, a new species of the genus Homo from the Dinaledi Chamber, South Africa",
        "periodico": "eLife, 4, e09560",
        "doi_ou_link": "https://doi.org/10.7554/eLife.09560"
      },
      {
        "autor_ano": "Arsuaga, J. L. et al. (2014)",
        "titulo": "Neandertal roots: Cranial morphology of fifteen Sima de los Huesos hominins",
        "periodico": "Science, 344(6190), 1358–1363",
        "doi_ou_link": "https://doi.org/10.1126/science.1253958"
      }
    ],
    "quiz": {
      "pergunta": "Quantos fósseis hominíneos individuais foram resgatados apenas no sítio de Homo naledi?",
      "opcoes": [
        "Mais de 1.550 ossos e dentes de pelo menos 15 indivíduos.",
        "Apenas 1 dente de leite quebrado.",
        "Dois pedaços de gesso escolar.",
        "Nenhum, eram estátuas esculpidas."
      ],
      "correta": 0,
      "explicacao_rapida": "Foram catalogados mais de 1.550 elementos fósseis de múltiplos indivíduos no mesmo sítio!"
    }
  },
  {
    "id": "humana-bipedalismo-desvantagem",
    "titulo": "O bipedalismo não traz vantagem intermediária: metade bípede não anda nem trepa em árvore!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Como o bipedalismo evoluiu se um macaco meio-em-pé seria lerdo demais para correr de leões e desajeitado demais para fugir pelas copas das árvores? Uma criatura meio-bípede seria extinta na primeira semana!",
    "analogia_absurda": "Tentar andar de bicicleta com uma roda quadrada e outra triangular na rodovia.",
    "citacao_ou_versiculo": "Criacionista em debate: 'Ou você corre como guepardo ou sobe em árvore como macaco!'",
    "nivel_delirio": 8.3,
    "rotulo_delirio": "Treinador de Atletismo de Plioceno",
    "falacia_logica": "Falsa Dicotomia + Ignorância da Locomoção Facultativa em Primatas",
    "por_que_e_idiota": "Criaturas com bipedalismo facultativo ou intermediário têm um sucesso ecológico tremendo! Bonobos e gibões andam em pé com frequência para carregar comida e filhotes com as mãos livres. O bipedalismo primitivo permite forragear com eficiência energética em savanas abertas enquanto mantém capacidade de refúgio em árvores.",
    "a_ciencia_real": "O esqueleto de *Ardipithecus ramidus* (4,4 milhões de anos) documenta precisamente a forma intermediária: bípede facultativo no solo (com bacia adaptada) e hálux oponível para escalar árvores com segurança.",
    "fontes_cientificas": [
      {
        "autor_ano": "White, T. D. et al. (2009)",
        "titulo": "Ardipithecus ramidus and the paleobiology of early hominids",
        "periodico": "Science, 326(5949), 75–86",
        "doi_ou_link": "https://doi.org/10.1126/science.1175802"
      },
      {
        "autor_ano": "Sockol, M. D., Raichlen, D. A., & Pontzer, H. (2007)",
        "titulo": "Chimpanzee locomotor energetics and the origins of human bipedalism",
        "periodico": "PNAS, 104(30), 12265–12269",
        "doi_ou_link": "https://doi.org/10.1073/pnas.0703267104"
      }
    ],
    "quiz": {
      "pergunta": "Qual hominídeo de 4,4 milhões de anos comprovou a locomoção bípede combinada com escalada arbórea?",
      "opcoes": [
        "Ardipithecus ramidus ('Ardi').",
        "O Yeti do Himalaia.",
        "O Homem das Neves de pelúcia.",
        "O macaco prego de zoológico."
      ],
      "correta": 0,
      "explicacao_rapida": "Ardipithecus ramidus comprovou o mosaico entre bipedalismo terrestre e habilidade arbórea!"
    }
  },
  {
    "id": "humana-cordas-vocais-fala",
    "titulo": "Macacos têm cordas vocais iguais às humanas e não falam porque Deus não deu alma!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Biólogos provaram que o trato vocal dos macacos é anatomicamente capaz de produzir fala humana, mas eles continuam calados sem falar uma palavra. Isso prova que a linguagem é um sopro espiritual concedido apenas à humanidade no Éden!",
    "analogia_absurda": "Ter um computador potente com caixas de som e teclado, mas sem ninguém para digitar uma carta.",
    "citacao_ou_versiculo": "Artigo criacionista: 'O mistério da mudez dos primatas e a alma humana.'",
    "nivel_delirio": 8.2,
    "rotulo_delirio": "Fonoaudiólogo Teológico",
    "falacia_logica": "Confusão entre Anatomia Muscular Periférica e Controle Neurológico Cortical",
    "por_que_e_idiota": "Papagaios imitam fala humana sem ter 'alma' humana nem bíceps de primata! O que separa a linguagem humana dos macacos não é a mera musculatura vocal, mas circuitos neurológicos específicos: mutações regulatórias no gene FOXP2, expansão do córtex pré-frontal, o fascículo arqueado conectando as áreas de Broca e Wernicke, e o controle motor fino da laringe.",
    "a_ciencia_real": "Estudos com o gene FOXP2 mostram que humanos modernos compartilham duas mutações de aminoácidos cruciais para o controle motor orofacial fino que chimpanzés não possuem.",
    "fontes_cientificas": [
      {
        "autor_ano": "Enard, W. et al. (2002)",
        "titulo": "Molecular evolution of FOXP2, a gene involved in speech and language",
        "periodico": "Nature, 418(6900), 869–872",
        "doi_ou_link": "https://doi.org/10.1038/nature01025"
      },
      {
        "autor_ano": "Fitch, W. T. et al. (2016)",
        "titulo": "Monkey vocal tracts are speech-ready",
        "periodico": "Science Advances, 2(12), e1600723",
        "doi_ou_link": "https://doi.org/10.1126/sciadv.1600723"
      }
    ],
    "quiz": {
      "pergunta": "Qual gene com mutações funcionais específicas é associado ao desenvolvimento do controle motor da fala em humanos?",
      "opcoes": [
        "FOXP2",
        "HULK1",
        "ADAM-01",
        "DNA-SOAP"
      ],
      "correta": 0,
      "explicacao_rapida": "O gene FOXP2, com mutações chave essenciais para o controle motor orofacial da fala!"
    }
  },
  {
    "id": "humana-cranio-1470",
    "titulo": "O Crânio KNM-ER 1470 era moderno demais e destruiu a árvore genealógica de Darwin!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Quando Richard Leakey achou o crânio 1470 no Quênia, com capacidade craniana de 750 cm³ e idade de quase 3 milhões de anos, ele provou que humanos modernos já existiam antes de Lucy e dos macacos primitivos!",
    "analogia_absurda": "Encontrar um smartphone funcionando dentro da tumba de um faraó de 5.000 anos.",
    "citacao_ou_versiculo": "Duane Gish (1979) em debates públicos no Texas.",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Arqueólogo com Calendário de Parede Quebrado",
    "falacia_logica": "Erro Inicial de Datação Corrigido + Morfologia de Homo rudolfensis",
    "por_que_e_idiota": "A datação inicial de quase 3 milhões de anos foi um erro de calibração na camada de cinzas vulcânicas (tuff KBS), que foi rigorosamente recalculada e corrigida pela própria comunidade científica para 1,9 milhão de anos através de múltiplos métodos radiométricos independentes (Argônio-Argônio e paleomagnetismo).",
    "a_ciencia_real": "O crânio 1470 pertence a *Homo rudolfensis*, um membro arcaico do gênero Homo contemporâneo a *Homo habilis* e *Homo erectus*, com face longa e dentes grandes que nenhum humano moderno possui.",
    "fontes_cientificas": [
      {
        "autor_ano": "McDougall, I. et al. (1980)",
        "titulo": "Dating of the KBS Tuff in Koobi Fora, northern Kenya",
        "periodico": "Nature, 287(5780), 830–833",
        "doi_ou_link": "https://doi.org/10.1038/287830a0"
      },
      {
        "autor_ano": "Leakey, M. G. et al. (2012)",
        "titulo": "New fossils from Koobi Fora in northern Kenya confirm taxonomic diversity in early Homo",
        "periodico": "Nature, 488(7410), 201–204",
        "doi_ou_link": "https://doi.org/10.1038/nature11322"
      }
    ],
    "quiz": {
      "pergunta": "Qual é a idade real comprovada do estrato do crânio KNM-ER 1470 (Homo rudolfensis)?",
      "opcoes": [
        "Aproximadamente 1,9 milhão de anos.",
        "6.000 anos cravados na Arca.",
        "500 bilhões de anos.",
        "Apenas 40 dias."
      ],
      "correta": 0,
      "explicacao_rapida": "Cerca de 1,9 milhão de anos após calibração radiométrica precisa de múltiplos laboratórios!"
    }
  },
  {
    "id": "humana-encefalizacao-rapida",
    "titulo": "O cérebro humano triplicou de tamanho rápido demais para a seleção natural agir!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Em menos de 2 milhões de anos, o volume craniano pulou de 400 cm³ no Australopithecus para 1.400 cm³ no Homo sapiens. Nenhum órgão triplica de tamanho tão rápido na natureza! Esse salto quântico exige sopro divino na mente!",
    "analogia_absurda": "Fazer um Fusca virar um foguete espacial da NASA em duas trocas de marcha.",
    "citacao_ou_versiculo": "A. E. Wilder-Smith: 'A mente humana é a assinatura da mente infinita.'",
    "nivel_delirio": 8.4,
    "rotulo_delirio": "Neurologista de Salto Triplo",
    "falacia_logica": "Premissa Errada sobre Taxas Evolutivas em Órgãos Sob Fortíssima Pressão de Seleção",
    "por_que_e_idiota": "Dois milhões de anos representam cerca de 100.000 GERAÇÕES humanas! O crescimento de 400 cm³ para 1.400 cm³ requer um aumento infinitesimal médio de apenas cerca de 0,01 cm³ (poucos miligramas de tecido cerebral) por geração!",
    "a_ciencia_real": "Esse processo foi impulsionado pelo domínio do fogo e cozimento de alimentos (que liberou energia metabólica maciça para o tecido cerebral caro, como demonstrado por Richard Wrangham), fabricação de ferramentas acheulianas e seleção sexual/social complexa.",
    "fontes_cientificas": [
      {
        "autor_ano": "Wrangham, R. (2009)",
        "titulo": "Catching Fire: How Cooking Made Us Human",
        "periodico": "Basic Books",
        "doi_ou_link": "https://www.basicbooks.com/titles/richard-wrangham/catching-fire/9780465020416/"
      },
      {
        "autor_ano": "Aiello, L. C. & Wheeler, P. (1995)",
        "titulo": "The expensive-tissue hypothesis: The brain and the digestive system in human and primate evolution",
        "periodico": "Current Anthropology, 36(2), 199–221",
        "doi_ou_link": "https://doi.org/10.1086/204350"
      }
    ],
    "quiz": {
      "pergunta": "Qual revolução comportamental e dietética liberou energia metabólica para a expansão do cérebro humano?",
      "opcoes": [
        "O cozimento de alimentos com o fogo e o consumo de carne rica em calorias.",
        "A ingestão diária de cápsulas de ômega 3.",
        "O cultivo de maçãs do Éden.",
        "A leitura de enciclopédias de pedra."
      ],
      "correta": 0,
      "explicacao_rapida": "O cozimento com fogo e a dieta concentrada reduziram o custo digestivo e nutriram o cérebro!"
    }
  },
  {
    "id": "humana-eva-mitocondrial-adao",
    "titulo": "A Eva Mitocondrial e o Adão Y provam o casal literal de Gênesis!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Cientistas ateus tiveram que engolir o orgulho e batizar nossos ancestrais de Eva Mitocondrial e Adão Y! Isso é a prova definitiva de que toda a humanidade descende de um único homem e uma única mulher criados no Éden!",
    "analogia_absurda": "Achar que o 'Adão' e a 'Eva' da genética trocaram alianças no cartório.",
    "citacao_ou_versiculo": "Gênesis 3:20 — 'Eva, porquanto ela era a mãe de todos os viventes.'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Genealogista de Cartório Bíblico",
    "falacia_logica": "Equívoco Conceitual + Falácia da Falsa Equivalência Populacional",
    "por_que_e_idiota": "A Eva Mitocondrial (mt-MRCA) e o Adão Cromossomial Y (Y-MRCA) NUNCA SE CONHECERAM, viveram com mais de 50.000 anos de diferença temporal e NUNCA FORAM OS ÚNICOS HUMANOS NA TERRA! Eles viveram no seio de populações de milhares de outros indivíduos férteis cujos outros genes ainda compõem nosso DNA.",
    "a_ciencia_real": "Eles são apenas os pontos de coalescência genética estocástica mais recentes para duas linhagens moleculares específicas (DNA mitocondrial feminino e cromossomo Y masculino). A genética populacional prova que a humanidade nunca passou por um gargalo de apenas 2 indivíduos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Cann, R. L., Stoneking, M., & Wilson, A. C. (1987)",
        "titulo": "Mitochondrial DNA and human evolution",
        "periodico": "Nature, 325(6099), 31–36",
        "doi_ou_link": "https://doi.org/10.1038/325031a0"
      },
      {
        "autor_ano": "Poznik, G. D. et al. (2013)",
        "titulo": "Sequencing Y chromosomes resolves discrepancy in time to common ancestor of males versus females",
        "periodico": "Science, 341(6145), 562–565",
        "doi_ou_link": "https://doi.org/10.1126/science.1237619"
      }
    ],
    "quiz": {
      "pergunta": "Por que a Eva Mitocondrial e o Adão Y não formaram um casal do Éden?",
      "opcoes": [
        "Viveram com dezenas de milhares de anos de diferença em populações de milhares de outros humanos férteis.",
        "Porque eram personagens de conto de fadas nórdico.",
        "Porque o DNA mitocondrial só existe em plantas carnívoras.",
        "Porque moravam na Antártida."
      ],
      "correta": 0,
      "explicacao_rapida": "Viveram com milênios de distância temporal em populações de milhares de outros humanos!"
    }
  },
  {
    "id": "humana-homem-java-gibao",
    "titulo": "O Homem de Java (Pithecanthropus) era apenas um macaco gibão gigante!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Eugène Dubois encontrou em Trinil uma calota craniana de macaco e um fêmur humano a 15 metros de distância. O fêmur era de um homem normal e o crânio era de um gibão gigante extinto!",
    "analogia_absurda": "Achar uma bota de borracha e o farol de uma moto e dizer que descobriu um robô humanoide.",
    "citacao_ou_versiculo": "Panfleto criacionista dos anos 1970 sobre os enganos de Dubois.",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Caçador de Gibões Gigantes",
    "falacia_logica": "Supressão de Mais de um Século de Descobertas de Homo erectus",
    "por_que_e_idiota": "Mesmo que Dubois tivesse cometido algum equívoco em 1891, nos 130 anos seguintes foram desenterrados CENTENAS de esqueletos e crânios de *Homo erectus* na Ásia e África (como o Menino de Nariokotome/Turkana Boy e os crânios de Dmanisi na Geórgia) com o mesmo corpo bípede e crânio de 900 cm³!",
    "a_ciencia_real": "O esqueleto de Nariokotome (KNM-WT 15000), escavado em 1984 por Kamoya Kimeu e Alan Walker, é um esqueleto de *Homo erectus* de 1,6 milhão de anos com mais de 80% dos ossos preservados no mesmo corpo articulado, sepultando qualquer dúvida.",
    "fontes_cientificas": [
      {
        "autor_ano": "Walker, A. & Leakey, R. (1993)",
        "titulo": "The Nariokotome Homo erectus Skeleton",
        "periodico": "Harvard University Press",
        "doi_ou_link": "https://www.hup.harvard.edu/books/9780674600751"
      },
      {
        "autor_ano": "Lordkipanidze, D. et al. (2013)",
        "titulo": "A complete skull from Dmanisi, Georgia, and the evolutionary biology of early Homo",
        "periodico": "Science, 342(6156), 326–331",
        "doi_ou_link": "https://doi.org/10.1126/science.1238484"
      }
    ],
    "quiz": {
      "pergunta": "Qual fóssil extraordinário de Homo erectus possui mais de 80% do esqueleto completo preservado?",
      "opcoes": [
        "O Menino de Turkana (Nariokotome Boy, KNM-WT 15000).",
        "O Homem de Piltdown.",
        "O Crocoduck de plástico.",
        "O boneco de neve de gesso."
      ],
      "correta": 0,
      "explicacao_rapida": "O Menino de Turkana preserva mais de 80% dos ossos articulados do mesmo indivíduo erectus!"
    }
  },
  {
    "id": "humana-torre-babel-linguistica",
    "titulo": "A Torre de Babel explica a origem de todas as línguas e gramáticas humanas!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "As línguas do mundo (chinês, tupi-guarani, árabe, alemão) são tão radicalmente diferentes que é impossível terem evoluído de grunhidos primatas! Deus confundiu as línguas na Torre de Babel e criou os idiomas prontos!",
    "analogia_absurda": "Dormir falando português e acordar falando mandarim fluente por decreto matinal.",
    "citacao_ou_versiculo": "Gênesis 11:7 — 'Eia, desçamos e confundamos ali a sua língua, para que não entenda um a língua do outro.'",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Linguista de Bloco de Tijolo",
    "falacia_logica": "Ignorância de Linguística Histórica, Filogenia de Idiomas e Glotocronologia",
    "por_que_e_idiota": "As línguas humanas NÃO surgiram prontas; elas evoluem exatamente por processos análogos à especiação biológica (mutação fonética, deriva dialetal, isolamento geográfico e seleção contextual)! A linguística histórica reconstrói famílias inteiras com filogenias rigorosas (ex: Proto-Indo-Europeu gerando latim, grego, sânscrito e suas filhas).",
    "a_ciencia_real": "Estudos computacionais de filogenia linguística mostram que idiomas divergem de ancestrais comuns com taxas constantes previsíveis, espelhando a árvore de dispersão genética das migrações humanas que saíram da África há 70.000 anos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Atkinson, Q. D. (2011)",
        "titulo": "Phonemic diversity supports a serial founder effect model of language expansion from Africa",
        "periodico": "Science, 332(6027), 346–349",
        "doi_ou_link": "https://doi.org/10.1126/science.1199295"
      },
      {
        "autor_ano": "Gray, R. D. & Atkinson, Q. D. (2003)",
        "titulo": "Language-tree divergence times support the Anatolian theory of Indo-European origin",
        "periodico": "Nature, 426(6965), 435–439",
        "doi_ou_link": "https://doi.org/10.1038/nature02029"
      }
    ],
    "quiz": {
      "pergunta": "Como a linguística histórica moderna explica a diversidade dos idiomas do mundo?",
      "opcoes": [
        "Por divergência gradual a partir de línguas ancestrais comuns acompanhando migrações humanas.",
        "Por confusão milagrosa na Torre de Babel há 4.000 anos.",
        "Porque extraterrestres instalaram chips na garganta dos sumérios.",
        "As línguas não mudam e permanecem idênticas há bilhões de anos."
      ],
      "correta": 0,
      "explicacao_rapida": "Idiomas evoluem e ramificam a partir de famílias linguísticas ancestrais comuns!"
    }
  },
  {
    "id": "design-flagelo-behe",
    "titulo": "Complexidade Irredutível: O Flagelo Bacteriano é um motor elétrico de popa perfeito!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O flagelo bacteriano possui estator, rotor e hélice girando a 100.000 RPM. Se você remover qualquer uma de suas 40 proteínas, ele para de funcionar. Partes intermediárias não servem para nada, logo não pôde ter evoluído gradualmente!",
    "analogia_absurda": "Uma ratoeira: sem a mola, a trava ou a base de madeira, ela não pega rato nenhum.",
    "citacao_ou_versiculo": "Michael Behe (1996) em 'A Caixa Preta de Darwin'.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Bioquímico com Diploma de Retórica",
    "falacia_logica": "Argumento da Incredulidade Pessoal + Ignorância de Exaptação",
    "por_que_e_idiota": "Peças biológicas não evoluem apenas para o propósito final; elas mudam de função ao longo do caminho! O sistema de secreção Tipo III (T3SS), usado por bactérias como a causadora da Peste Negra para injetar toxinas, compartilha cerca de 10 proteínas homólogas com a base do flagelo e funciona perfeitamente sem o motor e sem a hélice!",
    "a_ciencia_real": "Kenneth Miller demonstrou em tribunal (caso Kitzmiller v. Dover, 2005) que partes da ratoeira funcionam perfeitamente como prendedor de gravata ou clipe de papel. O flagelo evoluiu por coopção e exaptação de sistemas de secreção proteica pré-existentes.",
    "fontes_cientificas": [
      {
        "autor_ano": "Pallen, M. J. & Matzke, N. J. (2006)",
        "titulo": "From The Origin of Species to the origin of bacterial flagella",
        "periodico": "Nature Reviews Microbiology, 4(10), 784–790",
        "doi_ou_link": "https://doi.org/10.1038/nrmicro1493"
      },
      {
        "autor_ano": "Miller, K. R. (2004)",
        "titulo": "The Flagellum Unspun: The Collapse of 'Irreducible Complexity'",
        "periodico": "Debating Design, Cambridge University Press",
        "doi_ou_link": "https://www.millerandlevine.com/km/evol/design2/article.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual estrutura bacteriana comprova que as proteínas da base do flagelo tinham outra função?",
      "opcoes": [
        "O Sistema de Secreção Tipo III (T3SS), que atua como seringa molecular.",
        "A parede de peptidoglicano.",
        "O vacúolo de suco celular.",
        "O ribossomo 80S."
      ],
      "correta": 0,
      "explicacao_rapida": "O T3SS utiliza as mesmas proteínas basais do flagelo para secreção e injeção de toxinas!"
    }
  },
  {
    "id": "design-banana-kirk",
    "titulo": "A Banana é a prova irrefutável do Design Inteligente feita sob medida para a mão humana!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Veja a banana: encaixa na mão humana, tem embalagem biodegradável com abas para puxar como zíper, fica amarela quando madura e aponta para a boca! Deus desenhou a banana para o homem!",
    "analogia_absurda": "O famoso vídeo de Ray Comfort e Kirk Cameron segurando uma banana como 'o pesadelo do ateu'.",
    "citacao_ou_versiculo": "Ray Comfort: 'Notice how it gracefully points towards the mouth!'",
    "nivel_delirio": 9.9,
    "rotulo_delirio": "Ray Comfort Descascando a Própria Dignidade",
    "falacia_logica": "Confusão entre Seleção Artificial Agrícola Humana e Criação Divina Natural",
    "por_que_e_idiota": "Essa banana amarela doce sem sementes NÃO EXISTE NA NATUREZA! Ela é o resultado de milhares de anos de SELEÇÃO ARTIFICIAL e melhoramento genético feito por agricultores humanos. A banana selvagem ancestral é minúscula, amarga e cheia de dezenas de sementes pretas duras que quebram dentes!",
    "a_ciencia_real": "A banana Cavendish comercial é um híbrido triploide estéril propagado exclusivamente por mudas clonadas inventadas pela biotecnologia humana.",
    "fontes_cientificas": [
      {
        "autor_ano": "Perrier, X. et al. (2011)",
        "titulo": "Multidisciplinary perspectives on banana domestication",
        "periodico": "PNAS, 108(28), 11311–11318",
        "doi_ou_link": "https://doi.org/10.1073/pnas.1102001108"
      },
      {
        "autor_ano": "Heslop-Harrison, J. S. (2007)",
        "titulo": "Domestication, genomics and the future for banana",
        "periodico": "Annals of Botany, 100(5), 1073–1084",
        "doi_ou_link": "https://doi.org/10.1093/aob/mcm191"
      }
    ],
    "quiz": {
      "pergunta": "Como era a banana selvagem ancestral antes da domesticação agrícola humana?",
      "opcoes": [
        "Pequena, dura e entupida de sementes pretas duras como pedras.",
        "Amarela e com casca com zíper de plástico.",
        "Idêntica à do mercado, só que com gosto de chocolate.",
        "Crescia no fundo do oceano."
      ],
      "correta": 0,
      "explicacao_rapida": "A banana ancestral selvagem é minúscula e cheia de sementes duras que quebram dentes!"
    }
  },
  {
    "id": "design-olho-humano-imperfeito",
    "titulo": "Metade de um olho não serve para nada: como o olho humano pôde evoluir?",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O olho humano tem cristalino, córnea, íris e retina com milhões de fotorreceptores. Se faltar a córnea, você não enxerga nada! Como um órgão tão refinado pôde evoluir por pequenos passos graduais?",
    "analogia_absurda": "Comprar meia lente de óculos e esperar enxergar com perfeição.",
    "citacao_ou_versiculo": "Provérbios 20:12 — 'O ouvido que ouve, e o olho que vê, o Senhor os fez a ambos.'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Oftalmologista com Miopia Epistemológica",
    "falacia_logica": "Falsa Dicotomia + Ignorância da Zoologia Comparada",
    "por_que_e_idiota": "5% de um olho não é inútil: detectar sombra e luz salva uma presa de predadores! Na zoologia atual encontramos todos os estágios funcionais vivos: manchas oculares em Euglena, cálice côncavo em lapas, câmara escura no Nautilus e cristalino em cefalópodes e vertebrados.",
    "a_ciencia_real": "Além disso, o olho dos vertebrados tem um design estúpido: fotorreceptores invertidos com fiação nervosa na frente, criando um ponto cego que o polvo (que evoluiu olhos separadamente) não tem!",
    "fontes_cientificas": [
      {
        "autor_ano": "Nilsson, D.-E. & Pelger, S. (1994)",
        "titulo": "A pessimistic estimate of the time required for an eye to evolve",
        "periodico": "Proc. R. Soc. Lond. B, 256, 53–58",
        "doi_ou_link": "https://doi.org/10.1098/rspb.1994.0048"
      },
      {
        "autor_ano": "Lamb, T. D. et al. (2007)",
        "titulo": "Evolution of the vertebrate eye",
        "periodico": "Nature Reviews Neuroscience, 8(12), 960–976",
        "doi_ou_link": "https://doi.org/10.1038/nrn2283"
      }
    ],
    "quiz": {
      "pergunta": "Por que o olho dos polvos é evolutivamente superior ao olho humano?",
      "opcoes": [
        "A fiação nervosa fica atrás dos fotorreceptores, eliminando o ponto cego que nós temos.",
        "Porque polvos enxergam raios gama.",
        "Porque eles possuem lentes feitas de diamante.",
        "Eles têm 8 olhos em cada tentáculo."
      ],
      "correta": 0,
      "explicacao_rapida": "Os polvos têm retina eferente direta sem o ponto cego bizarro dos vertebrados!"
    }
  },
  {
    "id": "design-cascata-coagulacao",
    "titulo": "A cascata de coagulação do sangue: se faltar um fator, todos morrem sangrando!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "A coagulação do sangue humano exige uma cascata em cadeia com mais de 10 fatores enzimáticos (protrombina, fibrinogênio, fator VIII, X, etc.). Se faltar um único fator, o sangue não coagula e a pessoa morre hemorrágica. Como esse sistema pôde ter evoluído por partes?",
    "analogia_absurda": "Uma fileira de dominós: se tirar um dominó do meio, a cadeia para completamente.",
    "citacao_ou_versiculo": "Michael Behe em 'A Caixa Preta de Darwin' (Capítulo sobre Coagulação).",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Hematologista de Dominó",
    "falacia_logica": "Falácia da Complexidade Irredutível + Omissão da Fisiologia Comparada de Cordados Basais",
    "por_que_e_idiota": "A cascata de coagulação evoluiu por DUPLICAÇÕES GÊNICAS sucessivas a partir de proteases digestivas primitivas! Peixes sem mandíbula (lampréias) e vertebrados basais possuem cascatas de coagulação muito mais simples, com vários dos fatores 'essenciais' dos mamíferos totalmente ausentes, e coagulam sangue perfeitamente!",
    "a_ciencia_real": "Animais marinhos como urocordados e peixes primitivos provam a trajetória evolutiva passo a passo através de cópias duplicadas do gene de tripsina.",
    "fontes_cientificas": [
      {
        "autor_ano": "Doolittle, R. F. (1993)",
        "titulo": "The evolution of vertebrate blood coagulation: a case of duplicated genes",
        "periodico": "Thrombosis and Haemostasis, 70(1), 24–28",
        "doi_ou_link": "https://pubmed.ncbi.nlm.nih.gov/8236111/"
      },
      {
        "autor_ano": "Davidson, C. J. et al. (2003)",
        "titulo": "The evolutionary origin of the vertebrate blood coagulation cascade",
        "periodico": "PNAS, 100(2), 619–624",
        "doi_ou_link": "https://doi.org/10.1073/pnas.0136009100"
      }
    ],
    "quiz": {
      "pergunta": "Quais vertebrados vivos possuem cascata de coagulação sem vários dos fatores 'essenciais' humanos?",
      "opcoes": [
        "Peixes sem mandíbula primitivos (lampréias) e peixes cartilaginosos.",
        "Apenas dinossauros fossilizados.",
        "Nenhum, todos os animais têm exatamente os mesmos 12 fatores.",
        "Insetos hematófagos."
      ],
      "correta": 0,
      "explicacao_rapida": "Lampréias e peixes basais coagulam o sangue perfeitamente sem fatores mamíferos!"
    }
  },
  {
    "id": "design-besouro-bombardeiro",
    "titulo": "O Besouro Bombardeiro explodiria pelos ares se tivesse evoluído por etapas!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O besouro bombardeiro armazena hidroquinona e peróxido de hidrogênio em câmaras separadas e mistura os dois com enzimas catalisadoras para atirar um spray fervente a 100°C contra predadores. Se ele evoluísse uma das partes sem a outra, ele se autoexplodiria!",
    "analogia_absurda": "Armazenar pólvora e fósforos no mesmo bolso da calça sem válvula de escape.",
    "citacao_ou_versiculo": "Duane Gish (ICR): 'Dinossauros para Crianças e o Besouro de Deus'.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Pirotécnico de Insetário",
    "falacia_logica": "Falácia da Incredulidade Pessoal + Erro Factual de Química Básica",
    "por_que_e_idiota": "Primeiro: hidroquinona e peróxido de hidrogênio em concentrações biológicas NÃO EXPLODEM sozinhos quando misturados; eles apenas reagem lentamente aquecendo se não houver peroxidase concentrada! Segundo: artrópodes usam hidroquinonas há centenas de milhões de anos para endurecer sua cutícula de quitina.",
    "a_ciencia_real": "Outros besouros carabídeos possuem todas as etapas intermediárias vivas hoje: desde câmaras simples que apenas secretam líquido com gosto amargo até espécies com válvulas musculares parciais.",
    "fontes_cientificas": [
      {
        "autor_ano": "Eisner, T. & Aneshansley, D. J. (1999)",
        "titulo": "Spray aiming in the bombardier beetle: Carabus and beyond",
        "periodico": "PNAS, 96(17), 9705–9709",
        "doi_ou_link": "https://doi.org/10.1073/pnas.96.17.9705"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB310: Bombardier beetle",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB310.html"
      }
    ],
    "quiz": {
      "pergunta": "Para que os insetos ancestrais usavam hidroquinonas antes do mecanismo de defesa química?",
      "opcoes": [
        "Para endurecer o exoesqueleto de quitina após a ecdise (troca de casca).",
        "Para fazer fogo no fundo de formigueiros.",
        "Para queimar folhas de eucalipto.",
        "Para sinalizar voo noturno."
      ],
      "correta": 0,
      "explicacao_rapida": "Hidroquinonas eram e são usadas no endurecimento da cutícula de quitina do exoesqueleto!"
    }
  },
  {
    "id": "design-asa-pela-metade",
    "titulo": "Para que serve meia asa? Metade de uma asa não voa!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Como as asas de aves e insetos evoluíram se 10% ou 50% de uma asa não gera sustentação para voar? Uma criatura com meia asa apenas carregaria um peso inútil até ser devorada por predadores!",
    "analogia_absurda": "Tentar voar num avião que só tem meio metro de asa cortada com serrote.",
    "citacao_ou_versiculo": "Stephen Jay Gould citado fora de contexto por criacionistas.",
    "nivel_delirio": 8.5,
    "rotulo_delirio": "Engenheiro Aeronáutico de Galinheiro",
    "falacia_logica": "Falsa Premissa Funcional (Ignorar Exaptação e Funções Aerodinâmicas Intermediárias)",
    "por_que_e_idiota": "Meia asa serve para MUITA COISA! Em dinossauros terópodes e aves basais, proto-asas serviam para regulação térmica (isolamento de calor), exibição de cortejo sexual e, crucialmente, para CORRIDA ASSISTIDA POR ASAS (WAIR - *Wing-Assisted Incline Running*), permitindo que aves corram em declives verticais e árvores batendo proto-asas!",
    "a_ciencia_real": "Além disso, proto-asas curtas permitem planar suavemente e amortecer quedas de copas de árvores, conferindo enorme vantagem adaptativa antes do voo propelido ativo.",
    "fontes_cientificas": [
      {
        "autor_ano": "Dial, K. P. (2003)",
        "titulo": "Wing-assisted incline running and the evolution of flight",
        "periodico": "Science, 299(5605), 402–404",
        "doi_ou_link": "https://doi.org/10.1126/science.1078237"
      },
      {
        "autor_ano": "Prum, R. O. & Brush, A. H. (2002)",
        "titulo": "The evolutionary origin and diversification of feathers",
        "periodico": "The Quarterly Review of Biology, 77(3), 261–295",
        "doi_ou_link": "https://doi.org/10.1086/341993"
      }
    ],
    "quiz": {
      "pergunta": "Para que servem proto-asas menores em aves e dinossauros terópodes segundo estudos da Science?",
      "opcoes": [
        "Para corrida assistida por asas em declives íngremes (WAIR), isolamento térmico e planar.",
        "Para bater palmas para atrair sementes.",
        "Para nadar a 5.000 metros de profundidade.",
        "Para cavar túneis em rochas duras."
      ],
      "correta": 0,
      "explicacao_rapida": "Para corrida assistida por asas (WAIR), controle de curvas, planar e termorregulação!"
    }
  },
  {
    "id": "design-metamorfose-borboleta",
    "titulo": "A metamorfose da lagarta para borboleta dissolve o corpo todo: impossível de evoluir!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Dentro do casulo, a lagarta se autodissolve em uma sopa líquida celular e se remonta como uma borboleta alada com olhos e sistema reprodutor novo. Como esse processo poderia ter evoluído por passos se qualquer erro no meio do caminho mataria o inseto liquefeito?",
    "analogia_absurda": "Desmontar um trator inteiro em parafusos e torcer para o vento remontá-lo como um helicóptero.",
    "citacao_ou_versiculo": "Bordão criacionista sobre a perfeição da metamorfose dos insetos.",
    "nivel_delirio": 9.0,
    "rotulo_delirio": "Entomologista de Casulo Fechado",
    "falacia_logica": "Incompreensão de Embriologia dos Discos Imaginais + Omissão de Hemimetábolos",
    "por_que_e_idiota": "A lagarta NÃO se dissolve em sopa desordenada caótica! Ela preserva agregados de células-tronco altamente organizados chamados DISCOS IMAGINAIS, que já contêm o mapa corporal pré-formado das asas, pernas e antenas do adulto.",
    "a_ciencia_real": "A metamorfose completa (holometábola) evoluiu a partir da metamorfose gradual (hemimetábola), observada em gafanhotos e baratas, onde o jovem simplesmente cresce trocando de exoesqueleto. Insetos primitivos do Carbonífero documentam toda a transição evolutiva.",
    "fontes_cientificas": [
      {
        "autor_ano": "Truman, J. W. & Riddiford, L. M. (1999)",
        "titulo": "The origins of insect metamorphosis",
        "periodico": "Nature, 401(6752), 447–452",
        "doi_ou_link": "https://doi.org/10.1038/46737"
      },
      {
        "autor_ano": "Belles, X. (2020)",
        "titulo": "Insect Metamorphosis: From Natural History to Regulation of Development and Evolution",
        "periodico": "Academic Press / Elsevier",
        "doi_ou_link": "https://doi.org/10.1016/C2018-0-03823-1"
      }
    ],
    "quiz": {
      "pergunta": "Quais estruturas celulares preservam o plano corporal do adulto durante a metamorfose das borboletas?",
      "opcoes": [
        "Os discos imaginais (aglomerados de células-tronco pré-determinadas).",
        "Microrrobôs biológicos instalados na seiva.",
        "Células de gordura sem núcleo.",
        "Cristais de quartzo internos."
      ],
      "correta": 0,
      "explicacao_rapida": "Os discos imaginais guiam o desenvolvimento dos tecidos e apêndices do inseto adulto!"
    }
  },
  {
    "id": "design-bico-picapau",
    "titulo": "O bico do pica-pau tem amortecedor no crânio que quebraria antes de evoluir!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O pica-pau bate a cabeça em troncos a 20 vezes por segundo com desaceleração de 1.200 g. Ele possui osso hioide que envolve o crânio, osso esponjoso e pálpebras que fecham antes da batida. Se faltasse uma dessas peças, o pássaro teria traumatismo craniano e morreria!",
    "analogia_absurda": "Usar uma britadeira segurando a broca diretamente com a ponta do nariz.",
    "citacao_ou_versiculo": "Criacionismo de Televisão: 'O pássaro com capacete divino!'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Engenheiro de Britadeira de Floresta",
    "falacia_logica": "Ignorância de Biofísica de Escala + Fisiologia Comparada de Pássaros",
    "por_que_e_idiota": "Pássaros pequenos têm cérebro de massa minúscula com altíssima razão área-por-volume, o que significa que o impacto mecânico dissipado sobre seu cérebro é muito menor do que em humanos (Escala de Scaling Alométrico).",
    "a_ciencia_real": "O osso hioide modificado é compartilhado em diferentes graus por várias famílias de aves e evoluiu a partir do suporte da língua extensível ancestral para capturar larvas em fendas da casca. Pica-paus basais (*Jynx* e *Picumnus*) mostram estados intermediários com bicos retos menos especializados.",
    "fontes_cientificas": [
      {
        "autor_ano": "Wang, L. et al. (2011)",
        "titulo": "Why do woodpeckers resist head impact injury: a biomechanical investigation",
        "periodico": "PLOS ONE, 6(10), e26490",
        "doi_ou_link": "https://doi.org/10.1371/journal.pone.0026490"
      },
      {
        "autor_ano": "Van de Kamp, T. et al. (2022)",
        "titulo": "Woodpeckers show no signs of shock absorption during pecking",
        "periodico": "Current Biology, 32(14), 3189–3194",
        "doi_ou_link": "https://doi.org/10.1016/j.cub.2022.05.052"
      }
    ],
    "quiz": {
      "pergunta": "O que estudos recentes de biomecânica na Current Biology (2022) revelaram sobre o crânio do pica-pau?",
      "opcoes": [
        "Que a cabeça dele age como um martelo rígido eficiente e a massa cerebral minúscula evita concussão.",
        "Que ele tem amortecedores de borracha no bico.",
        "Que os pica-paus sentem dor de cabeça após cada árvore.",
        "Que o bico é feito de titânio extraterrestre."
      ],
      "correta": 0,
      "explicacao_rapida": "A massa cerebral pequena e o crânio rígido previnem concussão física de forma natural!"
    }
  },
  {
    "id": "design-sistema-imunologico",
    "titulo": "O sistema imunológico adaptativo precisa de anticorpos, antígenos e células T todos juntos!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O sistema imune adaptativo dos vertebrados gera bilhões de anticorpos por recombinação V(D)J com enzimas RAG. Se faltar a enzima RAG, o indivíduo é imunodeficiente e morre. Como um sistema de defesa tão interdependente poderia ter surgido aos pedaços?",
    "analogia_absurda": "Um cofre de segurança máxima com 3 senhas digitais antes de inventarem a eletricidade.",
    "citacao_ou_versiculo": "Michael Behe em 'A Caixa Preta de Darwin' (Capítulo sobre o Sistema Imune).",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Imunologista de Fechadura",
    "falacia_logica": "Desconhecimento da Origem do Sistema RAG por Transposon e Imunidade Inata",
    "por_que_e_idiota": "A imunidade inata (fagócitos, lisossomos, lectinas e peptídeos antimicrobianos) é extremamente eficiente e protegeu todos os animais multicelulares durante centenas de milhões de anos antes da recombinação V(D)J!",
    "a_ciencia_real": "Em 1998, cientistas descobriram que as enzimas RAG1 e RAG2 evoluíram a partir de um TRANSPOSON ('gene saltador') ancestral chamado Transib que se inseriu no genoma de um vertebrado mandibulado primitivo, cooptando a capacidade de quebrar e colar DNA para diversificar receptores de defesa.",
    "fontes_cientificas": [
      {
        "autor_ano": "Agrawal, A., Eastman, Q. M., & Schatz, D. G. (1998)",
        "titulo": "Transposition mediated by RAG1 and RAG2 and its implications for the evolution of the immune system",
        "periodico": "Nature, 394(6695), 744–751",
        "doi_ou_link": "https://doi.org/10.1038/29457"
      },
      {
        "autor_ano": "Kapitonov, V. V. & Jurka, J. (2005)",
        "titulo": "RAG1 core and V(D)J recombination signal sequences were derived from Transib transposons",
        "periodico": "PLOS Biology, 3(6), e181",
        "doi_ou_link": "https://doi.org/10.1371/journal.pbio.0030181"
      }
    ],
    "quiz": {
      "pergunta": "De onde vieram as enzimas RAG que originaram a recombinação de anticorpos V(D)J?",
      "opcoes": [
        "De um transposon marinho móvel ancestral ('gene saltador') integrado ao genoma.",
        "De uma vacina criada no século XVIII.",
        "De um vírus de computador pré-histórico.",
        "Foram pintadas nos linfócitos por anjos."
      ],
      "correta": 0,
      "explicacao_rapida": "Derivaram da coopção molecular de um transposon (elemento genético móvel Transib)!"
    }
  },
  {
    "id": "design-teia-aranha",
    "titulo": "A teia da aranha é cinco vezes mais resistente que o aço: engenharia impossível para o barro!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "A seda da aranha é um polímero de escleroproteína com resistência à tração superior ao aço e flexibilidade extraordinária produzida em fieiras sob controle de pH. Como glândulas tão refinadas evoluíram se a primeira aranha sem teia passaria fome?",
    "analogia_absurda": "Um pescador inventar a linha de náilon antes de inventar o anzol e o barco.",
    "citacao_ou_versiculo": "Panfleto criacionista sobre a perfeição da fiação aracnídea.",
    "nivel_delirio": 8.3,
    "rotulo_delirio": "Tecelão de Púlpito",
    "falacia_logica": "Ignorância da História Natural das Aranhas e suas Sedas Primitivas",
    "por_que_e_idiota": "As primeiras aranhas NÃO usavam seda para caçar com teias aéreas orbiculares! Elas usavam fios primitivos de seda para forrar tocas subterrâneas, proteger seus ovos contra fungos e umidade, e como 'fios-guia' sensores de vibração no solo.",
    "a_ciencia_real": "Aranhas basais vivas hoje (como as da subordem Mesothelae e tarântulas) não constroem teias aéreas de captura; elas caçam ativamente e usam seda exclusivamente para proteger suas crias em casulos, documentando o estágio evolutivo intermediário perfeitamente.",
    "fontes_cientificas": [
      {
        "autor_ano": "Garb, J. E. et al. (2007)",
        "titulo": "The evolution of spider silk: from ancient silk genes to modern mechanical traits",
        "periodico": "Journal of Experimental Biology, 210, 1477–1489",
        "doi_ou_link": "https://doi.org/10.1242/jeb.002279"
      },
      {
        "autor_ano": "Blackledge, T. A. et al. (2009)",
        "titulo": "Reconstructing web evolution and spider diversification in the molecular era",
        "periodico": "PNAS, 106(13), 5229–5234",
        "doi_ou_link": "https://doi.org/10.1073/pnas.0901377106"
      }
    ],
    "quiz": {
      "pergunta": "Para que as aranhas ancestrais primitivas usavam seda antes de inventarem as teias aéreas?",
      "opcoes": [
        "Para forrar tocas subterrâneas, proteger ovos em casulos e detectar vibrações táteis.",
        "Para pendurar rede de descanso nas copas.",
        "Para fazer cachecóis de inverno.",
        "Para amarrar besouros voadores."
      ],
      "correta": 0,
      "explicacao_rapida": "Para revestimento de galerias subterrâneas e proteção biológica de sacos de ovos!"
    }
  },
  {
    "id": "design-engrenagem-issus",
    "titulo": "O inseto Issus coleoptratus tem engrenagens mecânicas com dentes que comprovam design!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O inseto saltador Issus coleoptratus possui engrenagens reais com dentes entrelaçados nas pernas traseiras para sincronizar o salto em microssegundos. Engrenagens são invenções mecânicas exclusivas da engenharia humana! A natureza não faz engrenagens sem um Engenheiro!",
    "analogia_absurda": "Achar uma caixa de câmbio de caminhão funcionando no meio da floresta.",
    "citacao_ou_versiculo": "Discovery Institute (2013): 'Engrenagens mecânicas na perna de um inseto provam o Projetista!'",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Torneiro Mecânico de Insetário",
    "falacia_logica": "Reificação Antropomórfica de Estruturas Anatômicas Naturais",
    "por_que_e_idiota": "A seleção natural otimiza estruturas geométricas que minimizam atrito e sincronizam forças mecânicas através de mutações em cutículas de quitina. O inseto possui essas microengrenagens apenas na fase de ninfa jovem; quando atinge a fase adulta, ele as perde e passa a usar atrito de almofadas musculares!",
    "a_ciencia_real": "Se as engrenagens fossem obra de um projetista inteligente infalível, ele cometeu um erro tolo: se um dente de engrenagem quebrar na ninfa, a perna fica inutilizada até a próxima ecdise, razão pela qual o adulto usa fricção resiliente.",
    "fontes_cientificas": [
      {
        "autor_ano": "Burrows, M. & Sutton, G. (2013)",
        "titulo": "Interacting gears synchronize propulsive leg movements in a jumping insect",
        "periodico": "Science, 341(6151), 1254–1256",
        "doi_ou_link": "https://doi.org/10.1126/science.1240284"
      },
      {
        "autor_ano": "Gorb, S. N. (2001)",
        "titulo": "Attachment Devices of Insect Cuticle",
        "periodico": "Kluwer Academic Publishers",
        "doi_ou_link": "https://doi.org/10.1007/978-94-017-0803-6"
      }
    ],
    "quiz": {
      "pergunta": "Em qual fase da vida o inseto Issus coleoptratus possui as engrenagens nas pernas?",
      "opcoes": [
        "Apenas na fase jovem de ninfa; os adultos perdem as engrenagens.",
        "Durante a velhice após completar 80 anos.",
        "Apenas quando está voando de ré.",
        "Ele nasce com parafusos de inox."
      ],
      "correta": 0,
      "explicacao_rapida": "As engrenagens estão presentes apenas nas ninfas jovens para sincronizar o salto!"
    }
  },
  {
    "id": "design-cinesina-pe-nanorobo",
    "titulo": "A proteína Cinesina anda com pezinhos como um robô inteligente transportando cargas!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Vídeos de animação celular mostram a proteína Cinesina caminhando com pezinhos perfeitos sobre microtúbulos carregando vesículas enormes na célula. Isso é uma máquina ambulante consciente, não pura química cega!",
    "analogia_absurda": "Um carteiro em miniatura entregando encomendas no correio celular.",
    "citacao_ou_versiculo": "Vídeos virais de animação médica compartilhados em grupos religiosos.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Animador 3D Iludido",
    "falacia_logica": "Confusão entre Animação Artística Antropomórfica e Cinética Química Termodinâmica",
    "por_que_e_idiota": "A cinesina NÃO é um robô com consciência e sapatinho de couro! Ela é uma proteína motora que sofre mudanças conformacionais termodinâmicas puramente passivas causadas pela hidrólise de ATP e potencial eletrostático. A animação famosa do Harvard BioVisions é uma representação artística estilizada!",
    "a_ciencia_real": "No ambiente celular real, a cinesina está imersa em um bombardeio browniano violento de moléculas de água a trilhões de colisões por segundo, avançando por catraca estocástica browniana (*Brownian ratchet*), não por caminhada militar disciplinada.",
    "fontes_cientificas": [
      {
        "autor_ano": "Vale, R. D. & Milligan, R. A. (2000)",
        "titulo": "The way things move: looking under the hood of molecular motor proteins",
        "periodico": "Science, 288(5463), 88–95",
        "doi_ou_link": "https://doi.org/10.1126/science.288.5463.88"
      },
      {
        "autor_ano": "Astumian, R. D. (1997)",
        "titulo": "Thermodynamics and kinetics of a Brownian motor",
        "periodico": "Science, 276(5314), 917–922",
        "doi_ou_link": "https://doi.org/10.1126/science.276.5314.917"
      }
    ],
    "quiz": {
      "pergunta": "O que move a proteína motora cinesina na realidade biofísica?",
      "opcoes": [
        "Mudanças conformacionais eletrostáticas dirigidas por hidrólise de ATP e ruído térmico browniano.",
        "Duas pernas com joelhos e cartilagem muscular.",
        "Um chip microeletrônico embutido.",
        "Vontade divina instantânea a cada passo."
      ],
      "correta": 0,
      "explicacao_rapida": "Mudanças de conformação estéreo-química acopladas a hidrólise de ATP e catraca browniana!"
    }
  },
  {
    "id": "design-clorofila-fotossintese",
    "titulo": "A fotossíntese quântica é complexa demais para ter surgido do barro inanimado!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O fotossistema II divide a água em oxigênio e prótons usando um complexo catalítico de manganês com eficiência quântica de 99%. A humanidade com toda a tecnologia não consegue fazer fotossíntese artificial; como o barro primitivo inventou isso?",
    "analogia_absurda": "Uma usina hidrelétrica de Itaipu montada espontaneamente pela lama de um barranco.",
    "citacao_ou_versiculo": "Criacionista em debate de botânica: 'A folha verde refuta o químico ateu!'",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Botânico com Fotofobia Epistêmica",
    "falacia_logica": "Argumento da Incredulidade Pessoal + Omissão da Evolução em Bactérias Púrpuras e Verdes",
    "por_que_e_idiota": "A fotossíntese oxigênica das plantas modernas não surgiu pronta; ela é o ápice de mais de 1 bilhão de anos de evolução em bactérias anaeróbicas primitivas (bactérias verdes sulfurosas e bactérias púrpuras) que usavam H2S (gás sulfídrico) em vez de água como doador de elétrons com fotossistemas muito mais simples!",
    "a_ciencia_real": "As cianobactérias uniram dois fotossistemas mais simples ancestrais por duplicação e transferência horizontal de genes há cerca de 2,4 bilhões de anos, desencadeando o Grande Evento de Oxigenação (GOE). As plantas terrestres adquiriram isso englobando uma cianobactéria por endossimbiose (cloroplasto).",
    "fontes_cientificas": [
      {
        "autor_ano": "Blankenship, R. E. (2010)",
        "titulo": "Early evolution of photosynthesis",
        "periodico": "Plant Physiology, 154(2), 434–438",
        "doi_ou_link": "https://doi.org/10.1104/pp.110.161687"
      },
      {
        "autor_ano": "Hohmann-Marriott, M. F. & Blankenship, R. E. (2011)",
        "titulo": "Evolution of photosynthesis",
        "periodico": "Annual Review of Plant Biology, 62, 515–548",
        "doi_ou_link": "https://doi.org/10.1146/annurev-arplant-042110-103811"
      }
    ],
    "quiz": {
      "pergunta": "Como as plantas terrestres e algas obtiveram a capacidade de fazer fotossíntese?",
      "opcoes": [
        "Por endossimbiose primária: englobaram uma cianobactéria ancestral que virou o cloroplasto.",
        "Pela absorção direta de raios solares em raízes de terra.",
        "Plantas foram criadas no terceiro dia sem Sol.",
        "Por mutação de células animais carnívoras."
      ],
      "correta": 0,
      "explicacao_rapida": "Por endossimbiose ancestral de uma cianobactéria que se tornou a organela cloroplasto!"
    }
  },
  {
    "id": "design-nervo-laringeo-girafa-bad",
    "titulo": "O Nervo Laríngeo Recorrente da Girafa dá uma volta inútil de 5 metros: o pior 'design' possível!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Se todos os corpos vivos foram desenhados por um engenheiro sábio, por que o nervo que liga o cérebro à laringe da girafa desce por 5 metros até o peito, contorna a aorta e sobe mais 5 metros para chegar na garganta que estava a 10 cm de distância?",
    "analogia_absurda": "Puxar um fio elétrico do interruptor para a lâmpada do quarto dando 4 voltas pelo esgoto da rua.",
    "citacao_ou_versiculo": "Exemplo clássico popularizado por Richard Dawkins em autópsia de girafa.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Engenheiro Eletricista com Fios Cruzados",
    "falacia_logica": "Petição de Princípio Criacionista + Negação de Ineficiência Histórica gritante",
    "por_que_e_idiota": "O nervo laríngeo recorrente é uma PROVA CABAL DA EVOLUÇÃO e uma REFUTAÇÃO MORTAL ao Design Inteligente! Nos peixes ancestrais sem pescoço, o nervo branquial corria em linha reta direta atrás do arco aórtico. Conforme o pescoço dos tetrápodes e girafas foi se alongando ao longo de milhões de anos, o vaso ficou preso no tórax e o nervo foi esticado gradualmente a cada geração.",
    "a_ciencia_real": "Um Criador onipotente teria ligado o nervo diretamente em 10 centímetros. A evolução cega foi forçada a seguir a restrição filogenética do desenvolvimento embrionário dos vertebrados.",
    "fontes_cientificas": [
      {
        "autor_ano": "Wedel, M. J. (2012)",
        "titulo": "A monument of inefficiency: The presumed course of the recurrent laryngeal nerve in sauropod dinosaurs",
        "periodico": "Acta Palaeontologica Polonica, 57(2), 251–256",
        "doi_ou_link": "https://doi.org/10.4202/app.2011.0019"
      },
      {
        "autor_ano": "Dawkins, R. (2009)",
        "titulo": "The Greatest Show on Earth",
        "periodico": "Free Press",
        "doi_ou_link": "https://www.worldcat.org/title/greatest-show-on-earth/oclc/310398086"
      }
    ],
    "quiz": {
      "pergunta": "Por que o nervo laríngeo da girafa dá essa volta bizarra de 5 metros até o coração?",
      "opcoes": [
        "Herança anatômica histórica de peixes ancestrais sem pescoço: o nervo ficou preso atrás da aorta.",
        "Para a girafa emitir mugidos de baixa frequência musical.",
        "Para alongar o tecido conjuntivo durante o sono.",
        "Porque o coração da girafa fica na garganta."
      ],
      "correta": 0,
      "explicacao_rapida": "Herança filogenética histórica de ancestrais peixes cujo nervo passava atrás do arco aórtico!"
    }
  },
  {
    "id": "geologia-6000-anos-ussher",
    "titulo": "A Terra tem apenas 6.000 anos contados pelas genealogias de Adão até Cristo!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Somando as idades dos patriarcas bíblicos de Gênesis (cálculo do Arcebispo James Ussher em 1650), a Criação começou em 23 de outubro de 4004 a.C. Toda a geologia moderna de milhões de anos é ilusão de cientistas que rejeitam as escrituras sagradas!",
    "analogia_absurda": "Contar a idade de uma catedral gótica de pedra lendo a etiqueta do preço do sino da entrada.",
    "citacao_ou_versiculo": "Arcebispo Ussher (1650): 'O mundo foi criado na tarde de 22 de outubro de 4004 a.C.'",
    "nivel_delirio": 9.6,
    "rotulo_delirio": "Historiador com Ampulheta de Farinha",
    "falacia_logica": "Apelo ao Mito Literal + Rejeição Sistemática da Física Atômica e Geologia",
    "por_que_e_idiota": "Para a Terra ter 6.000 anos, TODA a física nuclear de decaimento de isótopos, a mecânica quântica, a astrofísica estelar, a dendrocronologia (árvores vivas com mais de 10.000 anos) e os testemunhos de gelo da Antártida (que registram 800.000 anos contínuos) teriam que estar erradas por um fator de um milhão de vezes!",
    "a_ciencia_real": "A idade de 4,54 bilhões de anos (±1%) é medida por datação radiométrica de isótopos estáveis Urânio-Chumbo em cristais de zircão e meteoritos condritos primordiais formados junto com o Sistema Solar.",
    "fontes_cientificas": [
      {
        "autor_ano": "Dalrymple, G. B. (2001)",
        "titulo": "The age of the Earth in the twentieth century",
        "periodico": "Geological Society, London, Special Publications, 190, 205–221",
        "doi_ou_link": "https://doi.org/10.1144/GSL.SP.2001.190.01.14"
      },
      {
        "autor_ano": "Wilde, S. A. et al. (2001)",
        "titulo": "Evidence from detrital zircons for existence of continental crust 4.4 Gyr ago",
        "periodico": "Nature, 409, 175–178",
        "doi_ou_link": "https://doi.org/10.1038/35051550"
      }
    ],
    "quiz": {
      "pergunta": "Quantos anos de camadas anuais ininterruptas de gelo e clima foram perfurados na Antártida pelo projeto EPICA?",
      "opcoes": [
        "Mais de 800.000 anos contínuos de registros anuais.",
        "Exatamente 4.400 anos desde o Dilúvio.",
        "Apenas 100 anos.",
        "Zero, o gelo derrete todo verão."
      ],
      "correta": 0,
      "explicacao_rapida": "Mais de 800.000 anos de camadas de gelo contínuas registradas na Antártida!"
    }
  },
  {
    "id": "geologia-fosseis-poliestratos",
    "titulo": "Fósseis Poliestratos: Troncos de árvores atravessando várias camadas geológicas provam o Dilúvio!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Existem fósseis de troncos de árvores verticais que atravessam múltiplas camadas geológicas de rochas sedimentares. Se cada camada levasse milhões de anos para se formar, o topo da árvore apodreceria antes de ser soterrado! Isso prova um soterramento catastrófico instantâneo no Dilúvio de Noé!",
    "analogia_absurda": "Espetar um palito de dente num sanduíche de três andares e dizer que o pão nasceu com o palito dentro.",
    "citacao_ou_versiculo": "Bordão criacionista dos troncos poliestratos de Joggins (Nova Escócia).",
    "nivel_delirio": 9.0,
    "rotulo_delirio": "Madeireiro de Dilúvio",
    "falacia_logica": "Generalização Apressada + Falso Espantalho do Uniformitarismo Geológico",
    "por_que_e_idiota": "Nenhum geólogo no planeta afirma que TODAS as camadas da Terra levam milhões de anos por milímetro! A sedimentação geológica é mista: compreende processos lentos de fundo de lago E processos rápidos locais episódicos (como inundações fluviais sazonais em deltas, lahares vulcânicos e depósitos de turbidito).",
    "a_ciencia_real": "As árvores de Joggins (Carbonífero) cresceram em planícies de inundação sujeitas a cheias fluviais repetidas que depositavam sedimentos de areia e lama em questão de dias ou semanas ao redor da base dos troncos antes do apodrecimento, com raízes fósseis (*Stigmaria*) enraizadas no solo do estrato inferior!",
    "fontes_cientificas": [
      {
        "autor_ano": "Falcon-Lang, H. J. (1999)",
        "titulo": "The early Pennsylvanian environmental conditions of the Joggins Fossil Cliffs",
        "periodico": "Journal of the Geological Society, 156, 1109–1121",
        "doi_ou_link": "https://doi.org/10.1144/gsjgs.156.6.1109"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CC331: Polystrate fossils",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CC/CC331.html"
      }
    ],
    "quiz": {
      "pergunta": "Como se formam os fósseis verticais conhecidos como poliestratos?",
      "opcoes": [
        "Por eventos de sedimentação rápida local em planícies de inundação ou cinzas vulcânicas.",
        "Por um dilúvio global cobrindo todos os continentes ao mesmo tempo.",
        "Plantas fósseis cresciam de cabeça para baixo sugando pedra.",
        "São postes de telégrafo colocados no século XIX."
      ],
      "correta": 0,
      "explicacao_rapida": "Formam-se por deposição rápida episódica em inundações locais ribeirinhas ou lahares vulcânicos!"
    }
  },
  {
    "id": "geologia-grand-canyon-dias",
    "titulo": "O Grand Canyon foi escavado em poucos dias pelas águas em fuga do Dilúvio de Noé!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "O Grand Canyon não levou milhões de anos para ser esculpido pelo tímido Rio Colorado; ele foi cavado catastroficamente em poucas semanas pela água em fúria do Dilúvio escoando de um lago represado colossal após a arca encalhar!",
    "analogia_absurda": "Esvaziar a água da banheira tirando a rolha e achar que o ralo virou o Grand Canyon.",
    "citacao_ou_versiculo": "Steve Austin (Institute for Creation Research): 'Grand Canyon: Monument to Catastrophe'.",
    "nivel_delirio": 9.3,
    "rotulo_delirio": "Escavador com Pá de Plástico",
    "falacia_logica": "Ignorância de Mecânica de Fluidos, Meandros Fluviais e Incisão Cárstica",
    "por_que_e_idiota": "Se uma enchente violenta de água rápida tivesse corrido ali, ela teria escavado uma vala reta e larga por escoamento turbulento! O Grand Canyon possui MEANDROS TORTUOSOS ENTALHADOS PROFUNDOS que só podem se formar quando um rio lento e maduro corre sobre uma planície suave e, com o lento soerguimento tectônico do Planalto do Colorado (6 cm por milênio), o rio vai incidindo gradualmente milímetro a milímetro nas rochas ao longo de 6 milhões de anos!",
    "a_ciencia_real": "Além disso, o Grand Canyon corta rochas calcárias duríssimas formadas por recifes de corais marinhos (*Redwall Limestone*) e dunas eólicas de deserto fóssil (*Coconino Sandstone* com pegadas secas e marcas de gotas de chuva fóssil que nunca poderiam se formar submersas em água diluviana!).",
    "fontes_cientificas": [
      {
        "autor_ano": "Karlstrom, K. E. et al. (2014)",
        "titulo": "Formation of the Grand Canyon 5 to 6 million years ago through integration of older paleocanyons",
        "periodico": "Nature Geoscience, 7, 239–244",
        "doi_ou_link": "https://doi.org/10.1038/ngeo2065"
      },
      {
        "autor_ano": "Young, D. A. & Stearley, R. F. (2008)",
        "titulo": "The Bible, Rocks and Time: Geological Evidence for the Age of the Earth",
        "periodico": "InterVarsity Press",
        "doi_ou_link": "https://www.ivpress.com/the-bible-rocks-and-time"
      }
    ],
    "quiz": {
      "pergunta": "Qual feição geomorfológica do Grand Canyon prova que ele foi escavado lentamente por incisão e não por uma enchente rápida?",
      "opcoes": [
        "Seus meandros profundamente entalhados e estratos de dunas de deserto eólico secas (Arenito Coconino).",
        "A presença de semáforos no rio.",
        "A ausência total de pedras no fundo.",
        "Porque o rio corre para cima nas terças-feiras."
      ],
      "correta": 0,
      "explicacao_rapida": "Meandros entalhados profundos e camadas de dunas de deserto secas com marcas de chuva!"
    }
  },
  {
    "id": "geologia-decaimento-magnetico",
    "titulo": "O campo magnético da Terra está decaindo rápido demais para o planeta ter bilhões de anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Thomas Barnes calculou em 1973 que o campo magnético da Terra perde metade de sua força a cada 1.400 anos por decaimento ôhmico simples. Projetando para trás, há 20.000 anos o calor da corrente elétrica derreteria o planeta inteiro! Logo, a Terra tem menos de 10.000 anos!",
    "analogia_absurda": "Medir o nível da bateria de um celular descarregando e concluir que o celular foi fabricado há 3 minutos.",
    "citacao_ou_versiculo": "Thomas Barnes (1973): 'Origin and Destiny of the Earth's Magnetic Field'.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Eletricista de Bateria Terrestre",
    "falacia_logica": "Modelo Físico Ultrapassado de Decaimento Livre (Ignorância do Dínamo Geológico Fluido)",
    "por_que_e_idiota": "Barnes cometeu o erro grosseiro de tratar a Terra como uma esfera de ferro sólida inerte descarregando eletricidade sem recarga. O campo magnético da Terra NÃO é uma bateria estática; ele é gerado dinamicamente por convecção térmica e rotação do ferro líquido no núcleo externo (o dínamo geológico auto-sustentado)!",
    "a_ciencia_real": "O campo magnético flutua, enfraquece E SE REVERTE ciclicamente! O fundo oceânico registra centenas de inversões de polaridade magnética (faixas magnéticas de polaridade normal e invertida simétricas na dorsal mesoatlântica, o 'código de barras' paleomagnético da Tectônica de Placas).",
    "fontes_cientificas": [
      {
        "autor_ano": "Glatzmaier, G. A. & Roberts, P. H. (1995)",
        "titulo": "A three-dimensional self-consistent computer simulation of a geomagnetic field reversal",
        "periodico": "Nature, 377, 203–209",
        "doi_ou_link": "https://doi.org/10.1038/377203a0"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD701: Decay of Earth's magnetic field",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD701.html"
      }
    ],
    "quiz": {
      "pergunta": "Como a física real explica a variação do campo magnético da Terra?",
      "opcoes": [
        "Pelo dínamo geológico fluido no núcleo externo, com inversões periódicas de polaridade gravadas no leito oceânico.",
        "Por um ímã de geladeira gigante no Polo Norte.",
        "Pelo atrito das nuvens de chuva com o solo.",
        "O campo magnético foi ligado por cabos em 4004 a.C."
      ],
      "correta": 0,
      "explicacao_rapida": "Pelo efeito de geodínamo com convecção de ferro líquido no núcleo externo e reversões periódicas!"
    }
  },
  {
    "id": "geologia-halos-polonio-gentry",
    "titulo": "Halos de Polônio em granito provam a criação instantânea da Terra em minutos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Robert Gentry encontrou halos de descoloração por partículas alfa de Polônio-218 (meia-vida de apenas 3 minutos) sem halos pais de Urânio em granitos pré-cambrianos. Se o granito levou milhões de anos para resfriar, o polônio teria sumido antes! A Terra foi criada fria e instantânea pelo 'haja luz' divino!",
    "analogia_absurda": "Encontrar uma fumaça de cigarro congelada dentro de um cubo de gelo no congelador.",
    "citacao_ou_versiculo": "Robert Gentry (1986): 'Creation's Tiny Mystery'.",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Físico Nuclear de Púlpito",
    "falacia_logica": "Erro Mineralógico Fatal + Falsificação de Fontes de Radônio",
    "por_que_e_idiota": "O geólogo Wakefield investigou os sítios de coleta de Gentry e descobriu que as amostras NÃO eram granitos primordiais da crosta primitiva, mas veios de pegmatitos metamórficos secundários cortando rochas sedimentares que continham fraturas por onde água rica em gás radônio-222 (pai radioativo do polônio) migrava hidrotermalmente!",
    "a_ciencia_real": "O Radônio-222 gasoso solúvel em água migra pelas microfissuras da biotita e decai localmente em Polônio-218, formando os halos isolados exatamente ao longo das microfraturas, sem necessidade de mágica instantânea.",
    "fontes_cientificas": [
      {
        "autor_ano": "Wakefield, J. R. (1988)",
        "titulo": "The geology of 'Gentry's tiny mystery'",
        "periodico": "Journal of Geological Education, 36(5), 290–298",
        "doi_ou_link": "https://doi.org/10.5408/0022-1368-36.5.290"
      },
      {
        "autor_ano": "Brawley, E. A. (1992)",
        "titulo": "Radioactive Halos: Geological Evidence",
        "periodico": "TalkOrigins Archive",
        "doi_ou_link": "http://www.talkorigins.org/faqs/po-halos/gentry.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual elemento gasoso móvel solúvel em água mineral gera os halos de polônio ao longo de microfissuras?",
      "opcoes": [
        "O gás Radônio-222 (filho do decaimento do urânio).",
        "O gás hélio de balão de aniversário.",
        "O vapor de enxofre do inferno.",
        "O oxigênio puro das cavernas."
      ],
      "correta": 0,
      "explicacao_rapida": "O gás Radônio-222 transportado por fluidos hidrotermais deposita os núcleos de polônio!"
    }
  },
  {
    "id": "geologia-salinidade-oceanos",
    "titulo": "A quantidade de sal nos oceanos prova que a Terra não tem mais de 62 milhões de anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Os rios despejam 450 milhões de toneladas de sódio no mar todos os anos. Dividindo o sal total dos oceanos por essa taxa, a idade máxima absoluta do oceano seria de apenas 62 milhões de anos, refutando os 3,8 bilhões de anos dos mares de Darwin!",
    "analogia_absurda": "Ver uma banheira enchendo de água e esquecer que existe um cano de esgoto aberto embaixo.",
    "citacao_ou_versiculo": "Steve Austin & Russell Humphreys (1990) no congresso criacionista ICC.",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Salineiro de Banheira com Ralo Aberto",
    "falacia_logica": "Cálculo de Fluxo sem Sumidouros (Ignorar o Equilíbrio Químico dos Oceanos)",
    "por_que_e_idiota": "Austin e Humphreys fingiram que o sódio entra no mar e NUNCA MAIS SAI! Isso é desonestidade científica elementar: os oceanos estão em EQUILÍBRIO QUÍMICO DINÂMICO há bilhões de anos, onde a taxa de entrada de sódio é balanceada por taxas equivalentes de saída (sumidouros geoquímicos)!",
    "a_ciencia_real": "O sódio é removido continuamente dos mares por: 1) circulação hidrotermal nas dorsais oceânicas basálticas; 2) formação de depósitos maciços de evaporitos; 3) troca iônica em sedimentos argilosos marinhos; e 4) sprays marinhos que retornam sal para os continentes.",
    "fontes_cientificas": [
      {
        "autor_ano": "Drever, J. I. (1988)",
        "titulo": "The Geochemistry of Natural Waters (2nd Edition)",
        "periodico": "Prentice Hall",
        "doi_ou_link": "https://www.pearson.com/"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD011: Sodium in the ocean",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD011.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que a salinidade dos oceanos não aumenta indefinidamente?",
      "opcoes": [
        "Porque os oceanos estão em equilíbrio dinâmico e o sal é removido por rochas basálticas e evaporitos.",
        "Porque as baleias bebem todo o sal excedente.",
        "Porque o sal evapora junto com a chuva doce.",
        "Porque os peixes comem cloreto de sódio."
      ],
      "correta": 0,
      "explicacao_rapida": "O sódio é removido continuamente por hidrotermalismo em dorsais basálticas e formação de evaporitos!"
    }
  },
  {
    "id": "geologia-poeira-lua-apollo",
    "titulo": "A poeira cósmica na Lua deveria ter 15 metros de altura se ela tivesse bilhões de anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Cientistas calcularam que a poeira cósmica cai na Lua a taxas enormes. A NASA tinha medo de que o módulo Apollo 11 afundasse em 15 metros de pó na superfície lunar! Neil Armstrong pisou e afundou apenas 2 centímetros, provando que a Lua tem poucos milhares de anos!",
    "analogia_absurda": "Entrar num quarto que não é limpo há 20 anos e esperar encontrar poeira até o teto.",
    "citacao_ou_versiculo": "Harold Slusher (1976), repetido por Kent Hovind em milhares de fitas VHS.",
    "nivel_delirio": 9.0,
    "rotulo_delirio": "Aspirador de Pó Intergaláctico",
    "falacia_logica": "Uso de Estimativa Incorreta de 1959 Descartada pela Própria NASA antes do Pouso da Apollo",
    "por_que_e_idiota": "Criacionistas usaram uma estimativa errada do cientista Hans Pettersson de 1959 feita no topo de uma montanha no Havaí antes da era espacial. Análises com satélites reais em órbita nos anos 1960 (satélites Pegasus) mediram a taxa real de influxo de micrometeoritos como sendo centenas de vezes menor!",
    "a_ciencia_real": "A camada de 2 a 5 centímetros de poeira fina sobre o regolito lunar consolidado corresponde com precisão milimétrica ao acúmulo de micrometeoritos esperado para 4,5 bilhões de anos de bombardeio espacial sem atmosfera. Até a organização criacionista *Answers in Genesis* hoje recomenda que criacionistas NÃO usem mais esse argumento ridículo!",
    "fontes_cientificas": [
      {
        "autor_ano": "Dohnanyi, J. S. (1972)",
        "titulo": "Interplanetary objects in review: Statistics of their masses and fluxes",
        "periodico": "Icarus, 17(1), 1–48",
        "doi_ou_link": "https://doi.org/10.1016/0019-1035(72)90044-1"
      },
      {
        "autor_ano": "Snelling, A. A. & Rush, D. E. (1993)",
        "titulo": "Moon Dust and the Age of the Solar System",
        "periodico": "Creation Ex Nihilo Technical Journal, 7(1), 2–42",
        "doi_ou_link": "https://answersingenesis.org/astronomy/moon/moon-dust-and-the-age-of-the-solar-system/"
      }
    ],
    "quiz": {
      "pergunta": "Por que até o site criacionista Answers in Genesis abandonou o mito da poeira lunar?",
      "opcoes": [
        "Porque medições diretas de satélites nos anos 60 provaram que a taxa de poeira é minúscula e compatível com 4,5 bilhões de anos.",
        "Porque a poeira foi varrida por astronautas russos.",
        "Porque a Lua não tem gravidade para segurar poeira.",
        "Porque a Lua é feita de queijo suíço."
      ],
      "correta": 0,
      "explicacao_rapida": "Porque medições com satélites demonstraram que o fluxo real de micrometeoritos é baixíssimo!"
    }
  },
  {
    "id": "geologia-pressao-petroleo",
    "titulo": "A alta pressão nos poços de petróleo subterrâneos deveria ter vazado em 10.000 anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Petróleo e gás natural jorram dos poços subterrâneos a pressões de até 1.000 atmosferas. Se as rochas reservatório tivessem milhões de anos, a pressão teria vazado pelas porosidades da pedra em menos de 10.000 anos!",
    "analogia_absurda": "Tentar guardar refrigerante com gás dentro de um saco de pano furado por 10 anos.",
    "citacao_ou_versiculo": "Bordão clássico de conferências criacionistas de geologia de petróleo.",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Petroleiro Furador de Pneu",
    "falacia_logica": "Ignorância de Geomecânica de Rocha-Selante e Impermeabilidade de Folhelhos e Evaporitos",
    "por_que_e_idiota": "Reservatórios de petróleo sob pressão são capeados por ROCHAS-SELANTE impermeáveis extraordinárias, especialmente folhelhos argilosos densos e camadas maciças de sal (evaporitos, como o Pré-Sal brasileiro), cuja permeabilidade é virtualmente nula (na escala de nanodarcys)!",
    "a_ciencia_real": "Em escala geológica, a pressão é mantida pela carga litostática contínua do peso das camadas de rochas sobrejacentes (pressão de sobrecarga litológica), e geólogos do petróleo usam datação estratigráfica fóssil para furar poços com sucesso industrial lucrativo todos os dias.",
    "fontes_cientificas": [
      {
        "autor_ano": "Deming, D. (1994)",
        "titulo": "Overpressuring in sedimentary basins: alternative mechanisms",
        "periodico": "Geofluids: Origin, Migration and Evolution of Fluids in Sedimentary Basins, 78, 165–186",
        "doi_ou_link": "https://doi.org/10.1144/GSL.SP.1994.078.01.12"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD381: Oil pressure",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD381.html"
      }
    ],
    "quiz": {
      "pergunta": "Quais rochas impermeáveis atuam como selantes garantindo a pressão dos reservatórios de petróleo por milhões de anos?",
      "opcoes": [
        "Folhelhos argilosos densos e camadas espessas de sais evaporíticos (como no Pré-Sal).",
        "Cascalho de jardim permeável.",
        "Espuma de colchão velha.",
        "Paredes de madeira de pinho."
      ],
      "correta": 0,
      "explicacao_rapida": "Folhelhos impermeáveis e camadas de sal evaporítico com permeabilidade próxima de zero!"
    }
  },
  {
    "id": "geologia-estalactites-poroes",
    "titulo": "Estalactites crescem rápido em porões e pontes, logo cavernas não levam milhões de anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Vejam estalactites de 10 centímetros que cresceram debaixo de pontes de concreto em apenas 10 anos! Se elas crescem tão rápido, as cavernas de estalactites gigantes não precisam de milhões de anos, podem ter se formado em séculos após o Dilúvio!",
    "analogia_absurda": "Fazer gelo no congelador em duas horas e achar que geleiras da Groenlândia levam duas horas.",
    "citacao_ou_versiculo": "Artigo da revista Creation: 'Estalactites em semanas!'",
    "nivel_delirio": 8.4,
    "rotulo_delirio": "Espeleólogo de Porão Úmido",
    "falacia_logica": "Equívoco Mineralógico Grave (Confundir Calcita Espelotêmica com Calmitas de Concreto)",
    "por_que_e_idiota": "Estalactites em pontes e porões de concreto NÃO SÃO FEITAS DO MESMO PROCESSO das cavernas naturais de calcário! No concreto, o lixiviamento de hidróxido de cálcio (cal livre solúvel Ca(OH)2) reage instantaneamente com CO2 do ar para formar depósitos rápidos friáveis e quebradiços de calctita chamados *caltemitas*.",
    "a_ciencia_real": "Nas cavernas naturais de calcário, a calcita sólida (CaCO3) precisa ser dissolvida muito lentamente por ácido carbônico fraco da água subterrânea e redepositada à taxa média real de 0,1 milímetro por ano! Espeleotemas gigantes datados por Urânio-Tório têm centenas de milhares de anos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Hill, C. A. & Forti, P. (1997)",
        "titulo": "Cave Minerals of the World (2nd Edition)",
        "periodico": "National Speleological Society",
        "doi_ou_link": "https://caves.org/"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD201: Fast-growing stalactites",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD201.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que 'estalactites' em pontes de concreto crescem tão rápido comparadas a cavernas naturais?",
      "opcoes": [
        "Porque são caltemitas formadas por cal livre hidratada solúvel do cimento, não por dissolução de calcário sólido.",
        "Porque o cimento tem vitaminas do complexo B.",
        "Porque a poluição dos carros acelera a gravidade.",
        "Porque são feitas de plástico derretido."
      ],
      "correta": 0,
      "explicacao_rapida": "São caltemitas de lixiviação química rápida de cimento Portland, com química totalmente diferente!"
    }
  },
  {
    "id": "geologia-avioes-groenlandia-gelo",
    "titulo": "O 'Lost Squadron' enterrado sob 75 metros de gelo na Groenlândia em 50 anos refuta as camadas de gelo!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Seis aviões P-38 Lightning da Segunda Guerra Mundial pousaram forçados no gelo da Groenlândia em 1942 e foram achados em 1992 soterrados por 75 metros de gelo! Isso dá 1,5 metro de gelo por ano! As camadas de gelo dos polos se formaram em poucos séculos, não em centenas de milhares de anos!",
    "analogia_absurda": "Ficar sob uma tempestade de neve de 1 hora e achar que o inverno durou 40 anos.",
    "citacao_ou_versiculo": "Revista Creation (1997): 'The Lost Squadron in deep ice'.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Piloto de Geleira com Para-brisa Congelado",
    "falacia_logica": "Confusão entre Zona Costeira de Altíssima Precipitação e o Centro Seco do Manto de Gelo",
    "por_que_e_idiota": "Os aviões caíram na costa sudeste da Groenlândia, onde tempestades atlânticas despejam taxas anuais colossais de neve úmida costeira (até 2 metros por ano!). Os cilindros de gelo científicos (como GRIP, NGRIP e EPICA) são perfurados no CENTRO DO PLATÔ polar, onde o clima é um deserto polar hiper-árido com precipitação minúscula!",
    "a_ciencia_real": "Além disso, em testemunhos de gelo científicos, cada camada anual é contada diretamente com contagem de anéis de poeira de verão e inverno, bolhas de ar aprisionadas e picos de isótopos de oxigênio (delta O-18) calibrados por erupções vulcânicas históricas conhecidas (como Vesúvio em 79 d.C. e Tambora em 1815).",
    "fontes_cientificas": [
      {
        "autor_ano": "Alley, R. B. (2000)",
        "titulo": "The Two-Mile Time Machine: Ice Cores, Abrupt Climate Change, and Our Future",
        "periodico": "Princeton University Press",
        "doi_ou_link": "https://press.princeton.edu/books/paperback/9780691102962/the-two-mile-time-machine"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD410: The lost squadron",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD410.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que a taxa de neve dos aviões na costa não se aplica aos núcleos de gelo científicos do interior?",
      "opcoes": [
        "A costa tem tempestades de alta precipitação; o interior onde se perfura é um deserto polar com camadas anuais finas.",
        "Porque os aviões pesavam muito e afundaram derretendo o gelo como manteiga.",
        "Porque os aviões foram enterrados por esquimós.",
        "Porque o gelo da Groenlândia foi trazido em caminhões."
      ],
      "correta": 0,
      "explicacao_rapida": "A costa sofre precipitação colossal; os núcleos são retirados de desertos polares interiores milimétricos!"
    }
  },
  {
    "id": "geologia-carbono-14-diamantes",
    "titulo": "Carbono-14 encontrado em diamantes de bilhões de anos prova a Terra jovem!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "O projeto RATE dos criacionistas mandou amostras de diamantes naturais pré-cambrianos para laboratórios e detectou traços de Carbono-14. Como a meia-vida do C-14 é de apenas 5.730 anos, ele deveria ter sumido após 100.000 anos! Se há C-14, os diamantes têm menos de 10.000 anos!",
    "analogia_absurda": "Colocar o dedo na balança de precisão e jurar que uma pena de galinha pesa 80 quilos.",
    "citacao_ou_versiculo": "Projeto RATE (Radioisotopes and the Age of the Earth, 2005).",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Gemólogo de Diamante Sintético",
    "falacia_logica": "Ignorância de Ruído de Fundo de Acelerador de Massas (AMS) e Ativação Neutrônica In Situ",
    "por_que_e_idiota": "Os traços minúsculos de C-14 em diamantes estão no limiar EXATO do ruído de fundo da máquina de espectrometria de massas com acelerador (AMS, cerca de 0,05% a 0,1% de carbono moderno, que ocorre até com alvos de grafite sintético puro sem carbono radioativo!).",
    "a_ciencia_real": "Além disso, rochas subterrâneas vizinhas com traços de Urânio e Tório emitem nêutrons de decaimento alfa que bombardeiam traços de Nitrogênio-14 dentro dos diamantes, gerando átomos novos de Carbono-14 in situ continuamente (*nuclear activation*).",
    "fontes_cientificas": [
      {
        "autor_ano": "Taylor, R. E. & Southon, J. (2007)",
        "titulo": "Use of natural diamonds to monitor 14C AMS instrument backgrounds",
        "periodico": "Nuclear Instruments and Methods in Physics Research B, 259(1), 282–287",
        "doi_ou_link": "https://doi.org/10.1016/j.nimb.2007.01.240"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD011_6: Carbon-14 in coal and diamonds",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD011_6.html"
      }
    ],
    "quiz": {
      "pergunta": "O que causa os traços residuais ínfimos detectados em espectrometria de massas de diamantes?",
      "opcoes": [
        "Ruído instrumental de fundo do acelerador e transmutação por nêutrons de urânio vizinho sobre nitrogênio.",
        "A idade de 6.000 anos de todos os diamantes.",
        "Poluição por fumaça de cigarro no laboratório.",
        "Radiação solar ultrapassando o centro da Terra."
      ],
      "correta": 0,
      "explicacao_rapida": "Ruído de limite de detecção instrumental de AMS e ativação neutrônica de nitrogênio na rocha!"
    }
  },
  {
    "id": "geologia-st-helens-dactilito",
    "titulo": "A erupção do Monte St. Helens em 1980 foi datada por Potássio-Argônio em 3 milhões de anos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Steve Austin colheu dacito recém-formado no domo de lava do Monte St. Helens em 1986 (rocha com apenas 10 anos) e o laboratório Geochron deu idade de 350.000 a 2,8 milhões de anos! Isso prova que a datação radiométrica é uma loteria furada que inventa milhões de anos em pedras novas!",
    "analogia_absurda": "Usar uma balança de pesar caminhão de 50 toneladas para tentar pesar uma formiga viva.",
    "citacao_ou_versiculo": "Steve Austin (1996): 'Excess Argon within Mineral Concentrates from the New Dacite Lava Dome'.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Vulcanologista com Régua de Giz",
    "falacia_logica": "Uso Deliberadamente Incorreto de Técnica com Limite de Detecção de Milhões de Anos (Argônio Excedente)",
    "por_que_e_idiota": "Austin enviou uma rocha jovem com xenólitos herdados para um laboratório que tinha no contrato o aviso expresso: 'Nosso equipamento de Potássio-Argônio tem limite mínimo de detecção de 2 milhões de anos; não enviem rochas históricas recentes!'",
    "a_ciencia_real": "A lava do vulcão continha fenocristais antigos que não perderam o gás argônio primitivo preso (*excess argon*). Medir uma rocha de 10 anos com método de meia-vida de 1,25 bilhão de anos é como tentar medir a espessura de um fio de cabelo usando uma trena de rodovia de 50 metros!",
    "fontes_cientificas": [
      {
        "autor_ano": "Henke, K. R. (2000)",
        "titulo": "Young-Earth Creationist 'Dating' of a Mount St. Helens Dacite: The Failure of Austin and Swenson to Recognize Limitations of Potassium-Argon Dating",
        "periodico": "TalkOrigins Archive",
        "doi_ou_link": "http://www.talkorigins.org/faqs/dating/msh.html"
      },
      {
        "autor_ano": "Dalrymple, G. B. (1969)",
        "titulo": "40Ar/36Ar analyses of historic lava flows",
        "periodico": "Earth and Planetary Science Letters, 6(1), 47–55",
        "doi_ou_link": "https://doi.org/10.1016/0012-821X(69)90158-1"
      }
    ],
    "quiz": {
      "pergunta": "Por que o teste de Potássio-Argônio de Austin no Monte St. Helens foi metodologicamente fraudulento?",
      "opcoes": [
        "Usou um método de meia-vida de 1,25 bilhão de anos fora do limite de detecção em fenocristais com argônio herdado.",
        "Austin trocou as pedras por tijolos de construção.",
        "O vulcão St. Helens nunca entrou em erupção.",
        "O argônio é um gás inflamável que queima na pesagem."
      ],
      "correta": 0,
      "explicacao_rapida": "Usou um método de meia-vida bilionária em rocha com argônio herdado, violando o limite técnico do método!"
    }
  },
  {
    "id": "geologia-decaimento-acelerado-rate",
    "titulo": "O decaimento radioativo foi acelerado 1 milhão de vezes durante o Dilúvio de Noé!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Cientistas criacionistas do projeto RATE admitiram que as rochas realmente registram bilhões de anos de decaimento nuclear, mas concluíram que Deus acelerou a velocidade do decaimento radioativo em um milhão de vezes durante o ano do Dilúvio!",
    "analogia_absurda": "Ligar um forno de pizza a 50 bilhões de graus e achar que a cozinha não vai vaporizar.",
    "citacao_ou_versiculo": "Conclusão oficial do livro do Projeto RATE (2005).",
    "nivel_delirio": 9.7,
    "rotulo_delirio": "Físico Termonuclear que Derreteu o Próprio Planeta",
    "falacia_logica": "Violação das Leis da Termodinâmica (Problema do Calor e Radiação Mortal)",
    "por_que_e_idiota": "Os próprios cientistas do RATE (como Steven Austin e Russell Humphreys) foram forçados a admitir nas páginas 735-738 do seu relatório que, se o decaimento nuclear de 4,5 bilhões de anos tivesse ocorrido em apenas UM ANO de Dilúvio, a quantidade de calor liberado teria AQUECIDO A TERRA A MAIS DE 22.000°C, DERRETENDO A CROSTA TERRESTRE E VAPORIZANDO A ARCA DE NOÉ E TODOS OS OCEANOS EM SEGUNDOS!",
    "a_ciencia_real": "Eles admitiram que precisariam de um 'milagre divino de resfriamento cosmológico desconhecido' para evitar que Noé e os animais fossem cozidos em plasma nuclear instantâneo.",
    "fontes_cientificas": [
      {
        "autor_ano": "Vardiman, L. et al. (2005)",
        "titulo": "Radioisotopes and the Age of the Earth: Results of a Young-Earth Creationist Research Initiative",
        "periodico": "Institute for Creation Research / CRS",
        "doi_ou_link": "https://www.icr.org/rate2/"
      },
      {
        "autor_ano": "Wiens, R. C. (2002)",
        "titulo": "Radiometric Dating: A Christian Perspective",
        "periodico": "American Scientific Affiliation",
        "doi_ou_link": "https://www.asa3.org/ASA/resources/Wiens.html"
      }
    ],
    "quiz": {
      "pergunta": "O que aconteceria fisicamente com a Terra se 4,5 bilhões de anos de decaimento radioativo ocorressem em 1 ano?",
      "opcoes": [
        "A crosta terrestre derreteria a 22.000°C e a Arca e oceanos evaporariam em plasma nuclear.",
        "Apenas faria um calorzinho agradável de praia.",
        "Os dinossauros teriam ficado fluorescentes.",
        "A água do mar viraria refrigerante."
      ],
      "correta": 0,
      "explicacao_rapida": "O calor nuclear colossal liberado vaporizaria a crosta terrestre e a biosfera instantaneamente!"
    }
  },
  {
    "id": "termo-2a-lei-caos",
    "titulo": "A 2ª Lei da Termodinâmica impede a evolução porque tudo tende à desordem e entropia!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "A Segunda Lei da Termodinâmica diz que o universo caminha inexoravelmente da ordem para o caos e aumento da entropia. Como então organismos unicelulares primitivos puderam se organizar em seres complexos sem violar a física fundamental estabelecida pelo Criador?",
    "analogia_absurda": "Deixar um quarto bagunçado esperando que com o tempo ele se arrume sozinho.",
    "citacao_ou_versiculo": "Salmos 102:26 — 'Todos eles como um vestido envelhecerão; como roupa os mudarás, e ficarão mudados.'",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Físico Quântico de Igreja de Garagem",
    "falacia_logica": "Falácia do Espantalho Termodinâmico + Equívoco de Sistema Aberto vs. Isolado",
    "por_que_e_idiota": "A Segunda Lei da Termodinâmica se aplica estritamente a SISTEMAS TERMODINAMICAMENTE ISOLADOS (que não trocam matéria nem energia). A Terra NÃO é isolada: recebe 174 petawatts contínuos de energia limpa do Sol!",
    "a_ciencia_real": "Se a 2ª Lei impedisse o aumento local de ordem em sistemas abertos, um óvulo fecundado nunca viraria um bebê e a água líquida violaria as leis do cosmos ao formar flocos de gelo simétricos no congelador.",
    "fontes_cientificas": [
      {
        "autor_ano": "Styer, D. F. (2008)",
        "titulo": "Entropy and evolution",
        "periodico": "American Journal of Physics, 76(11), 1031–1033",
        "doi_ou_link": "https://doi.org/10.1119/1.2973046"
      },
      {
        "autor_ano": "Prigogine, I. (1978)",
        "titulo": "Time, Structure, and Fluctuations (Nobel Lecture)",
        "periodico": "Science, 201(4358), 777–785",
        "doi_ou_link": "https://doi.org/10.1126/science.201.4358.777"
      }
    ],
    "quiz": {
      "pergunta": "Por que o argumento da 2ª Lei da Termodinâmica é falso na biologia?",
      "opcoes": [
        "A Terra é um sistema aberto que recebe continuamente fluxo de energia solar.",
        "A física não se aplica a animais vertebrados.",
        "A entropia diminui quando chove.",
        "Isaac Newton cancelou essa lei em 1704."
      ],
      "correta": 0,
      "explicacao_rapida": "A Terra é um sistema aberto banhado por 174 petawatts de energia solar contínua!"
    }
  },
  {
    "id": "termo-ajuste-fino-metro",
    "titulo": "Se a Terra estivesse 1 metro mais perto do Sol queimava, 1 metro mais longe congelava!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "Vejam a precisão milimétrica da criação de Deus: se a Terra estivesse apenas um metro ou um centímetro mais próxima do Sol, seríamos incinerados. Se estivesse um metro mais afastada, o planeta congelaria!",
    "analogia_absurda": "O termostato cósmico regulado no milímetro para a humanidade não passar frio nem calor.",
    "citacao_ou_versiculo": "Corrente clássica de WhatsApp com foto de pôr do sol dourado.",
    "nivel_delirio": 9.8,
    "rotulo_delirio": "Astrofísico de Churrasqueira",
    "falacia_logica": "Falácia da Poça d'Água (Douglas Adams) + Erro Aritmético de 5 Milhões de Km",
    "por_que_e_idiota": "A órbita da Terra em torno do Sol NÃO É CIRCULAR, ela é elíptica! Ao longo de cada ano, a distância entre a Terra e o Sol varia em CINCO MILHÕES DE QUILÔMETROS (cerca de 147 milhões de km no periélio em janeiro contra 152 milhões de km no afélio em julho) sem ninguém congelar ou virar churrasco!",
    "a_ciencia_real": "A zona habitável circunstelar do Sol mede dezenas de milhões de quilômetros de largura. Nós nos adaptamos às condições da Terra por evolução cumulativa; não foi a Terra que foi calibrada para nossa vaidade.",
    "fontes_cientificas": [
      {
        "autor_ano": "Kasting, J. F. et al. (1993)",
        "titulo": "Habitable zones around main sequence stars",
        "periodico": "Icarus, 101(1), 108–128",
        "doi_ou_link": "https://doi.org/10.1006/icar.1993.1010"
      },
      {
        "autor_ano": "Adams, D. (1998)",
        "titulo": "The Salmon of Doubt (Puddle Analogy)",
        "periodico": "Harmony Books",
        "doi_ou_link": "https://en.wikipedia.org/wiki/Douglas_Adams#Puddle_analogy"
      }
    ],
    "quiz": {
      "pergunta": "Quanto varia a distância da Terra ao Sol ao longo de um único ano em sua órbita elíptica?",
      "opcoes": [
        "Cerca de 5 milhões de quilômetros entre periélio e afélio.",
        "Apenas 1 centímetro na régua.",
        "Não varia absolutamente nada.",
        "Varia 1 metro conforme a mensagem do WhatsApp."
      ],
      "correta": 0,
      "explicacao_rapida": "A distância varia cerca de 5 milhões de km todo ano sem queimar nem congelar ninguém!"
    }
  },
  {
    "id": "termo-recessao-lua",
    "titulo": "A Lua está se afastando da Terra muito rápido: há 1 bilhão de anos ela tocaria a crosta!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "Medições com laser mostram que a Lua se afasta da Terra a 3,8 centímetros por ano devido à fricção das marés. Projetando no passado, há pouco mais de 1 bilhão de anos a Lua estaria colada na superfície da Terra! Logo, o sistema Terra-Lua tem menos de 10.000 anos!",
    "analogia_absurda": "Achar que se um carro acelera de 0 a 100 em 5 segundos, depois de 1 hora ele está viajando na velocidade da luz.",
    "citacao_ou_versiculo": "Don DeYoung (1989): 'The Earth-Moon System'.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Astrônomo de Ré",
    "falacia_logica": "Extrapolação Linear Indevida de Sistema Não-Linear com Ressonância Oceânica Atual",
    "por_que_e_idiota": "A taxa atual de 3,8 cm/ano é ANOMALAMENTE ALTA porque a configuração atual dos continentes e bacias oceânicas rasas (Atlântico e Pacífico) está em quase ressonância tidal com as ondas de maré oceânicas!",
    "a_ciencia_real": "Com a deriva continental no passado geológico, os oceanos não estavam em ressonância e a taxa média de dissipação de maré era muito menor (~1,5 cm/ano). Rochas sedimentares marinhas com camadas de maré (*tidalites*) preservam o ciclo orbital há 2,5 bilhões de anos em perfeita concordância com a física.",
    "fontes_cientificas": [
      {
        "autor_ano": "Bills, B. G. & Ray, R. D. (1999)",
        "titulo": "Lunar orbital evolution: A synthesis of recent results",
        "periodico": "Geophysical Research Letters, 26(19), 3045–3048",
        "doi_ou_link": "https://doi.org/10.1029/1999GL008348"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CE110: Moon recession rate",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CE/CE110.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que a taxa atual de afastamento da Lua (3,8 cm/ano) não pode ser extrapolada em linha reta para trás?",
      "opcoes": [
        "Porque a configuração dos continentes varia no tempo e a ressonância de maré atual é temporariamente alta.",
        "Porque a Lua era empurrada por foguetes.",
        "Porque a gravidade foi inventada recentemente.",
        "A Lua não se afasta, está caindo."
      ],
      "correta": 0,
      "explicacao_rapida": "A ressonância de maré varia com a tectônica de placas; a média histórica geológica era muito menor!"
    }
  },
  {
    "id": "termo-decaimento-velocidade-luz",
    "titulo": "A velocidade da luz costumava ser milhões de vezes mais rápida no passado (c-decay)!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "Para explicar como vemos galáxias a bilhões de anos-luz num universo de 6.000 anos, Barry Setterfield propôs que a velocidade da luz era quase infinita na semana da Criação e foi decaindo exponencialmente desde então!",
    "analogia_absurda": "Achar que um velocímetro de carro que marcava 100 km/h marcava 1 trilhão de km/h no mês passado.",
    "citacao_ou_versiculo": "Barry Setterfield (1987): 'The Atomic Constants, Light, and Time'.",
    "nivel_delirio": 9.5,
    "rotulo_delirio": "Acelerador de Fótons sem Freio",
    "falacia_logica": "Violação da Equação E=mc² e Falsificação de Medições Históricas",
    "por_que_e_idiota": "Se a velocidade da luz 'c' tivesse variado no passado, a famosa equação de Einstein E = mc² e a constante de estrutura fina (alfa) seriam totalmente alteradas, fazendo com que o Sol liberasse calor suficiente para evaporar o universo e a fusão estelar se tornasse instável!",
    "a_ciencia_real": "Observações do espectro de quasares distantes a mais de 10 bilhões de anos-luz mostram que a constante de estrutura fina e a velocidade da luz permaneceram rigorosamente constantes (variação menor que 1 parte em 10 milhões em 10 bilhões de anos). Além disso, Setterfield manipulou dados de medições com margens de erro dos séculos XVII e XVIII.",
    "fontes_cientificas": [
      {
        "autor_ano": "Avelino, P. P. et al. (2000)",
        "titulo": "Can a variable speed of light solve the cosmological constant problem?",
        "periodico": "Physical Review D, 62(10), 103510",
        "doi_ou_link": "https://doi.org/10.1103/PhysRevD.62.103510"
      },
      {
        "autor_ano": "Morton, G. R. et al. (1983)",
        "titulo": "The Decay of the Speed of Light",
        "periodico": "Creation Research Society Quarterly, 20(3)",
        "doi_ou_link": "http://www.talkorigins.org/faqs/c-decay.html"
      }
    ],
    "quiz": {
      "pergunta": "O que aconteceria com as estrelas e o Sol se a velocidade da luz fosse um milhão de vezes maior no passado (E=mc²)?",
      "opcoes": [
        "O calor liberado pelas reações nucleares teria evaporado o universo e desestabilizado os átomos.",
        "O céu noturno ficaria verde-limão.",
        "As pessoas enxergariam através das paredes.",
        "Nada, a física não depende de equações."
      ],
      "correta": 0,
      "explicacao_rapida": "O aumento colossal de energia em E=mc² teria incinerado o universo e desintegrado átomos!"
    }
  },
  {
    "id": "termo-aneis-saturno-jovens",
    "titulo": "Os anéis de Saturno são instáveis e perdem material: provam que o sistema solar é jovem!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "A sonda Cassini mostrou que os anéis de Saturno estão perdendo água e poeira para o planeta ('chuva de anéis') e que durarão no máximo poucas centenas de milhões de anos. Se eles não duram bilhões de anos, o sistema solar acabou de ser criado!",
    "analogia_absurda": "Ver um arco-íris no céu que dura 20 minutos e concluir que a atmosfera da Terra tem 20 minutos de idade.",
    "citacao_ou_versiculo": "Artigo da Answers in Genesis sobre os dados da Cassini em Saturno.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Astrônomo de Bambolê Espacial",
    "falacia_logica": "Confusão entre a Idade de uma Estrutura Transitória Dinâmica e a Idade do Planeta",
    "por_que_e_idiota": "A idade dos ANÉIS de Saturno não é a idade do PLANETA Saturno! Saturno tem 4,5 bilhões de anos, mas seus anéis atuais são uma estrutura dinâmica temporária e espetacular formada pela fragmentação de uma lua de gelo ou cometa capturado há cerca de 100 a 400 milhões de anos (quando os dinossauros já andavam na Terra)!",
    "a_ciencia_real": "O sistema solar é um ambiente dinâmico com colisões, impactos e ciclos. Usar a duração finita de um anel para datar o Sol é como usar a duração de uma flor de cerejeira para datar a idade da montanha onde ela floresce.",
    "fontes_cientificas": [
      {
        "autor_ano": "Iess, L. et al. (2019)",
        "titulo": "Measurement and implications of Saturn’s gravity field and ring mass",
        "periodico": "Science, 364(6445), eaat2965",
        "doi_ou_link": "https://doi.org/10.1126/science.aat2965"
      },
      {
        "autor_ano": "O’Donoghue, J. et al. (2019)",
        "titulo": "Observations of the ring rain on Saturn",
        "periodico": "Icarus, 322, 251–260",
        "doi_ou_link": "https://doi.org/10.1016/j.icarus.2018.10.027"
      }
    ],
    "quiz": {
      "pergunta": "O que os dados de gravidade da sonda Cassini comprovaram sobre os anéis de Saturno?",
      "opcoes": [
        "Que são estruturas transitórias jovens formadas pelo estraçalhamento de uma lua de gelo há ~100-400 milhões de anos.",
        "Que Saturno foi montado por parafusos de gelo há 6.000 anos.",
        "Que os anéis são feitos de açúcar refinado flutuante.",
        "Que Saturno é oco por dentro."
      ],
      "correta": 0,
      "explicacao_rapida": "São feições dinâmicas jovens (~100-400 Ma) formadas por uma lua esfacelada por maré gravitacional!"
    }
  },
  {
    "id": "termo-cometas-curto-periodo",
    "titulo": "Cometas de curto período se desintegram em 10.000 anos: o Sistema Solar é recém-nascido!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "A cada passagem perto do Sol, cometas perdem milhões de toneladas de gelo e gás em sua cauda brilhante. Nenhum cometa dura mais de 10.000 a 100.000 anos antes de se desintegrar. Se o sistema solar tivesse 4,5 bilhões de anos, todos os cometas já teriam sumido!",
    "analogia_absurda": "Ver gelo derretendo num copo de refrigerante e concluir que o restaurante foi inaugurado há 30 segundos.",
    "citacao_ou_versiculo": "Bordão criacionista dos cometas de Halley e Encke.",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Fabricante de Picolé Espacial",
    "falacia_logica": "Ignorância dos Reservatórios de Cometas: Cinturão de Kuiper e Nuvem de Oort",
    "por_que_e_idiota": "Criacionistas fingem que a população de cometas é estática e fechada! Os cometas de curto período são continuamente REABASTECIDOS a partir de imensos reservatórios de gelo primordial estáveis situados nos confins gélidos do Sistema Solar: o CINTURÃO DE KUIPER (onde orbita Plutão) e a NUVEM DE OORT esférica!",
    "a_ciencia_real": "Perturbações gravitacionais causadas por planetas gigantes gasosos (como Netuno e Júpiter) ou estrelas vizinhas desviam periodicamente núcleos de gelo preservados a -230°C para órbitas internas elípticas na direção do Sol.",
    "fontes_cientificas": [
      {
        "autor_ano": "Jewitt, D. (2002)",
        "titulo": "From Kuiper belt object to cometary nucleus: The missing ultrared matter",
        "periodico": "The Astronomical Journal, 123(2), 1039–1049",
        "doi_ou_link": "https://doi.org/10.1086/338692"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CE261: Comets and the age of the solar system",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CE/CE261.html"
      }
    ],
    "quiz": {
      "pergunta": "De onde vêm os novos cometas que reabastecem o sistema solar interno continuamente?",
      "opcoes": [
        "Do Cinturão de Kuiper e da Nuvem de Oort nos limites frios do Sistema Solar.",
        "São gerados por chaminés vulcânicas da Lua.",
        "Brotam da cauda de asteroides de ferro.",
        "São criados por tempestades elétricas em Júpiter."
      ],
      "correta": 0,
      "explicacao_rapida": "São reabastecidos por perturbações gravitacionais no Cinturão de Kuiper e Nuvem de Oort!"
    }
  },
  {
    "id": "cosmo-galaxias-espirais",
    "titulo": "O enrolamento das galáxias espirais as destruiria em poucas rotações!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "As estrelas internas de uma galáxia espiral giram mais rápido que as externas. Em poucas centenas de milhões de anos, os braços espirais se enrolariam completamente como espaguete em um garfo e sumiriam! Se ainda vemos galáxias espirais com braços abertos, o universo tem menos de 10.000 anos!",
    "analogia_absurda": "Enrolar linha em um carretel e achar que a linha vai ficar solta no ar para sempre.",
    "citacao_ou_versiculo": "Russell Humphreys (1993): 'Evidence for a Young World'.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Cosmólogo de Garfo de Espaguete",
    "falacia_logica": "Ignorância da Teoria das Ondas de Densidade Galáctica",
    "por_que_e_idiota": "Os braços espirais de uma galáxia NÃO SÃO estruturas materiais fixas de estrelas coladas! Eles são ONDAS DE DENSIDADE (análogas a um engarrafamento de trânsito em uma rodovia) através das quais as estrelas entram e saem continuamente!",
    "a_ciencia_real": "A passagem da onda de densidade comprime nuvens de gás molecular e desencadeia a formação de novas estrelas azuis quentes e brilhantes, que iluminam os braços e morrem antes de sair da onda, mantendo o padrão espiral estável por bilhões de anos (Teoria de Lin-Shu comprovada).",
    "fontes_cientificas": [
      {
        "autor_ano": "Lin, C. C. & Shu, F. H. (1964)",
        "titulo": "On the spiral structure of disk galaxies",
        "periodico": "The Astrophysical Journal, 140, 646–655",
        "doi_ou_link": "https://doi.org/10.1086/147955"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CE380: Winding of spiral galaxies",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CE/CE380.html"
      }
    ],
    "quiz": {
      "pergunta": "O que são na realidade os braços de galáxias espirais segundo a astrofísica?",
      "opcoes": [
        "Ondas de densidade estacionárias que comprimem gás e formam estrelas brilhantes continuamente.",
        "Pernas de polvo gigante interestelar.",
        "Cabos de aço invisíveis girando.",
        "Pinturas de fundo do telescópio."
      ],
      "correta": 0,
      "explicacao_rapida": "São ondas de densidade gravitacionais pelas quais as estrelas transitam continuamente!"
    }
  },
  {
    "id": "cosmo-perda-helio-atmosfera",
    "titulo": "A atmosfera da Terra tem pouco hélio para um planeta de 4,5 bilhões de anos!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "O decaimento de urânio e tório na crosta terrestre emite partículas alfa (núcleos de hélio) que sobem para a atmosfera. Se a Terra tivesse bilhões de anos, haveria centenas de vezes mais hélio na atmosfera do que os míseros 0,0005% atuais!",
    "analogia_absurda": "Encher uma bexiga de festa por 4 bilhões de anos e achar que ela não vai estourar.",
    "citacao_ou_versiculo": "Melvin Cook (1957) no periódico Nature (artigo pré-satélites espaciais).",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Enchedor de Balão de Hélio",
    "falacia_logica": "Ignorância dos Mecanismos de Escape Atmosférico Térmico e Não-Térmico (Vento Polar)",
    "por_que_e_idiota": "Criacionistas assumem que a gravidade da Terra consegue segurar o hélio para sempre! O hélio é o segundo elemento mais leve da tabela periódica. Na alta termosfera e exosfera, a velocidade térmica dos átomos de hélio excede a velocidade de escape da Terra (escape de Jeans)!",
    "a_ciencia_real": "Além disso, medições com satélites comprovam que íons de hélio carregados (He+) são acelerados e varridos continuamente para o espaço profundo ao longo das linhas do campo magnético aberto nos polos terrestres (*polar wind*), equilibrando exatamente o influxo crustal em estado estacionário.",
    "fontes_cientificas": [
      {
        "autor_ano": "Axford, W. I. (1968)",
        "titulo": "The polar wind",
        "periodico": "Journal of Geophysical Research, 73(21), 6855–6859",
        "doi_ou_link": "https://doi.org/10.1029/JA073i021p06855"
      },
      {
        "autor_ano": "Lie-Svendsen, Ø. & Rees, M. H. (1996)",
        "titulo": "Helium escape from the Earth's atmosphere: The charge exchange mechanism revisited",
        "periodico": "Planetary and Space Science, 44(3), 233–243",
        "doi_ou_link": "https://doi.org/10.1016/0032-0633(95)00122-0"
      }
    ],
    "quiz": {
      "pergunta": "Por que o hélio não se acumula indefinidamente na atmosfera da Terra?",
      "opcoes": [
        "Porque escapa continuamente para o espaço pela exosfera e pelo vento polar magnético.",
        "Porque é absorvido por raízes de árvores.",
        "Porque se transforma em chumbo sólido ao anoitecer.",
        "Porque pássaros respiram hélio para voar alto."
      ],
      "correta": 0,
      "explicacao_rapida": "O hélio leve escapa continuamente para o vácuo espacial pelo vento iônico polar!"
    }
  },
  {
    "id": "cosmo-sol-jovem-fraco",
    "titulo": "O Paradoxo do Sol Jovem e Fraco prova que a Terra não podia ter oceanos há 3 bilhões de anos!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "Modelos de astrofísica estelar dizem que o Sol jovem brilhava com 30% menos luminosidade há 3,5 bilhões de anos. Se a Terra tivesse essa idade, teria sido um bloco de gelo sólido congelado até o fundo e a vida nunca teria começado!",
    "analogia_absurda": "Tentar esquentar uma piscina olímpica com uma vela de bolo de aniversário.",
    "citacao_ou_versiculo": "Bordão criacionista contra a evolução prebiótica de Carl Sagan.",
    "nivel_delirio": 8.5,
    "rotulo_delirio": "Climatologista com Sol de Fósforo",
    "falacia_logica": "Ignorância do Efeito Estufa Primordial Denso (Gases CO2, Metano e Vapor d'Água)",
    "por_que_e_idiota": "Esse paradoxo foi formulado por Carl Sagan e George Mullen em 1972 e resolvido pela geoquímica! A Terra primitiva NÃO tinha a mesma atmosfera de hoje: ela não tinha oxigênio livre e possuía uma concentração colossal de gases de EFEITO ESTUFA (dióxido de carbono milhares de vezes mais abundante, vapor d'água e metano gerado por arqueias metanogênicas primitivas)!",
    "a_ciencia_real": "Esse cobertor atmosférico denso reteve calor suficiente para manter oceanos líquidos mornos mesmo sob um Sol 30% menos luminoso, como comprovado por rochas sedimentares com ondas de praia (*ripple marks*) e estromatólitos fósseis de 3,5 bilhões de anos em Isua e Pilbara.",
    "fontes_cientificas": [
      {
        "autor_ano": "Sagan, C. & Mullen, G. (1972)",
        "titulo": "Earth and Mars: Evolution of atmospheres and temperatures",
        "periodico": "Science, 177(4043), 52–56",
        "doi_ou_link": "https://doi.org/10.1126/science.177.4043.52"
      },
      {
        "autor_ano": "Kasting, J. F. (2010)",
        "titulo": "Faint young Sun paradox: How the early Earth stayed warm",
        "periodico": "Nature, 464, 687–689",
        "doi_ou_link": "https://doi.org/10.1038/464687a"
      }
    ],
    "quiz": {
      "pergunta": "Como a Terra primitiva manteve oceanos líquidos quentes sob o Sol jovem menos luminoso?",
      "opcoes": [
        "Através de um potente efeito estufa natural com altas concentrações de CO2 e metano.",
        "Usando aquecedores a diesel instalados no fundo do mar.",
        "Porque o Sol na verdade era três vezes maior.",
        "Os oceanos eram feitos de mercúrio líquido."
      ],
      "correta": 0,
      "explicacao_rapida": "Por um vigoroso efeito estufa prebiótico sustentado por altas concentrações de CO2 e CH4!"
    }
  },
  {
    "id": "cosmo-big-bang-nada-explodiu",
    "titulo": "O Big Bang diz que o nada explodiu e virou tudo espontaneamente!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "A cosmologia ateia diz que há 13,8 bilhões de anos o 'nada' de repente explodiu e, do nada absoluto, surgiram estrelas, planetas, florestas, cachorros e seres humanos com cérebro pensante! O nada não pode criar coisa nenhuma!",
    "analogia_absurda": "Uma cartola mágica sem fundo de onde pula um elefante em chamas sem mágico.",
    "citacao_ou_versiculo": "Bordão clássico de pregadores na internet sobre física quântica.",
    "nivel_delirio": 9.3,
    "rotulo_delirio": "Explodidor de Balão Teológico",
    "falacia_logica": "Espantalho Cósmico Grosseiro (Confundir Singularidade Espaço-Temporal com 'Nada')",
    "por_que_e_idiota": "Nenhum físico ou cosmólogo jamais disse que 'o nada explodiu'! Primeiro: o Big Bang NÃO FOI UMA EXPLOSÃO de matéria no espaço vazio; foi a EXPANSÃO METROLÓGICA DO PRÓPRIO ESPAÇO-TEMPO! Segundo: ele parte de um estado inicial de densidade e temperatura extremas (uma singularidade quântica ou vácuo quântico flutuante com energia de ponto zero).",
    "a_ciencia_real": "A teoria da Relatividade Geral de Einstein e a Cosmologia Quântica são sustentadas por evidências empíricas monumentais: a Radiação Cósmica de Fundo em Micro-ondas (CMB, prevista nos anos 1940 e fotografada com precisão pelos satélites COBE, WMAP e Planck), a abundância cósmica primordial de Hélio e Deutério por nucleossíntese, e a Lei de Hubble-Lemaître de expansão das galáxias.",
    "fontes_cientificas": [
      {
        "autor_ano": "Planck Collaboration (2020)",
        "titulo": "Planck 2018 results. VI. Cosmological parameters",
        "periodico": "Astronomy & Astrophysics, 641, A6",
        "doi_ou_link": "https://doi.org/10.1051/0004-6361/201833910"
      },
      {
        "autor_ano": "Hawking, S. & Mlodinow, L. (2010)",
        "titulo": "The Grand Design",
        "periodico": "Bantam Books",
        "doi_ou_link": "https://www.penguinrandomhouse.com/books/77608/the-grand-design-by-stephen-hawking-and-leonard-mlodinow/"
      }
    ],
    "quiz": {
      "pergunta": "Qual evidência física direta comprova a expansão e o calor inicial do Big Bang?",
      "opcoes": [
        "A Radiação Cósmica de Fundo em Micro-ondas (CMB) capturada por satélites no céu inteiro.",
        "Um recibo de compra emitido em 13,8 bilhões a.C.",
        "Crateras gigantes no centro da Via Láctea.",
        "Relógios de quartzo parados."
      ],
      "correta": 0,
      "explicacao_rapida": "A Radiação Cósmica de Fundo em Micro-ondas (CMB) em 2,7 Kelvin permeando todo o cosmos!"
    }
  },
  {
    "id": "cosmo-velocidade-expansao-universo",
    "titulo": "Se o universo está se expandindo, a Terra deveria estar no centro exato!",
    "categoria": "termodinamica",
    "categoria_label": "🌡️ 2ª Lei da Termodinâmica",
    "argumento_criacionista": "Todas as galáxias observadas no céu estão se afastando de nós em todas as direções. Se todas se afastam da Terra, isso prova geometricamente que a Terra é o centro absoluto do universo criado para o homem!",
    "analogia_absurda": "Uma pessoa no meio do shopping achando que todas as lojas foram construídas ao redor do umbigo dela.",
    "citacao_ou_versiculo": "Criacionismo geocêntrico e antropocêntrico moderno.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Geocentrista de Shopping Center",
    "falacia_logica": "Incompreensão de Geometria Homogênea em Espaços em Expansão Métrica",
    "por_que_e_idiota": "Imagine formigas em cima da superfície de uma bexiga de borracha sendo inflada: do ponto de vista de QUALQUER formiga, todas as outras formigas estão se afastando dela! A superfície não tem centro!",
    "a_ciencia_real": "No modelo cosmológico de Friedmann-Lemaître-Robertson-Walker (FLRW), o espaço se expande homogeneamente e isotropicamente em grande escala (Princípio Cosmológico). Qualquer observador em qualquer galáxia do cosmos observará exatamente a mesma coisa: todas as outras galáxias se afastando dele.",
    "fontes_cientificas": [
      {
        "autor_ano": "Hubble, E. (1929)",
        "titulo": "A relation between distance and radial velocity among extra-galactic nebulae",
        "periodico": "PNAS, 15(3), 168–173",
        "doi_ou_link": "https://doi.org/10.1073/pnas.15.3.168"
      },
      {
        "autor_ano": "Harrison, E. R. (2000)",
        "titulo": "Cosmology: The Science of the Universe",
        "periodico": "Cambridge University Press",
        "doi_ou_link": "https://doi.org/10.1017/CBO9780511804533"
      }
    ],
    "quiz": {
      "pergunta": "Por que todas as galáxias parecem se afastar da Terra sem que ela seja o centro?",
      "opcoes": [
        "Porque o próprio tecido do espaço está se expandindo homogeneamente em todos os pontos.",
        "Porque a Terra tem um campo gravitacional repulsivo especial.",
        "Porque as outras galáxias têm medo do nosso Sol.",
        "Apenas as galáxias pequenas se movem."
      ],
      "correta": 0,
      "explicacao_rapida": "Porque a métrica do espaço-tempo se expande homogeneamente em todas as direções!"
    }
  },
  {
    "id": "biblia-everest-coberto-agua",
    "titulo": "O Dilúvio de Noé cobriu o Monte Everest com 8 km de água líquida em 40 dias!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "A Bíblia diz que as águas cobriram todos os montes altos debaixo de todo o céu por 15 côvados (7 metros acima do cume). Isso significa que o Monte Everest (8.848 metros) ficou submerso debaixo de água!",
    "analogia_absurda": "Chuva que adiciona três oceanos inteiros ao planeta e depois evapora para Nárnia.",
    "citacao_ou_versiculo": "Gênesis 7:19 — 'E as águas prevaleceram excessivamente sobre a terra; e todos os altos montes foram cobertos.'",
    "nivel_delirio": 9.9,
    "rotulo_delirio": "Navegador de Cume com Snorkel",
    "falacia_logica": "Absurdo Hidráulico e Geodinâmico Colossal (Volume de 4,5 Bilhões de Km³ de Água Inexistente)",
    "por_que_e_idiota": "Para cobrir o Everest (8,8 km de altitude), seria necessário TRIPLICAR toda a água líquida do planeta Terra (mais de 4,5 bilhões de quilômetros cúbicos de água nova do nada)! De onde veio tanta água? E pior: PARA ONDE FOI depois de 40 dias? Não há espaço na crosta, no manto nem na atmosfera para esconder três oceanos inteiros de água!",
    "a_ciencia_real": "Além disso, a condensação atmosférica de tanta água em 40 dias liberaria calor latente de condensação suficiente para AQUECER A ATMOSFERA A MAIS DE 3.000°C, cozinhando Noé, a arca de madeira e os filhotes de T-Rex em caldo de carne instantâneo.",
    "fontes_cientificas": [
      {
        "autor_ano": "Montgomery, D. R. (2012)",
        "titulo": "The Rocks Don't Lie: A Geologist Investigates Noah's Flood",
        "periodico": "W. W. Norton",
        "doi_ou_link": "https://wwnorton.com/books/The-Rocks-Dont-Lie/"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CH541: Where did the floodwater come from and go?",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CH/CH541.html"
      }
    ],
    "quiz": {
      "pergunta": "O que aconteceria termodinamicamente se a água para cobrir o Everest condensasse em 40 dias na atmosfera?",
      "opcoes": [
        "O calor latente de condensação aqueceria a atmosfera a milhares de graus, vaporizando a Arca.",
        "Faria uma brisa fria com ventania.",
        "A água viraria gelo instantâneo.",
        "As montanhas encolheriam de medo."
      ],
      "correta": 0,
      "explicacao_rapida": "O calor latente de condensação liberado elevaria a temperatura do ar a milhares de graus!"
    }
  },
  {
    "id": "biblia-marsupiais-australia-viagem",
    "titulo": "Os cangurus e coalas desceram da Arca no Monte Ararat (Turquia) e viajaram até a Austrália sem deixar fósseis!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Após o Dilúvio, o casal de cangurus e coalas desembarcou na Turquia e caminhou 14.000 km cruzando desertos, montanhas e oceanos para chegar exclusivamente na Austrália, sem deixar um único fóssil, dente ou descendente pelo caminho na Europa ou Ásia!",
    "analogia_absurda": "Coalas pegando um Uber transcontinental comendo eucalipto australiano durante a travessia do Saara.",
    "citacao_ou_versiculo": "Tentativa de biogeografia pós-diluviana de Ken Ham e Creation Museum.",
    "nivel_delirio": 9.8,
    "rotulo_delirio": "Agente de Turismo Marsupial Transcontinental",
    "falacia_logica": "Absurdo Biogeográfico Total + Falsificação Paleontológica",
    "por_que_e_idiota": "Se todos os marsupiais desembarcaram na Turquia há 4.400 anos, deveríamos encontrar centenas de fósseis de cangurus, coalas, wombats e demônios-da-tasmânia mortos no caminho pelo Oriente Médio, Índia e Sudeste Asiático. NUNCA foi encontrado um único fóssil marsupial australiano fora da Australásia e América do Sul!",
    "a_ciencia_real": "A distribuição real é explicada perfeitamente pela TECTÔNICA DE PLACAS e Deriva Continental: marsupiais basais evoluíram na América do Norte/Sul e migraram para a Austrália através da Antártida quando os três continentes estavam unidos na Gondwana há mais de 50 milhões de anos!",
    "fontes_cientificas": [
      {
        "autor_ano": "Nilsson, M. A. et al. (2010)",
        "titulo": "Tracking marsupial evolution using archaic genomic retroposon insertions",
        "periodico": "PLOS Biology, 8(7), e1000436",
        "doi_ou_link": "https://doi.org/10.1371/journal.pbio.1000436"
      },
      {
        "autor_ano": "Beck, R. M. D. et al. (2008)",
        "titulo": "A formidable predatory marsupial from the late Eocene of Australia",
        "periodico": "Biology Letters, 4(6), 693–697",
        "doi_ou_link": "https://doi.org/10.1098/rsbl.2008.0360"
      }
    ],
    "quiz": {
      "pergunta": "Como os marsupiais realmente chegaram à Austrália antes do isolamento geográfico?",
      "opcoes": [
        "Migraram da América do Sul através da Antártida quando os continentes estavam unidos na Gondwana.",
        "Pularam de ilha em ilha usando jangadas de madeira de Noé.",
        "Nadaram 15.000 km sem respirar.",
        "Foram levados por marinheiros fenícios."
      ],
      "correta": 0,
      "explicacao_rapida": "Migraram pela ponte terrestre da Antártida livre de gelo no supercontinente Gondwana!"
    }
  },
  {
    "id": "biblia-ron-wyatt-arca-ararat",
    "titulo": "Ron Wyatt encontrou a Arca de Noé petrificada em Durupınar com âncoras de pedra!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "O arqueólogo amador Ron Wyatt descobriu uma formação de pedra no formato de casco de barco com 300 côvados de comprimento no sítio de Durupınar na Turquia, completa com rebites de metal e âncoras gigantes com cruzes gravadas!",
    "analogia_absurda": "Achar uma pedra em formato de pastel na praia e jurar que é um salgado frito há 4.000 anos.",
    "citacao_ou_versiculo": "Ron Wyatt (1989): 'Discovered: Noah's Ark'.",
    "nivel_delirio": 9.6,
    "rotulo_delirio": "Arqueólogo de Aventuras com Detector de Metal Quebrado",
    "falacia_logica": "Fraude Geológica Desmascarada (Domo Sinclinal Erosivo Natural)",
    "por_que_e_idiota": "O sítio de Durupınar é uma formação puramente GEOLÓGICA natural bem conhecida: um domo sinclinal dobrado de fluxo de lava andesítica e rochas sedimentares que sofreu erosão diferencial de encosta, adquirindo contorno vagamente elíptico!",
    "a_ciencia_real": "Geólogos e geofísicos legítimos (incluindo cientistas cristãos como Lorence Collins) escavaram o local e provaram com radares GPR e petrografia que não há madeira, não há metal, não há estrutura interna e as 'âncoras de pedra' são lápides armênias medievais cristãs de 1.000 anos gravadas por cruzados.",
    "fontes_cientificas": [
      {
        "autor_ano": "Collins, L. G. & Fasold, D. F. (1996)",
        "titulo": "Bogus 'Noah's Ark' from Turkey exposed as a common geologic structure",
        "periodico": "Journal of Geoscience Education, 44(4), 439–444",
        "doi_ou_link": "https://doi.org/10.5408/1089-9995-44.4.439"
      },
      {
        "autor_ano": "Snelling, A. A. (1992)",
        "titulo": "Amazing 'Ark' Exposé",
        "periodico": "Creation, 14(4), 26–38",
        "doi_ou_link": "https://answersingenesis.org/creationism/arguments-to-avoid/amazing-ark-expose/"
      }
    ],
    "quiz": {
      "pergunta": "O que os estudos geológicos e de radar de penetração no solo (GPR) revelaram sobre o sítio de Durupınar?",
      "opcoes": [
        "É uma formação rochosa natural sinclinal de lava e lama, sem nenhuma madeira fóssil.",
        "Que o barco era feito de titânio submarino.",
        "Que Noé tinha motor a diesel.",
        "Que a Arca ainda está boiando no ar."
      ],
      "correta": 0,
      "explicacao_rapida": "É um domo sinclinal natural esculpido por erosão em rochas vulcânicas e sedimentares!"
    }
  },
  {
    "id": "biblia-costela-adao-menos",
    "titulo": "Homens têm uma costela a menos que as mulheres por causa da cirurgia de Adão!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Deus tirou uma costela de Adão para fazer Eva. Qualquer pessoa pode contar os ossos do tórax: homens têm 23 costelas (ou 11 pares) e as mulheres têm 24 costelas (12 pares completos)!",
    "analogia_absurda": "Achar que se um homem amputar a perna em um acidente, todos os seus filhos nascerão com uma perna só.",
    "citacao_ou_versiculo": "Gênesis 2:22 — 'E da costela que o Senhor Deus tomou do homem, formou uma mulher.'",
    "nivel_delirio": 9.4,
    "rotulo_delirio": "Anatomista Lamarckista de Domingo",
    "falacia_logica": "Erro Factual Anatômico Crasso de Ensino Fundamental + Lamarckismo Mágico",
    "por_que_e_idiota": "HOMENS E MULHERES TÊM EXATAMENTE O MESMO NÚMERO DE COSTELAS: 24 costelas (12 pares)! Qualquer estudante de anatomia do 1º semestre que olhe para uma radiografia médica de tórax vê que ambos os sexos têm anatomia torácica idêntica.",
    "a_ciencia_real": "Além disso, mesmo que Adão tivesse perdido uma costela, alterações cirúrgicas ou traumáticas NÃO alteram o código genético nos espermatozoides (Dogma Central da Biologia Molecular). Dizer que os filhos herdariam a falta da costela é o erro lamarckista mais tolo da história.",
    "fontes_cientificas": [
      {
        "autor_ano": "Moore, K. L., Dalley, A. F., & Agur, A. M. R. (2018)",
        "titulo": "Clinically Oriented Anatomy (8th Edition)",
        "periodico": "Lippincott Williams & Wilkins",
        "doi_ou_link": "https://shop.lww.com/Clinically-Oriented-Anatomy/p/9781496347212"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB341: Men have fewer ribs than women",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB341.html"
      }
    ],
    "quiz": {
      "pergunta": "Quantas costelas homens e mulheres saudáveis possuem na anatomia real?",
      "opcoes": [
        "Exatamente 24 costelas (12 pares) em ambos os sexos.",
        "Homens têm 11 e mulheres têm 40.",
        "Homens têm 23 e mulheres têm 24.",
        "Nenhum ser humano tem costelas."
      ],
      "correta": 0,
      "explicacao_rapida": "Homens e mulheres possuem rigorosamente o mesmo número: 24 costelas (12 pares)!"
    }
  },
  {
    "id": "biblia-cupula-vapor-900-anos",
    "titulo": "A cúpula de vapor d'água no firmamento fazia os patriarcas viverem 900 anos antes do Dilúvio!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Antes do Dilúvio, havia uma gigantesca cúpula esférica de vapor d'água flutuando na estratosfera. Ela filtrava a radiação cósmica, aumentava a pressão hiperbárica e criava um efeito estufa perfeito que fazia Matusalém viver 969 anos!",
    "analogia_absurda": "Colocar o planeta inteiro dentro de uma estufa de tomate com lâmpada de cultivo hidropônico.",
    "citacao_ou_versiculo": "Joseph Dillow (1981): 'The Waters Above: Earth's Pre-Flood Vapor Canopy'.",
    "nivel_delirio": 9.5,
    "rotulo_delirio": "Climatologista de Estufa Hiperbárica",
    "falacia_logica": "Colapso Termodinâmico Imediato (Pressão Esmagadora de Vênus e Calor de 400°C)",
    "por_que_e_idiota": "Físicos atmosféricos modelaram a tal 'cúpula de vapor': para conter água líquida suficiente para causar o Dilúvio global, a pressão atmosférica na superfície da Terra seria de mais de 30 atmosferas (suficiente para esmagar os pulmões de Adão) e o efeito estufa resultante elevaria a temperatura global da Terra para MAIS DE 400°C (condições idênticas à superfície do inferno de Vênus)!",
    "a_ciencia_real": "A longevidade mítica de patriarcas de 900 anos é um tropo literário e mitológico comum do Antigo Oriente Próximo, compartilhado quase textualmente com a Lista de Reis Sumérios (onde reis pré-diluvianos como Alulim viviam 28.000 anos!).",
    "fontes_cientificas": [
      {
        "autor_ano": "Walters, C. L. & Kasting, J. F. (1989)",
        "titulo": "Energy balance and pressure requirements of a pre-Flood vapor canopy",
        "periodico": "Journal of the American Scientific Affiliation",
        "doi_ou_link": "https://www.asa3.org/ASA/PSCF/1989/PSCF9-89Walters.html"
      },
      {
        "autor_ano": "Brown, W. (2001)",
        "titulo": "In the Beginning: Compelling Evidence for Creation and the Flood",
        "periodico": "Center for Scientific Creation",
        "doi_ou_link": "http://www.creationscience.com/"
      }
    ],
    "quiz": {
      "pergunta": "O que aconteceria com a superfície da Terra se houvesse uma cúpula de vapor d'água diluviana no céu?",
      "opcoes": [
        "A pressão esmagadora e o efeito estufa extremo elevariam a temperatura a mais de 400°C, cozinhando tudo.",
        "Todos viveriam 1.000 anos comendo uvas doces.",
        "A gravidade seria anulada e todos flutuariam.",
        "Os pássaros voariam mais rápido."
      ],
      "correta": 0,
      "explicacao_rapida": "O efeito estufa descontrolado transformaria a Terra em um forno estéril a 400°C como Vênus!"
    }
  },
  {
    "id": "biblia-beemote-sauropode",
    "titulo": "O monstro Beemote de Jó 40 tinha cauda como cedro, provando que era um dinossauro Braquiossauro!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Jó 40 descreve o Beemote: 'move a sua cauda como cedro, os seus ossos são como tubos de bronze, come erva como o boi'. Teólogos evolucionistas dizem que era um hipopótamo ou elefante, mas hipopótamos têm rabo minúsculo de porquinho! Beemote era claramente um dinossauro saurópode!",
    "analogia_absurda": "Ver uma cauda grossa de hipopótamo e dizer que o bicho mede 35 metros de altura e pesa 60 toneladas.",
    "citacao_ou_versiculo": "Jó 40:17 — 'Ele move a sua cauda como cedro; os nervos das suas coxas estão entretecidos.'",
    "nivel_delirio": 9.3,
    "rotulo_delirio": "Zoólogo de Zoológico Mitológico",
    "falacia_logica": "Anacronismo Literário Poético + Ignorância da Poesia Hebraica Antiga",
    "por_que_e_idiota": "No hebraico bíblico, a expressão poética 'mover a cauda como cedro' é uma metáfora poética para RIGIDEZ E TENSÃO (virilidade e força muscular nas pernas), não para comprimento de 30 metros! O hipopótamo do Rio Nilo (*Hippopotamus amphibius*) se encaixa perfeitamente na descrição: ele pasta capim nas margens, deita sob os lótus no pântano e tem ossos das patas hiperdensos como tubos maciços.",
    "a_ciencia_real": "Além disso, dinossauros saurópodes gigantes como o Braquiossauro pesavam 40 toneladas e não conseguiam se esconder debaixo de arbustos de lótus de brejo de meio metro de profundidade como descrito nos versículos 21 e 22 de Jó!",
    "fontes_cientificas": [
      {
        "autor_ano": "Bright, M. (2006)",
        "titulo": "Beasts of the Field: The Revealing Natural History of Animals in the Bible",
        "periodico": "Robson Books",
        "doi_ou_link": "https://www.worldcat.org/title/beasts-of-the-field/oclc/65203770"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CH711: Behemoth as a dinosaur",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CH/CH711.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual animal do Oriente Médio antigo se encaixa no habitat de lótus, canaviais fluviais e ossos densos de Jó 40?",
      "opcoes": [
        "O hipopótamo do Nilo (*Hippopotamus amphibius*).",
        "Um dinossauro Braquiossauro de 40 toneladas.",
        "Um mamute lanoso congelado.",
        "Um lagarto teiú brasileiro."
      ],
      "correta": 0,
      "explicacao_rapida": "O hipopótamo do Nilo, famoso no Egito e Levante antigo pela força e habitat em juncos!"
    }
  },
  {
    "id": "biblia-leviata-dinossauro-fogo",
    "titulo": "O Leviatã de Jó 41 cuspia fogo de verdade e era um dinossauro marinho Chronossauro!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Jó 41 diz que do focinho do Leviatã saía fumaça como de panela fervente e da sua boca saíam tochas de fogo acesas. Isso prova que existiam dinossauros cuspidores de fogo contemporâneos do homem que deram origem às lendas de dragões!",
    "analogia_absurda": "Achar que dinossauros marinhos tinham isqueiro Maçarico instalado nas amígdalas.",
    "citacao_ou_versiculo": "Jó 41:19 — 'Da sua boca saem tochas; faíscas de fogo saltam dela.'",
    "nivel_delirio": 9.6,
    "rotulo_delirio": "Lança-Chamas Paleontológico",
    "falacia_logica": "Literalismo Poético Ingênuo em Literatura Mitopoética do Oriente Próximo",
    "por_que_e_idiota": "O Leviatã (Litanu / Lotan na mitologia ugarítica cananeia de Ras Shamra) é um monstro do caos cósmico primordial que o Deus criador derrota para estabelecer a ordem do universo, compartilhado por toda a mitologia mesopotâmica (como Marduk derrotando Tiamat no Enuma Elish)!",
    "a_ciencia_real": "Tratar poesia hiperbólica que descreve 'olhos como pestanas da aurora e tochas saindo da boca' como anatomia biológica literal é analfabetismo literário e exegético fundamentalista. Nenhum vertebrado na história da Terra jamais expeliu chamas de combustão interna como um dragão de fantasia.",
    "fontes_cientificas": [
      {
        "autor_ano": "Day, J. (1985)",
        "titulo": "God's Conflict with the Dragon and the Sea: Echoes of a Canaanite Myth in the Old Testament",
        "periodico": "Cambridge University Press",
        "doi_ou_link": "https://doi.org/10.1017/CBO9780511554988"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CH711_1: Leviathan as a dinosaur",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CH/CH711_1.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual é a origem real da figura do Leviatã no contexto histórico do Antigo Oriente Próximo?",
      "opcoes": [
        "Um tropo mitopoético compartilhado com os monstros marinhos do caos cananeus e babilônicos (Lotan/Tiamat).",
        "Um dinossauro com motor a combustão flex.",
        "Um submarino soviético nuclear antigo.",
        "Uma enguia elétrica de aquário."
      ],
      "correta": 0,
      "explicacao_rapida": "É um monstro mitopoético cósmico cananeu (Lotan) que simboliza as forças caóticas do mar primordial!"
    }
  },
  {
    "id": "genetica-entropia-sanford",
    "titulo": "A 'Entropia Genética' de John Sanford prova que a humanidade está degenerando em mutações!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "O geneticista John Sanford afirma que cada geração humana acumula 100 mutações ligeiramente deletérias invisíveis à seleção natural. Nosso genoma está se desgastando como um carro velho enferrujando! Em poucos milhares de anos estaremos extintos por colapso mutacional!",
    "analogia_absurda": "Tirar xerox da xerox da xerox até a página virar um borrão preto ilegível.",
    "citacao_ou_versiculo": "John Sanford (2005): 'Genetic Entropy & The Mystery of the Genome'.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Mecânico de Genoma Enferrujado",
    "falacia_logica": "Falsa Premissa de que Mutações Quase-Neutras são Sempre Cumulativamente Deletérias",
    "por_que_e_idiota": "O modelo de Sanford ignora deliberadamente a SELEÇÃO SINÉRGICA TRUNCADA e o efeito da recombinação sexual meiótica, que expurga agregados de mutações deletérias com alta eficiência em populações reais!",
    "a_ciencia_real": "Se a 'entropia genética' fosse uma lei biológica universal, bactérias com bilhões de anos de existência e linhagens animais clonais (como bdelóideos) já teriam se extinguido há milhões de anos. A vida na Terra floresce e se adapta há 3,8 bilhões de anos sem nenhum sinal de colapso mutacional global.",
    "fontes_cientificas": [
      {
        "autor_ano": "Kondrashov, A. S. (1988)",
        "titulo": "Deleterious mutations and the evolution of sexual reproduction",
        "periodico": "Nature, 336(6198), 435–440",
        "doi_ou_link": "https://doi.org/10.1038/336435a0"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB101: Genetic entropy and information loss",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB101.html"
      }
    ],
    "quiz": {
      "pergunta": "Como a reprodução sexuada e a seleção natural impedem o acúmulo infinito de mutações deletérias?",
      "opcoes": [
        "Pela recombinação meiótica que embaralha genes e seleção truncada eliminando combinações desfavoráveis.",
        "Tomando comprimidos de ácido fólico toda manhã.",
        "As mutações deletérias viram ouro no fígado.",
        "O DNA não sofre mutações."
      ],
      "correta": 0,
      "explicacao_rapida": "A recombinação meiótica sexuada e seleção sinérgica eliminam agregados de mutações desfavoráveis!"
    }
  },
  {
    "id": "genetica-duplicacao-genica",
    "titulo": "Duplicação de genes só copia o que já existe: copiar um livro duas vezes não cria informação nova!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Evolucionistas dizem que novos genes surgem por duplicação gênica, mas fazer uma cópia de um parágrafo não adiciona conteúdo! É só redundância inútil que não cria novos órgãos!",
    "analogia_absurda": "Tirar duas cópias xerox de uma nota de 10 reais e achar que ficou 20 reais mais rico.",
    "citacao_ou_versiculo": "Bordão criacionista contra a neofuncionalização de genes.",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Xerocador de Código Genético",
    "falacia_logica": "Ignorância de Divergência Mutacional Subsequente (Neofuncionalização e Subfuncionalização)",
    "por_que_e_idiota": "Copiar um gene libera UMA DAS CÓPIAS DA PRESSÃO SELETIVA PURIFICADORA! Enquanto a primeira cópia continua executando a função vital original sem interrupção, a cópia duplicada excedente pode sofrer mutações livres sem matar o organismo, adquirindo FUNÇÕES ENZIMÁTICAS INTEIRAMENTE NOVAS (*neofuncionalização*)!",
    "a_ciencia_real": "A família das GLOBINAS humanas (hemoglobina e mioglobina), os genes da visão de cores tricromática de primatas (opsinas) e as enzimas digestivas que viraram veneno em serpentes evoluíram exatamente por duplicação gênica seguida de mutação divergente comprovada geneticamente.",
    "fontes_cientificas": [
      {
        "autor_ano": "Ohno, S. (1970)",
        "titulo": "Evolution by Gene Duplication",
        "periodico": "Springer-Verlag",
        "doi_ou_link": "https://doi.org/10.1007/978-3-642-86659-3"
      },
      {
        "autor_ano": "Zhang, J. (2003)",
        "titulo": "Evolution by gene duplication: an update",
        "periodico": "Trends in Ecology & Evolution, 18(6), 292–298",
        "doi_ou_link": "https://doi.org/10.1016/S0169-5347(03)00033-8"
      }
    ],
    "quiz": {
      "pergunta": "O que acontece com a cópia extra quando um gene sofre duplicação gênica no genoma?",
      "opcoes": [
        "Fica livre da pressão seletiva para acumular mutações e adquirir novas funções (neofuncionalização).",
        "Explode a célula por excesso de peso molecular.",
        "Transforma o animal em planta.",
        "A cópia extra é apagada pela polícia celular."
      ],
      "correta": 0,
      "explicacao_rapida": "Fica liberada da restrição seletiva podendo mutar e desenvolver funções biológicas inéditas!"
    }
  },
  {
    "id": "genetica-encode-dna-lixo",
    "titulo": "O projeto ENCODE provou que 80% do DNA é funcional e destruiu o 'DNA Lixo' de Darwin!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Evolucionistas diziam que 98% do genoma humano era lixo inútil resultante de milhões de anos de erros aleatórios. Mas em 2012 o consórcio ENCODE provou que mais de 80% do DNA humano é ativo e funcional! O DNA lixo acabou e o Criador foi confirmado!",
    "analogia_absurda": "Achar que o sótão cheio de tralha velha é na verdade uma sala cirúrgica esterilizada.",
    "citacao_ou_versiculo": "Jonathan Wells (Discovery Institute): 'The Myth of Junk DNA'.",
    "nivel_delirio": 9.0,
    "rotulo_delirio": "Faxineiro de Genoma com Vassoura de Pano",
    "falacia_logica": "Confusão Grosseira entre 'Atividade Bioquímica Transcricional Básica' e 'Função Biológica Selecionada'",
    "por_que_e_idiota": "O consórcio ENCODE redefiniu a palavra 'funcional' de forma absurdamente frouxa e hiper-inclusiva: se qualquer pedaço de DNA for minimamente transcrito em RNA espúrio ou ligado fracamente por uma proteína, eles carimbaram como 'funcional'!",
    "a_ciencia_real": "Biólogos evolucionistas (como Dan Graur em artigo demolidor de 2013) demonstraram que mera transcrição espúria de ruído bioquímico não é função adaptativa selecionada! A cebola comum tem genoma CINCO VEZES MAIOR que o humano, e peixes pulmonados têm genomas 40 vezes maiores (paradoxo do valor C): se 80% fosse essencial, uma cebola precisaria de 5 vezes mais sabedoria divina que um ser humano!",
    "fontes_cientificas": [
      {
        "autor_ano": "Graur, D. et al. (2013)",
        "titulo": "On the immortality of television sets: “function” in the human genome according to the evolution-free gospel of ENCODE",
        "periodico": "Genome Biology and Evolution, 5(3), 578–590",
        "doi_ou_link": "https://doi.org/10.1093/gbe/evt028"
      },
      {
        "autor_ano": "Doolittle, W. F. (2013)",
        "titulo": "Is junk DNA bunk? A critique of ENCODE",
        "periodico": "PNAS, 110(14), 5294–5300",
        "doi_ou_link": "https://doi.org/10.1073/pnas.1221376110"
      }
    ],
    "quiz": {
      "pergunta": "Por que o tamanho do genoma da cebola (5x maior que o humano) refuta a alegação do ENCODE?",
      "opcoes": [
        "Se quase todo DNA fosse vital, uma cebola seria 5x mais biologicamente complexa que um ser humano (paradoxo do valor C).",
        "Porque a cebola faz os cientistas chorarem de rir.",
        "Cebolas não têm cromossomos.",
        "O DNA da cebola é feito de sacarose."
      ],
      "correta": 0,
      "explicacao_rapida": "O paradoxo do valor C prova que a imensa maioria de genomas gigantes é de DNA repetitivo não funcional!"
    }
  },
  {
    "id": "genetica-resistencia-antibioticos-perda",
    "titulo": "A resistência a antibióticos em bactérias é perda de função e degeneração, não evolução!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Bactérias resistentes a antibióticos só sobrevivem porque perderam uma proteína de transporte ou quebraram um canal de membrana por onde o remédio entrava! É uma deficiência que as deixa mais fracas fora do hospital! Quebrar peças não cria espécies novas!",
    "analogia_absurda": "Arrancar a fechadura da porta para o ladrão não conseguir arrombar a casa.",
    "citacao_ou_versiculo": "Lee Spetner (1997): 'Not by Chance: Shattering the Modern Theory of Evolution'.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Farmacêutico com Porta Arrombada",
    "falacia_logica": "Supressão de Mutações de Ganho de Função e Mecanismos Enzimáticos Ativos de Degradação",
    "por_que_e_idiota": "Muitos mecanismos de resistência NÃO SÃO perda de função! São ENZIMAS ATIVAS DE GANHO DE FUNÇÃO que destroem ou modificam o antibiótico quimicamente, como as BETA-LACTAMASES (que quebram a molécula da penicilina) e bombas de efluxo ativas dirigidas por ATP!",
    "a_ciencia_real": "Em experimentos de laboratório com mutações dirigidas (como no LTEE de Richard Lenski), bactérias desenvolvem novas vias enzimáticas, novos sítios de ligação e afinidades catalíticas inéditas sob seleção natural positiva.",
    "fontes_cientificas": [
      {
        "autor_ano": "Hall, B. G. (2004)",
        "titulo": "Predicting the evolution of antibiotic resistance genes",
        "periodico": "Molecular Biology and Evolution, 21(9), 1678–1685",
        "doi_ou_link": "https://doi.org/10.1093/molbev/msh179"
      },
      {
        "autor_ano": "Davies, J. & Davies, D. (2010)",
        "titulo": "Origins and evolution of antibiotic resistance",
        "periodico": "Microbiology and Molecular Biology Reviews, 74(3), 417–433",
        "doi_ou_link": "https://doi.org/10.1128/MMBR.00016-10"
      }
    ],
    "quiz": {
      "pergunta": "Qual mecanismo bacteriano de resistência a antibióticos é um exemplo clássico de ganho ativo de função enzimática?",
      "opcoes": [
        "A síntese da enzima Beta-Lactamase, que cliva e inativa ativamente o anel da penicilina.",
        "A paralisia do flagelo para não nadar até o remédio.",
        "A transformação da bactéria em vírus de gripe.",
        "O fechamento dos olhos da bactéria."
      ],
      "correta": 0,
      "explicacao_rapida": "A produção da enzima Beta-Lactamase cliva ativamente a penicilina com alta eficiência catalítica!"
    }
  },
  {
    "id": "dino-tecido-mole-schweitzer",
    "titulo": "Tecido mole e glóbulos vermelhos achados em osso de T-Rex provam que dinossauros morreram há poucos anos!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "A paleontóloga Mary Schweitzer dissolveu o osso de um fóssil de T-Rex de 68 milhões de anos e encontrou vasos sanguíneos flexíveis, colágeno elástico e glóbulos vermelhos intactos! Proteínas não duram mais de 10.000 anos, logo o T-Rex morreu no Dilúvio de Noé!",
    "analogia_absurda": "Esquecer um bife de alcatra no chão da garagem e achar que ele continua macio após 68 milhões de anos.",
    "citacao_ou_versiculo": "Artigo viralizado em todos os sites criacionistas de Terra Jovem desde 2005.",
    "nivel_delirio": 9.4,
    "rotulo_delirio": "Churrasqueiro de Tiranossauro Rex",
    "falacia_logica": "Falsificação do Conteúdo da Descoberta + Desconhecimento do Papel Fixador do Ferro Hemoglobínico",
    "por_que_e_idiota": "Primeiro: NÃO ERAM CÉLULAS VIVAS NEM SANGUE FRESCO! Eram restos moleculares de peptídeos de colágeno mineralizados e fixados quimicamente. A própria Mary Schweitzer (que é cristã praticante) ficou horrorizada com a distorção criacionista dos seus artigos e declarou publicamente que seu trabalho NÃO apoia a Terra Jovem!",
    "a_ciencia_real": "Schweitzer publicou em 2013 o mecanismo químico real de preservação: íons de FERRO livre derivados da quebra da hemoglobina agem como potentes agentes fixadores e antioxidantes (semelhante ao formol que embalsama tecidos biológicos), criando ligações cruzadas (*cross-linking*) que estabilizam proteínas contra bactérias e decomposição por dezenas de milhões de anos em ambiente anóxico.",
    "fontes_cientificas": [
      {
        "autor_ano": "Schweitzer, M. H. et al. (2005)",
        "titulo": "Soft-tissue vessels and cellular preservation in Tyrannosaurus rex",
        "periodico": "Science, 307(5717), 1952–1955",
        "doi_ou_link": "https://doi.org/10.1126/science.1108397"
      },
      {
        "autor_ano": "Schweitzer, M. H. et al. (2014)",
        "titulo": "A role for iron and oxygen chemistry in preserving soft tissues, cells and molecules from deep time",
        "periodico": "Proc. R. Soc. B, 281(1775), 20132741",
        "doi_ou_link": "https://doi.org/10.1098/rspb.2013.2741"
      }
    ],
    "quiz": {
      "pergunta": "Qual elemento químico presente na hemoglobina atua como fixador estabilizando microestruturas de colágeno em fósseis?",
      "opcoes": [
        "Íons de ferro concentrado que induzem ligações cruzadas antioxidantes em ambiente anóxico.",
        "Formol industrial colocado por escavadores.",
        "Mercúrio radioativo do espaço.",
        "Sal de cozinha iodado."
      ],
      "correta": 0,
      "explicacao_rapida": "O ferro biológico concentrado atua como agente fixador cruzado protegendo cadeias de colágeno!"
    }
  },
  {
    "id": "dino-pegadas-paluxy-humanos",
    "titulo": "Pegadas humanas e de dinossauros foram encontradas juntas na mesma rocha no Rio Paluxy (Texas)!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "No leito de pedra calcária do Rio Paluxy, no Texas, pegadas gigantes de pés humanos descalços cruzam pegadas de dinossauros terópodes na mesma camada! Isso prova que homens e dinossauros caminhavam juntos antes de serem afogados pelo Dilúvio!",
    "analogia_absurda": "Passear com um T-Rex na coleira descalço pela calçada de paralelepípedo.",
    "citacao_ou_versiculo": "Carl Baugh (Creation Evidence Museum, Glen Rose, Texas).",
    "nivel_delirio": 9.7,
    "rotulo_delirio": "Pegador de Rastro em Pedra Falsa",
    "falacia_logica": "Fraude Esculpida por Turistas na Grande Depressão + Erosão de Pegadas de Dinossauros",
    "por_que_e_idiota": "As supostas 'pegadas humanas' de Paluxy foram rigorosamente examinadas por geólogos, paleontólogos e até por pesquisadores criacionistas sérios (como o Institute for Creation Research). O veredito foi unânime: eram PEGADAS DE DINOSSAUROS com as marcas dos dedos erodidas ou preenchidas por lama, ou FALSIFICAÇÕES ENTALHADAS A FORMÃO por moradores locais na década de 1930 para vender a turistas empobrecidos durante a Grande Depressão!",
    "a_ciencia_real": "Em 1986, quando o paleontólogo Glen Kuban limpou os trilhos com reagentes químicos, as marcas de três dedos com garras de dinossauros carnívoros ficaram visíveis dentro das supostas 'pegadas humanas'. Até o ICR e Answers in Genesis retiraram oficialmente o argumento de suas publicações.",
    "fontes_cientificas": [
      {
        "autor_ano": "Kuban, G. J. (1989)",
        "titulo": "Retracking Those Incredible-Man Tracks",
        "periodico": "Creation/Evolution, 9(2), 13–76",
        "doi_ou_link": "http://www.talkorigins.org/faqs/paluxy.html"
      },
      {
        "autor_ano": "Morris, J. D. (1986)",
        "titulo": "The Paluxy Mystery Unravels",
        "periodico": "Acts & Facts, 15(6)",
        "doi_ou_link": "https://www.icr.org/article/paluxy-mystery-unravels/"
      }
    ],
    "quiz": {
      "pergunta": "O que os estudos detalhados de Glen Kuban revelaram sobre as 'pegadas humanas' do Rio Paluxy?",
      "opcoes": [
        "Eram pegadas de dinossauros com marcas de garras descoloridas por erosão ou entalhes falsificados.",
        "Eram pegadas reais de Noé usando sandálias de couro.",
        "Eram marcas de pneus de caminhão da Ford de 1920.",
        "Eram fósseis de patas de urso polar."
      ],
      "correta": 0,
      "explicacao_rapida": "Tratam-se de trilhas de dinossauros terópodes modificadas por erosão e falsificações humanas da década de 1930!"
    }
  },
  {
    "id": "dino-celacanto-fossil-vivo",
    "titulo": "O celacanto era o 'elo perdido' extinto há 65 milhões de anos e foi achado vivo sem mudar nada!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "Os cientistas diziam que o peixe celacanto usava suas nadadeiras carnosas para andar na terra e era o ancestral dos tetrápodes extinto no Cretáceo. Em 1938, pescaram um celacanto vivo na África do Sul nadando no fundo do mar! A evolução é uma mentira e os fósseis não mudam!",
    "analogia_absurda": "Achar que se você reencontrar seu tio de 80 anos na padaria, todos os seus primos deixam de existir.",
    "citacao_ou_versiculo": "Bordão criacionista dos 'fósseis vivos' de Harun Yahya.",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Pescador de Alto-Mar de Fósseis",
    "falacia_logica": "Confusão entre a Ordem Inteira Actinistia e a Espécie Moderna Latimeria chalumnae",
    "por_que_e_idiota": "O celacanto vivo capturado (*Latimeria chalumnae*) NÃO É A MESMA ESPÉCIE fóssil do Cretáceo! Ele pertence à mesma ordem geral de peixes sarcopterígeos (*Actinistia*), mas a espécie moderna possui genoma próprio, anatomia interna única e vive em fossas abissais a 300 metros de profundidade, enquanto os celacantos fósseis do Devoniano e Cretáceo viviam em águas rasas marinhas e de água doce com dezenas de gêneros morfologicamente distintos!",
    "a_ciencia_real": "Além disso, a evolução NÃO OBRIGA uma espécie a mudar se seu nicho ecológico marinho profundo permanecer estável e suas adaptações continuarem eficientes (estase morfológica estabilizadora).",
    "fontes_cientificas": [
      {
        "autor_ano": "Amemiya, C. T. et al. (2013)",
        "titulo": "The African coelacanth genome provides insights into tetrapod evolution",
        "periodico": "Nature, 496(7445), 311–316",
        "doi_ou_link": "https://doi.org/10.1038/nature12027"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB930: Living fossils (coelacanth)",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB930.html"
      }
    ],
    "quiz": {
      "pergunta": "O que o sequenciamento do genoma do celacanto moderno na Nature (2013) comprovou?",
      "opcoes": [
        "Que seu genoma evoluiu em ritmo lento adaptado a águas profundas, mas é uma espécie distinta (*Latimeria*).",
        "Que o celacanto tem patas de cachorro escondidas.",
        "Que o peixe foi clonado em aquário.",
        "Que peixes não têm DNA."
      ],
      "correta": 0,
      "explicacao_rapida": "Comprovou estase morfológica estabilizadora em nicho profundo, sendo espécie distinta de fósseis ancestrais!"
    }
  },
  {
    "id": "dino-explosao-cambriana-subita",
    "titulo": "A Explosão Cambriana: todos os animais surgiram prontos e acabados do nada sem ancestrais!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "Há 540 milhões de anos, na Explosão Cambriana, todos os grandes filos animais (com conchas, olhos e pernas) surgiram de repente no registro fóssil sem nenhum ancestral prévio no Pré-Cambriano! Isso é a Criação instantânea de Gênesis gravada na pedra!",
    "analogia_absurda": "Abrir uma porta vazia e de repente encontrar uma feira livre com barracas de peixe funcionando a todo vapor.",
    "citacao_ou_versiculo": "Stephen C. Meyer: 'Darwin's Doubt: The Explosive Origin of Animal Life'.",
    "nivel_delirio": 9.1,
    "rotulo_delirio": "Paleontólogo de Pavio Curto",
    "falacia_logica": "Omissão da Biota de Ediacara e Ignorância dos 40 Milhões de Anos de Duração da Transição",
    "por_que_e_idiota": "Primeiro: a 'Explosão' Cambriana NÃO durou 5 minutos; ela durou mais de 30 A 40 MILHÕES DE ANOS (um intervalo de tempo geológico gigantesco, mais da metade de todo o tempo desde a extinção dos dinossauros até hoje!).",
    "a_ciencia_real": "Segundo: o Pré-Cambriano NÃO ESTAVA VAZIO! Ele é repleto de animais multicelulares prévios documentados pela BIOTA DE EDIACARA (há 575 milhões de anos, como *Dickinsonia*, *Kimberella* e *Spriggina*), além de embriões fósseis de Doushantuo e fósseis de pequenas conchas basais (*Small Shelly Fauna*). O que explodiu no Cambriano foi a capacidade de biomineralizar conchas duras de calcita e fosfato, que fossilizam com muito mais facilidade que corpos moles prévios.",
    "fontes_cientificas": [
      {
        "autor_ano": "Erwin, D. H. & Valentine, J. W. (2013)",
        "titulo": "The Cambrian Explosion: The Construction of Animal Biodiversity",
        "periodico": "Roberts & Company",
        "doi_ou_link": "https://www.worldcat.org/title/cambrian-explosion/oclc/818854079"
      },
      {
        "autor_ano": "Bobrovskiy, I. et al. (2018)",
        "titulo": "Ancient steroids establish the Ediacaran fossil Dickinsonia as one of the earliest animals",
        "periodico": "Science, 361(6408), 1246–1249",
        "doi_ou_link": "https://doi.org/10.1126/science.aat7228"
      }
    ],
    "quiz": {
      "pergunta": "O que os fósseis da Biota de Ediacara e de Doushantuo provam sobre o Pré-Cambriano?",
      "opcoes": [
        "Que a vida animal multicelular já evoluía e se diversificava dezenas de milhões de anos antes do Cambriano.",
        "Que o Cambriano ocorreu na quarta-feira passada.",
        "Que não existia água na Terra antes do Cambriano.",
        "Que os fósseis foram desenhados por turistas romanos."
      ],
      "correta": 0,
      "explicacao_rapida": "Provam que a vida animal multicelular com simetria bilateral já evoluía dezenas de milhões de anos antes!"
    }
  },
  {
    "id": "dino-archaeopteryx-fraude-ave",
    "titulo": "O fóssil Archaeopteryx era apenas uma ave moderna comum ou uma fraude colada com cola!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "O suposto fóssil de transição Archaeopteryx era apenas um pássaro qualquer com penas. Criacionistas como Fred Hoyle disseram que as penas foram esculpidas com cimento em calcário por falsificadores alemães para agradar Darwin!",
    "analogia_absurda": "Colar penas de pato numa lagartixa de jardim com cola escolar e chamar de elo perdido.",
    "citacao_ou_versiculo": "Fred Hoyle e Chandra Wickramasinghe (1986): 'Archaeopteryx, the Primordial Bird: A Fake of the British Museum'.",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Pintor de Fóssil com Cola Branca",
    "falacia_logica": "Calúnia Factual + Negação de Dezenas de Espécimes e Dinossauros Emplumados Chineses",
    "por_que_e_idiota": "A acusação de fraude de Hoyle foi categoricamente desmentida por microscopia eletrônica de varredura no Museu Britânico em 1986, comprovando linhas de fratura geológica naturais contínuas que atravessam os ossos e as impressões de penas no calcário de Solnhofen. Hoje existem 12 espécimes fósseis independentes de Archaeopteryx catalogados em diferentes museus do mundo!",
    "a_ciencia_real": "O Archaeopteryx tem dentes reais na mandíbula, cauda óssea longa com 20 vértebras livres, garras nas mãos e costelas sem processos uncinados — anatomia 100% de DINOSSAURO TERÓPODE com asas e penas de voo assimétricas! E nos últimos 25 anos, a província de Liaoning na China revelou centenas de dinossauros terópodes terrestres fósseis emplumados (*Microraptor*, *Sinosauropteryx*, *Anchiornis*).",
    "fontes_cientificas": [
      {
        "autor_ano": "Charig, A. J. et al. (1986)",
        "titulo": "Archaeopteryx is not a forgery",
        "periodico": "Science, 232(4750), 622–626",
        "doi_ou_link": "https://doi.org/10.1126/science.232.4750.622"
      },
      {
        "autor_ano": "Xu, X. et al. (2010)",
        "titulo": "An Archaeopteryx-like theropod from China and the origin of Avialae",
        "periodico": "Nature, 475, 465–470",
        "doi_ou_link": "https://doi.org/10.1038/nature10288"
      }
    ],
    "quiz": {
      "pergunta": "Quais características anatômicas de réptil dinossauro terópode o Archaeopteryx possuía junto com penas?",
      "opcoes": [
        "Dentes na boca, cauda óssea comprida com vértebras livres e garras articuladas nas asas.",
        "Guelras de tubarão e escamas de cascavel.",
        "Bico achatado de pato de borracha.",
        "Quatro orelhas peludas."
      ],
      "correta": 0,
      "explicacao_rapida": "Dentes tecodontes, cauda óssea longa de réptil e dedos com garras funcionais nas asas!"
    }
  },
  {
    "id": "dino-pedras-ica-pinturas-dragoes",
    "titulo": "As pedras de Ica e desenhos de templos do Camboja mostram dinossauros domesticados pelo homem!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "As pedras pretas gravadas de Ica no Peru e um relevo no templo de Ta Prohm no Camboja mostram homens montando tricerátops e estegossauros esculpidos em pedra! Isso é a prova viva de que dinossauros conviviam com humanos há poucos séculos!",
    "analogia_absurda": "Olhar um dragão esculpido em um vaso chinês e declarar que dragões cuspidores de fogo viviam no quintal de Pequim.",
    "citacao_ou_versiculo": "Don Patton e Carl Baugh em excursões de arqueologia criacionista no Camboja.",
    "nivel_delirio": 9.5,
    "rotulo_delirio": "Montador de Tricerátops de Argila",
    "falacia_logica": "Fraude Turística Confessada em Tribunal + Pareidolia Escultural em Templo Budista",
    "por_que_e_idiota": "As famosas 'Pedras de Ica' foram uma FRAUDE CONFESSADA PELO PRÓPRIO ARTESÃO Basilio Uschuya! Preso pela polícia peruana em 1977 por tráfico de artefatos arqueológicos, ele confessou e demonstrou em juízo que entalhava os dinossauros com serras e brocas e envelhecia as pedras queimando esterco de vaca para vender a turistas ingênuos!",
    "a_ciencia_real": "No relevo do templo de Ta Prohm (Camboja), o animal entalhado é um javali ou rinoceronte de Java estilizado na frente de folhas de palmeira em arco de fundo (comum na arte khmer), que a imaginação criacionista tenta forçar como placas de estegossauro.",
    "fontes_cientificas": [
      {
        "autor_ano": "Polidoro, M. (2002)",
        "titulo": "Ica Stones: Yabba-Dabba-Do!",
        "periodico": "Skeptical Inquirer, 26(5)",
        "doi_ou_link": "https://skepticalinquirer.org/2002/09/ica-stones-yabba-dabba-do/"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CH710.1: Ica stones",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CH/CH710_1.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual foi a confissão de Basilio Uschuya perante a polícia peruana sobre as 'Pedras de Ica com dinossauros'?",
      "opcoes": [
        "Confessou que esculpia as pedras com serras e as envelhecia com esterco para vender a turistas.",
        "Afirmou que os dinossauros eram seus animais de estimação na infância.",
        "Disse que encontrou as pedras dentro de um OVNI.",
        "Disse que eram feitas de chocolate amargo."
      ],
      "correta": 0,
      "explicacao_rapida": "Confessou que fabricava e envelhecia as pedras artesanalmente para lucrar com turistas ingênuos!"
    }
  },
  {
    "id": "pegadas_paluxy_glen_rose",
    "titulo": "Pegadas Humanas Gigantes ao Lado de Dinossauros no Rio Paluxy",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "No leito do Rio Paluxy (Texas), foram encontradas pegadas humanas petrificadas exatamente nas mesmas camadas rochosas que pegadas de tiranossauros, provando que humanos e dinossauros passeavam juntos no parque antes do Dilúvio!",
    "analogia_absurda": "Achar uma pegada de urso na lama, ver que a chuva deformou a ponta em forma de calcanhar e concluir que o Shrek passou de chinelo Rider por ali.",
    "citacao_ou_versiculo": "Havia naqueles dias gigantes na terra; e também depois... (Gênesis 6:4 - lido com imaginação fértil e óculos embaçados)",
    "nivel_delirio": 93,
    "rotulo_delirio": "Alucinação Paluxy Deluxe",
    "falacia_logica": "Pareidolia, Cherry-picking e Fraude Arqueológica Rejeitada até por Criacionistas Sérios",
    "por_que_e_idiota": "As supostas 'pegadas humanas' de Paluxy são pegadas tridáctilas de dinossauros terópodes onde o leito do rio sofreu erosão nas bordas dos dedos (deixando uma depressão alongada parecida com uma sola humana), marcas de metatarsos de dinossauros ornitópodes e, em alguns casos notórios dos anos 1930 (como as famosas 'Pegadas de Burdick'), entalhes manuais falsificados por moradores locais para vender a turistas na Grande Depressão. Até o Institute for Creation Research (ICR) e a Answers in Genesis tiveram que admitir o erro e retirar os cartazes de Paluxy de circulação quando análises detalhadas demonstraram a farsa.",
    "a_ciencia_real": "Glen J. Kuban e Ronnie J. Hastings documentaram exaustivamente em 1986 que a coloração do calcário nas pegadas de Paluxy revelava a morfologia típica de três dedos de dinossauro preenchidos por sedimento secundário. A erosão diferencial e o afundamento do metatarso de dinossauros bípedes produziam marcas que leigos com pareidolia chamavam de 'pés humanos'. Análises geológicas confirmam rochas do Cretáceo Inferior (~110 milhões de anos), sem qualquer vestígio hominídeo.",
    "fontes_cientificas": [
      {
        "autor_ano": "Kuban, G. J. (1986)",
        "titulo": "The Texas 'man track' controversy",
        "periodico": "Creation/Evolution, 6(1), 40–47",
        "doi_ou_link": "https://ncse.ngo/texas-man-track-controversy"
      },
      {
        "autor_ano": "Hastings, R. J. (1987)",
        "titulo": "New dinosaur tracks at Paluxy River site blow away 'man tracks'",
        "periodico": "Skeptical Inquirer, 11(3), 143–154",
        "doi_ou_link": "https://talkorigins.org/faqs/paluxy/tsite.html"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CC101: Human footprints along with dinosaur tracks at Paluxy",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CC/CC101.html"
      }
    ],
    "quiz": {
      "pergunta": "O que as investigações geológicas e paleontológicas revelaram sobre as 'pegadas humanas' do Rio Paluxy?",
      "opcoes": [
        "Eram pegadas de dinossauros erodidas ou com marcas de metatarso, além de algumas fraudes entalhadas na década de 1930.",
        "Eram fósseis autênticos de ancestrais humanos gigantes de 3 metros de altura.",
        "Eram restos de alienígenas que visitaram o Texas no Cretáceo.",
        "Eram marcas deixadas por botas de astronautas do Dilúvio."
      ],
      "correta": 0,
      "explicacao_rapida": "Tratam-se de pegadas de terópodes erodidas com metatarsos impressos e algumas peças talhadas na Grande Depressão!"
    }
  },
  {
    "id": "decaimento_campo_magnetico",
    "titulo": "O Decaimento Rápido do Campo Magnético da Terra",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "O campo magnético da Terra está perdendo intensidade há 150 anos. Extrapolando esse decaimento exponencial para o passado, há mais de 10.000 anos a Terra teria uma corrente elétrica tão potente que derreteria o planeta inteiro! Logo, a Terra tem menos de 10 mil anos!",
    "analogia_absurda": "Notar que o mar recuou durante a maré baixa às 14h, extrapolar que às 6h da manhã o oceano chegava à estratosfera e que amanhã à noite todo o planeta estará seco.",
    "citacao_ou_versiculo": "Barnes, T. G. (1973) - A Teoria do Dínamo que virou curto-circuito na física básica",
    "nivel_delirio": 87,
    "rotulo_delirio": "Extrapolação Linear Suicida",
    "falacia_logica": "Extrapolação Indevida e Negação da Magneto-hidrodinâmica",
    "por_que_e_idiota": "Thomas Barnes assumiu erroneamente em 1973 que o campo geomagnético decai por simples perda ôhmica passiva, ignorando completamente que o núcleo de ferro líquido da Terra funciona como um geodínamo auto-sustentado convectivo! Além disso, ele ignorou que o campo magnético oscila e sofre inversões de polaridade periódicas (inversões geomagnéticas) — o norte e o sul magnéticos já trocaram de lugar centenas de vezes na história da Terra, como comprovado pela magnetização remanescente no fundo dos oceanos.",
    "a_ciencia_real": "A geofísica moderna e o modelo de geodínamo (Glatzmaier & Roberts, Nature 1995) explicam a geração contínua do dipolo magnético através da convecção térmica e composicional do núcleo externo ferro-níquel fluido acoplada à rotação da Terra (efeito Coriolis). As faixas alternadas de paleomagnetismo no fundo oceânico (anomalias magnéticas de Vine-Matthews-Morley) registram perfeitamente as reversões geomagnéticas ao longo de 180 milhões de anos de tectônica de placas.",
    "fontes_cientificas": [
      {
        "autor_ano": "Glatzmaier, G. A., & Roberts, P. H. (1995)",
        "titulo": "A three-dimensional self-consistent computer simulation of a geomagnetic field reversal",
        "periodico": "Nature, 377, 203–209",
        "doi_ou_link": "https://doi.org/10.1038/377203a0"
      },
      {
        "autor_ano": "Vine, F. J., & Matthews, D. H. (1963)",
        "titulo": "Magnetic anomalies over oceanic ridges",
        "periodico": "Nature, 199, 947–949",
        "doi_ou_link": "https://doi.org/10.1038/199947a0"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CD701: Earth's magnetic field is decaying, indicating a young earth",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD701.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que a variação na intensidade do campo magnético da Terra não prova que ela tem menos de 10.000 anos?",
      "opcoes": [
        "Porque o campo magnético é gerado por um geodínamo convectivo ativo que oscila e inverte de polaridade ciclicamente.",
        "Porque o campo magnético foi criado por ímãs de neodímio em Marte.",
        "Porque a Terra na verdade não possui campo magnético.",
        "Porque o ferro do núcleo se transformou em ouro durante o Dilúvio."
      ],
      "correta": 0,
      "explicacao_rapida": "O núcleo terrestre opera como um geodínamo dinâmico com convecção de ferro e níquel que oscila e inverte seus polos!"
    }
  },
  {
    "id": "relojoeiro_de_william_paley",
    "titulo": "O Argumento Teleológico do Relojoeiro de William Paley",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Se você estiver caminhando por um descampado e encontrar um relógio mecânico sofisticado no chão, você deduz que ele teve um relojoeiro inteligente, e não que surgiu do vento e pedras. Olhos e organismos vivos são muito mais complexos que relógios, logo exigem um Criador Inteligente!",
    "analogia_absurda": "Comparar um objeto inanimado não reprodutivo feito em manufatura humana (relógio) com sistemas biológicos orgânicos auto-replicantes com mutação e herança genética.",
    "citacao_ou_versiculo": "William Paley (1802) - Natural Theology, Capítulo I",
    "nivel_delirio": 72,
    "rotulo_delirio": "Falsa Analogia Teleológica Setecentista",
    "falacia_logica": "Falsa Analogia (Categoria de Erro) e Apelo à Incredulidade Pessoal",
    "por_que_e_idiota": "A analogia de Paley comete um erro de categoria ontológica clássico: relógios não se reproduzem com variação hereditária, não competem por recursos escassos e não sofrem seleção natural diferencial de seus mecanismos. Em sistemas biológicos, a seleção natural atua como um 'relojoeiro cego' (termo célebre de Richard Dawkins): pequenos passos cumulativos de filtragem não-aleatória transformam gradualmente estruturas simples em órgãos de altíssima complexidade e eficácia funcional ao longo de centenas de milhões de gerações.",
    "a_ciencia_real": "A biologia evolutiva demonstra que a seleção natural cumulativa gera complexidade e adaptação funcional sem qualquer teleologia deliberada ou desenhista consciente. Mutações fornecem variação aleatória, enquanto a sobrevivência e reprodução diferenciais atuam como filtro estocástico rigoroso e direcional, gerando aparências de 'design' refinadas de baixo para cima (bottom-up evolution).",
    "fontes_cientificas": [
      {
        "autor_ano": "Dawkins, R. (1986)",
        "titulo": "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe without Design",
        "periodico": "W. W. Norton & Company",
        "doi_ou_link": "https://isbnsearch.org/isbn/9780393315706"
      },
      {
        "autor_ano": "Lenski, R. E., et al. (2003)",
        "titulo": "The evolutionary origin of complex features",
        "periodico": "Nature, 423(6936), 139–144",
        "doi_ou_link": "https://doi.org/10.1038/nature01568"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CI100: Argument from design / Watchmaker analogy",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CI/CI100.html"
      }
    ],
    "quiz": {
      "pergunta": "Qual a diferença fundamental entre um relógio mecânico e um organismo biológico que desmonta a analogia de Paley?",
      "opcoes": [
        "Organismos possuem reprodução hereditária com variação e sofrem seleção natural cumulativa ao longo de gerações.",
        "Relógios têm ponteiros feitos de quartzo radioativo.",
        "Organismos biológicos foram criados numa fábrica suíça.",
        "Relógios evoluem espontaneamente se forem deixados na grama."
      ],
      "correta": 0,
      "explicacao_rapida": "A seleção natural operando sobre organismos replicantes com hereditariedade gera complexidade cumulativa sem necessidade de desenhista!"
    }
  },
  {
    "id": "homologia_e_circularidade",
    "titulo": "Homologia Seria um Argumento Tautológico e Circular",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Biólogos dizem que ossos similares em morcegos, baleias e humanos são homologias que provam evolução. Mas quando perguntados como sabem que são homologias, eles dizem que é porque vieram de um ancestral comum! Isso é raciocínio circular vazio!",
    "analogia_absurda": "Afirmar que testes de paternidade por DNA são circulares porque assumem que parentes compartilham sequências de DNA idênticas.",
    "citacao_ou_versiculo": "Jonathan Wells (Icons of Evolution, 2000) - Teoria do Complô Circular",
    "nivel_delirio": 78,
    "rotulo_delirio": "Tautofobia Biológica",
    "falacia_logica": "Falácia do Raciocínio Circular Imaginário e Petição de Princípio Inexistente",
    "por_que_e_idiota": "A homologia anatômica foi descrita e catalogada por Richard Owen e naturalistas pré-darwinistas muito antes da teoria da evolução ser proposta! Owen definiu homologia como 'o mesmo órgão sob todas as variedades de forma e função'. A evolução darwiniana não inventou as homologias como premissa circular, ela forneceu a única EXPLICAÇÃO MECANICISTA testável para a hierarquia aninhada de homologias anatômicas, embriológicas, ultraestruturais e genômicas independentes.",
    "a_ciencia_real": "A homologia é identificada independentemente por critérios topológicos estruturais (critérios de Remane: posição relativa nas séries esqueléticas, conexões vasculares e nervosas, rotas de desenvolvimento embriológico) e depois corroborada de forma estritamente independente por filogenômica comparada (sequenciamento de DNA, pseudogenes, retrovírus endógenos e sintenia cromossômica). A concordância estatística entre árvores anatômicas e árvores moleculares é da ordem de p < 10^-200.",
    "fontes_cientificas": [
      {
        "autor_ano": "Theobald, D. L. (2010)",
        "titulo": "A formal test of the theory of universal common ancestry",
        "periodico": "Nature, 465(7295), 219–222",
        "doi_ou_link": "https://doi.org/10.1038/nature09014"
      },
      {
        "autor_ano": "Mindell, D. P., & Meyer, A. (2001)",
        "titulo": "Homology evolving",
        "periodico": "Trends in Ecology & Evolution, 16(8), 434–440",
        "doi_ou_link": "https://doi.org/10.1016/S0169-5347(01)02206-6"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CB801: Homology is circular reasoning",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB801.html"
      }
    ],
    "quiz": {
      "pergunta": "Como os cientistas testam se uma homologia anatômica é real sem incorrer em raciocínio circular?",
      "opcoes": [
        "Corroborando dados anatômicos e embriológicos de forma independente com filogenômica molecular (sequências de DNA/proteínas).",
        "Consultando versículos poéticos em línguas mortas.",
        "Medindo o comprimento dos bigodes de morcegos.",
        "Ignorando os fósseis e chutando na sorte."
      ],
      "correta": 0,
      "explicacao_rapida": "A congruência entre árvores filogenéticas anatômicas e de sequenciamento molecular independente valida o sinal genealógico!"
    }
  },
  {
    "id": "camadas_estratigraficas_invertidas",
    "titulo": "Camadas Estratigráficas Invertidas Refutariam a Coluna Geológica",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Em vários lugares do mundo, como na falha de Lewis em Montana, rochas antigas do Pré-Cambriano estão em cima de rochas jovens do Cretáceo! Se a evolução estivesse certa, rochas velhas nunca estariam acima de rochas novas. Isso prova que a coluna geológica é uma ilusão e tudo foi misturado no Dilúvio!",
    "analogia_absurda": "Ver uma pilha de panquecas onde alguém dobrou a borda de baixo por cima da de cima e deduzir que a gravidade deixou de existir e a cozinha explodiu.",
    "citacao_ou_versiculo": "Panfletos de geologia do Dilúvio de 1960 ignorando placas tectônicas",
    "nivel_delirio": 85,
    "rotulo_delirio": "Negacionismo Tectônico Estrutural",
    "falacia_logica": "Falácia do Homem de Palha e Ignorância da Geologia Estrutural",
    "por_que_e_idiota": "Os criacionistas fingem que a geologia do século XXI é composta por crianças que só conhecem o Princípio da Sobreposição de Steno de 1669 e nunca ouviram falar de forças tectônicas compressivas, falhas de cavalgamento (overthrust) e dobras recumbentes! Na falha de Lewis (Lewis Thrust), há evidências geológicas monumentais e indiscutíveis de atrito tectônico ao longo de centenas de quilômetros: milonitos (rochas moídas por cisalhamento), estrias de atrito (slickensides), zonas de brecha e deformação plástica que marcam exatamente onde uma gigantesca placa fóssil deslizou horizontalmente por cima de estratos mais jovens durante a orogenia Laramide.",
    "a_ciencia_real": "A geologia estrutural explica falhas de empurrão (thrust faults) e dobras geológicas como resultado direto do movimento e colisão de placas tectônicas. Em zonas orogênicas de compressão crustal, camadas sedimentares consolidadas quebram em ângulos baixos e deslizam dezenas de quilômetros sobre rochas adjacentes. O plano de falha exibe todas as assinaturas mecânicas, geoquímicas e térmicas de fricção extrema entre as massas rochosas.",
    "fontes_cientificas": [
      {
        "autor_ano": "Boyer, S. E., & Elliott, D. (1982)",
        "titulo": "Thrust systems",
        "periodico": "American Association of Petroleum Geologists Bulletin, 66(9), 1196–1230",
        "doi_ou_link": "https://doi.org/10.1306/03B5A77D-16D1-11D7-8645000102C1865D"
      },
      {
        "autor_ano": "Price, R. A. (1981)",
        "titulo": "The Cordilleran foreland fold and thrust belt in the southern Canadian Rocky Mountains",
        "periodico": "Geological Society, London, Special Publications, 9(1), 427–448",
        "doi_ou_link": "https://doi.org/10.1144/GSL.SP.1981.009.01.39"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CD102_1: Lewis overthrust and out-of-order strata",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD102_1.html"
      }
    ],
    "quiz": {
      "pergunta": "O que explica rochas antigas localizadas acima de rochas mais jovens em formações como a Lewis Thrust?",
      "opcoes": [
        "Falhas geológicas compressivas de cavalgamento (overthrust) provocadas pela tectônica de placas.",
        "Um redemoinho mágico provocado pelo Dilúvio de Noé.",
        "A gravidade terrestre operava ao contrário no passado.",
        "Escavações feitas por dinossauros engenheiros."
      ],
      "correta": 0,
      "explicacao_rapida": "Falhas de cavalgamento tectônicas empurram blocos inteiros de crosta sobre estratos adjacentes com claras marcas de atrito mecânico!"
    }
  },
  {
    "id": "idade_aneis_saturno",
    "titulo": "Os Anéis de Saturno Provariam que o Sistema Solar é Jovem",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Sondas espaciais mostraram que os anéis de Saturno estão perdendo gelo para o planeta e não durarão mais que poucas centenas de milhões de anos. Se tivessem bilhões de anos, já teriam desaparecido! Logo, o sistema solar inteiro tem 6.000 anos!",
    "analogia_absurda": "Ver uma vela acesa num quarto há 10 minutos, calcular que ela vai derreter em duas horas e concluir que o prédio inteiro onde você está foi construído há 10 minutos.",
    "citacao_ou_versiculo": "Revistas de apologética astronômica de domingo à tarde",
    "nivel_delirio": 82,
    "rotulo_delirio": "Falácia da Idade Mínima do Componente Efêmero",
    "falacia_logica": "Falácia da Composição e Negação da Dinâmica Planetária",
    "por_que_e_idiota": "Os criacionistas confundem a idade de um sistema planetário com a idade e o ciclo de vida dinâmico de uma estrutura específica dentro dele! Os anéis de Saturno não precisam ter existido desde o nascimento do Sol há 4.56 bilhões de anos. A astrofísica planetária sabe que anéis planetários são estruturas dinâmicas, formadas e destruídas ao longo de éons por cometas ou luas geladas que cruzam o Limite de Roche de planetas gigantes e são estraçalhadas pelas forças de maré gravitacional.",
    "a_ciencia_real": "Os dados da sonda Cassini-Huygens (Iess et al., Science 2019) revelaram que a massa dos anéis de Saturno é relativamente baixa e que eles provavelmente se formaram há 10 a 100 milhões de anos pelo despedaçamento gravitacional de uma lua gelada que ultrapassou o limite de Roche. Isso em nada altera a idade de 4.568 bilhões de anos do Sistema Solar, determinada com precisão nanométrica por datação isotópica Pb-Pb e U-Pb em meteoritos primitivos (condritos carbonáceos como Allende).",
    "fontes_cientificas": [
      {
        "autor_ano": "Iess, L., et al. (2019)",
        "titulo": "Measurement and implications of Saturn’s gravity field and ring mass",
        "periodico": "Science, 364(6445), eaat2965",
        "doi_ou_link": "https://doi.org/10.1126/science.aat2965"
      },
      {
        "autor_ano": "Bouvier, A., & Wadhwa, M. (2010)",
        "titulo": "The age of the Solar System redefined by the oldest Pb–Pb age of a meteoritic inclusion",
        "periodico": "Nature Geoscience, 3(9), 637–641",
        "doi_ou_link": "https://doi.org/10.1038/ngeo941"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "Claim CE001: Rings of Saturn are young",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CE/CE001.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que o fato de os anéis de Saturno poderem ser mais jovens que o Sistema Solar não prova uma Terra de 6.000 anos?",
      "opcoes": [
        "Porque anéis planetários são estruturas transitórias formadas por luas fragmentadas por marés de Roche, enquanto o sistema solar tem 4.56 bi de anos.",
        "Porque Saturno foi fabricado com plástico e gelo sintético.",
        "Porque os anéis de Saturno na verdade não existem e são miragens cósmicas.",
        "Porque a Bíblia não menciona Saturno."
      ],
      "correta": 0,
      "explicacao_rapida": "Anéis planetários são eventos dinâmicos e temporários originados da quebra de corpos celestes no limite de Roche!"
    }
  },
  {
    "id": "antropo-cro-magnon",
    "titulo": "O Homem de Cro-Magnon era apenas um homem moderno usando roupas de pele!",
    "categoria": "evolucao_humana",
    "categoria_label": "🐒 Evolução Humana & Primatas",
    "argumento_criacionista": "Os evolucionistas usam o 'Homem de Cro-Magnon' como se fosse um elo perdido bizarro, mas ele era 100% Homo sapiens idêntico a nós, com cérebro até maior! Isso prova que homens das cavernas nunca existiram, eram apenas humanos comuns vivendo ao ar livre após a Torre de Babel!",
    "analogia_absurda": "Colocar um casaco de pele num executivo e dizer que ele é uma espécie alienígena pré-histórica.",
    "citacao_ou_versiculo": "Answers in Genesis: 'Cro-Magnon foi apenas um ancestral nosso pós-Babel.'",
    "nivel_delirio": 8.0,
    "rotulo_delirio": "Cavernista de Apartamento",
    "falacia_logica": "Portas Abertas ao Vento (A ciência SEMPRE afirmou que Cro-Magnon é Homo sapiens!)",
    "por_que_e_idiota": "NENHUM biólogo ou paleontólogo jamais afirmou que Cro-Magnon era um homem-macaco intermediário! A ciência SEMPRE classificou o Homem de Cro-Magnon (30.000 anos) como a população europeia primitiva de *Homo sapiens anatomicamente moderno*! Os criacionistas inventam que a ciência disse o contrário apenas para 'refutar' a própria mentira que inventaram.",
    "a_ciencia_real": "Os espécimes de Cro-Magnon encontrados na França em 1868 são fósseis de *Homo sapiens*, portadores de arte rupestre espetacular (como nas cavernas de Chauvet e Lascaux), tecnologia lítica do Aurignaciano e sepultamentos rituais complexos. Eles descendem de linhagens de humanos modernos que migraram da África há 60.000 anos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Tattersall, I. (2015)",
        "titulo": "The Strange Case of the Rickety Cossack: and Other Cautionary Tales from Human Evolution",
        "periodico": "Palgrave Macmillan",
        "doi_ou_link": "https://doi.org/10.1007/978-1-137-27889-0"
      },
      {
        "autor_ano": "Hublin, J. J. (2015)",
        "titulo": "The modern human colonization of western Eurasia: when and where?",
        "periodico": "Quaternary Science Reviews, 118, 194–210",
        "doi_ou_link": "https://doi.org/10.1016/j.quascirev.2014.08.011"
      }
    ],
    "quiz": {
      "pergunta": "Como a ciência classifica formalmente o fóssil conhecido historicamente como Homem de Cro-Magnon?",
      "opcoes": [
        "Como Homo sapiens anatomicamente moderno europeu do Paleolítico Superior.",
        "Como um chimpanzé arborícola.",
        "Como um réptil gigante.",
        "Como uma fraude de museu."
      ],
      "correta": 0,
      "explicacao_rapida": "Sempre foi classificado pela ciência como Homo sapiens moderno, nunca como transição!"
    }
  },
  {
    "id": "dino-archaeoraptor-chines",
    "titulo": "O fóssil Archaeoraptor foi uma fraude chinesa que prova que dinossauros emplumados são farsas!",
    "dinossauros_paleontologia": true,
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "A revista National Geographic publicou em 1999 o 'Archaeoraptor' como o elo perdido definitivo entre dinossauros e aves. Meses depois, provaram que era uma montagem de um fóssil de pássaro com cauda de dinossauro colada por um fazendeiro chinês com cola! Todos os dinossauros com penas são fraudes de contrabandistas!",
    "analogia_absurda": "Colar um rabo de peixe num coelho e vender como sereia terrestre.",
    "citacao_ou_versiculo": "Storrs Olson (Smithsonian): carta aberta criticando o sensacionalismo da National Geographic.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Contrabandista de Penas de Gesso",
    "falacia_logica": "Generalização Apressada + Ignorar que o Desmascaramento veio de Paleontólogos",
    "por_que_e_idiota": "A fraude do Archaeoraptor NÃO FOI ACEITA por revistas científicas revisadas por pares (a Nature e a Science REJEITARAM publicar o artigo quando seus revisores detectaram anomalias!). Foi a National Geographic (uma revista de divulgação jornalística para o público leigo) que se precipitou antes dos testes tomográficos.",
    "a_ciencia_real": "Quem descobriu e denunciou a fraude foi o paleontólogo chinês Xu Xing usando tomografia computadorizada. Além disso, as duas metades reais da montagem eram fósseis autênticos inéditos (*Yanornis martini* e *Microraptor zhaoianus*). Hoje temos mais de 50 espécies diferentes de dinossauros terópodes com penas preservadas em rocha escavadas in situ por equipes científicas internacionais (*Sinosauropteryx*, *Caudipteryx*, *Yutyrannus* de 9 metros com penas!).",
    "fontes_cientificas": [
      {
        "autor_ano": "Zhou, Z., Barrett, P. M., & Hilton, J. (2003)",
        "titulo": "An exceptionally preserved Lower Cretaceous ecosystem",
        "periodico": "Nature, 421, 807–814",
        "doi_ou_link": "https://doi.org/10.1038/nature01420"
      },
      {
        "autor_ano": "Xu, X. et al. (2012)",
        "titulo": "A gigantic feathered dinosaur from the Lower Cretaceous of China",
        "periodico": "Nature, 484, 92–95",
        "doi_ou_link": "https://doi.org/10.1038/nature10906"
      }
    ],
    "quiz": {
      "pergunta": "Qual dinossauro terópode carnívoro de 9 metros de comprimento provou a presença de penas em grandes dinossauros?",
      "opcoes": [
        "Yutyrannus huali",
        "Crocoduck",
        "Plesiossauro",
        "Galinha de angola"
      ],
      "correta": 0,
      "explicacao_rapida": "Yutyrannus huali media 9 metros de comprimento e tinha corpo densamente coberto de penas!"
    }
  },
  {
    "id": "anatomia-baleia-pelvis-reproducao",
    "titulo": "Ossos pélvicos das baleias não são patas vestigiais: servem para fixar órgãos reprodutores!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Os livros didáticos dizem que a pequena bacia óssea flutuante no abdômen das baleias é vestígio de patas traseiras da época em que andavam em terra. Mentira! Estudos provam que esses ossos servem de ponto de ancoragem para músculos do sistema reprodutor! Eles têm função útil e não são vestigiais!",
    "analogia_absurda": "Dizer que o volante de um barco é uma roda de carro que perdeu o pneu.",
    "citacao_ou_versiculo": "Answers in Genesis: 'Baleias sempre foram baleias e suas bacias foram planejadas!'",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Urologista de Cetáceo",
    "falacia_logica": "Equívoco Semântico (Confundir 'Órgão Vestigial' com 'Órgão Inútil')",
    "por_que_e_idiota": "No método científico, 'VESTIGIAL' NÃO SIGNIFICA INÚTIL! Vestigial significa uma estrutura que perdeu a sua função ancestral primordial original (no caso, apoiar a locomoção de membros posteriores para sustentar o peso corporal no solo). Uma estrutura vestigial pode ser perfeitamente cooptada por seleção natural secundária para desempenhar outra função secundária (exaptação).",
    "a_ciencia_real": "A anatomia comparada, embriologia e genética mostram que embriões de baleias desenvolvem brotos de membros posteriores com fêmur, tíbia e dedos completos que sofrem apoptose (morte celular programada) durante a gestação! Fósseis da série transicional de cetáceos (*Pakicetus*, *Ambulocetus*, *Rodhocetus* e *Basilosaurus*) documentam as patas traseiras encolhendo gradualmente ao longo de 15 milhões de anos até restarem os vestígios pélvicos internos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Thewissen, J. G. M. et al. (2006)",
        "titulo": "Developmental basis for hind-limb loss in dolphins and origin of the cetacean bodyplan",
        "periodico": "PNAS, 103(22), 8414–8418",
        "doi_ou_link": "https://doi.org/10.1073/pnas.0602920103"
      },
      {
        "autor_ano": "Dines, J. P. et al. (2014)",
        "titulo": "Sexual selection targets cetacean pelvic bones",
        "periodico": "Evolution, 68(11), 3296–3306",
        "doi_ou_link": "https://doi.org/10.1111/evo.12516"
      }
    ],
    "quiz": {
      "pergunta": "O que acontece com os membros posteriores nos embriões de baleias e golfinhos durante a gestação?",
      "opcoes": [
        "Começam a se formar brotos de pernas com fêmur e tíbia que depois regridem geneticamente.",
        "Eles viram asas articuladas.",
        "Não há brotos em nenhuma fase.",
        "Eles viram guelras."
      ],
      "correta": 0,
      "explicacao_rapida": "Embriões de cetáceos desenvolvem patas traseiras completas que regridem na gestação!"
    }
  },
  {
    "id": "anatomia-dente-siso-mastigacao",
    "titulo": "O dente do siso não é vestigial: ele nasce torto porque comemos papinha e comida cozida!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Dentistas evolucionistas dizem que o terceiro molar (dente do siso) é prova da evolução porque nossa mandíbula encolheu. Bobagem! Deus desenhou a mandíbula perfeita para caber todos os dentes; o problema é que comemos alimentos cozidos moles e processados e não exercitamos a mordida como Adão!",
    "analogia_absurda": "Comprar sapatos número 36 para um pé 42 e culpar o fabricante do sapato.",
    "citacao_ou_versiculo": "Odontologia criacionista em congressos do Design Inteligente.",
    "nivel_delirio": 8.3,
    "rotulo_delirio": "Ortodontista do Jardim do Éden",
    "falacia_logica": "Inversão de Causa e Efeito Evolutivo",
    "por_que_e_idiota": "Nossa mandíbula encolheu drasticamente ao longo dos últimos 2 milhões de anos DEVIDO À EVOLUÇÃO da encefalização craniana e à inativação por mutação do gene da miosina mastigatória pesada (MYH16), além do uso do fogo para pré-digerir alimentos! Milhões de pessoas hoje em dia já NASCEM SEM O GERME DENTÁRIO DO SISO (agenesia do terceiro molar) devido a seleção natural contínua ativa!",
    "a_ciencia_real": "Em hominíneos fósseis basais como *Australopithecus boisei*, a mandíbula era gigantesca com molares colossais adaptados a mastigação pesada. O encolhimento da arcada dentária humana moderna é um clássico exemplo de incompatibilidade evolutiva entre a redução do esqueleto facial e o programa genético de dentes molares ancestrais.",
    "fontes_cientificas": [
      {
        "autor_ano": "Stedman, H. H. et al. (2004)",
        "titulo": "Myosin gene mutation correlates with anatomical changes in the human lineage",
        "periodico": "Nature, 428, 415–418",
        "doi_ou_link": "https://doi.org/10.1038/nature02358"
      },
      {
        "autor_ano": "Lucas, P. W. (2004)",
        "titulo": "Dental Functional Morphology: How Teeth Work",
        "periodico": "Cambridge University Press",
        "doi_ou_link": "https://doi.org/10.1017/CBO9780511542541"
      }
    ],
    "quiz": {
      "pergunta": "Qual mutação genética em primatas ancestrais desativou músculos masseteres pesados e facilitou a expansão craniana humana?",
      "opcoes": [
        "Mutação de perda de função no gene de miosina MYH16.",
        "Gene da dopamina D4.",
        "Gene da melanina.",
        "Gene da queratina."
      ],
      "correta": 0,
      "explicacao_rapida": "A mutação inativadora no gene MYH16 reduziu a musculatura mastigatória pesada!"
    }
  },
  {
    "id": "anatomia-apendice-imunidade",
    "titulo": "O apêndice cecal tem tecido linfoide e bactérias benéficas, logo não é um vestígio inútil!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Darwin escreveu que o apêndice era um órgão vestigial degenerado inútil herdado de herbívoros. Mas a medicina moderna provou que o apêndice atua como santuário para a flora bacteriana intestinal e contém tecido linfoide imunológico! Darwin estava errado e o corpo é perfeito!",
    "analogia_absurda": "Dizer que um extintor de incêndio na parede é inútil porque a casa não está pegando fogo hoje.",
    "citacao_ou_versiculo": "Artigo da Creation Ministries: 'O apêndice não é lixo evolutivo!'",
    "nivel_delirio": 8.5,
    "rotulo_delirio": "Cirurgião com Apendicite Aguda",
    "falacia_logica": "Espantalho Terminológico (Confundir 'Vestigial' com 'Completamente sem Função')",
    "por_que_e_idiota": "Darwin NUNCA disse que órgãos vestigiais precisavam ser '100% inúteis sem nenhuma função residual'! O apêndice cecal humano é um VESTÍGIO HOMÓLOGO REDUZIDO do ceco intestinal gigantesco que animais herbívoros (como coalas e coelhos) usam para fermentar celulose com bactérias simbióticas.",
    "a_ciencia_real": "Em humanos, o ceco encolheu para um tubinho vermiforme de poucos centímetros que perdeu totalmente a capacidade de digerir celulose. O fato de ele abrigar tecido linfoide secundário ou bactérias benéficas não anula que ele é um resquício atrofiado que inflama facilmente (apendicite aguda), matando milhares de pessoas por peritonite na história caso não seja retirado por cirurgia de emergência.",
    "fontes_cientificas": [
      {
        "autor_ano": "Smith, H. F. et al. (2009)",
        "titulo": "Comparative anatomy and phylogenetic distribution of the mammalian cecal appendix",
        "periodico": "Journal of Evolutionary Biology, 22(10), 1984–1999",
        "doi_ou_link": "https://doi.org/10.1111/j.1420-9101.2009.01809.x"
      },
      {
        "autor_ano": "Bollinger, R. R. et al. (2007)",
        "titulo": "Biofilms in the large bowel suggest an apparent function of the human vermiform appendix",
        "periodico": "Journal of Theoretical Biology, 249(4), 826–831",
        "doi_ou_link": "https://doi.org/10.1016/j.jtbi.2007.08.032"
      }
    ],
    "quiz": {
      "pergunta": "O apêndice humano é a versão atrofiada e vestigial de qual estrutura em animais herbívoros?",
      "opcoes": [
        "O ceco intestinal de fermentação de celulose.",
        "O estômago de ruminantes.",
        "A vesícula biliar.",
        "O esôfago superior."
      ],
      "correta": 0,
      "explicacao_rapida": "É o vestígio reduzido do ceco volumoso de fermentação herbívora de ancestrais primatas!"
    }
  },
  {
    "id": "geologia-everest-conchas-topo",
    "titulo": "Fósseis de conchas marinhas no topo do Monte Everest provam que o mar cobriu o pico!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Existem fósseis de amonites e conchas marinhas de moluscos calcários no topo da cordilheira do Himalaia a 8.000 metros de altitude! A única explicação possível é que a água do mar do Dilúvio de Noé cobriu a montanha mais alta da Terra!",
    "analogia_absurda": "Achar que se encontrar salmão na gôndola do supermercado, o mar inundou o corredor 3.",
    "citacao_ou_versiculo": "Panfleto clássico de feira bíblica com foto de conchas no Himalaia.",
    "nivel_delirio": 9.2,
    "rotulo_delirio": "Alpinista com Concha no Bolso",
    "falacia_logica": "Inversão Tectônica Monumental (Não foi o mar que subiu ao Everest, foi a rocha marinha que foi empurrada para cima!)",
    "por_que_e_idiota": "As conchas no topo do Everest NÃO foram parar lá porque uma enchente mágica cobriu o Everest! O Himalaia NÃO EXISTIA quando as conchas viveram! O fundo do oceano de Tétis foi DEPOSITADO há centenas de milhões de anos. Quando a placa tectônica da ÍNDIA colidiu contra a placa da EURÁSIA há cerca de 50 milhões de anos, o leito marinho foi amassado e dobrado para cima a 5 cm por ano, erguendo o fundo do mar a 8.848 metros de altitude!",
    "a_ciencia_real": "Medições com GPS por satélite comprovam que o Monte Everest continua SUBINDO cerca de 4 a 5 milímetros por ano até hoje devido à força compressiva da tectônica de placas entre a Índia e o continente asiático. As rochas do topo são o calcário Qomolangma formado por sedimentos marinhos fósseis do Ordoviciano.",
    "fontes_cientificas": [
      {
        "autor_ano": "Yin, A. & Harrison, T. M. (2000)",
        "titulo": "Geologic evolution of the Himalayan-Tibetan orogen",
        "periodico": "Annual Review of Earth and Planetary Sciences, 28, 211–280",
        "doi_ou_link": "https://doi.org/10.1146/annurev.earth.28.1.211"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CA341: Shells on mountains",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CA/CA341.html"
      }
    ],
    "quiz": {
      "pergunta": "Por que existem fósseis marinhos no topo da cordilheira do Himalaia e Monte Everest?",
      "opcoes": [
        "Porque a colisão tectônica da Índia contra a Eurásia soergueu o antigo fundo do mar de Tétis.",
        "Porque Noé perdeu um balde de mariscos no cume.",
        "Porque gaivotas levaram ostras para almoçar lá em cima.",
        "Porque a água cobriu o Everest há 4.000 anos."
      ],
      "correta": 0,
      "explicacao_rapida": "A tectônica de placas colidiu a Índia contra a Ásia, erguendo o fundo do oceano de Tétis!"
    }
  },
  {
    "id": "geofisica-tectonica-catastrofica",
    "titulo": "Tectônica de Placas Catastrófica: os continentes se moveram a 60 km/h durante o Dilúvio!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "O geofísico criacionista John Baumgardner criou um modelo computacional mostrando que as placas tectônicas sofreram um descontrole térmico instável durante o Dilúvio e a Pangeia se despedaçou com os continentes deslizando a mais de 60 km/h em poucas semanas!",
    "analogia_absurda": "O continente da América do Sul apostando corrida de Fórmula 1 contra a África.",
    "citacao_ou_versiculo": "John Baumgardner (1994): 'Catastrophic Plate Tectonics: The Physics Behind the Genesis Flood'.",
    "nivel_delirio": 9.7,
    "rotulo_delirio": "Piloto de Tectônica de Rali",
    "falacia_logica": "Violação Catastrófica da Dissipação de Energia Térmica Cinética",
    "por_que_e_idiota": "Se placas tectônicas continentais com trilhões de toneladas de rocha se movessem a 60 km/h pelo manto superior, o atrito por cisalhamento e fricção mecânica liberaria energia equivalente a TRILHÕES DE BOMBAS ATÔMICAS DE HIDROGÊNIO! A energia cinética dissipada derreteria o manto, transformaria a crosta terrestre em lava líquida fervente e ferveria todos os oceanos!",
    "a_ciencia_real": "Medições reais com estações de GPS espaciais e interferometria de longa linha de base (VLBI) medem o movimento continental real contínuo de 2 a 10 centímetros por ano (exatamente a mesma taxa de crescimento das unhas humanas), condizente com a convecção lenta no manto viscoso há bilhões de anos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Turcotte, D. L. & Schubert, G. (2014)",
        "titulo": "Geodynamics (3rd Edition)",
        "periodico": "Cambridge University Press",
        "doi_ou_link": "https://doi.org/10.1017/CBO9780511843877"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CD750: Catastrophic plate tectonics",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CD/CD750.html"
      }
    ],
    "quiz": {
      "pergunta": "A que velocidade real os continentes se movem hoje segundo medições com satélites GPS?",
      "opcoes": [
        "Cerca de 2 a 10 centímetros por ano (velocidade de crescimento de unhas).",
        "A 60 quilômetros por hora como um carro na avenida.",
        "A 100 metros por minuto.",
        "Eles não se movem nunca."
      ],
      "correta": 0,
      "explicacao_rapida": "Os continentes derivam milimetricamente de 2 a 10 cm por ano medidos por GPS!"
    }
  },
  {
    "id": "taxonomia-baraminologia-tipos",
    "titulo": "A Baraminologia prova que Deus criou 'tipos básicos' separados que não se cruzam!",
    "categoria": "biblia_literal",
    "categoria_label": "📖 Literalismo Bíblico & Arca",
    "argumento_criacionista": "Criacionistas criaram a ciência da 'Baraminologia' (do hebraico bara = criar, min = tipo). Deus criou apenas o 'tipo cão' original, o 'tipo gato' e o 'tipo cavalo'. Lobos e coiotes são apenas variedades do mesmo tipo bíblico; uma espécie nunca vira outra de tipo diferente!",
    "analogia_absurda": "Dizer que você pode mudar a cor da lataria do carro, mas um carro nunca vira uma moto.",
    "citacao_ou_versiculo": "Kurt Wise (Answers in Genesis): 'A baraminologia é a biologia baseada na palavra de Deus.'",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Taxonomista de Espécies com Régua Teológica",
    "falacia_logica": "Definição Circular Ad Hoc e Mutável (Nenhum criacionista consegue definir o que é um 'tipo')",
    "por_que_e_idiota": "Toda vez que a ciência mostra uma transição entre duas espécies, os criacionistas simplesmente mudam a definição de 'tipo básico' para uma categoria taxonômica mais ampla! Começaram dizendo que o tipo era a espécie; quando viram especiação, disseram que era o gênero; depois a família; depois a ordem inteira!",
    "a_ciencia_real": "A filogenética molecular, o sequenciamento de genomas inteiros e a embriologia comparada revelam uma ÁRVORE RAMIFICADA CONTÍNUA com nós de ancestralidade comum compartilhados (filogenia universal), sem nenhuma barreira biológica mágica que impeça a divergência evolutiva cumulativa ao longo do tempo geológico.",
    "fontes_cientificas": [
      {
        "autor_ano": "Theobald, D. L. (2010)",
        "titulo": "A formal test of the theory of universal common ancestry",
        "periodico": "Nature, 465, 219–222",
        "doi_ou_link": "https://doi.org/10.1038/nature09014"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CB801: Baraminology",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CB/CB801.html"
      }
    ],
    "quiz": {
      "pergunta": "O que o teste formal de Douglas Theobald publicado na Nature (2010) comprovou matematicamente?",
      "opcoes": [
        "A ancestralidade comum universal (UCA) com probabilidade estatística esmagadora de 10^2860 contra origens separadas.",
        "Que Adão catalogou todos os baramins em hebraico.",
        "Que bactérias não têm parentesco com fungos.",
        "Que árvores genealógicas são circulares."
      ],
      "correta": 0,
      "explicacao_rapida": "Comprovou a ancestralidade comum universal única com probabilidade astronômica esmagadora!"
    }
  },
  {
    "id": "evolucao-biston-betularia-mariposa",
    "titulo": "As mariposas de bétula de Kettlewell foram uma farsa com insetos mortos colados em árvores!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "O famoso experimento do melanismo industrial nas mariposas de bétula (Biston betularia) foi uma fraude: disseram que Bernard Kettlewell colou mariposas mortas com alfinetes em troncos de árvores para forjar a seleção natural para livros didáticos!",
    "analogia_absurda": "Colar um adesivo de lagartixa na parede e jurar que ela comeu uma barata.",
    "citacao_ou_versiculo": "Jonathan Wells em 'Ícones da Evolução' (Capítulo sobre a Mariposa).",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Caçador de Mariposas com Alfinete",
    "falacia_logica": "Calúnia Científica + Omissão de Décadas de Replicações Rigorosas",
    "por_que_e_idiota": "Kettlewell usou espécimes alfinetados APENAS para fotos ilustrativas estáticas de demonstração para a imprensa leiga (prática editorial comum nos anos 1950), mas SEUS EXPERIMENTOS REAIS DE MARCAÇÃO E RECAPTURA foram rigorosamente conduzidos com milhares de mariposas vivas soltas na natureza!",
    "a_ciencia_real": "Para encerrar qualquer dúvida levantada por criacionistas, o renomado geneticista de Cambridge Michael Majerus realizou entre 2001 e 2007 um experimento maciço de 6 anos monitorando 4.864 mariposas vivas soltas em habitats naturais: ele confirmou com precisão matemática impecável que pássaros predam mariposas em troncos e que o melanismo industrial é um exemplo clássico, incontestável e límpido de seleção natural darwiniana em tempo real.",
    "fontes_cientificas": [
      {
        "autor_ano": "Cook, L. M., Grant, B. S., Saccheri, I. J., & Mallet, J. (2012)",
        "titulo": "Post-industrial melanism in the peppered moth: the response to pollution decline",
        "periodico": "Biology Letters, 8(4), 609–612",
        "doi_ou_link": "https://doi.org/10.1098/rsbl.2011.1136"
      },
      {
        "autor_ano": "Majerus, M. E. N. (2009)",
        "titulo": "Industrial melanism in the peppered moth, Biston betularia: an excellent teaching example of Darwinian natural selection in action",
        "periodico": "Evolution: Education and Outreach, 2, 63–74",
        "doi_ou_link": "https://doi.org/10.1007/s12052-008-0107-y"
      }
    ],
    "quiz": {
      "pergunta": "O que o extenso experimento de 6 anos de Michael Majerus em Cambridge comprovou sobre a mariposa Biston betularia?",
      "opcoes": [
        "Confirmou categoricamente a seleção natural por predação de pássaros conforme a camuflagem da poluição.",
        "Provou que as mariposas eram daltônicas.",
        "Mostrou que mariposas não são comidas por pássaros.",
        "Provou que as mariposas foram pintadas com tinta guache."
      ],
      "correta": 0,
      "explicacao_rapida": "Confirmou com milhares de mariposas vivas a seleção natural por camuflagem e predação!"
    }
  },
  {
    "id": "design-olho-lagosta-cartesiano",
    "titulo": "O olho da lagosta usa geometria analítica de espelhos de René Descartes que o barro não inventaria!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "O olho das lagostas e camarões de profundidade não usa lentes de refração, mas espelhos quadrados de reflexão curva que convergem raios para um foco com geometria cartesiana perfeita. Como a química de uma poça de lama aprendeu a calcular ângulos de reflexão de Descartes sem um Engenheiro?",
    "analogia_absurda": "Espelhos de telescópio espacial da NASA montados por uma tempestade de areia no deserto.",
    "citacao_ou_versiculo": "Folheto do Design Inteligente sobre a óptica dos crustáceos.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Geômetra de Frutos do Mar",
    "falacia_logica": "Teleologia Invertida (A matemática descreve a física natural, não é a causa consciente dela)",
    "por_que_e_idiota": "Crustáceos ancestrais tinham olhos compostos convencionais de aposição com lentes hexagonais comuns (como nos insetos)! A transição para lentes de reflexão quadrada ocorreu por pequenas mudanças na deposição de cristais de purina na cutícula das facetas em espécies que migraram para águas turvas de pouca luminosidade.",
    "a_ciencia_real": "A seleção natural preservou variações que aumentavam a captação de fótons escassos no fundo do mar. Astrônomos se inspiraram na óptica da lagosta para construir telescópios espaciais de raios-X (*Lobster-eye X-ray optics*) precisamente porque a seleção natural é o mais engenhoso otimizador físico do universo.",
    "fontes_cientificas": [
      {
        "autor_ano": "Land, M. F. (1976)",
        "titulo": "Superposition images are formed by reflection in the eyes of some squillid mantis shrimps",
        "periodico": "Nature, 263, 764–765",
        "doi_ou_link": "https://doi.org/10.1038/263764a0"
      },
      {
        "autor_ano": "Land, M. F. & Nilsson, D.-E. (2012)",
        "titulo": "Animal Eyes (2nd Edition)",
        "periodico": "Oxford University Press",
        "doi_ou_link": "https://doi.org/10.1093/acprof:oso/9780199581139.001.0001"
      }
    ],
    "quiz": {
      "pergunta": "Qual instrumento moderno da astronomia foi inspirado na óptica natural dos olhos de lagosta?",
      "opcoes": [
        "Telescópios espaciais de raios-X de amplo campo (Lobster-eye optics).",
        "Lentes de óculos de natação para tartarugas.",
        "Microscópios de brinquedo para crianças.",
        "Bússolas magnéticas de navios."
      ],
      "correta": 0,
      "explicacao_rapida": "Telescópios de raios-X cósmicos usam o princípio de reflexão curva dos olhos de lagostas!"
    }
  },
  {
    "id": "design-tromba-elefante-complexidade",
    "titulo": "A tromba do elefante tem 40.000 músculos: se faltasse 1 metro, ele morreria de sede!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "A tromba do elefante combina lábio e nariz com mais de 40.000 feixes musculares e funciona como mangueira, braço mecânico e snorkel. Um elefante com meia tromba não alcançaria a água no chão nem as folhas altas e morreria! Ela teve que ser criada inteira!",
    "analogia_absurda": "Um canudo de refrigerante cortado pela metade que não alcança o fundo do copo.",
    "citacao_ou_versiculo": "Panfleto do zoológico bíblico sobre o milagre da tromba dos paquidermes.",
    "nivel_delirio": 8.5,
    "rotulo_delirio": "Domador com Mangueira Furada",
    "falacia_logica": "Incredulidade Pessoal + Omissão de Toda a Sequência Fóssil de Proboscídeos",
    "por_que_e_idiota": "Os ancestrais dos elefantes NÃO TINHAM pernas gigantes de 4 metros nem presas colossais para precisarem de tromba longa para beber água! Seus ancestrais basais eram animais de pernas curtas e corpo baixo que bebiam água agachados normalmente sem tromba nenhuma (como o *Eritherium* e o *Numidotherium* de 55 milhões de anos, do tamanho de um cachorro grande)!",
    "a_ciencia_real": "A tromba alongou-se em sincronia co-evolutiva gradual com o aumento da altura das pernas, o crescimento dos dentes incisivos defensivos (presas) e o encurtamento do pescoço maciço necessário para sustentar crânios de 100 kg. A série fóssil documenta cada milímetro da evolução: *Moeritherium* -> *Palaeomastodon* -> *Gomphotherium* -> *Deinotherium* -> elefantes e mamutes modernos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Gheerbrant, E. (2009)",
        "titulo": "Paleocene emergence of elephant relatives and the rapid radiation of African ungulates",
        "periodico": "PNAS, 106(26), 10717–10721",
        "doi_ou_link": "https://doi.org/10.1073/pnas.0900251106"
      },
      {
        "autor_ano": "Shoshani, J. (1998)",
        "titulo": "Understanding proboscidean evolution: a formidable task",
        "periodico": "Trends in Ecology & Evolution, 13(12), 480–487",
        "doi_ou_link": "https://doi.org/10.1016/S0169-5347(98)01491-8"
      }
    ],
    "quiz": {
      "pergunta": "Como os primeiros ancestrais basais dos proboscídeos bebiam água há 55 milhões de anos?",
      "opcoes": [
        "Eram animais baixos de pernas curtas que alcançavam a água diretamente com a boca sem precisar de tromba.",
        "Usavam canudos feitos de bambu.",
        "Elefantes ancestrais voavam até o lago.",
        "Não bebiam água, comiam apenas pedras úmidas."
      ],
      "correta": 0,
      "explicacao_rapida": "Eram animais baixos e atarracados que alcançavam riachos diretamente com a boca!"
    }
  },
  {
    "id": "evolucao-tentilhoes-bicos-ciclicos",
    "titulo": "Os tentilhões de Darwin só oscilam o bico na seca e voltam ao normal na chuva: não há evolução!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Os estudos de Peter e Rosemary Grant em Galápagos mostraram que na seca o bico dos tentilhões aumenta 1 milímetro para quebrar sementes duras e quando a chuva volta o bico diminui! É só uma oscilação climática cíclica sem ganho nenhum; tentilhão sempre continua sendo tentilhão!",
    "analogia_absurda": "Uma sanfona que abre e fecha e continua sendo a mesma sanfona de sempre.",
    "citacao_ou_versiculo": "Jonathan Wells: 'Os tentilhões de Galápagos não evoluem, apenas oscilam!'",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Sanfoneiro de Galápagos",
    "falacia_logica": "Miopia Temporal + Ignorância da Especiação Real Documentada na Ilha de Daphne Major",
    "por_que_e_idiota": "Os criacionistas convenientemente esquecem de ler o que aconteceu a seguir na mesma ilha! Em 2018, os próprios Peter e Rosemary Grant publicaram na prestigiosa revista Science a ESPECIAÇÃO COMPLETA EM TEMPO REAL de uma linhagem inteiramente nova de tentilhões (*a linhagem 'Big Bird'*), que surgiu por hibridização, adquiriu bico inédito, canto próprio e isolamento reprodutivo completo em apenas três gerações!",
    "a_ciencia_real": "A oscilação cíclica é a prova empírica viva da Seleção Natural Direcional em ação medindo o valor adaptativo da morfologia conforme a disponibilidade ecológica de sementes. Quando novas combinações genéticas e nichos se abrem, a especiação ocorre diante dos olhos dos cientistas.",
    "fontes_cientificas": [
      {
        "autor_ano": "Lamichhaney, S. et al. (2018)",
        "titulo": "Rapid hybrid speciation in Darwin’s finches",
        "periodico": "Science, 359(6372), 224–228",
        "doi_ou_link": "https://doi.org/10.1126/science.aao4593"
      },
      {
        "autor_ano": "Grant, P. R. & Grant, B. R. (2014)",
        "titulo": "40 Years of Evolution: Darwin's Finches on Daphne Major Island",
        "periodico": "Princeton University Press",
        "doi_ou_link": "https://press.princeton.edu/books/hardcover/9780691160467/40-years-of-evolution"
      }
    ],
    "quiz": {
      "pergunta": "Qual linhagem nova de tentilhões de Galápagos isolada reprodutivamente foi observada surgindo em tempo real na Science (2018)?",
      "opcoes": [
        "A linhagem 'Big Bird' em Daphne Major, que se isolou em 3 gerações.",
        "O tentilhão voador de Marte.",
        "O pássaro robô de metal.",
        "Nenhuma espécie nova jamais surgiu."
      ],
      "correta": 0,
      "explicacao_rapida": "A linhagem 'Big Bird' originou uma espécie isolada reprodutivamente documentada na Science!"
    }
  },
  {
    "id": "cetaceos-pakicetus-ambulocetus-terrestre",
    "titulo": "O Pakicetus era só um mamífero terrestre parecido com lobo que nunca nadou!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "Philip Gingerich encontrou em 1983 um pedaço de crânio terrestre no Paquistão e desenhou uma baleia inteira nadando nos oceanos! Anos depois acharam o esqueleto e viram que era um animal terrestre de 4 patas comum! A evolução das baleias é fantasia de ilustrador!",
    "analogia_absurda": "Achar uma orelha de porco e desenhar um submarino atômico em volta dela.",
    "citacao_ou_versiculo": "Duane Gish em palestras de debates criacionistas.",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Navegador de Lobo Seco",
    "falacia_logica": "Supressão da Série Completa de Transição Fóssil dos Cetáceos",
    "por_que_e_idiota": "Gingerich identificou o Pakicetus como parente das baleias em 1983 por uma característica diagnóstica anatômica EXCLUSIVA e INEGÁVEL: a *bulla tympanica* sigmoideia do ouvido médio, presente UNICAMENTE em baleias e em nenhum outro mamífero terrestre do planeta!",
    "a_ciencia_real": "Hoje temos dezenas de esqueletos completos documentando TODOS os degraus da transição anfíbia peixe-mamífero para o mar: *Pakicetus* (artiodáctilo costeiro semi-aquático com ouvido de baleia) -> *Ambulocetus* (o 'crocodilo-mamífero' com patas nadadeiras) -> *Rodhocetus* (com membros atrofiados e cauda propulsora) -> *Basilosaurus* (de 18 metros com patas traseiras vestigiais de 30 cm) -> baleias modernas!",
    "fontes_cientificas": [
      {
        "autor_ano": "Thewissen, J. G. M. et al. (2001)",
        "titulo": "Skeletons of terrestrial cetaceans and the relationship of whales to artiodactyls",
        "periodico": "Nature, 413, 277–281",
        "doi_ou_link": "https://doi.org/10.1038/35095005"
      },
      {
        "autor_ano": "Gingerich, P. D. et al. (2001)",
        "titulo": "Origin of whales from early artiodactyls: Hands and feet of Eocene Cetacea from Pakistan",
        "periodico": "Science, 293(5538), 2239–2242",
        "doi_ou_link": "https://doi.org/10.1126/science.1063902"
      }
    ],
    "quiz": {
      "pergunta": "Qual estrutura óssea do ouvido comprovou que o Pakicetus fóssil era a linhagem ancestral das baleias?",
      "opcoes": [
        "A espessa bulla timpânica com processo sigmoide exclusivo dos cetáceos.",
        "Um fone de ouvido de pedra.",
        "Três antenas de rádio FM.",
        "Guelras de peixe dourado."
      ],
      "correta": 0,
      "explicacao_rapida": "A bulla timpânica com processo sigmoide é diagnóstica e exclusiva de cetáceos!"
    }
  },
  {
    "id": "evolucao-plantas-c3-c4-impossivel",
    "titulo": "A transição de fotossíntese C3 para C4 exigiria mudar a anatomia foliar de uma só vez!",
    "categoria": "design_inteligente",
    "categoria_label": "🧩 Design Inteligente & Complexidade",
    "argumento_criacionista": "Plantas C4 (como milho e cana) possuem a complexa anatomia Kranz com células da bainha perivascular isolando a enzima RuBisCO para evitar fotorrespiração. Uma planta não pode ter meia anatomia Kranz ou meia bomba de malato: ou o sistema está pronto ou a planta sufoca!",
    "analogia_absurda": "Mudar o motor de um carro a gasolina para motor elétrico enquanto dirige a 120 km/h na rodovia.",
    "citacao_ou_versiculo": "Artigo do Discovery Institute sobre a complexidade da fotorrespiração.",
    "nivel_delirio": 8.7,
    "rotulo_delirio": "Agrônomo com Ciclo de Calvin Travado",
    "falacia_logica": "Incredulidade Pessoal + Omissão de Espécies Vivas com Estados Intermediários C3-C4",
    "por_que_e_idiota": "Existem centenas de espécies de plantas vivas com ESTÁGIOS INTERMEDIÁRIOS C3-C4 documentados em detalhes pela botânica (gêneros como *Flaveria*, *Panicum* e *Heliotropium*), que utilizam ciclos parciais de glicina descarboxilase para recapturar CO2 antes de completarem a anatomia Kranz clássica!",
    "a_ciencia_real": "A evolução da fotossíntese C4 é um dos exemplos mais espetaculares de EVOLUÇÃO CONVERGENTE: ela evoluiu de forma totalmente independente mais de 60 vezes em diferentes famílias de angiospermas nos últimos 30 milhões de anos em resposta a quedas na concentração de CO2 atmosférico e climas áridos.",
    "fontes_cientificas": [
      {
        "autor_ano": "Sage, R. F. (2004)",
        "titulo": "The evolution of C4 photosynthesis",
        "periodico": "New Phytologist, 161(2), 341–370",
        "doi_ou_link": "https://doi.org/10.1111/j.1469-8137.2004.00974.x"
      },
      {
        "autor_ano": "Christin, P. A. et al. (2008)",
        "titulo": "Oligocene CO2 decline promoted the emergence of C4 grasses",
        "periodico": "Current Biology, 18(1), 37–43",
        "doi_ou_link": "https://doi.org/10.1016/j.cub.2007.11.058"
      }
    ],
    "quiz": {
      "pergunta": "Quantas vezes a via fotossintética C4 evoluiu de forma independente em plantas terrestres?",
      "opcoes": [
        "Mais de 60 vezes de forma independente por evolução convergente.",
        "Apenas 1 vez no jardim de Adão.",
        "Nunca evoluiu, veio de sementes alienígenas.",
        "Exatamente 2 vezes em laboratório."
      ],
      "correta": 0,
      "explicacao_rapida": "Evoluiu de forma convergente e independente mais de 60 vezes em famílias distintas de plantas!"
    }
  },
  {
    "id": "genetica-dna-nao-codificante-introns",
    "titulo": "Íntrons são lixo no meio dos genes: um projetista inteligente escreveria sem interrupções!",
    "categoria": "genetica_mutacao",
    "categoria_label": "🧬 Genética & Mutações",
    "argumento_criacionista": "Genes de eucariotos são interrompidos por milhares de pedaços sem sentido chamados íntrons que precisam ser cortados fora pelo spliceossomo antes da proteína ser feita. Criacionistas dizem que isso é código limpo e perfeito de Deus, mas se você tirar íntrons a célula continua viva!",
    "analogia_absurda": "Inserir parágrafos de bula de remédio no meio das páginas de um romance de amor.",
    "citacao_ou_versiculo": "Debate sobre arquitetura genômica eucariótica e design.",
    "nivel_delirio": 8.6,
    "rotulo_delirio": "Editor com Tesoura Cega",
    "falacia_logica": "Distorção de Genômica Evolutiva",
    "por_que_e_idiota": "Os íntrons são os vestígios da invasão primordial de transposons autocatalíticos de íntrons do grupo II em arqueias ancestrais que formaram o primeiro eucarioto! Eles não são 'design limpo e econômico', mas a evolução cooptou essa bagunça para inventar o SPLICING ALTERNATIVO, permitindo que um único gene gere dezenas de isoformas proteicas diferentes em humanos.",
    "a_ciencia_real": "Bactérias não têm íntrons espliceossômicos e proliferam em minutos. Os eucariotos precisam de uma máquina colossal de 300 proteínas e 5 RNAs (o spliceossomo) consumindo ATP apenas para cortar fora esses fragmentos antes de ler o RNA mensageiro, um custo metabólico herdado que o design inteligente não consegue explicar.",
    "fontes_cientificas": [
      {
        "autor_ano": "Koonin, E. V. (2006)",
        "titulo": "The origin of introns and their role in eukaryogenesis",
        "periodico": "Biology Direct, 1, 22",
        "doi_ou_link": "https://doi.org/10.1186/1745-6150-1-22"
      },
      {
        "autor_ano": "Lynch, M. (2007)",
        "titulo": "The Origins of Genome Architecture",
        "periodico": "Sinauer Associates",
        "doi_ou_link": "https://global.oup.com/ushe/product/the-origins-of-genome-architecture-9780878934843"
      }
    ],
    "quiz": {
      "pergunta": "Qual processo evolutivo vantajoso os íntrons permitiram aos eucariotos multicelulares?",
      "opcoes": [
        "O splicing alternativo, gerando múltiplas proteínas diferentes a partir do mesmo gene.",
        "A fotossíntese noturna.",
        "A digestão de plástico e vidro.",
        "O crescimento de dentes de aço."
      ],
      "correta": 0,
      "explicacao_rapida": "O splicing alternativo de éxons permite uma imensa diversidade proteica a partir do mesmo gene!"
    }
  },
  {
    "id": "paleo-arvores-invertidas-diluvio",
    "titulo": "Árvores fósseis invertidas de cabeça para baixo provam que foram soterradas por tsunamis diluvianos!",
    "categoria": "geologia_terra_jovem",
    "categoria_label": "⏳ Geologia & Terra Jovem",
    "argumento_criacionista": "Paleontólogos encontraram troncos de árvores fósseis enterrados de cabeça para baixo com as raízes para cima! Isso prova que uma enxurrada caótica violenta do Dilúvio arrancou as florestas do solo e as jogou de pernas para o ar antes que a lama endurecesse!",
    "analogia_absurda": "Plantar flores enterrando as pétalas na terra e deixando as raízes balançando no vento.",
    "citacao_ou_versiculo": "Harold Clark em 'The New Diluvialism' (1946).",
    "nivel_delirio": 8.8,
    "rotulo_delirio": "Paisagista com Raízes para o Céu",
    "falacia_logica": "Generalização de Fenômeno Local Sedimentológico Comum",
    "por_que_e_idiota": "Troncos de árvores que caem em rios torrenciais, desmoronamentos de encostas e lagos vulcânicos (como visto na erupção do Monte St. Helens em 1980 no Lago Spirit) encharcam com densidade variável: a base da raiz mais pesada com cascalho afunda primeiro e o tronco fica vertical. Em outros casos de correntes de turbidez e deslizamentos subaquáticos locais, troncos quebrados são rolados e enterrados em qualquer ângulo caótico!",
    "a_ciencia_real": "Isso ocorre em inundações e lahares locais conhecidos no presente (princípio do atualismo geológico). Nenhum geólogo nega que enchentes e lahares locais arrancam árvores; o erro grotesco é estender um evento hidrogeológico fluvial local para uma enchente global impossível cobrindo o planeta inteiro.",
    "fontes_cientificas": [
      {
        "autor_ano": "Coffin, H. G. (1983)",
        "titulo": "Mount St. Helens and Spirit Lake: Erect Floating Logs and the Origin of Coal",
        "periodico": "Origins, 10(1), 9–17",
        "doi_ou_link": "https://www.grisda.org/origins-10009"
      },
      {
        "autor_ano": "TalkOrigins Archive",
        "titulo": "CC331_1: Upside-down polystrate trees",
        "periodico": "An Index to Creationist Claims",
        "doi_ou_link": "http://www.talkorigins.org/indexcc/CC/CC331_1.html"
      }
    ],
    "quiz": {
      "pergunta": "Em qual lago vulcânico moderno geólogos observaram troncos flutuando e afundando verticalmente em lama recente?",
      "opcoes": [
        "Lago Spirit, após a erupção do Monte St. Helens em 1980.",
        "No Lago de Genebra na Suíça.",
        "Na represa de Guarapiranga em São Paulo.",
        "No Lago Titicaca."
      ],
      "correta": 0,
      "explicacao_rapida": "No Lago Spirit (St. Helens em 1980), troncos encharcados afundavam eretos em lamas locais!"
    }
  },
  {
    "id": "paleo-pulmoes-aves-dinossauros",
    "titulo": "O pulmão das aves tem fluxo unidirecional: transição a partir de répteis causaria asfixia fatal!",
    "categoria": "dinossauros_paleontologia",
    "categoria_label": "🦕 Dinossauros & Paleontologia",
    "argumento_criacionista": "Mamíferos e répteis respiram com pulmões de fole (entra e sai pelo mesmo tubo). As aves possuem um sistema revolucionário de fluxo de ar contínuo unidirecional com sacos aéreos anteriores e posteriores e parabrônquios. Meio pulmão de ave causaria colapso torácico e asfixia imediata!",
    "analogia_absurda": "Mudar a tubulação de escapamento de um carro para dentro do radiador enquanto o motor está acelerando.",
    "citacao_ou_versiculo": "Michael Denton em 'Evolution: A Theory in Crisis' (Capítulo sobre o pulmão das aves).",
    "nivel_delirio": 8.9,
    "rotulo_delirio": "Pneumologista com Falta de Ar",
    "falacia_logica": "Incredulidade Pessoal + Ignorância da Presença de Sacos Aéreos em Dinossauros Saurísquios",
    "por_que_e_idiota": "Os pulmões com fluxo de ar unidirecional NÃO FORAM INVENTADOS PELAS AVES! Eles já estavam presentes e operando com sucesso há centenas de milhões de anos em seus ancestrais DINOSSAUROS TERÓPODES e saurópodes, como comprovado pela pneumatização óssea vertebral de fósseis (vértebras com cavidades ocas para sacos aéreos)!",
    "a_ciencia_real": "Além disso, biólogos descobriram na década de 2010 que CROCODILOS E LAGARTOS MONITORES também possuem fluxo de ar unidirecional em seus pulmões sem precisar de sacos aéreos complexos! Esse sistema pulmonar de fluxo contínuo evoluiu nos arcossauros basais no início do Triássico para enfrentar uma atmosfera de baixo oxigênio, muito antes das aves aprenderem a voar.",
    "fontes_cientificas": [
      {
        "autor_ano": "Farmer, C. G. & Sanders, K. (2010)",
        "titulo": "Unidirectional airflow in the lungs of alligators",
        "periodico": "Science, 327(5963), 338–340",
        "doi_ou_link": "https://doi.org/10.1126/science.1180219"
      },
      {
        "autor_ano": "O'Connor, P. M. & Claessens, L. P. A. M. (2005)",
        "titulo": "Basic avian pulmonary design and flow-through ventilation in non-avian theropod dinosaurs",
        "periodico": "Nature, 436, 253–256",
        "doi_ou_link": "https://doi.org/10.1038/nature03716"
      }
    ],
    "quiz": {
      "pergunta": "Quais animais vivos compartilham fluxo de ar pulmonar unidirecional herdado de ancestrais arcossauros comuns?",
      "opcoes": [
        "Aves e jacarés/crocodilos modernos.",
        "Baleias e golfinhos.",
        "Tubarões e polvos.",
        "Cavalos e zebras."
      ],
      "correta": 0,
      "explicacao_rapida": "Tanto aves quanto crocodilianos compartilham fluxo de ar unidirecional de arcossauros ancestrais!"
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARGUMENTOS_CLASSICOS };
}
