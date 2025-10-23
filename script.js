// === DADOS DOS ELEMENTOS ===
// Versão AUMENTADA com todos os dados para as 6 faces do cubo
const elementsData = [
  // Linha 1
  { numero: 1, simbolo: 'H', nome: 'Hidrogênio', massa: 1.008, grupo: 'nao-metal', linha: 1, coluna: 1, config: '1s¹', descobridor: 'Henry Cavendish', ano: '1766', encontrado_em: 'Gás em estrelas, água, compostos orgânicos.', utilizado_em: 'Combustível de foguete, produção de amônia.' },
  { numero: 2, simbolo: 'He', nome: 'Hélio', massa: 4.0026, grupo: 'gas-nobre', linha: 1, coluna: 18, config: '1s²', descobridor: 'P. Janssen, N. Lockyer', ano: '1868', encontrado_em: 'Reservas de gás natural, atmosfera (traços).', utilizado_em: 'Balões, refrigeração de ímãs (Ressonância Magnética).' },
  // Linha 2
  { numero: 3, simbolo: 'Li', nome: 'Lítio', massa: 6.94, grupo: 'metal-alcalino', linha: 2, coluna: 1, config: '[He] 2s¹', descobridor: 'Johan Arfwedson', ano: '1817', encontrado_em: 'Minerais (espodumênio, lepidolita), salmouras.', utilizado_em: 'Baterias recarregáveis, ligas metálicas, medicamentos.' },
  { numero: 4, simbolo: 'Be', nome: 'Berílio', massa: 9.0122, grupo: 'alcalino-terroso', linha: 2, coluna: 2, config: '[He] 2s²', descobridor: 'Louis-Nicolas Vauquelin', ano: '1798', encontrado_em: 'Minerais (berilo, crisoberilo).', utilizado_em: 'Ligas (cobre-berílio), janelas de tubos de raios-X.' },
  { numero: 5, simbolo: 'B', nome: 'Boro', massa: 10.81, grupo: 'semimetal', linha: 2, coluna: 13, config: '[He] 2s² 2p¹', descobridor: 'Gay-Lussac, Thénard', ano: '1808', encontrado_em: 'Minerais (bórax, kernita).', utilizado_em: 'Fibra de vidro, produtos de limpeza (bórax), semicondutores.' },
  { numero: 6, simbolo: 'C', nome: 'Carbono', massa: 12.011, grupo: 'nao-metal', linha: 2, coluna: 14, config: '[He] 2s² 2p²', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Base da vida orgânica, grafite, diamante, CO₂.', utilizado_em: 'Combustíveis fósseis, aço, plásticos, base da vida.' },
  { numero: 7, simbolo: 'N', nome: 'Nitrogênio', massa: 14.007, grupo: 'nao-metal', linha: 2, coluna: 15, config: '[He] 2s² 2p³', descobridor: 'Daniel Rutherford', ano: '1772', encontrado_em: 'Atmosfera (78%), proteínas, solo.', utilizado_em: 'Produção de amônia (fertilizantes), gás inerte, criogenia.' },
  { numero: 8, simbolo: 'O', nome: 'Oxigênio', massa: 15.999, grupo: 'nao-metal', linha: 2, coluna: 16, config: '[He] 2s² 2p⁴', descobridor: 'C. Scheele, J. Priestley', ano: '1774', encontrado_em: 'Atmosfera (21%), água, crosta terrestre.', utilizado_em: 'Respiração, combustão, processos industriais (aço).' },
  { numero: 9, simbolo: 'F', nome: 'Flúor', massa: 18.998, grupo: 'halogenio', linha: 2, coluna: 17, config: '[He] 2s² 2p⁵', descobridor: 'Henri Moissan', ano: '1886', encontrado_em: 'Minerais (fluorita, criolita).', utilizado_em: 'Creme dental, produção de teflon, refrigeração.' },
  { numero: 10, simbolo: 'Ne', nome: 'Neônio', massa: 20.180, grupo: 'gas-nobre', linha: 2, coluna: 18, config: '[He] 2s² 2p⁶', descobridor: 'Ramsay, Travers', ano: '1898', encontrado_em: 'Atmosfera (traços).', utilizado_em: 'Letreiros luminosos (cor vermelha), lasers.' },
  // Linha 3
  { numero: 11, simbolo: 'Na', nome: 'Sódio', massa: 22.990, grupo: 'metal-alcalino', linha: 3, coluna: 1, config: '[Ne] 3s¹', descobridor: 'Humphry Davy', ano: '1807', encontrado_em: 'Sal de cozinha (NaCl), minerais, oceanos.', utilizado_em: 'Lâmpadas de vapor de sódio, refrigeração nuclear, sal.' },
  { numero: 12, simbolo: 'Mg', nome: 'Magnésio', massa: 24.305, grupo: 'alcalino-terroso', linha: 3, coluna: 2, config: '[Ne] 3s²', descobridor: 'Joseph Black', ano: '1755', encontrado_em: 'Minerais (dolomita, magnesita), água do mar.', utilizado_em: 'Ligas de aviação (leves), fogos de artifício, antiácidos.' },
  { numero: 13, simbolo: 'Al', nome: 'Alumínio', massa: 26.982, grupo: 'outros-metais', linha: 3, coluna: 13, config: '[Ne] 3s² 3p¹', descobridor: 'Hans Christian Ørsted', ano: '1825', encontrado_em: 'Minério (bauxita), crosta terrestre.', utilizado_em: 'Latas, aviões, utensílios de cozinha, fiação elétrica.' },
  { numero: 14, simbolo: 'Si', nome: 'Silício', massa: 28.085, grupo: 'semimetal', linha: 3, coluna: 14, config: '[Ne] 3s² 3p²', descobridor: 'Jöns Jacob Berzelius', ano: '1824', encontrado_em: 'Areia (SiO₂), quartzo, crosta terrestre.', utilizado_em: 'Chips de computador (semicondutores), vidro, silicone.' },
  { numero: 15, simbolo: 'P', nome: 'Fósforo', massa: 30.974, grupo: 'nao-metal', linha: 3, coluna: 15, config: '[Ne] 3s² 3p³', descobridor: 'Hennig Brand', ano: '1669', encontrado_em: 'Rochas fosfáticas, ossos, DNA, ATP.', utilizado_em: 'Fertilizantes, palitos de fósforo, ácidos.' },
  { numero: 16, simbolo: 'S', nome: 'Enxofre', massa: 32.06, grupo: 'nao-metal', linha: 3, coluna: 16, config: '[Ne] 3s² 3p⁴', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Depósitos vulcânicos, minerais (pirita, gesso).', utilizado_em: 'Produção de ácido sulfúrico, vulcanização da borracha.' },
  { numero: 17, simbolo: 'Cl', nome: 'Cloro', massa: 35.45, grupo: 'halogenio', linha: 3, coluna: 17, config: '[Ne] 3s² 3p⁵', descobridor: 'Carl Wilhelm Scheele', ano: '1774', encontrado_em: 'Sal de cozinha (NaCl), oceanos.', utilizado_em: 'Desinfetante (água, piscinas), alvejante, produção de PVC.' },
  { numero: 18, simbolo: 'Ar', nome: 'Argônio', massa: 39.948, grupo: 'gas-nobre', linha: 3, coluna: 18, config: '[Ne] 3s² 3p⁶', descobridor: 'Rayleigh, Ramsay', ano: '1894', encontrado_em: 'Atmosfera (0.9%).', utilizado_em: 'Lâmpadas incandescentes (proteger filamento), soldagem.' },
  // Linha 4
  { numero: 19, simbolo: 'K', nome: 'Potássio', massa: 39.098, grupo: 'metal-alcalino', linha: 4, coluna: 1, config: '[Ar] 4s¹', descobridor: 'Humphry Davy', ano: '1807', encontrado_em: 'Minerais (silvita), bananas, batatas.', utilizado_em: 'Fertilizantes (NPK), função nervosa (corpo humano).' },
  { numero: 20, simbolo: 'Ca', nome: 'Cálcio', massa: 40.078, grupo: 'alcalino-terroso', linha: 4, coluna: 2, config: '[Ar] 4s²', descobridor: 'Humphry Davy', ano: '1808', encontrado_em: 'Ossos, dentes, laticínios, calcário, gesso.', utilizado_em: 'Produção de cimento e cal, essencial para a vida.' },
  { numero: 21, simbolo: 'Sc', nome: 'Escândio', massa: 44.956, grupo: 'metal-transicao', linha: 4, coluna: 3, config: '[Ar] 3d¹ 4s²', descobridor: 'Lars Fredrik Nilson', ano: '1879', encontrado_em: 'Minerais raros (thortveitita).', utilizado_em: 'Ligas de alumínio (equip. esportivos, caças), iluminação.' },
  { numero: 22, simbolo: 'Ti', nome: 'Titânio', massa: 47.867, grupo: 'metal-transicao', linha: 4, coluna: 4, config: '[Ar] 3d² 4s²', descobridor: 'William Gregor', ano: '1791', encontrado_em: 'Minerais (ilmenita, rutilo).', utilizado_em: 'Implantes médicos, indústria aeroespacial, pigmento branco.' },
  { numero: 23, simbolo: 'V', nome: 'Vanádio', massa: 50.942, grupo: 'metal-transicao', linha: 4, coluna: 5, config: '[Ar] 3d³ 4s²', descobridor: 'Andrés Manuel del Río', ano: '1801', encontrado_em: 'Minerais (vanadinita, carnotita).', utilizado_em: 'Ligas de aço (ferramentas), catalisadores.' },
  { numero: 24, simbolo: 'Cr', nome: 'Cromo', massa: 51.996, grupo: 'metal-transicao', linha: 4, coluna: 6, config: '[Ar] 3d⁵ 4s¹', descobridor: 'Louis-Nicolas Vauquelin', ano: '1797', encontrado_em: 'Minério (cromita).', utilizado_em: 'Aço inoxidável, revestimentos (cromagem).' },
  { numero: 25, simbolo: 'Mn', nome: 'Manganês', massa: 54.938, grupo: 'metal-transicao', linha: 4, coluna: 7, config: '[Ar] 3d⁵ 4s²', descobridor: 'Johan Gottlieb Gahn', ano: '1774', encontrado_em: 'Minérios (pirolusita).', utilizado_em: 'Produção de aço (aumenta resistência), pilhas.' },
  { numero: 26, simbolo: 'Fe', nome: 'Ferro', massa: 55.845, grupo: 'metal-transicao', linha: 4, coluna: 8, config: '[Ar] 3d⁶ 4s²', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minérios (hematita, magnetita), núcleo da Terra.', utilizado_em: 'Aço (pilar da indústria), hemoglobina (sangue).' },
  { numero: 27, simbolo: 'Co', nome: 'Cobalto', massa: 58.933, grupo: 'metal-transicao', linha: 4, coluna: 9, config: '[Ar] 3d⁷ 4s²', descobridor: 'Georg Brandt', ano: '1735', encontrado_em: 'Minérios (cobaltita, esmaltita).', utilizado_em: 'Ímãs, superligas (motores a jato), pigmento azul, Vitamina B12.' },
  { numero: 28, simbolo: 'Ni', nome: 'Níquel', massa: 58.693, grupo: 'metal-transicao', linha: 4, coluna: 10, config: '[Ar] 3d⁸ 4s²', descobridor: 'Axel Fredrik Cronstedt', ano: '1751', encontrado_em: 'Minérios (pentlandita), meteoritos.', utilizado_em: 'Aço inoxidável, moedas, baterias recarregáveis.' },
  { numero: 29, simbolo: 'Cu', nome: 'Cobre', massa: 63.546, grupo: 'metal-transicao', linha: 4, coluna: 11, config: '[Ar] 3d¹⁰ 4s¹', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minérios (calcopirita, malaquita), nativo.', utilizado_em: 'Fiação elétrica (ótimo condutor), tubulações, moedas.' },
  { numero: 30, simbolo: 'Zn', nome: 'Zinco', massa: 65.38, grupo: 'metal-transicao', linha: 4, coluna: 12, config: '[Ar] 3d¹⁰ 4s²', descobridor: 'Andreas Sigismund Marggraf', ano: '1746', encontrado_em: 'Minério (esfalerita).', utilizado_em: 'Galvanização (proteger aço), ligas (latão), protetor solar.' },
  { numero: 31, simbolo: 'Ga', nome: 'Gálio', massa: 69.723, grupo: 'outros-metais', linha: 4, coluna: 13, config: '[Ar] 3d¹⁰ 4s² 4p¹', descobridor: 'Paul-Émile Lecoq de Boisbaudran', ano: '1875', encontrado_em: 'Subproduto de minérios de alumínio e zinco.', utilizado_em: 'Semicondutores (LEDs), termômetros (derrete na mão).' },
  { numero: 32, simbolo: 'Ge', nome: 'Germânio', massa: 72.630, grupo: 'semimetal', linha: 4, coluna: 14, config: '[Ar] 3d¹⁰ 4s² 4p²', descobridor: 'Clemens Winkler', ano: '1886', encontrado_em: 'Minérios de zinco, carvão.', utilizado_em: 'Semicondutores, lentes (infravermelho), fibra óptica.' },
  { numero: 33, simbolo: 'As', nome: 'Arsênio', massa: 74.922, grupo: 'semimetal', linha: 4, coluna: 15, config: '[Ar] 3d¹⁰ 4s² 4p³', descobridor: 'Albertus Magnus (isolou)', ano: '1250', encontrado_em: 'Minerais (arsenopirita).', utilizado_em: 'Semicondutores (GaAs), venenos (histórico), preservativo de madeira.' },
  { numero: 34, simbolo: 'Se', nome: 'Selênio', massa: 78.971, grupo: 'nao-metal', linha: 4, coluna: 16, config: '[Ar] 3d¹⁰ 4s² 4p⁴', descobridor: 'Jöns Jacob Berzelius', ano: '1817', encontrado_em: 'Subproduto do refino de cobre.', utilizado_em: 'Fotocélulas, xampus anticaspa, suplemento nutricional.' },
  { numero: 35, simbolo: 'Br', nome: 'Bromo', massa: 79.904, grupo: 'halogenio', linha: 4, coluna: 17, config: '[Ar] 3d¹⁰ 4s² 4p⁵', descobridor: 'Antoine Jérôme Balard', ano: '1826', encontrado_em: 'Água do mar, salmouras.', utilizado_em: 'Retardadores de chama, fotografia (antigo), piscinas.' },
  { numero: 36, simbolo: 'Kr', nome: 'Criptônio', massa: 83.798, grupo: 'gas-nobre', linha: 4, coluna: 18, config: '[Ar] 3d¹⁰ 4s² 4p⁶', descobridor: 'Ramsay, Travers', ano: '1898', encontrado_em: 'Atmosfera (traços).', utilizado_em: 'Iluminação de aeroportos, lasers, janelas de vidros duplos.' },
  // Linha 5
  { numero: 37, simbolo: 'Rb', nome: 'Rubídio', massa: 85.468, grupo: 'metal-alcalino', linha: 5, coluna: 1, config: '[Kr] 5s¹', descobridor: 'Bunsen, Kirchhoff', ano: '1861', encontrado_em: 'Minerais (lepidolita).', utilizado_em: 'Relógios atômicos, células fotoelétricas.' },
  { numero: 38, simbolo: 'Sr', nome: 'Estrôncio', massa: 87.62, grupo: 'alcalino-terroso', linha: 5, coluna: 2, config: '[Kr] 5s²', descobridor: 'Adair Crawford', ano: '1790', encontrado_em: 'Minerais (celestita, estroncianita).', utilizado_em: 'Fogos de artifício (cor vermelha), TVs antigas (tubo).' },
  { numero: 39, simbolo: 'Y', nome: 'Ítrio', massa: 88.906, grupo: 'metal-transicao', linha: 5, coluna: 3, config: '[Kr] 4d¹ 5s²', descobridor: 'Johan Gadolin', ano: '1794', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Lasers, supercondutores, TVs (cor vermelha).' },
  { numero: 40, simbolo: 'Zr', nome: 'Zircônio', massa: 91.224, grupo: 'metal-transicao', linha: 5, coluna: 4, config: '[Kr] 4d² 5s²', descobridor: 'Martin Heinrich Klaproth', ano: '1789', encontrado_em: 'Minerais (zircão).', utilizado_em: 'Reatores nucleares (não absorve nêutrons), joias (zircônia cúbica).' },
  { numero: 41, simbolo: 'Nb', nome: 'Nióbio', massa: 92.906, grupo: 'metal-transicao', linha: 5, coluna: 5, config: '[Kr] 4d⁴ 5s¹', descobridor: 'Charles Hatchett', ano: '1801', encontrado_em: 'Minerais (columbita - Brasil é o maior produtor).', utilizado_em: 'Aços de alta resistência (oleodutos), superligas, ímãs supercondutores.' },
  { numero: 42, simbolo: 'Mo', nome: 'Molibdênio', massa: 95.96, grupo: 'metal-transicao', linha: 5, coluna: 6, config: '[Kr] 4d⁵ 5s¹', descobridor: 'Carl Wilhelm Scheele', ano: '1778', encontrado_em: 'Minério (molibdenita).', utilizado_em: 'Aços de alta resistência (ponto de fusão alto), catalisador.' },
  { numero: 43, simbolo: 'Tc', nome: 'Tecnécio', massa: 98, grupo: 'metal-transicao', linha: 5, coluna: 7, config: '[Kr] 4d⁵ 5s²', descobridor: 'Perrier, Segrè', ano: '1937', encontrado_em: 'Produzido artificialmente (1º elemento sintético).', utilizado_em: 'Diagnósticos médicos (radiofármacos).' },
  { numero: 44, simbolo: 'Ru', nome: 'Rutênio', massa: 101.07, grupo: 'metal-transicao', linha: 5, coluna: 8, config: '[Kr] 4d⁷ 5s¹', descobridor: 'Karl Ernst Claus', ano: '1844', encontrado_em: 'Minérios de platina.', utilizado_em: 'Catalisadores, contatos elétricos, endurecedor de platina.' },
  { numero: 45, simbolo: 'Rh', nome: 'Ródio', massa: 102.91, grupo: 'metal-transicao', linha: 5, coluna: 9, config: '[Kr] 4d⁸ 5s¹', descobridor: 'William Hyde Wollaston', ano: '1803', encontrado_em: 'Minérios de platina.', utilizado_em: 'Catalisadores automotivos (caríssimo), revestimento de joias.' },
  { numero: 46, simbolo: 'Pd', nome: 'Paládio', massa: 106.42, grupo: 'metal-transicao', linha: 5, coluna: 10, config: '[Kr] 4d¹⁰', descobridor: 'William Hyde Wollaston', ano: '1803', encontrado_em: 'Minérios de platina, níquel, cobre.', utilizado_em: 'Catalisadores automotivos, joias (ouro branco), eletrônicos.' },
  { numero: 47, simbolo: 'Ag', nome: 'Prata', massa: 107.87, grupo: 'metal-transicao', linha: 5, coluna: 11, config: '[Kr] 4d¹⁰ 5s¹', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minérios (argentita), nativa.', utilizado_em: 'Joalheria, talheres, eletrônicos (melhor condutor), fotografia.' },
  { numero: 48, simbolo: 'Cd', nome: 'Cádmio', massa: 112.41, grupo: 'metal-transicao', linha: 5, coluna: 12, config: '[Kr] 4d¹⁰ 5s²', descobridor: 'Friedrich Stromeyer', ano: '1817', encontrado_em: 'Subproduto do refino de zinco.', utilizado_em: 'Baterias recarregáveis (NiCd), pigmentos (tóxico).' },
  { numero: 49, simbolo: 'In', nome: 'Índio', massa: 114.82, grupo: 'outros-metais', linha: 5, coluna: 13, config: '[Kr] 4d¹⁰ 5s² 5p¹', descobridor: 'Reich, Richter', ano: '1863', encontrado_em: 'Minérios de zinco.', utilizado_em: 'Telas de LCD e touchscreens (filme condutor ITO).' },
  { numero: 50, simbolo: 'Sn', nome: 'Estanho', massa: 118.71, grupo: 'outros-metais', linha: 5, coluna: 14, config: '[Kr] 4d¹⁰ 5s² 5p²', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minério (cassiterita).', utilizado_em: 'Solda, revestimento de latas de aço (folha de flandres), liga (bronze).' },
  { numero: 51, simbolo: 'Sb', nome: 'Antimônio', massa: 121.76, grupo: 'semimetal', linha: 5, coluna: 15, config: '[Kr] 4d¹⁰ 5s² 5p³', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minério (estibnita).', utilizado_em: 'Retardadores de chama, endurecedor de chumbo (baterias).' },
  { numero: 52, simbolo: 'Te', nome: 'Telúrio', massa: 127.60, grupo: 'semimetal', linha: 5, coluna: 16, config: '[Kr] 4d¹⁰ 5s² 5p⁴', descobridor: 'Franz-Joseph Müller von Reichenstein', ano: '1782', encontrado_em: 'Subproduto do refino de cobre.', utilizado_em: 'Ligas metálicas, painéis solares (CdTe).' },
  { numero: 53, simbolo: 'I', nome: 'Iodo', massa: 126.90, grupo: 'halogenio', linha: 5, coluna: 17, config: '[Kr] 4d¹⁰ 5s² 5p⁵', descobridor: 'Bernard Courtois', ano: '1811', encontrado_em: 'Algas marinhas, salmouras.', utilizado_em: 'Antisséptico (tintura de iodo), essencial para a tireoide.' },
  { numero: 54, simbolo: 'Xe', nome: 'Xenônio', massa: 131.29, grupo: 'gas-nobre', linha: 5, coluna: 18, config: '[Kr] 4d¹⁰ 5s² 5p⁶', descobridor: 'Ramsay, Travers', ano: '1898', encontrado_em: 'Atmosfera (traços muito pequenos).', utilizado_em: 'Faróis de carros (HID), lasers, anestésico.' },
  // Linha 6
  { numero: 55, simbolo: 'Cs', nome: 'Césio', massa: 132.91, grupo: 'metal-alcalino', linha: 6, coluna: 1, config: '[Xe] 6s¹', descobridor: 'Bunsen, Kirchhoff', ano: '1860', encontrado_em: 'Minerais (polucita).', utilizado_em: 'Relógios atômicos (base do segundo), fluidos de perfuração.' },
  { numero: 56, simbolo: 'Ba', nome: 'Bário', massa: 137.33, grupo: 'alcalino-terroso', linha: 6, coluna: 2, config: '[Xe] 6s²', descobridor: 'Carl Wilhelm Scheele', ano: '1774', encontrado_em: 'Minerais (barita, witherita).', utilizado_em: 'Exames de raios-X (contraste), fluidos de perfuração.' },
  { text: '57-71', grupo: 'lantanideo', linha: 6, coluna: 3 }, // Placeholder Lantanídeos
  { numero: 72, simbolo: 'Hf', nome: 'Háfnio', massa: 178.49, grupo: 'metal-transicao', linha: 6, coluna: 4, config: '[Xe] 4f¹⁴ 5d² 6s²', descobridor: 'Coster, de Hevesy', ano: '1923', encontrado_em: 'Minerais de zircônio (difícil separar).', utilizado_em: 'Barras de controle de reatores nucleares.' },
  { numero: 73, simbolo: 'Ta', nome: 'Tântalo', massa: 180.95, grupo: 'metal-transicao', linha: 6, coluna: 5, config: '[Xe] 4f¹⁴ 5d³ 6s²', descobridor: 'Anders Gustaf Ekeberg', ano: '1802', encontrado_em: 'Minerais (tantalita, coltan).', utilizado_em: 'Capacitores (eletrônicos, celulares), implantes cirúrgicos.' },
  { numero: 74, simbolo: 'W', nome: 'Tungstênio', massa: 183.84, grupo: 'metal-transicao', linha: 6, coluna: 6, config: '[Xe] 4f¹⁴ 5d⁴ 6s²', descobridor: 'Fausto e Juan José Elhuyar', ano: '1783', encontrado_em: 'Minerais (wolframita, scheelita).', utilizado_em: 'Filamentos de lâmpadas (ponto de fusão mais alto), ferramentas.' },
  { numero: 75, simbolo: 'Re', nome: 'Rênio', massa: 186.21, grupo: 'metal-transicao', linha: 6, coluna: 7, config: '[Xe] 4f¹⁴ 5d⁵ 6s²', descobridor: 'Noddack, Tacke, Berg', ano: '1925', encontrado_em: 'Subproduto do refino de molibdênio.', utilizado_em: 'Superligas (turbinas de motores a jato), catalisadores.' },
  { numero: 76, simbolo: 'Os', nome: 'Ósmio', massa: 190.23, grupo: 'metal-transicao', linha: 6, coluna: 8, config: '[Xe] 4f¹⁴ 5d⁶ 6s²', descobridor: 'Smithson Tennant', ano: '1803', encontrado_em: 'Minérios de platina.', utilizado_em: 'Ligas muito duras (pontas de caneta-tinteiro), contatos elétricos.' },
  { numero: 77, simbolo: 'Ir', nome: 'Irídio', massa: 192.22, grupo: 'metal-transicao', linha: 6, coluna: 9, config: '[Xe] 4f¹⁴ 5d⁷ 6s²', descobridor: 'Smithson Tennant', ano: '1803', encontrado_em: 'Minérios de platina, meteoritos.', utilizado_em: 'Velas de ignição (aviação), cadinhos (resistente à corrosão).' },
  { numero: 78, simbolo: 'Pt', nome: 'Platina', massa: 195.08, grupo: 'metal-transicao', linha: 6, coluna: 10, config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', descobridor: 'Antonio de Ulloa (relatou)', ano: '1735', encontrado_em: 'Minérios (sperrylita), nativa.', utilizado_em: 'Catalisadores automotivos, joias, equipamentos de laboratório.' },
  { numero: 79, simbolo: 'Au', nome: 'Ouro', massa: 196.97, grupo: 'metal-transicao', linha: 6, coluna: 11, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Nativo (pepitas), minérios.', utilizado_em: 'Joias, reserva de valor (moedas, barras), eletrônicos.' },
  { numero: 80, simbolo: 'Hg', nome: 'Mercúrio', massa: 200.59, grupo: 'metal-transicao', linha: 6, coluna: 12, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minério (cinábrio).', utilizado_em: 'Termômetros (antigos), lâmpadas fluorescentes, amálgamas dentárias.' },
  { numero: 81, simbolo: 'Tl', nome: 'Tálio', massa: 204.38, grupo: 'outros-metais', linha: 6, coluna: 13, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', descobridor: 'William Crookes', ano: '1861', encontrado_em: 'Subproduto do refino de zinco e chumbo.', utilizado_em: 'Venenos (histórico, tóxico), eletrônicos especiais.' },
  { numero: 82, simbolo: 'Pb', nome: 'Chumbo', massa: 207.2, grupo: 'outros-metais', linha: 6, coluna: 14, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', descobridor: 'Conhecido desde a antiguidade', ano: 'Antigo', encontrado_em: 'Minério (galena).', utilizado_em: 'Baterias de carro, proteção contra radiação (tóxico).' },
  { numero: 83, simbolo: 'Bi', nome: 'Bismuto', massa: 208.98, grupo: 'outros-metais', linha: 6, coluna: 15, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', descobridor: 'Claude François Geoffroy', ano: '1753', encontrado_em: 'Minerais (bismutinita).', utilizado_em: 'Medicamentos (indigestão), ligas de baixo ponto de fusão.' },
  { numero: 84, simbolo: 'Po', nome: 'Polônio', massa: 209, grupo: 'semimetal', linha: 6, coluna: 16, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', descobridor: 'Marie Curie', ano: '1898', encontrado_em: 'Minérios de urânio (traços).', utilizado_em: 'Fonte de partículas alfa, eliminadores de estática (radioativo).' },
  { numero: 85, simbolo: 'At', nome: 'Astato', massa: 210, grupo: 'halogenio', linha: 6, coluna: 17, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', descobridor: 'Corson, MacKenzie, Segrè', ano: '1940', encontrado_em: 'Produto de decaimento (raríssimo).', utilizado_em: 'Pesquisa, potencial em radioterapia.' },
  { numero: 86, simbolo: 'Rn', nome: 'Radônio', massa: 222, grupo: 'gas-nobre', linha: 6, coluna: 18, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', descobridor: 'Friedrich Ernst Dorn', ano: '1900', encontrado_em: 'Produto de decaimento do Rádio (solo).', utilizado_em: 'Nenhum (risco de saúde, gás radioativo).' },
  // Linha 7
  { numero: 87, simbolo: 'Fr', nome: 'Frâncio', massa: 223, grupo: 'metal-alcalino', linha: 7, coluna: 1, config: '[Rn] 7s¹', descobridor: 'Marguerite Perey', ano: '1939', encontrado_em: 'Produto de decaimento (raríssimo).', utilizado_em: 'Apenas pesquisa (vida muito curta).' },
  { numero: 88, simbolo: 'Ra', nome: 'Rádio', massa: 226, grupo: 'alcalino-terroso', linha: 7, coluna: 2, config: '[Rn] 7s²', descobridor: 'Marie e Pierre Curie', ano: '1898', encontrado_em: 'Minérios de urânio.', utilizado_em: 'Tintas luminescentes (antigo, perigoso), radioterapia.' },
  { text: '89-103', grupo: 'actinideo', linha: 7, coluna: 3 }, // Placeholder Actinídeos
  { numero: 104, simbolo: 'Rf', nome: 'Rutherfórdio', massa: 267, grupo: 'metal-transicao', linha: 7, coluna: 4, config: '[Rn] 5f¹⁴ 6d² 7s²', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '1964/1969', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 105, simbolo: 'Db', nome: 'Dúbnio', massa: 270, grupo: 'metal-transicao', linha: 7, coluna: 5, config: '[Rn] 5f¹⁴ 6d³ 7s²', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '1968/1970', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 106, simbolo: 'Sg', nome: 'Seabórgio', massa: 271, grupo: 'metal-transicao', linha: 7, coluna: 6, config: '[Rn] 5f¹⁴ 6d⁴ 7s²', descobridor: 'Berkeley (EUA)', ano: '1974', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 107, simbolo: 'Bh', nome: 'Bóhrio', massa: 270, grupo: 'metal-transicao', linha: 7, coluna: 7, config: '[Rn] 5f¹⁴ 6d⁵ 7s²', descobridor: 'GSI (Alemanha)', ano: '1981', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 108, simbolo: 'Hs', nome: 'Hássio', massa: 277, grupo: 'metal-transicao', linha: 7, coluna: 8, config: '[Rn] 5f¹⁴ 6d⁶ 7s²', descobridor: 'GSI (Alemanha)', ano: '1984', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 109, simbolo: 'Mt', nome: 'Meitnério', massa: 278, grupo: 'metal-transicao', linha: 7, coluna: 9, config: '[Rn] 5f¹⁴ 6d⁷ 7s²', descobridor: 'GSI (Alemanha)', ano: '1982', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 110, simbolo: 'Ds', nome: 'Darmstádio', massa: 281, grupo: 'metal-transicao', linha: 7, coluna: 10, config: '[Rn] 5f¹⁴ 6d⁸ 7s²', descobridor: 'GSI (Alemanha)', ano: '1994', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 111, simbolo: 'Rg', nome: 'Roentgênio', massa: 282, grupo: 'metal-transicao', linha: 7, coluna: 11, config: '[Rn] 5f¹⁴ 6d⁹ 7s²', descobridor: 'GSI (Alemanha)', ano: '1994', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 112, simbolo: 'Cn', nome: 'Copernício', massa: 285, grupo: 'metal-transicao', linha: 7, coluna: 12, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', descobridor: 'GSI (Alemanha)', ano: '1996', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 113, simbolo: 'Nh', nome: 'Nihônio', massa: 286, grupo: 'outros-metais', linha: 7, coluna: 13, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', descobridor: 'RIKEN (Japão)', ano: '2004', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 114, simbolo: 'Fl', nome: 'Fleróvio', massa: 289, grupo: 'outros-metais', linha: 7, coluna: 14, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', descobridor: 'Dubna (Rússia)', ano: '1998', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 115, simbolo: 'Mc', nome: 'Moscóvio', massa: 290, grupo: 'outros-metais', linha: 7, coluna: 15, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', descobridor: 'Dubna (Rússia)', ano: '2003', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 116, simbolo: 'Lv', nome: 'Livermório', massa: 293, grupo: 'outros-metais', linha: 7, coluna: 16, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '2000', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 117, simbolo: 'Ts', nome: 'Tenesso', massa: 294, grupo: 'halogenio', linha: 7, coluna: 17, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '2010', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 118, simbolo: 'Og', nome: 'Oganessônio', massa: 294, grupo: 'gas-nobre', linha: 7, coluna: 18, config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '2002', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },

  // --- Lantanídeos (Linha 8 - "Separada") ---
  { numero: 57, simbolo: 'La', nome: 'Lantânio', massa: 138.91, grupo: 'lantanideo', linha: 8, coluna: 3, config: '[Xe] 5d¹ 6s²', descobridor: 'Carl Gustaf Mosander', ano: '1839', encontrado_em: 'Minerais de terras raras (monazita).', utilizado_em: 'Pedras de isqueiro, lentes de câmeras, catalisadores.' },
  { numero: 58, simbolo: 'Ce', nome: 'Cério', massa: 140.12, grupo: 'lantanideo', linha: 8, coluna: 4, config: '[Xe] 4f¹ 5d¹ 6s²', descobridor: 'Berzelius, Hisinger', ano: '1803', encontrado_em: 'Minerais de terras raras (monazita, bastnasita).', utilizado_em: 'Fornos autolimpantes, catalisadores, pedras de isqueiro.' },
  { numero: 59, simbolo: 'Pr', nome: 'Praseodímio', massa: 140.91, grupo: 'lantanideo', linha: 8, coluna: 5, config: '[Xe] 4f³ 6s²', descobridor: 'Carl Auer von Welsbach', ano: '1885', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Ímãs de alta potência, corante amarelo para vidros.' },
  { numero: 60, simbolo: 'Nd', nome: 'Neodímio', massa: 144.24, grupo: 'lantanideo', linha: 8, coluna: 6, config: '[Xe] 4f⁴ 6s²', descobridor: 'Carl Auer von Welsbach', ano: '1885', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Ímãs (mais fortes), fones de ouvido, motores elétricos, lasers.' },
  { numero: 61, simbolo: 'Pm', nome: 'Promécio', massa: 145, grupo: 'lantanideo', linha: 8, coluna: 7, config: '[Xe] 4f⁵ 6s²', descobridor: 'Marinsky, Glendenin, Coryell', ano: '1945', encontrado_em: 'Sintético (produto de fissão do urânio).', utilizado_em: 'Tintas luminescentes (fonte beta), baterias nucleares.' },
  { numero: 62, simbolo: 'Sm', nome: 'Samário', massa: 150.36, grupo: 'lantanideo', linha: 8, coluna: 8, config: '[Xe] 4f⁶ 6s²', descobridor: 'Paul-Émile Lecoq de Boisbaudran', ano: '1879', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Ímãs (alta temperatura), barras de controle nuclear, lasers.' },
  { numero: 63, simbolo: 'Eu', nome: 'Európio', massa: 151.96, grupo: 'lantanideo', linha: 8, coluna: 9, config: '[Xe] 4f⁷ 6s²', descobridor: 'Eugène-Anatole Demarçay', ano: '1901', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Cor vermelha em telas de TV/monitores, lâmpadas fluorescentes.' },
  { numero: 64, simbolo: 'Gd', nome: 'Gadolínio', massa: 157.25, grupo: 'lantanideo', linha: 8, coluna: 10, config: '[Xe] 4f⁷ 5d¹ 6s²', descobridor: 'Jean Charles de Marignac', ano: '1880', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Agente de contraste em exames de Ressonância Magnética (MRI).' },
  { numero: 65, simbolo: 'Tb', nome: 'Térbio', massa: 158.93, grupo: 'lantanideo', linha: 8, coluna: 11, config: '[Xe] 4f⁹ 6s²', descobridor: 'Carl Gustaf Mosander', ano: '1843', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Cor verde em telas e lâmpadas fluorescentes, sonar.' },
  { numero: 66, simbolo: 'Dy', nome: 'Disprósio', massa: 162.50, grupo: 'lantanideo', linha: 8, coluna: 12, config: '[Xe] 4f¹⁰ 6s²', descobridor: 'Paul-Émile Lecoq de Boisbaudran', ano: '1886', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Ímãs (aumenta resistência ao calor), discos rígidos, lasers.' },
  { numero: 67, simbolo: 'Ho', nome: 'Hôlmio', massa: 164.93, grupo: 'lantanideo', linha: 8, coluna: 13, config: '[Xe] 4f¹¹ 6s²', descobridor: 'Marc Delafontaine, Jacques-Louis Soret', ano: '1878', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Lasers cirúrgicos, corante para vidros (amarelo/rosa).' },
  { numero: 68, simbolo: 'Er', nome: 'Érbio', massa: 167.26, grupo: 'lantanideo', linha: 8, coluna: 14, config: '[Xe] 4f¹² 6s²', descobridor: 'Carl Gustaf Mosander', ano: '1843', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Amplificadores de fibra óptica, corante para vidros (rosa).' },
  { numero: 69, simbolo: 'Tm', nome: 'Túlio', massa: 168.93, grupo: 'lantanideo', linha: 8, coluna: 15, config: '[Xe] 4f¹³ 6s²', descobridor: 'Per Teodor Cleve', ano: '1879', encontrado_em: 'Minerais de terras raras (o mais raro).', utilizado_em: 'Máquinas de raios-X portáteis, lasers.' },
  { numero: 70, simbolo: 'Yb', nome: 'Itérbio', massa: 173.05, grupo: 'lantanideo', linha: 8, coluna: 16, config: '[Xe] 4f¹⁴ 6s²', descobridor: 'Jean Charles de Marignac', ano: '1878', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Lasers, relógios atômicos de alta precisão.' },
  { numero: 71, simbolo: 'Lu', nome: 'Lutécio', massa: 174.97, grupo: 'lantanideo', linha: 8, coluna: 17, config: '[Xe] 4f¹⁴ 5d¹ 6s²', descobridor: 'Urbain, von Welsbach', ano: '1907', encontrado_em: 'Minerais de terras raras.', utilizado_em: 'Detectores para Tomografia (PET scan), catalisadores.' },

  // --- Actinídeos (Linha 9 - "Separada") ---
  { numero: 89, simbolo: 'Ac', nome: 'Actínio', massa: 227, grupo: 'actinideo', linha: 9, coluna: 3, config: '[Rn] 6d¹ 7s²', descobridor: 'André-Louis Debierne', ano: '1899', encontrado_em: 'Minérios de urânio (traços).', utilizado_em: 'Fonte de nêutrons (pesquisa).' },
  { numero: 90, simbolo: 'Th', nome: 'Tório', massa: 232.04, grupo: 'actinideo', linha: 9, coluna: 4, config: '[Rn] 6d² 7s²', descobridor: 'Jöns Jacob Berzelius', ano: '1828', encontrado_em: 'Mineral (monazita).', utilizado_em: 'Combustível nuclear (potencial), camisas de lampião a gás.' },
  { numero: 91, simbolo: 'Pa', nome: 'Protactínio', massa: 231.04, grupo: 'actinideo', linha: 9, coluna: 5, config: '[Rn] 5f² 6d¹ 7s²', descobridor: 'Fajans, Göhring / Hahn, Meitner', ano: '1913/1918', encontrado_em: 'Minérios de urânio (traços).', utilizado_em: 'Apenas pesquisa.' },
  { numero: 92, simbolo: 'U', nome: 'Urânio', massa: 238.03, grupo: 'actinideo', linha: 9, coluna: 6, config: '[Rn] 5f³ 6d¹ 7s²', descobridor: 'Martin Heinrich Klaproth', ano: '1789', encontrado_em: 'Minérios (uraninita).', utilizado_em: 'Combustível para reatores nucleares, armas nucleares.' },
  { numero: 93, simbolo: 'Np', nome: 'Neptúnio', massa: 237, grupo: 'actinideo', linha: 9, coluna: 7, config: '[Rn] 5f⁴ 6d¹ 7s²', descobridor: 'McMillan, Abelson', ano: '1940', encontrado_em: 'Sintético (em reatores de urânio).', utilizado_em: 'Detectores de nêutrons, precursor de Plutônio-238.' },
  { numero: 94, simbolo: 'Pu', nome: 'Plutônio', massa: 244, grupo: 'actinideo', linha: 9, coluna: 8, config: '[Rn] 5f⁶ 7s²', descobridor: 'Seaborg, McMillan, Kennedy, Wahl', ano: '1940', encontrado_em: 'Sintético (em reatores de urânio).', utilizado_em: 'Armas nucleares, combustível (reatores, naves espaciais).' },
  { numero: 95, simbolo: 'Am', nome: 'Amerício', massa: 243, grupo: 'actinideo', linha: 9, coluna: 9, config: '[Rn] 5f⁷ 7s²', descobridor: 'Seaborg, James, Morgan, Ghiorso', ano: '1944', encontrado_em: 'Sintético (em reatores).', utilizado_em: 'Detectores de fumaça domésticos.' },
  { numero: 96, simbolo: 'Cm', nome: 'Cúrio', massa: 247, grupo: 'actinideo', linha: 9, coluna: 10, config: '[Rn] 5f⁷ 6d¹ 7s²', descobridor: 'Seaborg, James, Ghiorso', ano: '1944', encontrado_em: 'Sintético (em reatores).', utilizado_em: 'Fonte de partículas alfa (espectrômetros).' },
  { numero: 97, simbolo: 'Bk', nome: 'Berquélio', massa: 247, grupo: 'actinideo', linha: 9, coluna: 11, config: '[Rn] 5f⁹ 7s²', descobridor: 'Seaborg, Ghiorso, Thompson', ano: '1949', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa (criação de elementos mais pesados).' },
  { numero: 98, simbolo: 'Cf', nome: 'Califórnio', massa: 251, grupo: 'actinideo', linha: 9, coluna: 12, config: '[Rn] 5f¹⁰ 7s²', descobridor: 'Seaborg, Ghiorso, Thompson, Street', ano: '1950', encontrado_em: 'Sintético', utilizado_em: 'Fonte de nêutrons (iniciar reatores), radioterapia.' },
  { numero: 99, simbolo: 'Es', nome: 'Einstênio', massa: 252, grupo: 'actinideo', linha: 9, coluna: 13, config: '[Rn] 5f¹¹ 7s²', descobridor: 'Ghiorso et al. (Berkeley)', ano: '1952', encontrado_em: 'Sintético (em explosões nucleares).', utilizado_em: 'Apenas pesquisa.' },
  { numero: 100, simbolo: 'Fm', nome: 'Férmio', massa: 257, grupo: 'actinideo', linha: 9, coluna: 14, config: '[Rn] 5f¹² 7s²', descobridor: 'Ghiorso et al. (Berkeley)', ano: '1952', encontrado_em: 'Sintético (em explosões nucleares).', utilizado_em: 'Apenas pesquisa.' },
  { numero: 101, simbolo: 'Md', nome: 'Mendelévio', massa: 258, grupo: 'actinideo', linha: 9, coluna: 15, config: '[Rn] 5f¹³ 7s²', descobridor: 'Ghiorso, Seaborg et al.', ano: '1955', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 102, simbolo: 'No', nome: 'Nobélio', massa: 259, grupo: 'actinideo', linha: 9, coluna: 16, config: '[Rn] 5f¹⁴ 7s²', descobridor: 'Dubna (Rússia) / Berkeley (EUA)', ano: '1960s', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
  { numero: 103, simbolo: 'Lr', nome: 'Laurêncio', massa: 262, grupo: 'actinideo', linha: 9, coluna: 17, config: '[Rn] 5f¹⁴ 7s² 7p¹', descobridor: 'Ghiorso et al. (Berkeley)', ano: '1961', encontrado_em: 'Sintético', utilizado_em: 'Apenas pesquisa.' },
];


// === CONSTANTES DA API ===
// REMOVIDAS. Não precisamos mais de API.


// === VARIÁVEIS GLOBAIS PARA O THREE.JS ===
let scene, camera, renderer, cube, controls, animationId;


// Materiais das faces dinâmicas
// REMOVIDOS. Não são mais necessários.


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
        
        // Inicializa a cena 3D
        // Agora, o initCube usa os dados locais e constrói o cubo completo instantaneamente.
        initCube(el, groupClass, groupName);


        // REMOVIDO: A chamada da API não é mais necessária.
        // fetchCubeFaceData(el);


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
        
        // REMOVIDO: Limpeza dos materiais dinâmicos não é mais necessária


        // Adiciona um atraso para a animação de saída antes de esconder
        setTimeout(() => {
            modal.classList.add('invisible', 'opacity-0');
        }, 300); 
    }
    
    // --- FUNÇÕES DA GEMINI API ---
    // REMOVIDAS (fetchWithRetry, fetchCubeFaceData, updateCubeFace)


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


        // 5. Preparar dados das faces (AGORA COM DADOS REAIS)
        const faceData = [
            { title: "Elemento", lines: [el.nome, el.simbolo, `Nº Atômico: ${el.numero}`], color: groupClass },
            { title: "Propriedades", lines: [`Massa: ${el.massa} u`, `Grupo: ${groupName}`], color: 'grupo-outros-metais' },
            { title: "Configuração", lines: [el.config], color: 'grupo-semimetal' },
            // Dados reais, lidos do objeto 'el'
            { title: "Descoberta", lines: [`${el.descobridor}`, `Ano: ${el.ano}`], color: 'grupo-nao-metal' },
            { title: "Onde é Encontrado", lines: [el.encontrado_em], color: 'grupo-halogenio' },
            { title: "Onde é Utilizado", lines: [el.utilizado_em], color: 'grupo-gas-nobre' }
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
        
        // REMOVIDO: Não precisamos mais salvar referências dinâmicas


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
