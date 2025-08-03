import ProjectTile from "../components/ProjectTile"
import IOT from "../images/IOT.png"
import Protection_CCT from "../images/Protection_CCT.png"
import Business_Sys from "../images/Business_Scheduler.png"
import Medical_PCB from "../images/Medical_PCB.png"
import "../css/Projects.css"

function Projects()
{
    const projects =
    [
        {id: 1, title: "Business Invoicing System / Scheduler", date: "2020", photo: Business_Sys},
        {id: 2, title: "IOT Bedside Sensor System", date: "2025", photo: IOT},
        {id: 3, title: "Over Voltage and Current Protection PCB", date: "2025", photo: Protection_CCT},
        {id: 4, title: "Medical Devices PCB", date: "2025", photo: Medical_PCB},
        {id: 5, title: "Thesis - Data Driven Control With Reinforcement Learning", date: "2025"}
    ]

    // Returns a ProjectTile (component) for each project
    return <div className="projects">
        <div className="project-grid">
            {projects.map(project => <ProjectTile project={project} key={project.id}/>)}
        </div>
    </div>
}

export default Projects