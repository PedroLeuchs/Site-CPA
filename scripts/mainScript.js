// pega um elemento pelo id e scrolla até ele
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    if (typeof element.scrollIntoView === "function") {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Smooth scrolling is not supported.");
      // scrolla até o elemento se smooth scrolling não for suportado
      const scrollTo = element.offsetTop;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const resultadosData = [
  {
    ano: "2019",
    link: "",
  },
  {
    ano: "2020",
    link: "",
  },
  {
    ano: "2021",
    link: "",
  },
  {
    ano: "2022",
    link: "",
  },
];

// vetor com as informações para faq
const faqData = [
  {
    pergunta: "O que é a CPA?",
    resposta:
      "A CPA (Comissão Própria de Avaliação) é um setor presente em todas as Instituições de Ensino Superior (IES), conforme a Lei nº 10.861/2004, que estabelece o Sistema Nacional de Avaliação do Ensino Superior (SINAES). A CPA tem como objetivo coordenar os processos de avaliação internos da instituição e sistematizar os dados solicitados pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), vinculado ao Ministério da Educação.",
  },
  {
    pergunta: "Qual é o papel da CPA?",
    resposta:
      "A CPA tem a responsabilidade de realizar anualmente a avaliação institucional por meio de questionários aplicados online, com a participação de toda a comunidade acadêmica (docentes, discentes e técnicos-administrativos). Essa avaliação tem como objetivo conhecer as opiniões e demandas dos envolvidos, visando à melhoria contínua da faculdade, dos cursos e programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação, além de promover a qualidade da educação superior e a responsabilidade social da instituição.",
  },
  {
    pergunta: "Por que a avaliação da CPA é importante?",
    resposta:
      "A avaliação institucional realizada pela CPA é fundamental, pois fornece subsídios para o reconhecimento, credenciamento e recredenciamento de cursos e instituições de ensino superior. Além disso, juntamente com o Exame Nacional de Avaliação dos Estudantes (ENADE), essa avaliação faz parte do Sistema Nacional de Avaliação da Educação Superior (SINAES), contribuindo para a obtenção do Índice de Curso de Graduação (IGC), que é conhecido como nota ou conceito do curso.",
  },
  {
    pergunta: "Quem faz parte da CPA?",
    resposta:
      "A CPA é composta por professores, alunos, técnicos-administrativos e representantes da sociedade civil organizada. Na nossa instituição, os membros da CPA são: Daniele Wolfart (Coordenadora), Liberato Brum Júnior, Renato Guerreiro (Representantes da Sociedade Civil), Leonardo Garcia Tampelini, Carin Hahn (Representantes do Corpo Docente), Maristela Bendo, Franciele Schutze (Representantes dos Técnicos-Administrativos), Artur Fernandes de Mattos, Nicolas Gabriel Battisti Dias, Tatiane Margraf (Representantes dos Discentes).",
  },
  {
    pergunta: "O que é autoavaliação?",
    resposta:
      "A autoavaliação é uma demanda interna da instituição de ensino superior (IES) e é responsabilidade da CPA. Ela permite que a IES obtenha um índice maior de eficiência, aproveitando melhor seus recursos humanos, materiais, financeiros, etc. Além disso, a autoavaliação é uma obrigação institucional no âmbito do SINAES e busca promover os valores democráticos, a busca da autonomia e a afirmação da identidade da instituição.",
  },
];

//vetor com informações sobre legislação
const legislacaoData = [
  {
    titulo: "Legislação",
    texto:
      "Lei nº 10.861 de 14 de abril de 2004 - instituiu o Sistema Nacional de Avaliação da Educação Superior (SINAES). Nota Técnica nº 14//2014 - CGACGIES/DAES/INEP/MEC. RELATÓRIOS DE AVALIAÇÃO INSTITUCIONAL: Relatório da Avaliação Institucional 2021 - Faculdade Biopark",
  },
  {
    titulo: "SINAES",
    texto:
      "Criado pela Lei n° 10.861, de 14 de abril de 2004, o Sistema Nacional de Avaliação da Educação Superior (Sinaes) é formado por três componentes principais: a avaliação das instituições, dos cursos e do desempenho dos estudantes. O Sinaes avalia todos os aspectos que giram em torno desses três eixos, principalmente o ensino, a pesquisa, a extensão, a responsabilidade social, o desempenho dos alunos, a gestão da instituição, o corpo docente e as instalações. Os principais objetivos da avaliação envolvem melhorar o mérito e o valor das instituições, áreas, cursos e programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação; melhorar a qualidade da educação superior e orientar a expansão da oferta, além de promover a responsabilidade social das IES, respeitando a identidade institucional e a autonomia de cada organização. O Sinaes possui uma série de instrumentos complementares: autoavaliação, avaliação externa, Exame Nacional de Desempenho de Estudantes - Enade, Avaliação dos cursos de graduação e instrumentos de informação como o censo e o cadastro. A integração dos instrumentos permite que sejam atribuídos alguns conceitos, ordenados numa escala com cinco níveis, a cada uma das dimensões e ao conjunto das dimensões avaliadas. O Ministério da Educação torna público e disponível o resultado da avaliação das instituições de ensino superior e de seus cursos. A divulgação abrange tanto instrumentos de informação (dados do censo, do cadastro, Conceito Preliminar de Curso - CPC e Índice Geral de Cursos - IGC) quanto os conceitos das avaliações para os atos de renovação, reconhecimento e recredenciamento (parte do ciclo trienal do Sinaes, com base nos cursos contemplados no Enade a cada ano).",
  },
];

// vetor com as informações das notícias para os cards
const noticiasData = [
  {
    titulo: "CPA divulga resultados da avaliação institucional",
    data: "10 de maio de 2023",
    descricao:
      "A Comissão Própria de Avaliação (CPA) divulgou hoje os resultados da avaliação institucional referente ao ano de 2022. A pesquisa contou com a participação de docentes, discentes e técnicos-administrativos, que contribuíram com valiosas opiniões e sugestões para a melhoria contínua da nossa instituição de ensino superior.",
    imgSrc: "../assets/fakeImages/img1.jpg",
  },
  {
    titulo: "Nova composição da CPA é eleita para o próximo mandato",
    data: "27 de abril de 2023",
    descricao:
      "Em assembleia realizada ontem, foram eleitos os novos membros da Comissão Própria de Avaliação (CPA) para o mandato de 2023 a 2025. A CPA é composta por representantes do corpo docente, discentes, técnicos-administrativos e da sociedade civil organizada. Agradecemos a todos os candidatos que se disponibilizaram e desejamos sucesso aos eleitos nessa importante missão de avaliação institucional.",
    imgSrc: "../assets/fakeImages/img2.jpg",
  },
  {
    titulo: "CPA promove encontro para discussão dos resultados da avaliação",
    data: "5 de março de 2023",
    descricao:
      "A CPA convida a comunidade acadêmica para um encontro no próximo dia 15, no auditório central, para discutir os resultados da avaliação institucional. Será uma oportunidade de analisar em conjunto os pontos positivos e as áreas que necessitam de melhorias, além de propor ações concretas para aprimorar ainda mais a qualidade do ensino, pesquisa e extensão em nossa instituição.",
    imgSrc: "../assets/fakeImages/img3.jpg",
  },
  {
    titulo:
      "Participe da avaliação institucional da CPA e contribua com sua opinião",
    data: "18 de janeiro de 2023",
    descricao:
      "Está aberto o período de participação na avaliação institucional promovida pela CPA. A sua opinião é fundamental para conhecermos as demandas e sugestões da comunidade acadêmica, visando o aperfeiçoamento contínuo de nossos cursos e programas. Acesse o questionário online disponível em nosso site e contribua para a construção de uma instituição ainda melhor.",
    imgSrc: "../assets/fakeImages/img4.jpg",
  },
  {
    titulo: "CPA apresenta relatório de autoavaliação à comunidade acadêmica",
    data: "3 de dezembro de 2022",
    descricao:
      "A Comissão Própria de Avaliação (CPA) apresentou, hoje, o relatório de autoavaliação referente ao ano de 2022. O documento abrange diversos aspectos da instituição, como infraestrutura, ensino, pesquisa, extensão e gestão. Agradecemos a todos que participaram desse importante processo e reforçamos nosso compromisso em implementar as melhorias apontadas.",
    imgSrc: "../assets/fakeImages/img5.jpg",
  },
  {
    titulo: "CPA divulga resultados da avaliação institucional",
    data: "10 de maio de 2022",
    descricao:
      "A Comissão Própria de Avaliação (CPA) divulgou hoje os resultados da avaliação institucional referente ao ano de 2022. A pesquisa contou com a participação de docentes, discentes e técnicos-administrativos, que contribuíram com valiosas opiniões e sugestões para a melhoria contínua da nossa instituição de ensino superior.",
    imgSrc: "../assets/fakeImages/img6.jpg",
  },
];

// vetor com as informações dos membros da CPA para os primeiros cards
const membersData = [
  {
    imgSrc: "../assets/dani.png",
    alt: "foto membro CPA",
    name: "Daniele Wolfarte",
    membroID: "membro1",
  },
  {
    imgSrc: "../assets/membrosCPA/Renato IFPR.jpg",
    alt: "foto membro CPA",
    name: "Renato Guerreiro",
    membroID: "membro2",
  },
  {
    imgSrc: "../assets/membrosCPA/Liberato.jpg",
    alt: "foto membro CPA",
    name: "Liberato Brum",
    membroID: "membro3",
  },
  {
    imgSrc: "../assets/membrosCPA/Leo.jpg",
    alt: "foto membro CPA",
    name: "Leonardo Garcia",
    membroID: "membro4",
  },
  {
    imgSrc: "../assets/membrosCPA/Carin.jpg",
    alt: "foto membro CPA",
    name: "Carin Hahn",
    membroID: "membro5",
  },
  {
    imgSrc: "../assets/membrosCPA/Maristela.jpg",
    alt: "foto membro CPA",
    name: "Maristela Bendo",
    membroID: "membro6",
  },
  {
    imgSrc: "../assets/membrosCPA/Marlise.jpg",
    alt: "foto membro CPA",
    name: "Marlise Santos de Napoli",
    membroID: "membro7",
  },
  {
    imgSrc: "../assets/membrosCPA/arthur.jpg",
    alt: "foto membro CPA",
    name: "Artur Fernandes",
    membroID: "membro8",
  },
  {
    imgSrc: "../assets/membrosCPA/Nicolas.jpg",
    alt: "foto membro CPA",
    name: "Nicolas Gabriel",
    membroID: "membro9",
  },
  {
    imgSrc: "../assets/membrosCPA/Tatiane.jpg",
    alt: "foto membro CPA",
    name: "Tatiane Margraf",
    membroID: "membro10",
  },
];

// vetor com as informações de cada membro da CPA para os cards de cada um
const cardObjects = [
  {
    nome: "Daniele Wolfart",
    cargo: "Coordenadora da CPA",
    imgSrc: "../assets/dani.png",
    sobre:
      "Daniele Wolfart, coordenadora e professora universitária. Sou Tecnóloga em Desenvolvimento de Sistemas e especialista em Engenharia de Software, MBA de Gerenciamento de Projetos, MBA em Gestão Empresarial com enfase em Liderança e mestre em Ciência da computação.",
    membroID: "membro1",
    contato: "https://www.linkedin.com/in/daniele-wolfart-28575029/",
  },
  {
    nome: "Renato Guerreiro",
    cargo: "Representante da Sociedade Civil",
    imgSrc: "../assets/membrosCPA/Renato IFPR.jpg",
    sobre:
      "Experiência com Inovação, Educação, Ciência e Tecnologia. Coordenador do Centro de Referência IFPR-Biopark, parceira público-privada para Educação, Pesquisa, Desenvolvimento & Inovação e Empreendedorismo.",
    membroID: "membro2",
    contato: "https://www.linkedin.com/in/renato-lada-guerreiro-bbb48929/",
  },
  {
    nome: "Liberato Brum Júnior",
    cargo: "Representante da Sociedade Civil",
    imgSrc: "../assets/membrosCPA/Liberato.jpg",
    sobre:
      "Liberato Brum Junior é um farmacêutico industrial com especialização em Farmácia Industrial. Graduado em Farmácia Industrial em 2002 e mestre em Ciências Farmacêuticas em 2006. Ele possui experiência como Farmacêutico Industrial, Professor e Pesquisador. Destaca-se sua participação no desenvolvimento de mais de 60 formulações farmacêuticas, incluindo genéricos e inovadores, além de expertise em métodos analíticos, controle de qualidade de medicamentos e estudos de biodisponibilidade e bioequivalência. Brum também é autor de publicações científicas, possui patentes depositadas e atua como revisor em revistas internacionais.",
    membroID: "membro3",
    contato: "https://www.linkedin.com/in/liberato-brum-junior-phd-38a42540/",
  },
  {
    nome: "Leonardo Garcia Tampelini",
    cargo: "Representante do Corpo Docente",
    imgSrc: "../assets/membrosCPA/Leo.jpg",
    sobre:
      "Possuo graduação em Informática pela Universidade Estadual do Oeste do Paraná, concluída em 2008. Em seguida, obtive meu mestrado em Ciência da Computação na Universidade Estadual de Campinas, em 2012. Atualmente, desempenho as funções de Consultor na LSX Consulting e sou Professor no Parque Científico e Tecnológico de Biociências. Tenho uma sólida experiência na área de Ciência da Computação, com foco em Metodologia e Técnicas da Computação. Minhas principais áreas de atuação envolvem agendamento (scheduling) e fluxo de trabalho (workflow).",
    membroID: "membro4",
    contato: "https://www.linkedin.com/in/leonardo-garcia-tampelini-9a9b68207/",
  },
  {
    nome: "Carin Hahn",
    cargo: "Representante do Corpo Docente",
    imgSrc: "../assets/membrosCPA/Carin.jpg",
    sobre:
      "Possuo graduação em Farmácia pela Universidade Paranaense, concluída em 2005. Em seguida, realizei uma especialização em Manipulação de produtos farmacêuticos e cosméticos na mesma universidade, em 2006. Para aprofundar meus conhecimentos, obtive o título de Mestre em Farmacologia, com ênfase em Farmacotécnica, pela Universidade Federal de Santa Catarina, em 2011. Buscando atualização e aprimoramento na área educacional, concluí uma pós-graduação em Metodologias Ativas de Ensino e Aprendizagem pela Uniamérica em 2019. Em 2021, finalizei outra pós-graduação em Inovação e Tendências da Educação, por meio da parceria entre o Instituto Anima e a Faculdade São Judas Tadeu. Atualmente, estou cursando uma pós-graduação em Práticas Inovadoras na Educação, oferecida pela Biopark Educação.",
    membroID: "membro5",
    contato:
      "https://www.linkedin.com/in/c%C3%A1rin-fab%C3%ADola-pensin-hahn/?trk=public_profile_browsemap&originalSubdomain=br",
  },
  {
    nome: "Maristela Bendo",
    cargo: "Representante dos Técnicos-Administrativos",
    imgSrc: "../assets/membrosCPA/Maristela.jpg",
    sobre:
      "Atualmente ocupo os cargos de Procuradora Institucional e Secretária Acadêmica na Faculdade Biopark. Tenho experiência na como docente de ensino fundamental e médio. Dentre minhas características profissionais destacam-se: dedicação, adaptabilidade, facilidade de interação com o grupo, responsabilidade, dinamismo, resiliência, dedicação ao trabalho e organização.",
    membroID: "membro6",
    contato: "https://www.linkedin.com/in/maristela-bendo-6631a8124/",
  },
  {
    nome: "Marlise Santos de Napoli",
    cargo: "Representante dos Técnicos-Administrativos",
    imgSrc: "../assets/membrosCPA/Marlise.jpg",
    sobre:
      "Mestra em Desenvolvimento Rural Sustentável, Especialista em Docência no Ensino Superior, Graduada em Ciências Biológicas-bacharelado. Procuradora Institucional, Coordenadora de Regulação e Acadêmica. Experiência no Magistério Superior em várias áreas, incluindo Agronomia, Ciências Biológicas, Enfermagem, Fonoaudiologia, Engenharia Elétrica, Engenharia de Controle e Automação e Nutrição. Avaliadora INEP.",
    membroID: "membro7",
    contato:
      "https://www.linkedin.com/in/marlise-santos-de-napoli-8067a076/?originalSubdomain=br",
  },
  {
    nome: "Artur Fernandes de Mattos",
    cargo: "Representantes dos Discentes",
    imgSrc: "../assets/membrosCPA/arthur.jpg",
    sobre: "",
    membroID: "membro8",
    contato: "https://www.linkedin.com/in/artur-fernandes-de-mattos-20840616b/",
  },
  {
    nome: "Nicolas Gabriel Battisti Dias",
    cargo: "Representantes dos Discentes",
    imgSrc: "../assets/membrosCPA/Nicolas.jpg",
    sobre:
      "Em 2017, quando completei 16 anos, tive minha primeira oportunidade de emprego, trabalhei para Gelateria Perdonato, lá desenvolvi habilidades de comunicação e foco no cliente. No mesmo período consegui um segundo emprego freelance em um restaurante, com o objetivo de melhorar meu atendimento e comunicabilidade. Em 2018, surgiu- me a oportunidade de trabalhar no setor administrativo de uma famosa empresa de engenharia da região, a ADM Engenharia, onde conheci a Rosane(Gerente da empresa), a sua forte cobrança sobre toda a equipe em Foco, Responsabilidade e Organização foram lições e competências que aprendi e levo até hoje. Após um ano, tive uma das minhas maiores experiências que foi a oportunidade de trabalhar no time comercial da Stone Co. (Uma das maiores Fintechs do Brasil). Durante esse período fui convocado para servir o período obrigatório no Exército Brasileiro, onde tive a oportunidade de aprender e evoluir diversas habilidades, neste ciclo fui designado para auxiliar nas atividades na seção de informática do Batalhão.Após fechar meu ciclo no Exército, decidi encerrar meu ciclo na Stone igualmente, e decidi começar a estudar e aprender programação.",
    membroID: "membro9",
    contato: "https://www.linkedin.com/in/nicolas-battisti/",
  },
  {
    nome: "Tatiane Margraf",
    cargo: "Representantes dos Discentes",
    imgSrc: "../assets/membrosCPA/Tatiane.jpg",
    sobre:
      "Possuo 7 anos de experiência em Laboratórios de Análises, tais como Amostragem, ensaios, leituras, análises, avaliação e emissão de resultados. Elaborar relatórios, registros de ocorrências e liberação de resultados, Calibração de equipamentos, entre outras atividades desenvolvidas na rotina diária de laboratórios.",
    membroID: "membro10",
    contato: "https://www.linkedin.com/in/tatiane-margraf-39ba411a3/",
  },
];

/*
Objeto com dados para div Sobre
*/
const sobre = {
  titulo: "O que é a CPA?",
  texto:
    "A Comissão Própria de Avaliação (CPA) é um setor constituído em todas as Instituições de Ensino Superior (IES), em cumprimento à Lei nº 10.861/2004, que instituiu o Sistema Nacional de Avaliação do Ensino Superior (SINAES). A Comissão Própria de Avaliação(CPA) é formada por professores, alunos, técnicos- administrativos e representantes da sociedade civil organizada, com o objetivo de coordenar os processos de avaliação internos da instituição e sistematização dos dados solicitados pelo Instituto Nacional de Estudos e Pesquisas Educacionais. Anísio Teixeira(INEP), órgão vinculado ao Ministério da Educação. A CPA realiza anualmente o levantamento de informações através da aplicação do instrumento (questionário) de Avaliação Institucional via sistema on-line com toda a comunidade acadêmica (docentes, discentes e técnicos-administrativos) no intuito de conhecer suas opiniões e demandas, tendo como objetivo implantar a melhoria contínua na Faculdade, nos cursos e seus programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação, além de promover a melhoria da qualidade da educação superior e responsabilidade social da Instituição. Destaca-se que a Avaliação Institucional (Interna - questionários aplicados on-line) realizada pela CPA serve de subsídios para o reconhecimento, credenciamento e recredenciamento de cursos e Instituições de Ensino Superior (IES), ou seja, serve para a Avaliação de Cursos de Graduação (Externa - feita pelos avaliadores do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira - INEP), e que juntamente com o Exame Nacional de Avaliação dos Estudantes (ENADE) formam o Sistema Nacional de Avaliação da Educação Superior (SINAES), constituindo dentre outros o Índice de Curso de Graduação (IGC), conhecido como nota ou conceito do curso.",
};

/*
    Objetos com dados para a div Objetivos
*/
const divObjetivos = {
  titulo: "Quais os objetivos da CPA?",
  arrayObjetivos: [
    {
      objetivo: "Coordenar os processos de avaliação internos da instituição;",
    },
    {
      objetivo:
        "Elaborar, implementar e acompanhar o Projeto de Avaliação Interna da Faculdade Biopark;",
    },
    {
      objetivo:
        "Sensibilizar a comunidade interna da Faculdade Biopark para participar ativamente das ações avaliativas;",
    },
    {
      objetivo:
        "Sistematizar e prestar as informações solicitadas pelo INEP/ MEC;",
    },
    {
      objetivo:
        "Promover as ações institucionais necessárias ao cumprimento dos objetivos do SINAES;",
    },
    {
      objetivo: "Conduzir de forma ética os processos de avaliação interna;",
    },
    {
      objetivo:
        "Garantir um processo de autoavaliação coletivo, contínuo, ético e democrático;",
    },
    {
      objetivo:
        "Propiciar a reflexão e revisão dos programas, ações e diretrizes de planejamento e desenvolvimento da Instituição;",
    },
    {
      objetivo: "Estimular a cultura da autoavaliação no meio institucional;",
    },
    {
      objetivo:
        "Colaborar para a transparência da Instituição em todos os níveis;",
    },
    {
      objetivo:
        "Dimensionar os pontos fortes e fracos, com o intuito de(re)dimensionar e(re)orientar a gestão acadêmica e administrativa;",
    },
    {
      objetivo:
        "Divulgar para a comunidade acadêmica e sociedade os resultados alcançados.",
    },
  ],
};

function createFaqElement(faq) {
  const faqDiv = document.getElementById("faq");
  const titulo = document.createElement("h2");
  titulo.textContent = faq.pergunta;
  const texto = document.createElement("p");
  texto.textContent = faq.resposta;
  faqDiv.appendChild(titulo);
  faqDiv.appendChild(texto);
}

function createFaqCard() {
  faqData.forEach((faqItem) => {
    createFaqElement(faqItem);
  });
}

function createLegislacaoElement(legislacao) {
  const legislacaoDiv = document.getElementById("legislacao");
  const titulo = document.createElement("h2");
  titulo.textContent = legislacao.titulo;
  const texto = document.createElement("p");
  texto.textContent = legislacao.texto;
  legislacaoDiv.appendChild(titulo);
  legislacaoDiv.appendChild(texto);
}

function createLegislacaoCard() {
  legislacaoData.forEach((legislacaoItem) => {
    createLegislacaoElement(legislacaoItem);
  });
}

function createResultadosElement() {
  const resultadosDiv = document.getElementById("resultados");
  const titulo = document.createElement("h2");
  titulo.textContent = "Resultados dos outros anos:";
  resultadosDiv.appendChild(titulo);
  resultadosData.forEach((resultadosItem) => {
    const button = document.createElement("button");
    button.textContent = resultadosItem.ano;
    button.onclick = function () {
      window.open(resultadosItem.link);
    };
    resultadosDiv.appendChild(button);
  });
}

function createNoticiaContainer() {
  const noticiaContainer = document.getElementById("noticiasContainer");
  const title = document.createElement("h1");
  title.textContent = "Comissão Própria de Avaliação";
  const noticiaFilter = document.createElement("div");
  noticiaFilter.classList.add("noticiasFilter");
  const noticiaFilterTitle = document.createElement("h2");
  noticiaFilterTitle.textContent = "Últimas notícias";
  const filterIcon = document.createElement("img");
  filterIcon.src = "../assets/filtro.png";
  noticiaContainer.appendChild(title);
  noticiaContainer.appendChild(noticiaFilter);
  noticiaFilter.appendChild(noticiaFilterTitle);
  noticiaFilter.appendChild(filterIcon);
  const cardsNoticias = document.createElement("div");
  cardsNoticias.classList.add("cardsNoticias");
  cardsNoticias.setAttribute("id", "cardsNoticias");
  noticiaContainer.appendChild(cardsNoticias);
  createNoticiasCard();
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
function createMemberCards() {
  membersData.forEach((member) => {
    createMemberElement(member);
  });
}

// função para criar os cards dos membros com mais informações
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
  img.setAttribute("id", card.membroID);

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
  };

  const button2 = document.createElement("button");
  button2.textContent = "Contato";
  button2.onclick = function () {
    scrollToElement("contato");
    window.open(card.contato);
  };

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
  const divSobre = document.getElementById("sobre");
  const text = document.createElement("p");
  text.textContent = sobre.titulo;
  const text2 = document.createElement("p");
  text2.textContent = sobre.texto;
  divSobre.appendChild(text);
  divSobre.appendChild(text2);
}

/*
    função para criar div sobre os objetivos da cpa
*/
function createObjetivos() {
  const objetivos = document.getElementById("objetivos");
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

function createNoticiasElement(noticia) {
  const noticiasDiv = document.getElementById("cardsNoticias");
  const card = document.createElement("div");
  card.classList.add("noticia");
  const img = document.createElement("img");
  img.src = noticia.imgSrc;
  const titulo = document.createElement("h3");
  titulo.textContent = noticia.titulo;
  const verMais = document.createElement("button");
  verMais.textContent = "Ver Mais";
  verMais.onclick = function () {
    renderNoticia(noticia);
  };
  noticiasDiv.appendChild(card);
  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(verMais);
}

function createNoticiasCard() {
  noticiasData.forEach((noticia) => {
    createNoticiasElement(noticia);
  });
}

function renderNoticia(noticia) {
  const noticiaCard = document.getElementById("noticiaCard");
  noticiaCard.innerHTML = "";
  noticiaCard.classList.remove("noticiaDisplayNone");

  const img = document.createElement("img");
  img.src = noticia.imgSrc;
  img.alt = noticia.alt;
  const titulo = document.createElement("h3");
  titulo.textContent = noticia.titulo;
  const text = document.createElement("p");
  text.textContent = noticia.descricao;
  const voltar = document.createElement("button");
  voltar.textContent = "Voltar";
  voltar.onclick = function () {
    scrollToElement("cardsNoticias");
  };
  noticiaCard.appendChild(img);
  noticiaCard.appendChild(titulo);
  noticiaCard.appendChild(text);
  noticiaCard.appendChild(voltar);
  if (!noticiaCard.classList.contains("noticiaDisplayNone")) {
    scrollToElement("noticiaCard");
  }
}

// função para renderizar os cards;
document.addEventListener("DOMContentLoaded", function () {
  createCard();
  createMemberCards();
  createSobre();
  createObjetivos();
  createFaqCard();
  createLegislacaoCard();
  createResultadosElement();
  createNoticiaContainer();
});

/*
    função para fechar o menu quando clicar fora
*/

const menuIcon = document.querySelector(".menuIcon");
const menuContainer = document.querySelector(".menuContainer");
document.addEventListener("click", function (event) {
  if (!menuIcon.contains(event.target)) {
    menuIcon.classList.remove("change");
    menuContainer.classList.remove("open");
  }
});
