const games = [
    {
        id: 1,
        name: "Dominion",
        title: "Dominion: A Strategic Card Game",
        description: "Construa seu reino a partir de cartas e estratégias neste jogo de construção de baralho altamente competitivo.",
        image: "https://encurtador.com.br/Rm3qr",
        category: { id: 1, name: "Estratégia" },
        price: 150.00,
        stock: 25
    },
    {
        id: 2,
        name: "Carcassonne",
        title: "Carcassonne: Construa Territórios Medievais",
        description: "Um jogo de colocação de peças onde você constrói cidades, estradas e mosteiros para pontuar.",
        image: "https://encurtador.com.br/r7foK",
        category: { id: 1, name: "Estratégia" },
        price: 130.00,
        stock: 30
    },
    {
        id: 3,
        name: "Ticket to Ride",
        title: "Ticket to Ride: Aventura nos Trilhos",
        description: "Construa rotas ferroviárias e conquiste pontos em um jogo de estratégia leve e divertido.",
        image: "https://encurtador.com.br/Xob9V",
        category: { id: 1, name: "Estratégia" },
        price: 180.00,
        stock: 40
    },
    {
        id: 4,
        name: "Agricola",
        title: "Agricola: O Desafio da Fazenda",
        description: "Construa sua fazenda, plante culturas e crie animais para garantir o melhor desenvolvimento em Agricola.",
        image: "https://encurtador.com.br/PkbIz",
        category: { id: 1, name: "Estratégia" },
        price: 200.00,
        stock: 18
    },
    {
        id: 5,
        name: "Puerto Rico",
        title: "Puerto Rico: Dominando o Comércio das Ilhas",
        description: "Construa a economia mais próspera e comande uma ilha no jogo de tabuleiro Puerto Rico.",
        image: "https://m.media-amazon.com/images/I/71U+oNS5ovL._AC_UF894,1000_QL80_.jpg",
        category: { id: 1, name: "Estratégia" },
        price: 160.00,
        stock: 15
    },
    {
        id: 6,
        name: "Catan",
        title: "Catan: O Jogo de Colonização",
        description: "Compre recursos e construa vilas e cidades em Catan, tentando se tornar o maior colonizador da ilha.",
        image: "https://http2.mlstatic.com/D_NQ_NP_748046-MLB46846522581_072021-O.webp",
        category: { id: 1, name: "Estratégia" },
        price: 170.00,
        stock: 35
    },
    {
        id: 7,
        name: "Power Grid",
        title: "Power Grid: O Jogo de Energia",
        description: "Construa plantas de energia e controle uma rede elétrica eficiente para vencer no jogo Power Grid.",
        image: "https://m.media-amazon.com/images/I/918rhIM6GRL.jpg",
        category: { id: 1, name: "Estratégia" },
        price: 220.00,
        stock: 12
    },
    {
        id: 8,
        name: "Twilight Struggle",
        title: "Twilight Struggle: A Guerra Fria",
        description: "Lidere uma das superpotências durante a Guerra Fria e tome decisões políticas em um jogo altamente estratégico.",
        image: "https://encurtador.com.br/ruFYL",
        category: { id: 1, name: "Estratégia" },
        price: 250.00,
        stock: 20
    },
    {
        id: 9,
        name: "Codenames",
        title: "Codenames: O Jogo de Palavras e Espionagem",
        description: "Divirta-se tentando encontrar os agentes secretos usando apenas dicas de uma palavra.",
        image: "https://down-br.img.susercontent.com/file/5ddb584ccfa6cbe967df6210b6f1a453",
        category: { id: 2, name: "Jogos de carta" },
        price: 90.00,
        stock: 50
    },
    {
        id: 10,
        name: "Exploding Kittens",
        title: "Exploding Kittens: O Jogo de Cartas Explosivas",
        description: "Evite as cartas de explosão e vença seus oponentes neste jogo rápido e divertido de cartas.",
        image: "https://m.media-amazon.com/images/I/61++TD4bjKL._AC_UF894,1000_QL80_.jpg",
        category: { id: 2, name: "Jogos de carta" },
        price: 40.00,
        stock: 60
    },
    {
        id: 11,
        name: "UNO",
        title: "UNO: O Clássico Jogo de Cartas",
        description: "Junte-se à diversão com o clássico jogo de cartas UNO, onde o objetivo é ser o primeiro a jogar todas as suas cartas.",
        image: "https://cdn.awsli.com.br/2500x2500/1988/1988640/produto/214209073b922f7617d.jpg",
        category: { id: 2, name: "Jogos de carta" },
        price: 30.00,
        stock: 100
    },
    {
        id: 12,
        name: "Sushi Go!",
        title: "Sushi Go!: O Jogo de Cartas Rápido e Divertido",
        description: "Escolha suas cartas sabiamente e tente formar as melhores combinações de sushi neste jogo rápido.",
        image: "https://m.media-amazon.com/images/I/51UwIalqZOL._AC_UF894,1000_QL80_.jpg",
        category: { id: 2, name: "Jogos de carta" },
        price: 50.00,
        stock: 45
    },
    {
        id: 13,
        name: "Bang!",
        title: "Bang!: O Jogo de Cartas do Velho Oeste",
        description: "Assuma o papel de um xerife ou fora da lei e descubra quem são seus aliados e inimigos neste divertido jogo de cartas.",
        image: "https://m.media-amazon.com/images/I/81MMvRARUOL._AC_UF894,1000_QL80_.jpg",
        category: { id: 2, name: "Jogos de carta" },
        price: 60.00,
        stock: 30
    },
    {
        id: 14,
        name: "The Mind",
        title: "The Mind: O Jogo de Cartas e Sincronização",
        description: "Trabalhe em conjunto com seus amigos para jogar suas cartas na ordem correta, sem se comunicar.",
        image: "https://bancakids.com.br/cdn/shop/products/The-Mind_500x400.jpg?v=1673374566",
        category: { id: 2, name: "Jogos de carta" },
        price: 45.00,
        stock: 55
    },
    {
        id: 15,
        name: "Love Letter",
        title: "Love Letter: O Jogo de Cartas de Dedução e Sorte",
        description: "Tente entregar sua carta de amor para a princesa sem ser pego pelos outros jogadores.",
        image: "https://http2.mlstatic.com/D_NQ_NP_711881-MLB31672838309_082019-O.webp",
        category: { id: 2, name: "Jogos de carta" },
        price: 40.00,
        stock: 70
    },
    {
        id: 16,
        name: "Munchkin",
        title: "Munchkin: O Jogo de Cartas de Aventura Cômica",
        description: "Acabe com monstros e colete tesouros neste jogo de cartas cheio de humor e reviravoltas.",
        image: "https://cdn.awsli.com.br/2618/2618156/produto/226303605/mun001_3d-box_800px-6e9x489cm2.png",
        category: { id: 2, name: "Jogos de carta" },
        price: 80.00,
        stock: 20
    },
    {
        id: 17,
        name: "Pandemic",
        title: "Pandemic: O Jogo Cooperativo de Epidemias",
        description: "Trabalhe em equipe para salvar o mundo de quatro doenças mortais em um dos melhores jogos cooperativos de todos os tempos.",
        image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v6889823979222251628/products/PAN001_3D.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 120.00,
        stock: 35
    },
    {
        id: 18,
        name: "Forbidden Island",
        title: "Forbidden Island: O Jogo Cooperativo de Aventuras",
        description: "Encontre os tesouros e escape de uma ilha submersa em um jogo cooperativo cheio de emoção.",
        image: "https://m.media-amazon.com/images/I/71wQ2-zW25L.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 110.00,
        stock: 50
    },
    {
        id: 19,
        name: "Ghost Stories",
        title: "Ghost Stories: O Jogo de Fantasmas",
        description: "Proteja uma vila de fantasmas em um jogo cooperativo desafiador e altamente estratégico.",
        image: "https://http2.mlstatic.com/D_NQ_NP_827172-MLB75598910053_042024-O.webp",
        category: { id: 3, name: "Co-Op" },
        price: 140.00,
        stock: 15
    },
    {
        id: 20,
        name: "Spirit Island",
        title: "Spirit Island: O Jogo Cooperativo de Defesa da Ilha",
        description: "Defenda a ilha de colonizadores invasores em um jogo cooperativo de alta complexidade e estratégias profundas.",
        image: "https://www.playeasy.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/spiritisland-1.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 160.00,
        stock: 25
    },
    {
        id: 21,
        name: "Arkham Horror: The Card Game",
        title: "Arkham Horror: O Jogo de Cartas Cooperativo",
        description: "Enfrente criaturas sobrenaturais e resolva mistérios com seu grupo em um jogo de cartas cooperativo.",
        image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v2441015725693031744/products/AHC001_3D.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 130.00,
        stock: 20
    },
    {
        id: 22,
        name: "The Crew",
        title: "The Crew: O Jogo Cooperativo Espacial",
        description: "Viaje pelo espaço com sua equipe para completar missões em um jogo cooperativo de cartas e comunicação.",
        image: "https://a-static.mlcdn.com.br/800x560/a-tripulacao-the-crew-jogo-de-cartas-devir-bgtrip/lojaplacegames/888872503p/5c3916ff03d09970034190b943f5e586.jpeg",
        category: { id: 3, name: "Co-Op" },
        price: 90.00,
        stock: 45
    },
    {
        id: 23,
        name: "Hanabi",
        title: "Hanabi: O Jogo Cooperativo de Fogos de Artifício",
        description: "Monte um incrível show de fogos de artifício cooperando com os outros jogadores, mas sem ver suas próprias cartas.",
        image: "https://m.media-amazon.com/images/I/71DhT80LdhL._AC_UF894,1000_QL80_.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 50.00,
        stock: 60
    },
    {
        id: 24,
        name: "Legacy: Gloomhaven",
        title: "Gloomhaven: O Jogo Cooperativo de Aventuras e Estratégia",
        description: "Desbrave masmorras e crie um legado com seu grupo em um dos maiores jogos cooperativos de aventuras.",
        image: "https://images.tcdn.com.br/img/img_prod/1018249/gloomhaven_4_playmats_individuais_85_1_ae3d4b9c8a7a4e71b1b98915bdb2bea9_20220221230612.jpg",
        category: { id: 3, name: "Co-Op" },
        price: 400.00,
        stock: 10
    },
    {
        id: 25,
        name: "Telestrations",
        title: "Telestrations: O Jogo de Desenhos e Advinhações",
        description: "Um jogo de adivinhação onde você desenha e tenta adivinhar as palavras, criando um ciclo de risadas e confusões.",
        image: "https://http2.mlstatic.com/D_NQ_NP_982728-MLA79201960136_092024-O.webp",
        category: { id: 4, name: "Party Games" },
        price: 110.00,
        stock: 50
    },
    {
        id: 26,
        name: "Just One",
        title: "Just One: O Jogo de Adivinhação e Palavras",
        description: "Um jogo cooperativo onde todos devem dar dicas para ajudar um jogador a adivinhar uma palavra secreta.",
        image: "https://a-static.mlcdn.com.br/800x560/jogo-de-just-one-party-caixa-branca-jogo-de-tabuleiro-cooperativo-f-repos-production/nocnoceua/aub07w3pjtl2/af753af49f48dd56cca433eba4e33006.jpeg",
        category: { id: 4, name: "Party Games" },
        price: 70.00,
        stock: 60
    },
    {
        id: 27,
        name: "Codenames: Duet",
        title: "Codenames: Duet - O Jogo de Palavras em Dupla",
        description: "Uma versão cooperativa do clássico Codenames, onde dois jogadores trabalham juntos para adivinhar as palavras.",
        image: "https://m.media-amazon.com/images/I/8176JFVsupL.jpg",
        category: { id: 4, name: "Party Games" },
        price: 80.00,
        stock: 40
    },
    {
        id: 28,
        name: "Dixit",
        title: "Dixit: O Jogo de Cartas Criativas",
        description: "Use sua criatividade para descrever imagens e adivinhar o que os outros jogadores estão pensando.",
        image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v4114340520070629436/products/DIX301_3D.jpg",
        category: { id: 4, name: "Party Games" },
        price: 100.00,
        stock: 45
    },
    {
        id: 29,
        name: "The Resistance",
        title: "The Resistance: O Jogo de Espionagem e Traição",
        description: "Participe de missões secretas em um jogo de dedução social onde você tenta identificar os traidores entre os jogadores.",
        image: "https://m.media-amazon.com/images/I/71hKr015XnL._AC_UF894,1000_QL80_.jpg",
        category: { id: 4, name: "Party Games" },
        price: 85.00,
        stock: 55
    },
    {
        id: 30,
        name: "Wavelength",
        title: "Wavelength: O Jogo de Comunicação e Advinhação",
        description: "Tente comunicar-se com seus amigos para encontrar a posição exata em um espectro, numa mistura de adivinhação e intuição.",
        image: "https://m.media-amazon.com/images/I/91k48t4rl6L._AC_UF894,1000_QL80_.jpg",
        category: { id: 4, name: "Party Games" },
        price: 90.00,
        stock: 50
    },
    {
        id: 31,
        name: "Monodeal",
        title: "Monodeal: O Jogo de Cartas de Trocas e Estratégia",
        description: "Troque cartas com outros jogadores e tome decisões inteligentes para ser o primeiro a conquistar o maior império.",
        image: "https://m.media-amazon.com/images/I/81s62GwazPL._AC_SL1500_.jpg",
        category: { id: 4, name: "Party Games" },
        price: 60.00,
        stock: 75
    },
    {
        id: 32,
        name: "Taco Cat Goat Cheese Pizza",
        title: "Taco Cat Goat Cheese Pizza: O Jogo de Cartas Divertido",
        description: "Um jogo de cartas rápido e caótico onde você tem que se livrar de suas cartas antes dos outros jogadores.",
        image: "https://m.media-amazon.com/images/I/81b-q1sXYnL._AC_UF894,1000_QL80_.jpg",
        category: { id: 4, name: "Party Games" },
        price: 40.00,
        stock: 80
    },
    {
        id: 33,
        name: "Gloomhaven",
        title: "Gloomhaven: O Jogo de Aventuras e Fantasia",
        description: "Explore masmorras, enfrente monstros e desenvolva seu personagem em uma jornada épica cheia de aventuras e escolhas difíceis.",
        image: "https://http2.mlstatic.com/D_NQ_NP_912580-MLB41913422668_052020-O.webp",
        category: { id: 5, name: "Fantasia" },
        price: 350.00,
        stock: 20
    },
    {
        id: 34,
        name: "Descent: Journeys in the Dark",
        title: "Descent: Jornadas nas Sombras - O Jogo de Aventura Fantástica",
        description: "Participe de uma aventura épica, enfrentando monstros e superando desafios, com combate tático e exploração em masmorras.",
        image: "https://images-cdn.fantasyflightgames.com/filer_public/ce/52/ce52b338-097e-4e5a-a09a-84716cc9416f/dj03_main.png",
        category: { id: 5, name: "Fantasia" },
        price: 200.00,
        stock: 25
    },
    {
        id: 35,
        name: "Mage Knight",
        title: "Mage Knight: O Jogo de Aventuras e Magia",
        description: "Explore terras misteriosas, lute contra criaturas fantásticas e use magia em um jogo estratégico de construção de impérios.",
        image: "https://67287.cdn.simplo7.net/static/67287/sku/jogos-de-tabuleiro-e-cardgames-mage-knight-edicao-definitiva--p-1649949942433.jpg",
        category: { id: 5, name: "Fantasia" },
        price: 180.00,
        stock: 30
    },
    {
        id: 36,
        name: "Talisman",
        title: "Talisman: O Jogo de Aventura Fantástica",
        description: "Em uma terra mística, embarque em uma jornada de heróis, escolhendo classes e enfrentando inimigos e desafios.",
        image: "https://http2.mlstatic.com/D_NQ_NP_952958-MLB74385726664_022024-O.webp",
        category: { id: 5, name: "Fantasia" },
        price: 130.00,
        stock: 40
    },
    {
        id: 37,
        name: "Lord of the Rings: The Confrontation",
        title: "O Senhor dos Anéis: O Confronto",
        description: "Participe da batalha entre as forças do bem e do mal, usando estratégias e táticas baseadas no universo de Tolkien.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4x5vK3NMaN8F1rwpOmTr606NfklKfLu13w&s",
        category: { id: 5, name: "Fantasia" },
        price: 90.00,
        stock: 50
    },
    {
        id: 38,
        name: "Elder Sign",
        title: "Elder Sign: O Jogo de Cartas de Terror e Fantasia",
        description: "Lute contra as forças do mal, investigue mistérios e use seus poderes mágicos para evitar o fim do mundo em um jogo de cartas.",
        image: "https://m.media-amazon.com/images/I/819uATUSOGL._AC_UF1000,1000_QL80_.jpg",
        category: { id: 5, name: "Fantasia" },
        price: 70.00,
        stock: 60
    },
    {
        id: 39,
        name: "Small World",
        title: "Small World: O Jogo de Dominação Fantástica",
        description: "Conquiste terras e lidera diferentes raças fantásticas para controlar um mundo pequeno em um jogo de estratégia e domínio.",
        image: "https://acdn.mitiendanube.com/stores/140/298/products/smw_3d-box_800px-b996797f87940581a415132804489100-1024-1024.png",
        category: { id: 5, name: "Fantasia" },
        price: 110.00,
        stock: 35
    },
    {
        id: 40,
        name: "Arkham Horror",
        title: "Arkham Horror: O Jogo de Terror e Fantasia",
        description: "Enfrente criaturas sobrenaturais em uma cidade dominada pelo caos, onde o medo e a loucura tomam conta de todos.",
        image: "https://m.media-amazon.com/images/I/51BaUGiWN0L._AC_UF894,1000_QL80_.jpg",
        category: { id: 5, name: "Fantasia" },
        price: 160.00,
        stock: 45
    },
    {
        id: 41,
        name: "Ticket to Ride: Europe",
        title: "Ticket to Ride: Europa - O Jogo de Construção de Ferrovias",
        description: "Construa ferrovias pelo continente europeu, completando rotas e enfrentando desafios, enquanto tenta conquistar o maior império ferroviário.",
        image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v5913191664724708845/products/TTR002_frente.png",
        category: { id: 6, name: "Hístorico" },
        price: 130.00,
        stock: 30
    },
    {
        id: 42,
        name: "7 Wonders",
        title: "7 Wonders: O Jogo de Civilizações Antigas",
        description: "Construa uma civilização poderosa através de estratégias militares, comerciais e científicas, utilizando cartas de diferentes épocas históricas.",
        image: "https://m.media-amazon.com/images/I/61O7x66lVVL._AC_UF894,1000_QL80_.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 160.00,
        stock: 25
    },
    {
        id: 43,
        name: "Through the Ages: A Story of Civilization",
        title: "Through the Ages: A História da Civilização",
        description: "Gerencie sua civilização, construindo maravilhas e avançando em ciência, cultura e poder militar em um jogo estratégico de construção de impérios.",
        image: "https://m.media-amazon.com/images/I/71rsds1Jf2L.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 200.00,
        stock: 18
    },
    {
        id: 44,
        name: "The Grizzled",
        title: "The Grizzled: A Grande Guerra",
        description: "Vivencie os desafios da Primeira Guerra Mundial, cooperando com outros jogadores para sobreviver ao estresse, choques e incertezas do campo de batalha.",
        image: "https://m.media-amazon.com/images/I/91hMBXbUjXL._AC_UF894,1000_QL80_.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 75.00,
        stock: 40
    },
    {
        id: 45,
        name: "Twilight Struggle",
        title: "Twilight Struggle: A Guerra Fria",
        description: "Recrie a tensão e os conflitos da Guerra Fria em um jogo de estratégia de cartas, onde os jogadores competem pela supremacia global.",
        image: "https://m.media-amazon.com/images/I/71Amid-krPL._AC_UF894,1000_QL80_.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 250.00,
        stock: 20
    },
    {
        id: 46,
        name: "The Resistance",
        title: "The Resistance: Jogos de Espionagem",
        description: "Participe de missões secretas em uma distopia futurista, onde você precisa identificar os espiões enquanto tenta completar tarefas perigosas.",
        image: "https://m.media-amazon.com/images/I/71hKr015XnL._AC_UF894,1000_QL80_.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 50.00,
        stock: 50
    },
    {
        id: 47,
        name: "Kingdomino",
        title: "Kingdomino: O Jogo de Construção de Reinos",
        description: "Construa seu reino medieval unindo territórios com castelos, florestas e montanhas para acumular pontos e expandir seu domínio.",
        image: "https://papergames.com.br/site/wp-content/uploads/2022/10/kingdomino-caixa-frente.png",
        category: { id: 6, name: "Hístorico" },
        price: 70.00,
        stock: 30
    },
    {
        id: 48,
        name: "Pandemic: Legacy",
        title: "Pandemic: Legacy - O Jogo de Estratégia e Sobrevivência Global",
        description: "Lute contra doenças mortais em uma corrida contra o tempo, enfrentando eventos inesperados que mudam o jogo permanentemente.",
        image: "https://m.media-amazon.com/images/I/91s4g15dWnL.jpg",
        category: { id: 6, name: "Hístorico" },
        price: 220.00,
        stock: 15
    },
    {
        id: 49,
        name: "Terraforming Mars",
        title: "Terraforming Mars: O Jogo de Colonização de Marte",
        description: "Trabalhe com outras corporações para terraformar Marte, criando um ambiente habitável para humanos em um dos jogos mais desafiadores de estratégia científica.",
        image: "https://storage.googleapis.com/ludopedia-posts/bc218_95tc3w.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 250.00,
        stock: 20
    },
    {
        id: 50,
        name: "Gaia Project",
        title: "Gaia Project: O Jogo de Exploração Espacial",
        description: "Explore o universo e colonize planetas em um jogo de estratégia de longo prazo, onde você constrói uma civilização espacial complexa e interconectada.",
        image: "https://storage.googleapis.com/ludopedia-posts/450a4_cdikae.png",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 300.00,
        stock: 15
    },
    {
        id: 51,
        name: "Twilight Imperium",
        title: "Twilight Imperium: O Conflito Espacial Galáctico",
        description: "Assuma o controle de uma das grandes facções galácticas e busque dominar o universo em um jogo épico de conquista espacial e diplomacia.",
        image: "https://m.media-amazon.com/images/I/71bqIdopdaL._AC_UF894,1000_QL80_.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 350.00,
        stock: 10
    },
    {
        id: 52,
        name: "Star Realms",
        title: "Star Realms: O Jogo de Cartas de Combate Espacial",
        description: "Construa seu império no espaço com cartas de combate, estratégias e alianças, para derrotar seus oponentes e dominar a galáxia.",
        image: "https://m.media-amazon.com/images/I/81zDfM6m9mL.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 60.00,
        stock: 30
    },
    {
        id: 53,
        name: "XIA: Legends of a Drift System",
        title: "XIA: Legends of a Drift System - Jogo de Piratas Espaciais",
        description: "Torne-se um pirata espacial ou comerciante em uma galáxia cheia de aventura e escolhas arriscadas. Roube, negocie e explore a imensidão do espaço.",
        image: "https://m.media-amazon.com/images/I/81boELWAIhL.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 220.00,
        stock: 18
    },
    {
        id: 54,
        name: "Eclipse",
        title: "Eclipse: O Jogo de Conquista Espacial",
        description: "Participe da maior guerra espacial da história, onde você explora, pesquisa, constrói e luta pela supremacia do universo.",
        image: "https://acdn.mitiendanube.com/stores/140/298/products/e_1-copiar-1_0131-adb1fc61d460c4b56516697331662963-1024-1024.png",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 180.00,
        stock: 25
    },
    {
        id: 55,
        name: "Android: Netrunner",
        title: "Android: Netrunner - O Jogo de Cartas de Hackers e Corporações",
        description: "Mergulhe no futuro distópico de corporações poderosas e hackers em um jogo de cartas com alta estratégia e jogabilidade de bluff.",
        image: "https://m.media-amazon.com/images/I/71YBQVxesbL._AC_UF894,1000_QL80_.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 150.00,
        stock: 35
    },
    {
        id: 56,
        name: "The Expanse: Board Game",
        title: "The Expanse: Jogo de Tabuleiro",
        description: "Lute pela supremacia entre as facções do Sistema Solar enquanto explora e conquista planetas, inspirado na famosa série de TV de ficção científica.",
        image: "https://m.media-amazon.com/images/I/71A-Oq4bEaL._AC_UF350,350_QL80_.jpg",
        category: { id: 7, name: "Ficção Cientifica" },
        price: 180.00,
        stock: 40
    },
    {
        id: 57,
        name: "Clue",
        title: "Clue: O Jogo de Mistério Clássico",
        description: "Investigue o assassinato de um rico magnata em uma mansão repleta de suspeitos e pistas. Encontre quem, onde e com qual arma o crime foi cometido.",
        image: "https://m.media-amazon.com/images/I/61+Ev5pJDqL._AC_UF894,1000_QL80_.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 90.00,
        stock: 25
    },
    {
        id: 58,
        name: "Mysterium",
        title: "Mysterium: O Jogo de Mistério Fantasmagórico",
        description: "Um espírito está tentando se comunicar com os jogadores para revelar os detalhes de seu assassinato. Usando cartas e pistas, você deve decifrar o mistério.",
        image: "https://m.media-amazon.com/images/I/81HW9fyDtgL._AC_UF894,1000_QL80_.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 120.00,
        stock: 18
    },
    {
        id: 59,
        name: "Sherlock Holmes Consulting Detective",
        title: "Sherlock Holmes Consulting Detective: O Jogo de Investigação",
        description: "Junte-se a Sherlock Holmes para resolver casos complexos. Leia as pistas, interroga suspeitos e analise os dados para desvendar o mistério.",
        image: "https://m.media-amazon.com/images/I/81YqWiU+0uL._AC_UF894,1000_QL80_.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 200.00,
        stock: 15
    },
    {
        id: 60,
        name: "Detective: A Modern Crime Board Game",
        title: "Detective: A Modern Crime Board Game",
        description: "Investigue crimes modernos usando uma base de dados virtual e recursos investigativos. Encontre pistas, entreviste testemunhas e resolva o crime.",
        image: "https://m.media-amazon.com/images/I/81NrpWR0XmL._AC_UF894,1000_QL80_.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 160.00,
        stock: 22
    },
    {
        id: 61,
        name: "Deception: Murder in Hong Kong",
        title: "Deception: Murder in Hong Kong",
        description: "Um assassinato foi cometido em Hong Kong. Jogadores assumem o papel de investigadores, enquanto outros tentam encobrir o crime. Use pistas e dedução para descobrir o culpado.",
        image: "https://m.media-amazon.com/images/I/61bS2TOxS2L._AC_UF894,1000_QL80_.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 100.00,
        stock: 30
    },
    {
        id: 62,
        name: "Bang! The Dice Game",
        title: "Bang! The Dice Game",
        description: "Em uma pequena cidade do Velho Oeste, os jogadores se enfrentam como xerifes, foras-da-lei e foragidos. Encontre o assassino antes que seja tarde demais.",
        image: "https://m.media-amazon.com/images/I/81f8wJoUbqL.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 70.00,
        stock: 40
    },
    {
        id: 63,
        name: "Codenames: Duet",
        title: "Codenames: Duet",
        description: "Trabalhe em equipe para descobrir as palavras secretas antes que o tempo acabe. Um jogo de palavras e mistério onde as pistas e a comunicação são essenciais.",
        image: "https://m.media-amazon.com/images/I/8176JFVsupL.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 80.00,
        stock: 18
    },
    {
        id: 64,
        name: "The Chameleon",
        title: "The Chameleon: O Jogo de Mentiras e Verdades",
        description: "Quem é o camaleão entre os jogadores? Desvende o mistério e tente descobrir quem está mentindo em um jogo de palavras e dedução.",
        image: "https://m.media-amazon.com/images/I/81k0f9mrSFL.jpg",
        category: { id: 8, name: "Mistério e suspense" },
        price: 85.00,
        stock: 20
    }
]

export default games