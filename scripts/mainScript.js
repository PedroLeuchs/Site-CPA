// pega um elemento pelo id e scrolla até ele
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// vetor com as informações dos membros da CPA para os primeiros cards
const membersData = [
    {
        imgSrc: "../assets/dani.png",
        alt: "foto membro CPA",
        name: "Daniele Wolfarte",
        membroID: "#membro1"
    },
    {
        imgSrc: "../assets/membrosCPA/Renato IFPR.jpg",
        alt: "foto membro CPA",
        name: "Renato Guerreiro",
        membroID: "#membro2"
    },
    {
        imgSrc: "../assets/membrosCPA/Liberato.jpg",
        alt: "foto membro CPA",
        name: "Liberato Brum Júnior",
        membroID: "#membro3"
    },
    {
        imgSrc: "../assets/membrosCPA/Leo.jpg",
        alt: "foto membro CPA",
        name: "Leonardo Garcia Tampelini",
        membroID: "#membro4"
    },
    {
        imgSrc: "../assets/membrosCPA/Carin.jpg",
        alt: "foto membro CPA",
        name: "Carin Hahn",
        membroID: "#membro5"
    },
    {
        imgSrc: "../assets/membrosCPA/Maristela.jpg",
        alt: "foto membro CPA",
        name: "Maristela Bendo",
        membroID: "#membro6"
    },
    {
        imgSrc: "../assets/membrosCPA/Marlise.jpg",
        alt: "foto membro CPA",
        name: "Franciele",
        membroID: "#membro7"
    },
    {
        imgSrc: "../assets/membrosCPA/arthur.jpg",
        alt: "foto membro CPA",
        name: "Artur Fernandes de Mattos",
        membroID: "#membro8"
    },
    {
        imgSrc: "../assets/membrosCPA/Nicolas.jpg",
        alt: "foto membro CPA",
        name: "Nicolas Gabriel Battisti Dias",
        membroID: "#membro9"
    },
    {
        imgSrc: "../assets/membrosCPA/Tatiane.jpg",
        alt: "foto membro CPA",
        name: "Tatiane Margraf",
        membroID: "#membro10"
    }
];

// vetor com as informações de cada membro da CPA para os cards de cada um
const cardObjects = [
    {
        nome: 'Daniele Wolfart',
        cargo: 'Coordenadora da CPA',
        imgSrc: '../assets/dani.png',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro1',
    },
    {
        nome: 'Renato Guerreiro',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: '../assets/membrosCPA/Renato IFPR.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro2',
    },
    {
        nome: 'Liberato Brum Júnior',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: '../assets/membrosCPA/Liberato.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro3',
    },
    {
        nome: 'Leonardo Garcia Tampelini',
        cargo: 'Representante do Corpo Docente',
        imgSrc: '../assets/membrosCPA/Leo.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro4',
    },
    {
        nome: 'Carin Hahn',
        cargo: 'Representante do Corpo Docente',
        imgSrc: '../assets/membrosCPA/Carin.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro5',
    },
    {
        nome: 'Maristela Bendo',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: '../assets/membrosCPA/Maristela.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro6',
    },
    {
        nome: 'Marlise',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: '../assets/membrosCPA/Marlise.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro7',
    },
    {
        nome: 'Artur Fernandes de Mattos',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/arthur.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro8',
    },
    {
        nome: 'Nicolas Gabriel Battisti Dias',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/Nicolas.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro9',
    },
    {
        nome: 'Tatiane Margraf',
        cargo: 'Representantes dos Discentes',
        imgSrc: '../assets/membrosCPA/Tatiane.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
        membroID: '#membro10',
    }
];

// Função para criar os primeiros cards dos membros
function createMemberElement(member) {

    const cardMembros = document.querySelector("#cardMembros");

    const memberDiv = document.createElement("div");
    memberDiv.classList.add("membrosCPA");

    const img = document.createElement("img");
    img.src = member.imgSrc;
    img.alt = member.alt;

    const p = document.createElement("p");
    p.textContent = member.name;

    const button = document.createElement("button");
    button.textContent = "Mostrar Mais";
    button.onclick = function () {
        scrollToElement(member.membroID);
    };

    cardMembros.appendChild(memberDiv);
    memberDiv.appendChild(img);
    memberDiv.appendChild(p);
    memberDiv.appendChild(button);

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
        scrollToElement("#contato");
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

// função para renderizar os cards;
document.addEventListener("DOMContentLoaded", function () {
    createCard();
    createMemberCards();
});


function toggleMenu(x) {
    x.classList.toggle("change");
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  }