const linksNavbar = [
  {
    link: "#sobre",
    nome: "Sobre a CPA",
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

const navLogos = [
  {
    imgSrc: "../assets/logoCPA.svg",
    alt: "Logo CPA",
  },
  {
    imgSrc: "../assets/logoBPK.svg",
    alt: "Logo Biopark",
  },
];

function renderLogos(logo) {
  const logos = document.querySelector(".logoscpa");
  const img1 = document.createElement("img");
  img1.src = logo.imgSrc;
  img1.alt = logo.alt;
  logos.appendChild(img1);
}
function renderLogos(link) {
  const links = document.querySelector(".links");
  const link = document.createElement("a");
  links.appendChild(link);
}
function createLogos () {
  navLogos.forEach ((logo)=>{
  renderLogos(logo);
  })
}

// função para renderizar os cards;
document.addEventListener("DOMContentLoaded", function () {
  createLogos() 
});