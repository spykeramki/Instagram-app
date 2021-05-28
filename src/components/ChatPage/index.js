import {Component} from 'react'
import FriendsList from './FriendsList'
import FriendChat from './FriendChat'
import Header from '../Header'
import './index.css'
const initialFriendsChatList = [
    {
        id: 0,
        friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
        friendName: 'Helena'
    },
    {
        id: 1,
        friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
        friendName: 'Raegar'
    }
]
class ChatPage extends Component {
    state={friendsChatList : initialFriendsChatList, selectedFriendId:null}

    getFriendChat = (chatFriendId) => {
        this.setState({selectedFriendId:chatFriendId})
    }

    render(){
        const{friendsChatList,selectedFriendId} = this.state
        return(
            <>
            <Header />
            <div className="chats-page-bg-container">
                <div className="chats-container">
                    <FriendsList friendsChatList={friendsChatList} getFriendChat={this.getFriendChat}/>
                    {selectedFriendId !== null ? <FriendChat /> : (
                        <div className="chat-intro-container">
                        <div className="intro-send-image-container">
                            <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1621783591/Instagram%20App/How-to-repost-an-Instagram-Story2_emasoz.jpg" 
                            className="intro-send-image" 
                            alt="intro-send"
                            />
                        </div>
                        <h1 className="chat-intro-heading">
                            Your Messages
                        </h1>
                        <p className="chat-intro-description">
                            Send private photos and messages to a friend or a group
                        </p>
                        <button type="button" className="send-message-button">
                            Send Message
                        </button>
                    </div>
                    )}
                    
                </div>
            </div>
            </>
        )
    }
}

export default ChatPage
