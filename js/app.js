let displayWelcomeMessage = document.getElementById('welcome');
let displayProjects = document.getElementById('projects');
let projects = [
  {
    image: 'images/dashboard.png',
    name: 'Interactive Dashboard',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I built an interactive dashboard for a web application.',
    url: 'https://anandivdm.github.io/web_app_dashboard_v3.1',
  },
  {
    image: 'images/employee-directory.png',
    name: 'Employee Directory',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I created an employee directory by communicating with a third-party API.',
    url: 'https://anandivdm.github.io/Employee-Directory-1',
  },
  {
    image: 'images/game-show.png',
    name: 'Game Show App',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I built a browser version of “Wheel of Success”, a word guessing game.',
    url: 'https://anandivdm.github.io/game_show_app_v1.2-1-',
  },
  {
    image: 'images/photo-gallery.png',
    name: 'Photo Gallery',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I created an interactive, searchable gallery of photos.',
    url: 'https://anandivdm.github.io/photo_gallery_v4',
  }
];

  function generateProjects() {
    let html = ''
    projects.forEach(project => {
      let image = project.image
      let name = project.name
      let language = project.languages
      let description = project.description
      let url = project.url
      html +=
      `<div class="col-12 col-sm-6 col-lg-3 pb-3">
        <a href="${url}" target="_blank">
          <div class="card">
            <img src="${image}" class="card-img-top" alt="Photo gallery mockup">
            <div class="card-body">
              <p class="languages">${language}</p>
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
            </div>
          </div>
        </a>
      </div>`
    });
    displayProjects.innerHTML = html
  }

  generateProjects();

  displayWelcomeMessage.innerHTML =`
  <p>Welcome to my website! Please reach out if you'd like to chat!</p>
  <i class="fas fa-times close"></i>
  `

  displayWelcomeMessage.addEventListener('click', (e) => {
    if(e.target.classList.contains("close")) {
      displayWelcomeMessage.style.display = "none";
    }
  });