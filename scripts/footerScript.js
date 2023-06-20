// pega um elemento pelo id e scrolla até ele
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const navbar = document.getElementById('navbar');
    if (element) {
        const navbarHeight = navbar.offsetHeight;
        if (typeof element.scrollIntoView === 'function') {
            const scrollTo = element.offsetTop - navbarHeight;
            window.scrollTo({ top: scrollTo, behavior: 'smooth' });
        }
    }
}

const linksFooter = [
    {
        link: "sobre",
        nome: "Sobre",
    },
    {
        link: "objetivos",
        nome: "Objetivos",
    },
    {
        link: "cardMembros",
        nome: "Membros",
    },
    {
        link: "resultados",
        nome: "Resultados",
    },
    {
        link: "faq",
        nome: "FAQ",
    },
    {
        link: "legislação",
        nome: "Legislação",
    },
];

function createFooterList() {
    const footerList = document.getElementById('footerList');
    linksFooter.forEach((link) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToElement(link.link);
        });
        a.setAttribute('class', 'footerMenu');
        a.innerText = link.nome;
        li.appendChild(a);
        footerList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createFooterList();
}
);