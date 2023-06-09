function scrollToElement(elementId) {
    var element = document.querySelector(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

const membersData = [
    {
        imgSrc: "./assets/dani.png",
        alt: "foto membro CPA",
        name: "Daniele Wolfarte",
        buttonId: "#membro1"
    },
    {
        imgSrc: "./assets/membrosCPA/Renato IFPR.jpg",
        alt: "foto membro CPA",
        name: "Renato Guerreiro",
        buttonId: "#membro2"
    },
    {
        imgSrc: "./assets/membrosCPA/Liberato.jpg",
        alt: "foto membro CPA",
        name: "Liberato Brum Júnior",
        buttonId: "#membro3"
    },
    {
        imgSrc: "./assets/membrosCPA/Leo.jpg",
        alt: "foto membro CPA",
        name: "Leonardo Garcia Tampelini",
        buttonId: "#membro4"
    },
    {
        imgSrc: "./assets/membrosCPA/Carin.jpg",
        alt: "foto membro CPA",
        name: "Carin Hahn",
        buttonId: "#membro5"
    },
    {
        imgSrc: "./assets/membrosCPA/Maristela.jpg",
        alt: "foto membro CPA",
        name: "Maristela Bendo",
        buttonId: "#membro6"
    },
    {
        imgSrc: "./assets/membrosCPA/Marlise.jpg",
        alt: "foto membro CPA",
        name: "Franciele",
        buttonId: "#membro7"
    },
    {
        imgSrc: "./assets/membrosCPA/arthur.jpg",
        alt: "foto membro CPA",
        name: "Artur Fernandes de Mattos",
        buttonId: "#membro8"
    },
    {
        imgSrc: "./assets/membrosCPA/Nicolas.jpg",
        alt: "foto membro CPA",
        name: "Nicolas Gabriel Battisti Dias",
        buttonId: "#membro9"
    },
    {
        imgSrc: "./assets/membrosCPA/Tatiane.jpg",
        alt: "foto membro CPA",
        name: "Tatiane Margraf",
        buttonId: "#membro10"
    }
];

const cardObjects = [
    {
        nome: 'Daniele Wolfart',
        cargo: 'Coordenadora da CPA',
        imgSrc: './assets/dani.png',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Renato Guerreiro',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: './assets/membrosCPA/Renato IFPR.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Liberato Brum Júnior',
        cargo: 'Representante da Sociedade Civil',
        imgSrc: './assets/membrosCPA/Liberato.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Leonardo Garcia Tampelini',
        cargo: 'Representante do Corpo Docente',
        imgSrc: './assets/membrosCPA/Leo.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Carin Hahn',
        cargo: 'Representante do Corpo Docente',
        imgSrc: './assets/membrosCPA/Carin.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Maristela Bendo',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: './assets/membrosCPA/Maristela.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Marlise',
        cargo: 'Representante dos Técnicos-Administrativos',
        imgSrc: './assets/membrosCPA/Marlise.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Artur Fernandes de Mattos',
        cargo: 'Representantes dos Discentes',
        imgSrc: './assets/membrosCPA/arthur.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Nicolas Gabriel Battisti Dias',
        cargo: 'Representantes dos Discentes',
        imgSrc: './assets/membrosCPA/Nicolas.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    },
    {
        nome: 'Tatiane Margraf',
        cargo: 'Representantes dos Discentes',
        imgSrc: './assets/membrosCPA/Tatiane.jpg',
        sobre: 'dolor sit amet consectetur adipisicing elit. Quasi consectetur qui aliquam illum laudantium doloremque consequatur pariatur quasmolestias numquam nam natus doloribus voluptates explicabo, modirecusandae nisi! Odit, velit.Praesentium quaerat ad accusantium,dignissimos et cumque atque officia sequi? Dolorum vitae providentvoluptatem.Autem, rem nihil a perferendis sequi dicta, excepturifacilis qui et amet officiis blanditiis at aliquam? Et quo iste,iure dolorem dignissimos reprehenderit nemo eveniet fuga sequiautem eligendi quia.Delectus provident autem ad quis aliquamtenetur veniam illo deserunt! Repellendus minus porro teneturnesciunt consequuntur! Rem ullam eaque aperiam est laborum',
    }
];


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
        scrollToElement(member.buttonId);
    };

    cardMembros.appendChild(memberDiv);
    memberDiv.appendChild(img);
    memberDiv.appendChild(p);
    memberDiv.appendChild(button);

}

function createMemberCards() {
    membersData.forEach((member) => {
        createMemberElement(member);
    });
}

function createCardElement(card) {
    const cardInfo = document.querySelector("#cardInfo");
    const membrosInfo = document.createElement("div");
    membrosInfo.classList.add("membrosInfo");

    cardInfo.appendChild(membrosInfo);

    const top = document.createElement("div");
    top.classList.add("top");

    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.alt = card.nome;
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
        scrollToElement("#cardMembros");
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

function createCard() {
    membersData.forEach((card) => {
        createCardElement(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createCard();
});

document.addEventListener("DOMContentLoaded", function () {
    createMemberCards();
});


