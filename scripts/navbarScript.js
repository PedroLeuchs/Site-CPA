/*
    Array com os links da navbar
*/
const linksNavbar = [
    {
        link: "#sobre",
        nome: "Sobre",
    },
    {
        link: "#objetivos",
        nome: "Objetivos",
    },
    {
        link: "#membros",
        nome: "Membros",
    },
    {
        link: "#resultados",
        nome: "Resultados",
    },
    {
        link: "#faq",
        nome: "FAQ",
    },
    {
        link: "#legislação",
        nome: "Legislação",
    },
];

/*
    Array com os logos da navbar
*/
const navLogos = [
    {
        imgSrc: "../assets/logoCPA.svg",
        alt: "Logo CPA",
        class: "logoCPA",
    },
    {
        imgSrc: "../assets/logoBPK.svg",
        alt: "Logo Biopark",
        class: "logoBPK",
    },
];

/*
    Array com os links do menu do navbar
*/
const menuLinks = [
    {
        link: "#sobre",
        nome: "Sobre o Biopark",
    },
    {
        link: "#objetivos",
        nome: "Objetivos",
    },
    {
        link: "#membros",
        nome: "Membros da CPA",
    },
    {
        link: "#resultados",
        nome: "Resultados",
    },
    {
        link: "#faq",
        nome: "FAQ",
    },
    {
        link: "#legislação",
        nome: "Legislação",
    },
];

/*
    Função para renderizar os links do menu da navbar
*/
function renderMenuLinks(link) {
    const menu = document.querySelector(".menu");
    const divLink = document.createElement("li");
    const linkA = document.createElement("a");
    divLink.appendChild(linkA);
    linkA.href = link.link;
    linkA.textContent = link.nome;
    menu.appendChild(divLink);
}

/*
    Função para criar os links do menu da navbar
*/
function createMenuLinks() {
    menuLinks.forEach((link) => {
        renderMenuLinks(link);
    })
}

/*
    Função para renderizar os logos da navbar
*/
function renderLogos(logo) {
    const logos = document.querySelector(".logocpa");
    const img1 = document.createElement("img");
    img1.src = logo.imgSrc;
    img1.alt = logo.alt;
    img1.classList.add(logo.class);
    logos.appendChild(img1);
}

/*
    Função para renderizar os links da navbar
*/
function renderLinks(link) {
    const links = document.querySelector(".links");
    const divLink = document.createElement("div");
    divLink.classList.add("link");
    const linkA = document.createElement("a");
    linkA.href = link.link;
    linkA.textContent = link.nome;
    links.appendChild(divLink);
    divLink.appendChild(linkA);
}

/*
    Função para criar os logos da navbar
*/

function createLogos() {
    navLogos.forEach((logo) => {
        renderLogos(logo);
    })
}

/*
    Função para criar os links da navbar
*/
function createLinks() {
    linksNavbar.forEach((link) => {
        renderLinks(link);
    })
}

// função para renderizar os cards;
document.addEventListener("DOMContentLoaded", function () {
    createLogos();
    createLinks();
    createMenuLinks();
});