const projectsListElement = document.querySelector("#projects-list")

const projects = [
    {
        name: "CSS Tools",
        description: "Um site de ferramentas CSS.",
         href: "http://tools-css.vercel.app"  
    },
       {
         name: "School Tasks",
         description: "Um aplicativo para registrar suas atividades escolares, que te notifica quando é a hora de entregá-las.",
         href: "http://github.com/sergiojunior13/school-tasks"
       },
]

projects.forEach(project => {
    projectsListElement.innerHTML += `
    <div>
        <div>
        <h3>${project.name}</h3>
        ${project.href ? `<a href="${project.href}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>` : ""}
        </div>

        <p>
        ${project.description}
        </p>
  </div>`
})