import portraitImg from '../images/portrait.jpg'
import uonImg from "../images/uon.png"
import EducationTile from '../components/EducationTile'
import "../css/Home.css"

function Home() {
    return <div className="homepage">
        <img class="portrait-img" src={portraitImg} alt="Photograph of Tors Webster" width="600" />
        <h1>Biography</h1>
        <p>I am passionate about analog/digital electronics design, programming, control theory, machine learning and most other developments in the computing landscape.<br>
        </br>
        </p>
        <EducationTile education={{photo: uonImg, description: "Hello"}}></EducationTile>
    </div>
}

export default Home