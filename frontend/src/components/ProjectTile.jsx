import "../css/ProjectTile.css"

function ProjectTile({ project }) {
    function onProjectClick() {
        alert("clicked")
    }

    return <>
        <button className="project-btn">
            <div className="project-tile">
                <div className="project-photo">
                    <img src={project.photo} alt={project.title} />
                </div>
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.date}</p>
                </div>
            </div>
        </button>
    </>
}

export default ProjectTile