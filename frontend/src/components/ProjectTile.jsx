import "../css/ProjectTile.css"

function ProjectTile({ project }) {
    function onProjectClick() {
        alert("clicked")
    }

    return <div className="project-tile">
        <div className="project-photo">
            <img src={project.photo} alt={project.title} />
            <div className="project-overlay">
                <button className="project-btn" onClick={onProjectClick}>View</button>
            </div>
        </div>
        <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.date}</p>
        </div>
    </div>
}

export default ProjectTile