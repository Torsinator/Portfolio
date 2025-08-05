import "../css/Education.css"

function EducationTile({ education }) {
    return <div className="education-tile">
        <div className="education-photo">
            <img src={education.photo} alt={education.title} />
        </div>

        <div className="education-desc">
            <p>{education.description}</p>
            {education.acolades.map((item, index) => (
                <li key={index}>{item}</li> // Use a unique key for each list item
            ))}
        </div>
    </div>
}

export default EducationTile