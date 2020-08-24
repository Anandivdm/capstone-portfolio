let displayProjects = document.getElementById('projects');
let projects = [
  {
    image: 'images/dashboard.png',
    name: 'Interactive Dashboard',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I built an interactive dashboard for a web application.',
    url: 'https://dribbble.com/Anandi_Ellis',
  },
  {
    image: 'images/employee-directory.png',
    name: 'Employee Directory',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I created an employee directory by communicating with a third-party API.',
    url: 'https://dribbble.com/Anandi_Ellis',
  },
  {
    image: 'images/game-show.png',
    name: 'Game Show App',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I built a browser version of “Wheel of Success”, a word guessing game.',
    url: 'https://dribbble.com/Anandi_Ellis',
  },
  {
    image: 'images/photo-gallery.png',
    name: 'Photo Gallery',
    languages: 'HTML • CSS • JAVASCRIPT',
    description: 'I create an interactive, searchable gallery of photos',
    url: 'https://dribbble.com/Anandi_Ellis',
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
          <div class="card" target="_blank">
            <img src="${image}" class="card-img-top" alt="Photo gallery mockup">
            <div class="card-body">
              <p class="languages">${language}</p>
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
              <a href="${url}" class="card-link" target="_blank">View Project</a>
            </div>
          </div>
        </div>`
    });
    displayProjects.innerHTML = html
  }

  generateProjects();