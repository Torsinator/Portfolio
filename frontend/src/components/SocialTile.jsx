import "../css/SocialTile.css"

function SocialTile({ social }) {
    return <>
        <button className="social-btn" onClick={social.handleClick}>
            <div className="social-tile">
                <div className="social-photo">
                    <img src={social.photo} alt={social.title} />
                </div>
            </div>
        </button>
    </>
}

export default SocialTile