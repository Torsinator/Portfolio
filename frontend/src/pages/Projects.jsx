import ProjectTile from "../components/ProjectTile"
import "../css/Projects.css"

function Projects()
{
    const projects =
    [
        {id: 1, title: "Business Invoicing System", date: "2020"},
        {id: 2, title: "IOT Bedside Sensor System", date: "2025"},
        {id: 3, title: "IOT Bedside Sensor System", date: "2025"},
        {id: 4, title: "Medical Devices PCB", date: "2025"},
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