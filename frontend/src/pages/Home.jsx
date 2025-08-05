import portraitImg from '../images/portrait.jpg'
import uonImg from "../images/uon.png"
import EducationTile from '../components/EducationTile'
import "../css/Home.css"

function Home() {
    const education_tiles = [{ photo: uonImg, description: "Studying Bachelor of Computer Systems Engineering (Honours) / Bachelor of Computer Science.", acolades: ["Weighted Average Mark of 91.63%. GPA of 6.9 out of 7.", "2025 Boeing Engineering, IT and Computer Systems Academic Excellence Scholarship Recipient.", "Admission to the College Commendation List for all semesters of study."] }]

    return <div className="homepage">
        <h1 className="heading">Biography</h1>
        <div className="biography">
            <img class="portrait-img" src={portraitImg} alt="Photograph of Tors Webster" width="300" />
            <div>
                <p className="top-text">Hi - I am Tors Webster</p>
                <p>I am passionate about analog/digital electronics design, programming, control theory, machine learning and most other endeavours in the computing and engineering landscape.</p>
                <p>Throughout my study, I have exhibited strong dedication and persistence to obtain a strong academic record while simultaneously working in the software development field for a number of years.</p>
                <p>I enjoy giving back in a way that is meaningful and have taken on roles to improve the university experience of other students. This has been through representing my peers in the Engineering and Computing/IT student representative groups, previously holding an executive role in the Engineering Society and most recently as a lab demonstrator for Electrical Engineering.</p>
                <p>Feel free to take a look at some of my projects, both from university and personal. Please get </p>
            </div>
        </div>
        <h2 className="heading">Education</h2>
        {education_tiles.map((item, index) => (
            <EducationTile key={index} education={item}></EducationTile> // Use a unique key for each project
        ))}
    </div>
}

export default Home