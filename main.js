import './style.css'
const personalInfo = [
  {
    imgsrc: './public/1688715998277.jpeg',
    name: 'Dimas',
    surname: 'Jiménez',
    secondSurname: 'Poch',
    title: 'The Power MBA student',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: 'https://github.com/dimasjjpp',
    linkedinLink: 'https://www.linkedin.com/in/dimas-j-poch-71982a85'
  }
]
const expInfo = [
  {
    id: 1,
    title: 'Production Manager',
    company: 'Arfer',
    responsibilities: [
      'Industrialization of metal structures using Ferrawin software',
      'Manage and plan production actions, coordinating different teams to ensure efficiency and meet objectives of deadlines, quality, costs, and safety.',
      'Planning work orders, resources, and delivery times',
      'Management of incidents and deviations',
      'Testing and improvement processes on production issues',
      'Stock control and analysis',
      'Quality control',
      'Logistics and material reception',
      'Short, medium, and long-term improvement proposals.',
      'Selection, negotiation, and hiring',
      'Training of new operators',
      'Direct reporting and communication with management.',
      'Preventive maintenance'
    ]
  },
  {
    id: 2,
    title: 'Jefe de producción',
    company: 'Armanifer',
    responsibilities: [
      '· Industrialization of Structures: Industrialization of corrugated steel using proprietary software and Autocad, ensuring efficient and precise processes.',
      '· Drawing Development: Preparation of essential drawings for on-site assembly.'
    ]
  },
  {
    id: 3,
    title: 'Technical Department',
    company: 'Ferrralia',
    responsibilities: [
      '· Industrialization of Structures: Industrialization of corrugated steel for projects in France and Spain, using specialized software Schnell Graphico and Autocad.',
      '· Billing Control: Monthly reporting to the finance department for cost tracking.',
      '· Drawing Development: Utilized Autocad skills for the preparation of drawings necessary for on-site assembly.'
    ]
  },
  {
    id: 4,
    title: 'Project manager',
    company: '3012.arch',
    responsibilities: [
      'Develop original proposals, coordinate design and execution.',
      'Control costs.',
      'Deliver complete proposals to clients.',
      'Monitor assembly.',
      'Resolve issues during assembly, last-minute orders, and potential incidents.'
    ]
  },
  {
    id: 5,
    title: 'Project Manager',
    company: 'COMPEIXALAIGUA DESIGNSTUDIO S.L.',
    responsibilities: [
      'Comprehensive Project Management: Led projects comprehensively for trade fair stands and corporate interiors, managing budgets and ensuring timely and efficient delivery.',
      'Interdepartmental Coordination: Worked closely with clients, contractors, and suppliers, ensuring effective communication and customer satisfaction.',
      'Logistics Management: Supervised assembly logistics, managing permits and supplier contracts to ensure successful project execution, coordinating multiple suppliers in assembly and installation.',
      'Computer-Aided Design (CAD): Preparation of assembly plans and on-site assembly management.',
      'International Mobility: Traveled approximately 30% of the time, coordinating activities at different locations throughout Europe.'
    ]
  }
]
const renderedSections = []
//en la barra nav falta posar les tres seccions a la dreta i el home a la esuerra
const navContainer = document.createElement('nav') //barra nav
document.body.appendChild(navContainer)
navContainer.innerHTML = ` 
<a href="./home" id="nav-home">Home</a>
<div id="links">
  <a href="#experienceSection" id="nav-experience">Experience</a>
  <a href="#projectSection" id="nav-projects">Projects</a>
  <a href="./contact" id="contact-button">Contact</a>
</div>
<a href="#" id="menu-icon">
  <img src="./public/icons8-menu-50.png" alt="menu-bars-icon" />
</a>

`
//personal-info-section
//experienceSection
//projectSection
//contactSection

document.addEventListener('DOMContentLoaded', function () {
  const experienceLink = document.querySelector('#nav-experience')
  experienceLink.addEventListener('click', function (event) {
    event.preventDefault()

    const targetSection = document.querySelector('#experienceSection')

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('#nav-projects')

  projectsLink.addEventListener('click', function (event) {
    event.preventDefault()
    const targetSection = document.querySelector('#projectSection')

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const projectsLink = document.querySelector('#contact-button')

  projectsLink.addEventListener('click', function (event) {
    event.preventDefault()
    const targetSection = document.querySelector('#contactSection')

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('#nav-home')

  homeLink.addEventListener('click', function (event) {
    const targetSection = document.querySelector('#personal-info-section')
    event.preventDefault()
    location.reload()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  //personalinfo
  renderHome()
})
document.querySelector('#nav-home').addEventListener('click', (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href
  console.log('el link apunta a: ' + linkHref)
  renderHome()
})
function renderHome() {
  const personalinfoContainer = document.createElement('section')
  document.body.appendChild(personalinfoContainer)
  personalinfoContainer.id = 'personal-info-section'
  if (!renderedSections.includes(personalInfo)) {
    personalinfoContainer.innerHTML = `
<article id="personal-info">
  <div id="me-img-container">
    <img src="${personalInfo[0].imgsrc}" alt="me-img" id="me-img" />
    <div id="linksToSocials">
      <a href="${personalInfo[0].githubLink}" target="_blank">
        <img src="./public/github-mark.png" alt="GitHub" class="social-icon" />
      </a>
      <a href="${personalInfo[0].linkedinLink}" target="_blank">
        <img src="./public/free-linkedin-icon-112-thumb.png" alt="LinkedIn" class="social-icon" />
      </a>
    </div>
  </div>
  <div id="personal-info-2">
    <h1>
      ${personalInfo[0].name} ${personalInfo[0].surname}
      ${personalInfo[0].secondSurname}
    </h1>
    <h2>${personalInfo[0].title}</h2>
    <p id="description">${personalInfo[0].description}</p>
  </div>
</article>

`
  }
  renderedSections.push(personalInfo)
}

document.querySelector('#nav-experience').addEventListener('click', (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href
  console.log('el link apunta a: ' + linkHref)
  renderExperience()
})
function renderExperience() {
  const expSection = document.createElement('section')
  expSection.id = 'experienceSection'
  document.body.appendChild(expSection)

  expInfo.forEach((exp) => {
    const expArticle = document.createElement('article')
    expArticle.classList.add('experience-item')

    const expTitle = document.createElement('h2')
    expTitle.textContent = exp.title
    expArticle.appendChild(expTitle)

    const expCompany = document.createElement('h3')
    expCompany.textContent = exp.company
    expArticle.appendChild(expCompany)

    const expResponsibilities = document.createElement('ul')
    exp.responsibilities.forEach((responsibility) => {
      const responsibilityItem = document.createElement('li')
      responsibilityItem.textContent = responsibility
      expResponsibilities.appendChild(responsibilityItem)
    })
    expArticle.appendChild(expResponsibilities)

    expSection.appendChild(expArticle)
  })
  renderedSections.push(expSection)
}

document.querySelector('#nav-projects').addEventListener('click', (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href
  console.log('el link apunta a: ' + linkHref)
  renderProjects()
})
function renderProjects() {
  const projectSection = document.createElement('section')
  document.body.appendChild(projectSection)
  projectSection.id = 'projectSection'

  if (!renderedSections.includes(projectSection)) {
    projectSection.innerHTML = `
     <article>
  <h1>Proyectos</h1>
  <div id="project-container">
    <div class="singleProjectContainer">
      <img class="projectImage" src="./public/ProjectPhotos/azulacocsa.webp" alt="" />
      <p>Stand Azul Acocsa Construmat 2017</p>
    </div>
    <div class="singleProjectContainer">
      <img class="projectImage" src="./public/ProjectPhotos/diseno-stand-barcelona-eae-ensenyament-1-1024x640.jpg" alt="Imagen del proyecto 2" />
      <p>Stand EAE Ensenyament 2016</p>
    </div>
    <div class="singleProjectContainer">
      <img class="projectImage" src="./public/ProjectPhotos/fespa.webp" alt="Imagen del proyecto 4" />
      <p>Reforma local plaça d'Herenni</p>
    </div>
    <div class="singleProjectContainer">
      <img class="projectImage" src="./public/ProjectPhotos/plaça-herenni.jpg" alt="Imagen del proyecto 6" />
      <p>Reforma local plaça d'Herenni</p>
    </div>
    <div class="singleProjectContainer">
      <img class="projectImage" src="./public/ProjectPhotos/stand-labelexpo-2017-1.webp" alt="Imagen del proyecto 6" />
      <p>Stand Manter Labelexpo 2017</p>
    </div>
  </div>
</article>

    `
  }

  renderedSections.push(projectSection)
}

document.querySelector('#contact-button').addEventListener('click', (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href
  console.log('el link apunta a: ' + linkHref)
  renderContact()
})
function renderContact() {
  const contactSection = document.createElement('section')
  contactSection.id = 'contactSection'
  if (!renderedSections.includes(contactSection)) {
    document.body.appendChild(contactSection)
    contactSection.innerHTML = `<article>
    <h1>Contact</h1>
    <p>662416193</p>
  
    <a href="mailto:dimasjimenezpoch@gmail.com">dimasjimenezpoch@gmail.com</a>
  <div>
    <a href="${personalInfo[0].linkedinLink}">
<img
src="./public/free-linkedin-icon-112-thumb.png"
alt="LinkedIn Logo" />
</a>

<a href="${personalInfo[0].githubLink}">
 <img src="./public/github-mark.png" alt="GitHub Logo" />
  </a>
  </div>
  </article>`
  }
  renderedSections.push(contactSection)
}

//llista de tasques
//1-barra navegacio amb 3 anchor amb event en js i la funcio requerida
//ok
//2-cada cop que es faci click invocaran un funcio diferent
//ok
//3-al carregar per primer cop es veu la pesonal info
//ok
//4-quan faig click a proejectes es carrega i fa scroll en una llista de projectes amb imatges
//5- quan faigxpInfo = [
//6-quna faig click a home es carrega la landing page original
//7-la pagina es totalemnt responsive
//8-es basa en algun disseny de la diegoliv
//9-publicat a netlify

//falta afegir fotos a l'array de projectes
//afegir mes info a laboral??
//maquetar les seccions
