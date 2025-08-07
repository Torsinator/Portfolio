import ProjectTile from "../components/ProjectTile"
import IOT from "../images/IOT.png"
import Protection_CCT from "../images/Protection_CCT.png"
import Business_Sys from "../images/Business_Scheduler.png"
import Medical_PCB from "../images/Medical_PCB.png"
import Rocket from "../images/Rocket.jpg"
import Smart_Fridge from "../images/Smart_Fridge.png"
import Poker from "../images/Poker.png"
import Robot from "../images/Car_Robot.png"
import "../css/Projects.css"

function Projects()
{
    const projects =
    [
        {id: 1, title: "Thesis - Data Driven Control With Reinforcement Learning", date: "2025", photo: Rocket},
        {id: 3, title: "IOT Bedside Sensor System", date: "2025", photo: IOT},
        {id: 4, title: "Over Voltage and Current Protection PCB", date: "2025", photo: Protection_CCT},
        {id: 5, title: "STM-32 Medical Signal Filtering and Digital Display PCB", date: "2025", photo: Medical_PCB},
        {id: 6, title: "Smart Fridge Convolutional Neural Network Food Classifier", date: "2024", photo: Smart_Fridge},
        {id: 8, title: "Self Driving Car Robot", date: "2022", photo: Robot},
        {id: 7, title: "Networked Multiplayer Python Poker App", date: "2020", photo: Poker},
        {id: 2, title: "Business Invoicing System / Scheduler", date: "2020", photo: Business_Sys},
    ]

    // Returns a ProjectTile (component) for each project
    return <div className="projects">
        <div className="project-grid">
            {projects.map(project => <ProjectTile project={project} key={project.id}/>)}
        </div>
    </div>
}

export default Projects