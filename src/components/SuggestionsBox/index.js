import './index.css'

const SuggestionsBox = () => {
    const suggestedUsers = () => {
        return (
            <div className="profile-container suggestion-margin">
                <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                className="suggestions-profile-image" 
                alt="self-profile-pic" 
                />
                <div className="name-container">
                    <p className="nickname">roaster</p>
                    <p className="followers">Follows you</p>
                </div>
                <p className="anchor-element">Follow</p>
            </div>
        )
    }
    return (
        <div className="suggestions-bg-container">
            <div className="profile-container">
                <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                className="suggestions-self-profile-image" 
                alt="self-profile-pic" 
                />
                <div className="name-container">
                    <p className="nickname">spyke</p>
                    <p className="full-name">Rama krishna</p>
                </div>
                <p className="anchor-element">Switch</p>
            </div>
            <div className="heading-container">
                <p className="suggestions-heading">Suggestions For You</p>
                <p className="anchor-element black">See All</p>
            </div>
            <div className="suggestions-container">
                {suggestedUsers()}
            </div>
            <p className="footer">About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top Accounts . Hashtags . Language</p>
            <p className="footer font-size">2021 INSTAGRAM FROM FACEBOOK</p>
        </div>
    )
}

export default SuggestionsBox