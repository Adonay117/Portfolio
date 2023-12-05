const i= document.querySelector(".icons-network");
const svg_logo= document.querySelector(".logo svg")
const body = document.querySelector("body"),
toggle = document.querySelector(".toggle");
const project = document.querySelector('.project')
const service = document.querySelector('.services')
const about = document.querySelector('.about')
const skills = document.querySelector('.skills')
let getMode = localStorage.getItem("mode");

if(getMode && getMode === "dark"){
    body.classList.toggle("dark")
    toggle.classList.toggle("active")
    i.classList.toggle('i-dark')
    svg_logo.classList.toggle('svg-logo')
    project.classList.toggle('project-dark')
    service.classList.toggle('service-dark')
    about.classList.toggle('about-dark')
    skills.classList.toggle('skills-dark')

}
toggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    i.classList.toggle("i-dark");
    project.classList.toggle('project-dark')
    service.classList.toggle('service-dark')
    about.classList.toggle('about-dark')
    skills.classList.toggle('skills-dark')
    
    svg_logo.classList.toggle("svg-logo")
        if(!body.classList.contains("dark")){
            return localStorage.setItem("mode", "light")

        }
        localStorage.setItem("mode", "dark");
})
toggle.addEventListener("click", () => toggle.classList.toggle("active"))