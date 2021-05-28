import {Component} from 'react'
import * as Icon from 'react-bootstrap-icons';
import './index.css'

const friendChatDetails = {
    friendName: 'Helena',
    friendProfileImage : 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
    friendChatList : [
        {
            id: 0,
            message: 'Hello. how are you?',
            sender: 'other',
            time: '1 min ago'
        },
        {
            id: 1,
            message: 'Hi! I am fine! how are you?',
            sender: 'self',
            time: '1 min ago'
        },
        {
            id: 2,
            message: 'good for now',
            sender: 'other',
            time: '2 min ago'
        }
    
    ]
}
    

class FriendChat extends Component{
    state= {friendDetailedChat: friendChatDetails}
    
    sendMessage = (event) => {
        const{friendDetailedChat} = this.state
        const {friendChatList} = friendDetailedChat
        if (event.key==="Enter"){
            const updatedList = friendDetailedChat
            const newMessage = {
                id: friendChatList.length,
                message: event.target.value,
                sender: 'self',
                time: 'now'
            }
            updatedList.friendChatList.push(newMessage)
            console.log(updatedList)
            this.setState({friendDetailedChat:updatedList})
            event.target.value=""
        }
    }

    render(){
        const {friendDetailedChat} = this.state
        const {friendName, friendProfileImage, friendChatList} = friendDetailedChat
        return(
            <div className="friend-chat-container">
                <div className="chat-header-container">
                    <div className="chat-friend-image-container">
                        <img src={friendProfileImage}
                        className="chat-friend-image" 
                        alt={friendName} 
                        />
                    </div>
                    <h1 className="chat-friend-name">
                        {friendName}
                    </h1>
                    <div className="chat-more-options-icon-container">
                        <Icon.InfoCircle color="#262626" size={24} />
                    </div>
                </div>
                <ul className="chat-messages-container">
                    {friendChatList.map(eachMessage => {
                    return (
                            eachMessage.sender==="other" ? (
                            <li className="chat-message-container" key={eachMessage.id}>
                                <div className="chat-friend-image-container">
                                    <img src={friendProfileImage}
                                    className="chat-friend-image" 
                                    alt={friendName} 
                                    />
                                </div>
                                <div className="sender-message-container">
                                    <span className="message-content">{eachMessage.message}</span>
                                </div>
                            </li>
                            ) : (
                            <li className="self-chat-message" key={eachMessage.id}>
                                <div className="self-message-container">
                                    <span className="message-content self">{eachMessage.message}</span>
                                </div>
                            </li>
                            ) 
                        
                    )})}
                </ul>
                <div className="footer-container">
                    <div className="self-reply-container">
                        <div className="chat-emojis-container">
                            <Icon.EmojiSmile color='#262626' size={24} />
                        </div>
                        <div className="message-input-container">
                            <textarea placeholder="Message..." className="message-input" onKeyDown={this.sendMessage}/>
                        </div>
                        <div className="upload-media-contaier">
                            <Icon.Image color='#262626' size = {24} />
                        </div>
                        <div className="like-button-container">
                            <Icon.Heart color='#262626' size={24} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendChat
