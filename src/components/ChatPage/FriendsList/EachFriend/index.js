
import './index.css'

const EachFriend = (props) => {
    const{friendChat, getFriendChat} = props;
    const {id, friendProfileImage, friendName} = friendChat;
    const openFriendChat = () => {
        getFriendChat(id)
    }
    return (
        <li>
            <div className="friend-recent-chat-header-container" role="button" tabIndex={0} onClick={openFriendChat}>
                <div className="chat-header-friend-profile-image-container">
                    <img src={friendProfileImage}
                    className="chat-header-friend-profile-image" 
                    alt={friendName} />
                </div>
                <div className="chat-header-friend-profile-name-container">
                    <h1 className="chat-header-friend-profile-name">
                        {friendName}
                    </h1>
                    <p className="friend-recent-chat-message">
                        <span className="message-overflow-control">Hello</span> . 3d
                    </p>
                </div>
            </div>
           
        </li>
    )
}
export default EachFriend
