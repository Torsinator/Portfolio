import portraitImg from '../images/portrait.jpg'
import uonImg from "../images/uon.png"
import EducationTile from '../components/EducationTile'
import "../css/Home.css"

function Home() {
    return <div className="homepage">
        <h1 className="heading">Biography</h1>
        <div className="biography">
            <img class="portrait-img" src={portraitImg} alt="Photograph of Tors Webster" width="300" />
            <div>
                <p>I am passionate about analog/digital electronics design, programming, control theory, machine learning and most other developments in the computing landscape.
                </p>
                <p>I am currently completing my final year of my engineering degree
                </p>
            </div>
        </div>
        <h2 className="heading">Education</h2>
        <EducationTile education={{ photo: uonImg, description: "Bachelor of Computer Systems Engineering (Honours) / Bachelor of Computer Science at the University of Newcastle" }}></EducationTile>
    </div>
}

export default Home