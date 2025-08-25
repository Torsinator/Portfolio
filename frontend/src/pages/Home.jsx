import portraitImg from '../images/portrait.jpg'
import uonImg from "../images/uon.png"
import EducationTile from '../components/EducationTile'
import github from "../images/github-mark-white.png"
import SocialTile from '../components/SocialTile'
import LinkedIn from "../images/LI-In-Bug.png"
import Gmail from "../images/gmail.webp"
import "../css/Home.css"

function Home() {
    const githubRedirect = () => {
        window.location.href = 'https://github.com/Torsinator';
    };

    const linkedinRedirect = () => {
        window.location.href = 'https://www.linkedin.com/in/tors-webster-24819a250';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:torsrwebster@gmail.com';
    };

    const education_tiles = [{ photo: uonImg, description: "Studying Bachelor of Computer Systems Engineering (Honours) / Bachelor of Computer Science.", acolades: ["Weighted Average Mark of 91.63%. GPA of 6.9 out of 7.", "2025 Boeing Engineering, IT and Computer Systems Academic Excellence Scholarship Recipient.", "Admission to the College Commendation List for all semesters of study."] }]
    const social_tiles = [
        { photo: github, title: "github", handleClick: githubRedirect },
        { photo: LinkedIn, title: "linkedIn", handleClick: linkedinRedirect },
        { photo: Gmail, title: "gmail", handleClick: handleEmailClick }]

    return <div className="homepage">
        <h1 className="heading">Biography</h1>
        <div className="biography">
            <img className="portrait-img" src={portraitImg} alt="Photograph of Tors Webster" width="300" />
            <div>
                <p className="top-text">Hi - I am Tors Webster</p>
                <p>I am passionate about analog/digital electronics design, programming, control theory, machine learning and most other endeavours in the computing and engineering landscape.</p>
                <p>Throughout my study, I have exhibited strong dedication and persistence to obtain a strong academic record while simultaneously working in the software development field for a number of years.</p>
                <p>I enjoy giving back in a way that is meaningful and have taken on roles to improve the university experience of other students. This has been through representing my peers in the Engineering and Computing/IT student representative groups, holding an executive role in the Engineering Society, and most recently, as a lab demonstrator for Electrical Engineering.</p>
                <p>Feel free to take a look at some of my projects, both from university and personal. Feel free to get in touch.</p>
            </div>
        </div>
        <h2 className="heading">Education</h2>
        {education_tiles.map((item, index) => (
            <EducationTile key={index} education={item}></EducationTile> // Use a unique key for each project
        ))}
        <h2 className="heading">Connect</h2>
        <div className="connect">
            {social_tiles.map((item, index) => (
                <SocialTile key={index} social={item}></SocialTile> // Use a unique key for each project
            ))}
        </div>
    </div>
}

export default Home