import './index.css'

const SuggestedFriend = (props) => {
    const {suggestionsList} = props
    const {friendProfileImage, friendPetName} = suggestionsList
    return (
        <div className="profile-container suggestion-margin">
            <img src={friendProfileImage}
            className="suggestions-profile-image" 
            alt="friend-profile-pic" 
            />
            <div className="name-container">
                <p className="nickname">{friendPetName}</p>
                <p className="followers">Follows you</p>
            </div>
            <p className="anchor-element">Follow</p>
        </div>
    )
}

export default SuggestedFriend