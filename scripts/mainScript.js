// pega um elemento pelo id e scrolla até ele
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      if (typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Smooth scrolling is not supported.');
        // scrolla até o elemento se smooth scrolling não for suportado
        const scrollTo = element.offsetTop;
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      }
    }
  }

// vetor com as informações dos membros da CPA para os primeiros cards
const membersData = [
    {
        imgSrc: "../assets/dani.png",
        alt: "foto membro CPA",
        name: "Daniele Wolfarte",
        membroID: "membro1"
    },
    {
        imgSrc: "../assets/membrosCPA/Renato IFPR.jpg",
        alt: "foto membro CPA",
        name: "Renato Guerreiro",
        membroID: "membro2"
    },
    {
        imgSrc: "../assets/membrosCPA/Liberato.jpg",
        alt: "foto membro CPA",
        name: "Liberato Brum",
        membroID: "membro3"
    },
    {
        imgSrc: "../assets/membrosCPA/Leo.jpg",
        alt: "foto membro CPA",
        name: "Leonardo Garcia",
        membroID: "membro4"
    },
    {
        imgSrc: "../assets/membrosCPA/Carin.jpg",
        alt: "foto membro CPA",
        name: "Carin Hahn",
        membroID: "membro5"
    },
    {
        imgSrc: "../assets/membrosCPA/Maristela.jpg",
        alt: "foto membro CPA",
        name: "Maristela Bendo",
        membroID: "membro6"
    },
    {
        imgSrc: "../assets/membrosCPA/Marlise.jpg",
        alt: "foto membro CPA",
        name: "Franciele",
        membroID: "membro7"
    },
    {
        imgSrc: "../assets/membrosCPA/arthur.jpg",
        alt: "foto membro CPA",
        name: "Artur Fernandes",
        membroID: "membro8"
    },
    {
        imgSrc: "../assets/membrosCPA/Nicolas.jpg",
        alt: "foto membro CPA",
        name: "Nicolas Gabriel",
        membroID: "membro9"
    },
    {
        imgSrc: "../assets/membrosCPA/Tatiane.jpg",
        alt: "foto membro CPA",
        name: "Tatiane Margraf",
        membroID: "membro10"
    }
];

// vetor com as informações de cada membro da CPA para os cards de cada um
const cardObjects = [
    {
        nome: 'Daniele Wolfart',
        cargo: 'Coordenadora da CPA',
        imgSrc: '../assets/dani.png',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro1',
    },
    {
        nome: 'Renato Guerreiro',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: '../assets/membrosCPA/Renato IFPR.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro2',
    },
    {
        nome: 'Liberato Brum Júnior',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: '../assets/membrosCPA/Liberato.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro3',
    },
    {
        nome: 'Leonardo Garcia Tampelini',
        cargo: 'Representante do Corpo Docente',
        imgSrc: '../assets/membrosCPA/Leo.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro4',
    },
    {
        nome: 'Carin Hahn',
        cargo: 'Representante do Corpo Docente',
        imgSrc: '../assets/membrosCPA/Carin.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro5',
    },
    {
        nome: 'Maristela Bendo',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: '../assets/membrosCPA/Maristela.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro6',
    },
    {
        nome: 'Marlise',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: '../assets/membrosCPA/Marlise.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro7',
    },
    {
        nome: 'Artur Fernandes de Mattos',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/arthur.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro8',
    },
    {
        nome: 'Nicolas Gabriel Battisti Dias',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/Nicolas.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro9',
    },
    {
        nome: 'Tatiane Margraf',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/Tatiane.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: 'membro10',
    }
];

/*
    Objeto com dados para div Sobre
*/
const sobre = {
    titulo: 'O que é a CPA?',
    texto: "A Comissão Própria de Avaliação (CPA) é um setor constituído em todas as Instituições de Ensino Superior (IES), em cumprimento à Lei nº 10.861/2004, que instituiu o Sistema Nacional de Avaliação do Ensino Superior (SINAES). A Comissão Própria de Avaliação(CPA) é formada por professores, alunos, técnicos- administrativos e representantes da sociedade civil organizada, com o objetivo de coordenar os processos de avaliação internos da instituição e sistematização dos dados solicitados pelo Instituto Nacional de Estudos e Pesquisas Educacionais. Anísio Teixeira(INEP), órgão vinculado ao Ministério da Educação. A CPA realiza anualmente o levantamento de informações através da aplicação do instrumento (questionário) de Avaliação Institucional via sistema on-line com toda a comunidade acadêmica (docentes, discentes e técnicos-administrativos) no intuito de conhecer suas opiniões e demandas, tendo como objetivo implantar a melhoria contínua na Faculdade, nos cursos e seus programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação, além de promover a melhoria da qualidade da educação superior e responsabilidade social da Instituição. Destaca-se que a Avaliação Institucional (Interna - questionários aplicados on-line) realizada pela CPA serve de subsídios para o reconhecimento, credenciamento e recredenciamento de cursos e Instituições de Ensino Superior (IES), ou seja, serve para a Avaliação de Cursos de Graduação (Externa - feita pelos avaliadores do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira - INEP), e que juntamente com o Exame Nacional de Avaliação dos Estudantes (ENADE) formam o Sistema Nacional de Avaliação da Educação Superior (SINAES), constituindo dentre outros o Índice de Curso de Graduação (IGC), conhecido como nota ou conceito do curso."
};

/*
    Objetos com dados para a div Objetivos
*/
const divObjetivos =
{
    titulo: 'Quais os objetivos da CPA?',
    arrayObjetivos: [
        {
            objetivo: "Coordenar os processos de avaliação internos da instituição;",
        },
        {
            objetivo: "Elaborar, implementar e acompanhar o Projeto de Avaliação Interna da Faculdade Biopark;"
        },
        {
            objetivo: "Sensibilizar a comunidade interna da Faculdade Biopark para participar ativamente das ações avaliativas;"
        },
        {
            objetivo: "Sistematizar e prestar as informações solicitadas pelo INEP/ MEC;"
        },
        {
            objetivo: "Promover as ações institucionais necessárias ao cumprimento dos objetivos do SINAES;"
        },
        {
            objetivo: "Conduzir de forma ética os processos de avaliação interna;"
        },
        {
            objetivo: "Garantir um processo de autoavaliação coletivo, contínuo, ético e democrático;"
        },
        {
            objetivo: "Propiciar a reflexão e revisão dos programas, ações e diretrizes de planejamento e desenvolvimento da Instituição;"
        },
        {
            objetivo: "Estimular a cultura da autoavaliação no meio institucional;"
        },
        {
            objetivo: "Colaborar para a transparência da Instituição em todos os níveis;"
        },
        {
            objetivo: "Dimensionar os pontos fortes e fracos, com o intuito de(re)dimensionar e(re)orientar a gestão acadêmica e administrativa;"
        },
        {
            objetivo: "Divulgar para a comunidade acadêmica e sociedade os resultados alcançados."
        },
    ]
}

// Função para criar os primeiros cards dos membros
function createMemberElement(member) {

    const cardMembros = document.querySelector("#cardMembros");

    const memberDiv = document.createElement("div");
    memberDiv.classList.add("membrosCPA");

    const img = document.createElement("img");
    img.src = member.imgSrc;
    img.alt = member.alt;

    const infoMembros = document.createElement("div");

    infoMembros.classList.add("infoMembros");

    const p = document.createElement("p");
    p.textContent = member.name;

    const button = document.createElement("button");
    button.textContent = "Mostrar Mais";
    button.onclick = function () {
        scrollToElement(member.membroID);
    };

    cardMembros.appendChild(memberDiv);
    memberDiv.appendChild(img);
    memberDiv.appendChild(infoMembros);
    infoMembros.appendChild(p);
    infoMembros.appendChild(button);

}

// função para rodar a função de criar os cards dos membros
// (para cada membro do array, cria um card)
function createMemberCards() {
    membersData.forEach((member) => {
        createMemberElement(member);
    });
}

// função para criar os cards dos membros com mais informações
// (para cada membro do array, cria um card com mais informações)
function createCardElement(card) {

    const cardInfo = document.querySelector(".cardInfo");
    const membrosInfo = document.createElement("div");
    membrosInfo.classList.add("membrosInfo");

    cardInfo.appendChild(membrosInfo);

    const top = document.createElement("div");
    top.classList.add("top");

    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.alt = card.nome;
    img.setAttribute("id", card.membroID)

    const info = document.createElement("div");
    info.classList.add("info");

    const nome = document.createElement("p");
    nome.textContent = card.nome;

    const cargo = document.createElement("p");
    cargo.textContent = card.cargo;

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const button1 = document.createElement("button");
    button1.textContent = "Voltar";
    button1.onclick = function () {
        scrollToElement("cardMembros");
    }

    const button2 = document.createElement("button");
    button2.textContent = "Contato";
    button2.onclick = function () {
        scrollToElement("contato");
    }

    const sobre = document.createElement("p");
    sobre.textContent = card.sobre;

    membrosInfo.appendChild(top);
    top.appendChild(img);
    top.appendChild(info);
    info.appendChild(nome);
    info.appendChild(cargo);
    membrosInfo.appendChild(bottom);
    bottom.appendChild(sobre);
    bottom.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
}

// função para rodar a função de criar os cards de cada membro específico
function createCard() {
    cardObjects.forEach((card) => {
        createCardElement(card);
    });
}

/*
    função para criar div sobre o que é a cpa
*/
function createSobre() {
    const divSobre = document.querySelector(".sobre");
    const text = document.createElement("p");
    text.textContent = sobre.titulo;
    text.style.fontWeight = "bold";
    const text2 = document.createElement("p");
    text2.textContent = sobre.texto;
    divSobre.appendChild(text);
    divSobre.appendChild(text2);
}

/*
    função para criar div sobre os objetivos da cpa
*/
function createObjetivos() {
    const objetivos = document.querySelector(".objetivos");
    const text = document.createElement("p");
    text.textContent = divObjetivos.titulo;
    text.style.fontWeight = "bold";
    objetivos.appendChild(text);
    const lista = document.createElement("ul");
    divObjetivos.arrayObjetivos.forEach((objetivo) => {
        const text2 = document.createElement("li");
        text2.textContent = objetivo.objetivo;
        lista.appendChild(text2);
    });
    objetivos.appendChild(lista);
}



// função para renderizar os cards;
document.addEventListener("DOMContentLoaded", function () {
    createCard();
    createMemberCards();
    createSobre();
    createObjetivos();
});


function toggleMenu(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const menuIcon = document.querySelector('.menuIcon');
const menuContainer = document.querySelector('.menuContainer');
// Add a click event listener to the document
document.addEventListener('click', function (event) {
    // Check if the clicked element is outside of the menu
    if (!menuIcon.contains(event.target)) {
        // Clicked outside of the menu, handle the event here
        // For example, you can close the menu or perform any other action
        menuIcon.classList.remove('change');
        menuContainer.classList.remove('open');
    }
});