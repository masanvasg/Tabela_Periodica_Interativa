// === DADOS DOS ELEMENTOS ===
const elementsData = [
    { numero: 1, simbolo: 'H', nome: 'Hidrogênio', massa: 1.008, grupo: 'nao-metal', linha: 1, coluna: 1, config: '1s¹', resumo: 'O elemento mais leve e abundante do universo. Compõe a maior parte da matéria estelar e é fundamental na água.' },
    { numero: 2, simbolo: 'He', nome: 'Hélio', massa: 4.0026, grupo: 'gas-nobre', linha: 1, coluna: 18, config: '1s²', resumo: 'Um gás nobre inerte, famoso por ser usado em balões e por alterar a voz. É o segundo elemento mais abundante.' },
    { numero: 3, simbolo: 'Li', nome: 'Lítio', massa: 6.94, grupo: 'metal-alcalino', linha: 2, coluna: 1, config: '[He] 2s¹', resumo: 'Um metal leve e reativo, crucial para a fabricação de baterias modernas (íon-lítio).' },
    { numero: 4, simbolo: 'Be', nome: 'Berílio', massa: 9.0122, grupo: 'alcalino-terroso', linha: 2, coluna: 2, config: '[He] 2s²', resumo: 'Metal leve usado em ligas para aumentar a rigidez e em janelas de tubos de raios-X.' },
    { numero: 5, simbolo: 'B', nome: 'Boro', massa: 10.81, grupo: 'semimetal', linha: 2, coluna: 13, config: '[He] 2s² 2p¹', resumo: 'Um semimetal usado em fibras de vidro de alta resistência e em produtos de limpeza (bórax).' },
    { numero: 6, simbolo: 'C', nome: 'Carbono', massa: 12.011, grupo: 'nao-metal', linha: 2, coluna: 14, config: '[He] 2s² 2p²', resumo: 'A base da vida orgânica. Forma uma variedade incrível de compostos, desde o grafite até o diamante.' },
    { numero: 7, simbolo: 'N', nome: 'Nitrogênio', massa: 14.007, grupo: 'nao-metal', linha: 2, coluna: 15, config: '[He] 2s² 2p³', resumo: 'Componente principal do ar que respiramos (cerca de 78%). Essencial para proteínas e fertilizantes.' },
    { numero: 8, simbolo: 'O', nome: 'Oxigênio', massa: 15.999, grupo: 'nao-metal', linha: 2, coluna: 16, config: '[He] 2s² 2p⁴', resumo: 'Essencial para a respiração da maioria dos seres vivos e principal componente da água.' },
    { numero: 9, simbolo: 'F', nome: 'Flúor', massa: 18.998, grupo: 'halogenio', linha: 2, coluna: 17, config: '[He] 2s² 2p⁵', resumo: 'O elemento mais eletronegativo e reativo. Usado em cremes dentais e na produção de teflon.' },
    { numero: 10, simbolo: 'Ne', nome: 'Neônio', massa: 20.180, grupo: 'gas-nobre', linha: 2, coluna: 18, config: '[He] 2s² 2p⁶', resumo: 'Gás nobre famoso por sua cor vermelha brilhante em letreiros luminosos.' },
    { numero: 11, simbolo: 'Na', nome: 'Sódio', massa: 22.990, grupo: 'metal-alcalino', linha: 3, coluna: 1, config: '[Ne] 3s¹', resumo: 'Metal alcalino muito reativo que reage explosivamente com a água. Componente do sal de cozinha (NaCl).' },
    { numero: 12, simbolo: 'Mg', nome: 'Magnésio', massa: 24.305, grupo: 'alcalino-terroso', linha: 3, coluna: 2, config: '[Ne] 3s²', resumo: 'Metal leve e inflamável, usado em ligas de aviação e em fogos de artifício (luz branca brilhante).' },
    { numero: 13, simbolo: 'Al', nome: 'Alumínio', massa: 26.982, grupo: 'outros-metais', linha: 3, coluna: 13, config: '[Ne] 3s² 3p¹', resumo: 'Metal leve, resistente à corrosão, amplamente utilizado em latas, aviões e utensílios de cozinha.' },
    { numero: 14, simbolo: 'Si', nome: 'Silício', massa: 28.085, grupo: 'semimetal', linha: 3, coluna: 14, config: '[Ne] 3s² 3p²', resumo: 'A base da eletrônica moderna. É o principal componente de chips de computador e semicondutores.' },
    { numero: 15, simbolo: 'P', nome: 'Fósforo', massa: 30.974, grupo: 'nao-metal', linha: 3, coluna: 15, config: '[Ne] 3s² 3p³', resumo: 'Essencial para a vida (DNA, ATP), também usado em palitos de fósforo e fertilizantes.' },
    { numero: 16, simbolo: 'S', nome: 'Enxofre', massa: 32.06, grupo: 'nao-metal', linha: 3, coluna: 16, config: '[Ne] 3s² 3p⁴', resumo: 'Sólido amarelo conhecido pelo cheiro característico de seus compostos (ovos podres). Usado em ácido sulfúrico.' },
    { numero: 17, simbolo: 'Cl', nome: 'Cloro', massa: 35.45, grupo: 'halogenio', linha: 3, coluna: 17, config: '[Ne] 3s² 3p⁵', resumo: 'Gás amarelo-esverdeado, usado como desinfetante em piscinas e água potável. Componente do sal de cozinha (NaCl).' },
    { numero: 18, simbolo: 'Ar', nome: 'Argônio', massa: 39.948, grupo: 'gas-nobre', linha: 3, coluna: 18, config: '[Ne] 3s² 3p⁶', resumo: 'Gás nobre inerte usado em lâmpadas incandescentes para proteger o filamento e em processos de soldagem.' },
    { numero: 19, simbolo: 'K', nome: 'Potássio', massa: 39.098, grupo: 'metal-alcalino', linha: 4, coluna: 1, config: '[Ar] 4s¹', resumo: 'Metal alcalino reativo, essencial para a função nervosa e encontrado em bananas.' },
    { numero: 20, simbolo: 'Ca', nome: 'Cálcio', massa: 40.078, grupo: 'alcalino-terroso', linha: 4, coluna: 2, config: '[Ar] 4s²', resumo: 'Essencial para ossos e dentes. Encontrado em laticínios, gesso e cimento.' },
    { numero: 21, simbolo: 'Sc', nome: 'Escândio', massa: 44.956, grupo: 'metal-transicao', linha: 4, coluna: 3, config: '[Ar] 3d¹ 4s²', resumo: 'Usado em ligas de alumínio de alta performance para equipamentos esportivos e caças aéreos.' },
    { numero: 22, simbolo: 'Ti', nome: 'Titânio', massa: 47.867, grupo: 'metal-transicao', linha: 4, coluna: 4, config: '[Ar] 3d² 4s²', resumo: 'Conhecido por sua incrível relação resistência/peso. Usado em implantes médicos e na indústria aeroespacial.' },
    { numero: 23, simbolo: 'V', nome: 'Vanádio', massa: 50.942, grupo: 'metal-transicao', linha: 4, coluna: 5, config: '[Ar] 3d³ 4s²', resumo: 'Adicionado ao aço para aumentar sua resistência e dureza. Usado em ferramentas.' },
    { numero: 24, simbolo: 'Cr', nome: 'Cromo', massa: 51.996, grupo: 'metal-transicao', linha: 4, coluna: 6, config: '[Ar] 3d⁵ 4s¹', resumo: 'Famoso por seu uso em revestimentos brilhantes (cromagem) e em aço inoxidável.' },
    { numero: 25, simbolo: 'Mn', nome: 'Manganês', massa: 54.938, grupo: 'metal-transicao', linha: 4, coluna: 7, config: '[Ar] 3d⁵ 4s²', resumo: 'Essencial na produção de aço, removendo impurezas e aumentando a resistência.' },
    { numero: 26, simbolo: 'Fe', nome: 'Ferro', massa: 55.845, grupo: 'metal-transicao', linha: 4, coluna: 8, config: '[Ar] 3d⁶ 4s²', resumo: 'O pilar da indústria moderna. Principal componente do aço e essencial para o transporte de oxigênio no sangue (hemoglobina).' },
    { numero: 27, simbolo: 'Co', nome: 'Cobalto', massa: 58.933, grupo: 'metal-transicao', linha: 4, coluna: 9, config: '[Ar] 3d⁷ 4s²', resumo: 'Usado em superligas para motores a jato e ímãs permanentes. Confere a cor azul intensa ao vidro.' },
    { numero: 28, simbolo: 'Ni', nome: 'Níquel', massa: 58.693, grupo: 'metal-transicao', linha: 4, coluna: 10, config: '[Ar] 3d⁸ 4s²', resumo: 'Usado em aço inoxidável e na cunhagem de moedas. Também é um catalisador importante.' },
    { numero: 29, simbolo: 'Cu', nome: 'Cobre', massa: 63.546, grupo: 'metal-transicao', linha: 4, coluna: 11, config: '[Ar] 3d¹⁰ 4s¹', resumo: 'Excelente condutor de eletricidade e calor. Usado em fiação elétrica, tubulações e moedas.' },
    { numero: 30, simbolo: 'Zn', nome: 'Zinco', massa: 65.38, grupo: 'metal-transicao', linha: 4, coluna: 12, config: '[Ar] 3d¹⁰ 4s²', resumo: 'Usado para galvanizar (proteger) o aço contra a ferrugem e em ligas como o latão.' },
    { numero: 31, simbolo: 'Ga', nome: 'Gálio', massa: 69.723, grupo: 'outros-metais', linha: 4, coluna: 13, config: '[Ar] 3d¹⁰ 4s² 4p¹', resumo: 'Metal com baixo ponto de fusão (derrete na mão). Usado em semicondutores e LEDs.' },
    { numero: 32, simbolo: 'Ge', nome: 'Germânio', massa: 72.630, grupo: 'semimetal', linha: 4, coluna: 14, config: '[Ar] 3d¹⁰ 4s² 4p²', resumo: 'Semicondutor usado em eletrônica antiga e em lentes de câmeras infravermelhas.' },
    { numero: 33, simbolo: 'As', nome: 'Arsênio', massa: 74.922, grupo: 'semimetal', linha: 4, coluna: 15, config: '[Ar] 3d¹⁰ 4s² 4p³', resumo: 'Semimetal historicamente famoso como veneno, mas hoje usado em semicondutores.' },
    { numero: 34, simbolo: 'Se', nome: 'Selênio', massa: 78.971, grupo: 'nao-metal', linha: 4, coluna: 16, config: '[Ar] 3d¹⁰ 4s² 4p⁴', resumo: 'Usado em fotocélulas (conduz eletricidade quando exposto à luz) e como suplemento nutricional.' },
    { numero: 35, simbolo: 'Br', nome: 'Bromo', massa: 79.904, grupo: 'halogenio', linha: 4, coluna: 17, config: '[Ar] 3d¹⁰ 4s² 4p⁵', resumo: 'O único não-metal líquido em temperatura ambiente. Usado em retardadores de chama.' },
    { numero: 36, simbolo: 'Kr', nome: 'Criptônio', massa: 83.798, grupo: 'gas-nobre', linha: 4, coluna: 18, config: '[Ar] 3d¹⁰ 4s² 4p⁶', resumo: 'Gás nobre usado em iluminação de aeroportos de alta intensidade e em alguns tipos de lasers.' },
    { numero: 37, simbolo: 'Rb', nome: 'Rubídio', massa: 85.468, grupo: 'metal-alcalino', linha: 5, coluna: 1, config: '[Kr] 5s¹', resumo: 'Metal alcalino reativo, usado em relógios atômicos e células fotoelétricas.' },
    { numero: 38, simbolo: 'Sr', nome: 'Estrôncio', massa: 87.62, grupo: 'alcalino-terroso', linha: 5, coluna: 2, config: '[Kr] 5s²', resumo: 'Conhecido por produzir a cor vermelha intensa em fogos de artifício.' },
    { numero: 39, simbolo: 'Y', nome: 'Ítrio', massa: 88.906, grupo: 'metal-transicao', linha: 5, coluna: 3, config: '[Kr] 4d¹ 5s²', resumo: 'Usado em lasers, supercondutores e para produzir a cor vermelha em telas de TV antigas.' },
    { numero: 40, simbolo: 'Zr', nome: 'Zircônio', massa: 91.224, grupo: 'metal-transicao', linha: 5, coluna: 4, config: '[Kr] 4d² 5s²', resumo: 'Extremamente resistente à corrosão, usado em reatores nucleares e implantes dentários.' },
    { numero: 41, simbolo: 'Nb', nome: 'Nióbio', massa: 92.906, grupo: 'metal-transicao', linha: 5, coluna: 5, config: '[Kr] 4d⁴ 5s¹', resumo: 'Usado em superligas para motores a jato e em aços de alta resistência para oleodutos.' },
    { numero: 42, simbolo: 'Mo', nome: 'Molibdênio', massa: 95.96, grupo: 'metal-transicao', linha: 5, coluna: 6, config: '[Kr] 4d⁵ 5s¹', resumo: 'Possui um ponto de fusão muito alto. Usado em aços de alta resistência e como catalisador.' },
    { numero: 43, simbolo: 'Tc', nome: 'Tecnécio', massa: 98, grupo: 'metal-transicao', linha: 5, coluna: 7, config: '[Kr] 4d⁵ 5s²', resumo: 'O primeiro elemento produzido artificialmente. É radioativo e usado em diagnósticos médicos (radiofármacos).' },
    { numero: 44, simbolo: 'Ru', nome: 'Rutênio', massa: 101.07, grupo: 'metal-transicao', linha: 5, coluna: 8, config: '[Kr] 4d⁷ 5s¹', resumo: 'Metal raro e duro, usado como catalisador e em contatos elétricos de alta durabilidade.' },
    { numero: 45, simbolo: 'Rh', nome: 'Ródio', massa: 102.91, grupo: 'metal-transicao', linha: 5, coluna: 9, config: '[Kr] 4d⁸ 5s¹', resumo: 'Metal precioso extremamente raro e caro. Usado em catalisadores automotivos e como revestimento anti-corrosão.' },
    { numero: 46, simbolo: 'Pd', nome: 'Paládio', massa: 106.42, grupo: 'metal-transicao', linha: 5, coluna: 10, config: '[Kr] 4d¹⁰', resumo: 'Metal precioso usado em catalisadores automotivos, joias (ouro branco) e eletrônicos.' },
    { numero: 47, simbolo: 'Ag', nome: 'Prata', massa: 107.87, grupo: 'metal-transicao', linha: 5, coluna: 11, config: '[Kr] 4d¹⁰ 5s¹', resumo: 'O melhor condutor elétrico. Usado em joalheria, talheres, eletrônicos e fotografia.' },
    { numero: 48, simbolo: 'Cd', nome: 'Cádmio', massa: 112.41, grupo: 'metal-transicao', linha: 5, coluna: 12, config: '[Kr] 4d¹⁰ 5s²', resumo: 'Metal tóxico usado em baterias recarregáveis (NiCd) e como pigmento (amarelo de cádmio).' },
    { numero: 49, simbolo: 'In', nome: 'Índio', massa: 114.82, grupo: 'outros-metais', linha: 5, coluna: 13, config: '[Kr] 4d¹⁰ 5s² 5p¹', resumo: 'Metal macio usado para fazer filmes transparentes condutores, essenciais em telas de LCD e touchscreens.' },
    { numero: 50, simbolo: 'Sn', nome: 'Estanho', massa: 118.71, grupo: 'outros-metais', linha: 5, coluna: 14, config: '[Kr] 4d¹⁰ 5s² 5p²', resumo: 'Usado na solda e para revestir latas de aço (folha de flandres), prevenindo a ferrugem.' },
    { numero: 51, simbolo: 'Sb', nome: 'Antimônio', massa: 121.76, grupo: 'semimetal', linha: 5, coluna: 15, config: '[Kr] 4d¹⁰ 5s² 5p³', resumo: 'Usado em retardadores de chama e para endurecer ligas de chumbo, como em baterias de carro.' },
    { numero: 52, simbolo: 'Te', nome: 'Telúrio', massa: 127.60, grupo: 'semimetal', linha: 5, coluna: 16, config: '[Kr] 4d¹⁰ 5s² 5p⁴', resumo: 'Semicondutor usado em ligas metálicas e em painéis solares (telureto de cádmio).' },
    { numero: 53, simbolo: 'I', nome: 'Iodo', massa: 126.90, grupo: 'halogenio', linha: 5, coluna: 17, config: '[Kr] 4d¹⁰ 5s² 5p⁵', resumo: 'Sólido que sublima em um vapor roxo. Essencial para a glândula tireoide e usado como antisséptico.' },
    { numero: 54, simbolo: 'Xe', nome: 'Xenônio', massa: 131.29, grupo: 'gas-nobre', linha: 5, coluna: 18, config: '[Kr] 4d¹⁰ 5s² 5p⁶', resumo: 'Gás nobre denso usado em faróis de carros de alta intensidade (HID), lasers e como anestésico.' },
    { numero: 55, simbolo: 'Cs', nome: 'Césio', massa: 132.91, grupo: 'metal-alcalino', linha: 6, coluna: 1, config: '[Xe] 6s¹', resumo: 'O metal mais reativo, explode em contato com a água. Usado em relógios atômicos, a base do segundo.' },
    { numero: 56, simbolo: 'Ba', nome: 'Bário', massa: 137.33, grupo: 'alcalino-terroso', linha: 6, coluna: 2, config: '[Xe] 6s²', resumo: 'Usado em fluidos de perfuração de petróleo e no "milk-shake" de bário para exames de raios-X do sistema digestivo.' },
    { text: '57-71', grupo: 'lantanideo', linha: 6, coluna: 3 }, // Placeholder Lantanídeos
    { numero: 72, simbolo: 'Hf', nome: 'Háfnio', massa: 178.49, grupo: 'metal-transicao', linha: 6, coluna: 4, config: '[Xe] 4f¹⁴ 5d² 6s²', resumo: 'Quimicamente similar ao zircônio. Usado em barras de controle de reatores nucleares.' },
    { numero: 73, simbolo: 'Ta', nome: 'Tântalo', massa: 180.95, grupo: 'metal-transicao', linha: 6, coluna: 5, config: '[Xe] 4f¹⁴ 5d³ 6s²', resumo: 'Altamente resistente à corrosão, usado em capacitores para eletrônicos (celulares) e implantes cirúrgicos.' },
    { numero: 74, simbolo: 'W', nome: 'Tungstênio', massa: 183.84, grupo: 'metal-transicao', linha: 6, coluna: 6, config: '[Xe] 4f¹⁴ 5d⁴ 6s²', resumo: 'Possui o maior ponto de fusão de todos os metais. Usado em filamentos de lâmpadas e ferramentas de corte.' },
    { numero: 75, simbolo: 'Re', nome: 'Rênio', massa: 186.21, grupo: 'metal-transicao', linha: 6, coluna: 7, config: '[Xe] 4f¹⁴ 5d⁵ 6s²', resumo: 'Metal raro e denso, usado em superligas para turbinas de motores a jato.' },
    { numero: 76, simbolo: 'Os', nome: 'Ósmio', massa: 190.23, grupo: 'metal-transicao', linha: 6, coluna: 8, config: '[Xe] 4f¹⁴ 5d⁶ 6s²', resumo: 'O elemento natural mais denso. Usado em ligas muito duras, como pontas de caneta-tinteiro.' },
    { numero: 77, simbolo: 'Ir', nome: 'Irídio', massa: 192.22, grupo: 'metal-transicao', linha: 6, coluna: 9, config: '[Xe] 4f¹⁴ 5d⁷ 6s²', resumo: 'O segundo elemento mais denso, extremamente resistente à corrosão. Famoso pela camada de irídio que marca a extinção dos dinossauros.' },
    { numero: 78, simbolo: 'Pt', nome: 'Platina', massa: 195.08, grupo: 'metal-transicao', linha: 6, coluna: 10, config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', resumo: 'Metal precioso, muito estável e raro. Usado em joias, catalisadores automotivos e equipamentos de laboratório.' },
    { numero: 79, simbolo: 'Au', nome: 'Ouro', massa: 196.97, grupo: 'metal-transicao', linha: 6, coluna: 11, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', resumo: 'Metal precioso valorizado por sua beleza, maleabilidade e resistência à corrosão. Usado em joias, eletrônicos e como reserva de valor.' },
    { numero: 80, simbolo: 'Hg', nome: 'Mercúrio', massa: 200.59, grupo: 'metal-transicao', linha: 6, coluna: 12, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', resumo: 'O único metal líquido em temperatura ambiente. Tóxico. Usado em termômetros antigos, lâmpadas fluorescentes e interruptores.' },
    { numero: 81, simbolo: 'Tl', nome: 'Tálio', massa: 204.38, grupo: 'outros-metais', linha: 6, coluna: 13, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', resumo: 'Metal macio e tóxico, anteriormente usado em venenos de rato e agora em eletrônicos especiais.' },
    { numero: 82, simbolo: 'Pb', nome: 'Chumbo', massa: 207.2, grupo: 'outros-metais', linha: 6, coluna: 14, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', resumo: 'Metal denso, macio e tóxico. Usado em baterias de carro, proteção contra radiação e soldas (agora restrito).' },
    { numero: 83, simbolo: 'Bi', nome: 'Bismuto', massa: 208.98, grupo: 'outros-metais', linha: 6, coluna: 15, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', resumo: 'Metal pesado e não-tóxico, usado em medicamentos para indigestão (Pepto-Bismol) e ligas de baixo ponto de fusão.' },
    { numero: 84, simbolo: 'Po', nome: 'Polônio', massa: 209, grupo: 'semimetal', linha: 6, coluna: 16, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', resumo: 'Elemento extremamente radioativo e tóxico. Descoberto por Marie Curie. Usado como fonte de partículas alfa.' },
    { numero: 85, simbolo: 'At', nome: 'Astato', massa: 210, grupo: 'halogenio', linha: 6, coluna: 17, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', resumo: 'O elemento natural mais raro da Terra, altamente radioativo. Existe apenas em quantidades minúsculas.' },
    { numero: 86, simbolo: 'Rn', nome: 'Radônio', massa: 222, grupo: 'gas-nobre', linha: 6, coluna: 18, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', resumo: 'Gás nobre radioativo, pesado e perigoso. Pode se acumular em porões, sendo uma causa de câncer de pulmão.' },
    { numero: 87, simbolo: 'Fr', nome: 'Frâncio', massa: 223, grupo: 'metal-alcalino', linha: 7, coluna: 1, config: '[Rn] 7s¹', resumo: 'O metal alcalino mais pesado e radioativo. Extremamente raro, formado pelo decaimento do Actínio.' },
    { numero: 88, simbolo: 'Ra', nome: 'Rádio', massa: 226, grupo: 'alcalino-terroso', linha: 7, coluna: 2, config: '[Rn] 7s²', resumo: 'Altamente radioativo, descoberto por Marie e Pierre Curie. Usado em tintas luminescentes (agora obsoleto devido ao perigo).' },
    { text: '89-103', grupo: 'actinideo', linha: 7, coluna: 3 }, // Placeholder Actinídeos
    { numero: 104, simbolo: 'Rf', nome: 'Rutherfórdio', massa: 267, grupo: 'metal-transicao', linha: 7, coluna: 4, config: '[Rn] 5f¹⁴ 6d² 7s²', resumo: 'Elemento sintético e radioativo, produzido em laboratório. Não possui usos comerciais.' },
    { numero: 105, simbolo: 'Db', nome: 'Dúbnio', massa: 270, grupo: 'metal-transicao', linha: 7, coluna: 5, config: '[Rn] 5f¹⁴ 6d³ 7s²', resumo: 'Elemento sintético e radioativo, produzido em laboratório. Não possui usos comerciais.' },
    { numero: 106, simbolo: 'Sg', nome: 'Seabórgio', massa: 271, grupo: 'metal-transicao', linha: 7, coluna: 6, config: '[Rn] 5f¹⁴ 6d⁴ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem a Glenn T. Seaborg.' },
    { numero: 107, simbolo: 'Bh', nome: 'Bóhrio', massa: 270, grupo: 'metal-transicao', linha: 7, coluna: 7, config: '[Rn] 5f¹⁴ 6d⁵ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao físico Niels Bohr.' },
    { numero: 108, simbolo: 'Hs', nome: 'Hássio', massa: 277, grupo: 'metal-transicao', linha: 7, coluna: 8, config: '[Rn] 5f¹⁴ 6d⁶ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao estado alemão de Hesse.' },
    { numero: 109, simbolo: 'Mt', nome: 'Meitnério', massa: 278, grupo: 'metal-transicao', linha: 7, coluna: 9, config: '[Rn] 5f¹⁴ 6d⁷ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem à física Lise Meitner.' },
    { numero: 110, simbolo: 'Ds', nome: 'Darmstádio', massa: 281, grupo: 'metal-transicao', linha: 7, coluna: 10, config: '[Rn] 5f¹⁴ 6d⁸ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem à cidade de Darmstadt, Alemanha.' },
    { numero: 111, simbolo: 'Rg', nome: 'Roentgênio', massa: 282, grupo: 'metal-transicao', linha: 7, coluna: 11, config: '[Rn] 5f¹⁴ 6d⁹ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem a Wilhelm Röntgen, descobridor dos raios-X.' },
    { numero: 112, simbolo: 'Cn', nome: 'Copernício', massa: 285, grupo: 'metal-transicao', linha: 7, coluna: 12, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem a Nicolau Copérnico.' },
    { numero: 113, simbolo: 'Nh', nome: 'Nihônio', massa: 286, grupo: 'outros-metais', linha: 7, coluna: 13, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao Japão (Nihon).' },
    { numero: 114, simbolo: 'Fl', nome: 'Fleróvio', massa: 289, grupo: 'outros-metais', linha: 7, coluna: 14, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao físico Georgy Flerov.' },
    { numero: 115, simbolo: 'Mc', nome: 'Moscóvio', massa: 290, grupo: 'outros-metais', linha: 7, coluna: 15, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', resumo: 'Elemento sintético e radioativo, nomeado em homenagem à região de Moscou, Rússia.' },
    { numero: 116, simbolo: 'Lv', nome: 'Livermório', massa: 293, grupo: 'outros-metais', linha: 7, coluna: 16, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao Laboratório Nacional Lawrence Livermore.' },
    { numero: 117, simbolo: 'Ts', nome: 'Tenesso', massa: 294, grupo: 'halogenio', linha: 7, coluna: 17, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', resumo: 'Elemento sintético e radioativo, nomeado em homenagem ao estado do Tennessee, EUA.' },
    { numero: 118, simbolo: 'Og', nome: 'Oganessônio', massa: 294, grupo: 'gas-nobre', linha: 7, coluna: 18, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', resumo: 'Elemento sintético e radioativo, o mais pesado conhecido. Nomeado em homenagem ao físico Yuri Oganessian.' },
    
    // --- Lantanídeos (Linha 8 - "Separada") ---
    { numero: 57, simbolo: 'La', nome: 'Lantânio', massa: 138.91, grupo: 'lantanideo', linha: 8, coluna: 3, config: '[Xe] 5d¹ 6s²', resumo: 'Usado em pedras de isqueiro e em lentes de câmeras de alta qualidade.' },
    { numero: 58, simbolo: 'Ce', nome: 'Cério', massa: 140.12, grupo: 'lantanideo', linha: 8, coluna: 4, config: '[Xe] 4f¹ 5d¹ 6s²', resumo: 'O mais abundante dos lantanídeos. Usado em fornos autolimpantes e como catalisador.' },
    { numero: 59, simbolo: 'Pr', nome: 'Praseodímio', massa: 140.91, grupo: 'lantanideo', linha: 8, coluna: 5, config: '[Xe] 4f³ 6s²', resumo: 'Usado para criar a cor amarela em vidros e em ímãs de alta potência.' },
    { numero: 60, simbolo: 'Nd', nome: 'Neodímio', massa: 144.24, grupo: 'lantanideo', linha: 8, coluna: 6, config: '[Xe] 4f⁴ 6s²', resumo: 'Componente crucial dos ímãs mais fortes conhecidos (ímãs de neodímio), usados em fones de ouvido e motores elétricos.' },
    { numero: 61, simbolo: 'Pm', nome: 'Promécio', massa: 145, grupo: 'lantanideo', linha: 8, coluna: 7, config: '[Xe] 4f⁵ 6s²', resumo: 'Elemento radioativo dos lantanídeos. Usado como fonte de luz beta em tintas luminosas.' },
    { numero: 62, simbolo: 'Sm', nome: 'Samário', massa: 150.36, grupo: 'lantanideo', linha: 8, coluna: 8, config: '[Xe] 4f⁶ 6s²', resumo: 'Usado em ímãs permanentes de alta temperatura e em barras de controle de reatores nucleares.' },
    { numero: 63, simbolo: 'Eu', nome: 'Európio', massa: 151.96, grupo: 'lantanideo', linha: 8, coluna: 9, config: '[Xe] 4f⁷ 6s²', resumo: 'Essencial para criar a cor vermelha em telas de TV e monitores (CRT e LCD). Também usado em tintas fluorescentes.' },
    { numero: 64, simbolo: 'Gd', nome: 'Gadolínio', massa: 157.25, grupo: 'lantanideo', linha: 8, coluna: 10, config: '[Xe] 4f⁷ 5d¹ 6s²', resumo: 'Usado como agente de contraste em exames de ressonância magnética (MRI) devido às suas propriedades magnéticas.' },
    { numero: 65, simbolo: 'Tb', nome: 'Térbio', massa: 158.93, grupo: 'lantanideo', linha: 8, coluna: 11, config: '[Xe] 4f⁹ 6s²', resumo: 'Usado para produzir a cor verde em telas e lâmpadas fluorescentes.' },
    { numero: 66, simbolo: 'Dy', nome: 'Disprósio', massa: 162.50, grupo: 'lantanideo', linha: 8, coluna: 12, config: '[Xe] 4f¹⁰ 6s²', resumo: 'Adicionado aos ímãs de neodímio para melhorar sua resistência ao calor. Usado em discos rígidos.' },
    { numero: 67, simbolo: 'Ho', nome: 'Hôlmio', massa: 164.93, grupo: 'lantanideo', linha: 8, coluna: 13, config: '[Xe] 4f¹¹ 6s²', resumo: 'Possui propriedades magnéticas notáveis. Usado em lasers cirúrgúrgicos e em barras de controle nuclear.' },
    { numero: 68, simbolo: 'Er', nome: 'Érbio', massa: 167.26, grupo: 'lantanideo', linha: 8, coluna: 14, config: '[Xe] 4f¹² 6s²', resumo: 'Usado como dopante em cabos de fibra óptica para amplificar o sinal. Também confere cor rosa a vidros.' },
    { numero: 69, simbolo: 'Tm', nome: 'Túlio', massa: 168.93, grupo: 'lantanideo', linha: 8, coluna: 15, config: '[Xe] 4f¹³ 6s²', resumo: 'O lantanídeo natural mais raro. Usado em pequenas máquinas de raios-X portáteis.' },
    { numero: 70, simbolo: 'Yb', nome: 'Itérbio', massa: 173.05, grupo: 'lantanideo', linha: 8, coluna: 16, config: '[Xe] 4f¹⁴ 6s²', resumo: 'Usado em alguns tipos de lasers e em relógios atômicos de alta precisão.' },
    { numero: 71, simbolo: 'Lu', nome: 'Lutécio', massa: 174.97, grupo: 'lantanideo', linha: 8, coluna: 17, config: '[Xe] 4f¹⁴ 5d¹ 6s²', resumo: 'Usado em detectores para tomografia por emissão de pósitrons (PET scan).' },


    // --- Actinídeos (Linha 9 - "Separada") ---
    { numero: 89, simbolo: 'Ac', nome: 'Actínio', massa: 227, grupo: 'actinideo', linha: 9, coluna: 3, config: '[Rn] 6d¹ 7s²', resumo: 'Elemento radioativo usado como fonte de nêutrons.' },
    { numero: 90, simbolo: 'Th', nome: 'Tório', massa: 232.04, grupo: 'actinideo', linha: 9, coluna: 4, config: '[Rn] 6d² 7s²', resumo: 'Radioativo, explorado como um combustível nuclear potencialmente mais seguro que o urânio.' },
    { numero: 91, simbolo: 'Pa', nome: 'Protactínio', massa: 231.04, grupo: 'actinideo', linha: 9, coluna: 5, config: '[Rn] 5f² 6d¹ 7s²', resumo: 'Elemento radioativo raro, formado pelo decaimento do urânio. Principalmente para pesquisa.' },
    { numero: 92, simbolo: 'U', nome: 'Urânio', massa: 238.03, grupo: 'actinideo', linha: 9, coluna: 6, config: '[Rn] 5f³ 6d¹ 7s²', resumo: 'Principal combustível para reatores nucleares e usado em armas nucleares.' },
    { numero: 93, simbolo: 'Np', nome: 'Neptúnio', massa: 237, grupo: 'actinideo', linha: 9, coluna: 7, config: '[Rn] 5f⁴ 6d¹ 7s²', resumo: 'O primeiro elemento transurânico sintético. Usado em detectores de nêutrons.' },
    { numero: 94, simbolo: 'Pu', nome: 'Plutônio', massa: 244, grupo: 'actinideo', linha: 9, coluna: 8, config: '[Rn] 5f⁶ 7s²', resumo: 'Elemento sintético radioativo, usado como combustível em reatores nucleares e em armas nucleares.' },
    { numero: 95, simbolo: 'Am', nome: 'Amerício', massa: 243, grupo: 'actinideo', linha: 9, coluna: 9, config: '[Rn] 5f⁷ 7s²', resumo: 'Usado em detectores de fumaça domésticos, onde ioniza o ar e permite a detecção de fumaça.' },
    { numero: 96, simbolo: 'Cm', nome: 'Cúrio', massa: 247, grupo: 'actinideo', linha: 9, coluna: 10, config: '[Rn] 5f⁷ 6d¹ 7s²', resumo: 'Elemento sintético radioativo. Usado como fonte de partículas alfa em espectrômetros.' },
    { numero: 97, simbolo: 'Bk', nome: 'Berquélio', massa: 247, grupo: 'actinideo', linha: 9, coluna: 11, config: '[Rn] 5f⁹ 7s²', resumo: 'Elemento sintético radioativo, usado principalmente para criar elementos ainda mais pesados.' },
    { numero: 98, simbolo: 'Cf', nome: 'Califórnio', massa: 251, grupo: 'actinideo', linha: 9, coluna: 12, config: '[Rn] 5f¹⁰ 7s²', resumo: 'Fonte de nêutrons muito forte. Usado para iniciar reatores nucleares e em tratamentos contra o câncer.' },
    { numero: 99, simbolo: 'Es', nome: 'Einstênio', massa: 252, grupo: 'actinideo', linha: 9, coluna: 13, config: '[Rn] 5f¹¹ 7s²', resumo: 'Elemento sintético radioativo, nomeado em homenagem a Albert Einstein. Usado para pesquisa científica.' },
    { numero: 100, simbolo: 'Fm', nome: 'Férmio', massa: 257, grupo: 'actinideo', linha: 9, coluna: 14, config: '[Rn] 5f¹² 7s²', resumo: 'Elemento sintético radioativo, nomeado em homenagem a Enrico Fermi.' },
    { numero: 101, simbolo: 'Md', nome: 'Mendelévio', massa: 258, grupo: 'actinideo', linha: 9, coluna: 15, config: '[Rn] 5f¹³ 7s²', resumo: 'Elemento sintético radioativo, nomeado em homenagem a Dmitri Mendeleev, o pai da tabela periódica.' },
    { numero: 102, simbolo: 'No', nome: 'Nobélio', massa: 259, grupo: 'actinideo', linha: 9, coluna: 16, config: '[Rn] 5f¹⁴ 7s²', resumo: 'Elemento sintético radioativo, nomeado em homenagem a Alfred Nobel.' },
    { numero: 103, simbolo: 'Lr', nome: 'Laurêncio', massa: 262, grupo: 'actinideo', linha: 9, coluna: 17, config: '[Rn] 5f¹⁴ 7s² 7p¹', resumo: 'Elemento sintético e radioativo, produzido apenas em laboratório para fins de pesquisa.' },
];


// === CONSTANTES DA API ===
const apiKey = ""; // Deixe em branco, será fornecido pelo ambiente
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;


// === VARIÁVEIS GLOBAIS PARA O THREE.JS ===
let scene, camera, renderer, cube, controls, animationId;


// Materiais das faces dinâmicas
let face4Material, face5Material, face6Material;




// --- LÓGICA DE CRIAÇÃO DA TABELA E MODAL ---


document.addEventListener('DOMContentLoaded', () => {
    // Obter referências aos elementos do DOM
    const table = document.getElementById('periodic-table');
    const modal = document.getElementById('element-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    const modalSymbolBox = document.getElementById('modal-symbol-box');
    const modalSymbol = document.getElementById('modal-symbol');
    const modalName = document.getElementById('modal-name');
    const modalGroup = document.getElementById('modal-group');
    
    /**
     * 1. Função para criar a tabela
     */
    function createTable() {
        elementsData.forEach(el => {
            const tile = document.createElement('div');
            
            // Define a posição no grid
            tile.style.gridRow = el.linha;
            tile.style.gridColumn = el.coluna;


            // Adiciona classes de estilo
            const groupClass = `grupo-${el.grupo}`;
            tile.classList.add('element-tile', groupClass);
            
            if (el.numero) {
                // É um elemento real
                tile.innerHTML = `
                    <span class="text-xs font-medium text-gray-600 self-start ml-1">${el.numero}</span>
                    <span class="text-xl md:text-2xl font-bold text-gray-900">${el.simbolo}</span>
                    <span class="text-xs text-center truncate w-full">${el.nome}</span>
                `;
                // Adiciona o evento de clique
                tile.addEventListener('click', () => showModal(el, groupClass));
            } else if (el.text) {
                // É um placeholder (Lantanídeos/Actinídeos)
                tile.innerHTML = `
                    <span class="text-xs md:text-sm font-medium text-gray-700">${el.text}</span>
                `;
                tile.classList.add('opacity-80', 'justify-center');
            }


            table.appendChild(tile);
        });
    }


    /**
     * 2. Função para mostrar o modal
     */
    function showModal(el, groupClass) {
        // Preenche os dados do CABEÇALHO
        modalSymbol.textContent = el.simbolo;
        modalName.textContent = el.nome;
        const groupName = el.grupo.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        modalGroup.textContent = groupName;


        // Aplica a cor do grupo ao box do símbolo
        modalSymbolBox.className = modalSymbolBox.className.split(' ').filter(c => !c.startsWith('grupo-')).join(' ');
        modalSymbolBox.classList.add(groupClass);
        
        // Ajusta a cor do texto do símbolo para melhor contraste
        if (groupClass.includes('nao-metal') || groupClass.includes('alcalino-terroso')) {
             modalSymbol.classList.add('text-gray-900');
        } else {
             modalSymbol.classList.remove('text-gray-900');
        }
        
        // Limpa o contêiner do cubo anterior (se houver)
        const container = document.getElementById('cube-container');
        container.innerHTML = '';
        
        // Inicializa a cena 3D com placeholders...
        initCube(el, groupClass, groupName);


        // ...e então busca os dados da IA para preencher as faces
        fetchCubeFaceData(el);


        // Mostra o modal com animação
        modal.classList.remove('invisible', 'opacity-0');
        modalBackdrop.classList.remove('opacity-0');
        modalBackdrop.classList.add('opacity-50');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('opacity-100', 'scale-100');
    }
    


    /**
     * 3. Função para esconder o modal
     */
    function hideModal() {
        modalContent.classList.add('opacity-0', 'scale-95');
        modalBackdrop.classList.add('opacity-0');
        modalBackdrop.classList.remove('opacity-50');
        
        // --- LIMPEZA DO THREE.JS ---
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        const container = document.getElementById('cube-container');
        container.innerHTML = '';


        if (renderer) {
            renderer.dispose(); // Libera recursos da GPU
            renderer = null;
        }
        if (scene) scene = null;
        if (camera) camera = null;
        if (controls) controls = null;
        
        // Limpa as referências dos materiais
        face4Material = null;
        face5Material = null;
        face6Material = null;


        // Adiciona um atraso para a animação de saída antes de esconder
        setTimeout(() => {
            modal.classList.add('invisible', 'opacity-0');
        }, 300); 
    }
    
    // --- FUNÇÕES DA GEMINI API ---


    /**
     * Busca dados de um provedor de API (com retentativa exponencial)
     */
    async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Erro HTTP! status: ${response.status}`);
                }
                return await response.json();
            } catch (error) {
                console.warn(`Falha na chamada da API (tentativa ${i + 1}/${retries}): ${error.message}`);
                if (i < retries - 1) {
                    // Espera exponencialmente
                    await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
                } else {
                    throw error; // Lança o erro após a última tentativa
                }
            }
        }
    }


    /**
     * Busca os dados das faces do cubo na API do Gemini
     */
    async function fetchCubeFaceData(el) {
        // Instrução do sistema para a IA
        const systemPrompt = `Você é um professor de química. Forneça dados para o elemento ${el.nome}. Seja breve (máximo 1-2 frases curtas) para cada campo. Se um dado não for conhecido, retorne 'Desconhecido'. Responda APENAS com o JSON.`;
        // Pergunta do usuário
        const userQuery = `Gere os dados 'descobridor', 'ano', 'encontrado_em', 'utilizado_em' para o elemento ${el.nome}.`;


        // O esquema JSON que esperamos de volta
        const schema = {
            type: "OBJECT",
            properties: {
                "descobridor": { "type": "STRING", "description": "Quem descobriu o elemento. Ex: 'Marie Curie'" },
                "ano": { "type": "STRING", "description": "Ano da descoberta. Ex: '1898'" },
                "encontrado_em": { "type": "STRING", "description": "Onde é encontrado na natureza. Ex: 'Minérios, Crosta Terrestre'" },
                "utilizado_em": { "type": "STRING", "description": "Principais usos. Ex: 'Baterias, Reatores'" }
            },
            required: ["descobridor", "ano", "encontrado_em", "utilizado_em"]
        };


        // Corpo da requisição para a API
        const payload = {
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema
            }
        };


        try {
            // Tenta buscar os dados com retentativas
            const result = await fetchWithRetry(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });


            // Extrai e parseia a resposta JSON
            const jsonText = result.candidates[0].content.parts[0].text;
            const data = JSON.parse(jsonText);


            // Atualiza as faces do cubo com os dados recebidos
            updateCubeFace(face4Material, "Descoberta ✨", [`${data.descobridor}`, `Ano: ${data.ano}`], 'grupo-nao-metal');
            updateCubeFace(face5Material, "Onde é Encontrado ✨", [data.encontrado_em], 'grupo-halogenio');
            updateCubeFace(face6Material, "Onde é Utilizado ✨", [data.utilizado_em], 'grupo-gas-nobre');


        } catch (error) {
            console.error("Erro ao buscar dados da Gemini API:", error);
            // Atualiza as faces com uma mensagem de erro
            const errorLines = ["Não foi possível", "carregar dados."];
            updateCubeFace(face4Material, "Erro de API ✨", errorLines, 'grupo-metal-alcalino');
            updateCubeFace(face5Material, "Erro de API ✨", errorLines, 'grupo-metal-alcalino');
            updateCubeFace(face6Material, "Erro de API ✨", errorLines, 'grupo-metal-alcalino');
        }
    }


    /**
     * Atualiza a textura de um material de face existente
     */
    function updateCubeFace(material, title, lines, groupClass) {
        if (!material) return; // Sai se o modal foi fechado enquanto carregava


        const colorMap = {
            'grupo-gas-nobre': '#dbeafe',
            'grupo-metal-alcalino': '#fee2e2',
            'grupo-alcalino-terroso': '#ffedd5',
            'grupo-halogenio': '#d1fae5',
            'grupo-nao-metal': '#fef3c7',
            'grupo-semimetal': '#e0e7ff',
            'grupo-metal-transicao': '#fce7f3',
            'grupo-outros-metais': '#e5e7eb',
            'grupo-lantanideo': '#f5d0fe',
            'grupo-actinideo': '#ecfdf5'
        };


        // Cria uma textura de canvas totalmente nova
        const newTexture = createFaceTexture(title, lines, colorMap[groupClass] || '#ffffff', '#333333');
        material.map = newTexture; // Substitui a textura antiga
        material.needsUpdate = true; // Informa ao three.js para atualizar
    }




    // --- FUNÇÕES DO THREE.JS ---


    /**
     * Inicializa a cena 3D, o cubo e a animação.
     */
    function initCube(el, groupClass, groupName) {
        const container = document.getElementById('cube-container');
        
        // 1. Cena
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf1f5f9); // Fundo cinza claro


        // 2. Câmera
        camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 4.5; // Posição da câmera


        // 3. Renderizador
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);


        // 4. Controles (para girar com o mouse)
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false; // Desabilita zoom
        controls.enablePan = false;  // Desabilita arrastar
        controls.autoRotate = true; // Começa girando sozinho
        controls.autoRotateSpeed = 1.0; // Velocidade da rotação


        // 5. Preparar dados das faces (COM PLACEHOLDERS)
        const faceData = [
            { title: "Elemento", lines: [el.nome, el.simbolo, `Nº Atômico: ${el.numero}`], color: groupClass },
            { title: "Propriedades", lines: [`Massa: ${el.massa} u`, `Grupo: ${groupName}`], color: 'grupo-outros-metais' },
            { title: "Configuração", lines: [el.config], color: 'grupo-semimetal' },
            // Placeholders para dados da IA
            { title: "Descoberta ✨", lines: ["Carregando..."], color: 'grupo-nao-metal' },
            { title: "Onde é Encontrado ✨", lines: ["Carregando..."], color: 'grupo-halogenio' },
            { title: "Onde é Utilizado ✨", lines: ["Carregando..."], color: 'grupo-gas-nobre' }
        ];
        
        // Mapeamento de classes para cores hex
        const colorMap = {
            'grupo-gas-nobre': '#dbeafe',
            'grupo-metal-alcalino': '#fee2e2',
            'grupo-alcalino-terroso': '#ffedd5',
            'grupo-halogenio': '#d1fae5',
            'grupo-nao-metal': '#fef3c7',
            'grupo-semimetal': '#e0e7ff',
            'grupo-metal-transicao': '#fce7f3',
            'grupo-outros-metais': '#e5e7eb',
            'grupo-lantanideo': '#f5d0fe',
            'grupo-actinideo': '#ecfdf5'
        };


        // 6. Criar materiais (texturas)
        const materials = faceData.map(data => {
            const texture = createFaceTexture(
                data.title, 
                data.lines, 
                colorMap[data.color] || '#ffffff', 
                '#333333' // Cor do texto
            );
            return new THREE.MeshBasicMaterial({ map: texture });
        });
        
        // Salva a referência dos materiais dinâmicos
        face4Material = materials[3];
        face5Material = materials[4];
        face6Material = materials[5];


        // 7. Geometria e Mesh (O Cubo)
        const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
        cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);


        // 8. Iniciar Animação
        animate();


        // Parar auto-rotação quando o usuário interagir
        controls.addEventListener('start', () => {
            controls.autoRotate = false;
        });


        // Responsividade da janela
        window.addEventListener('resize', onWindowResize, false);
    }


    /**
     * Ajusta a câmera e o renderizador ao redimensionar a janela
     */
    function onWindowResize() {
        if (camera && renderer) {
            const container = document.getElementById('cube-container');
            // Evita erro se o container for 0x0
            if (container.clientWidth > 0 && container.clientHeight > 0) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        }
    }
    
    /**
     * Loop de Animação (chama a si mesmo)
     */
    function animate() {
        animationId = requestAnimationFrame(animate);


        // Só renderiza se tudo estiver pronto
        if (controls && renderer && scene && camera) {
            controls.update(); // Atualiza os controles (rotação)
            renderer.render(scene, camera);
        }
    }


    /**
     * Cria uma textura de canvas 2D para uma face do cubo.
     */
    function createFaceTexture(title, textLines, bgColor, textColor) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 256; // Tamanho da textura (potência de 2)
        canvas.width = size;
        canvas.height = size;


        // Fundo
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, size, size);


        // Borda
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 10;
        ctx.strokeRect(0, 0, size, size); // Desenha a borda dentro


        // Título
        ctx.fillStyle = textColor;
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(title, size / 2, 40);


        // Linha divisória
        ctx.beginPath();
        ctx.moveTo(30, 55);
        ctx.lineTo(size - 30, 55);
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 2;
        ctx.stroke();


        // Texto principal (com quebra de linha)
        ctx.font = '18px Inter, sans-serif';
        let startY = 85;
        
        textLines.forEach(line => {
            // Função simples para quebrar o texto
            const wrappedLines = wrapText(ctx, line, size - 40); // 20px de padding
            wrappedLines.forEach(wrappedLine => {
                if (startY < size - 30) { // Não transbordar
                    ctx.fillText(wrappedLine, size / 2, startY);
                    startY += 25; // Espaçamento entre linhas
                }
            });
        });


        return new THREE.CanvasTexture(canvas);
    }


    /**
     * Função auxiliar para quebrar texto longo no canvas
     */
    function wrapText(context, text, maxWidth) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];


        for (let i = 1; i < words.length; i++) {
            let word = words[i];
            let width = context.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }




    // --- Event Listeners Globais ---
    closeModalBtn.addEventListener('click', hideModal);
    modalBackdrop.addEventListener('click', hideModal);


    // --- Inicialização da Aplicação ---
    createTable();
});
