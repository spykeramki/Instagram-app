import {Component} from 'react'
import FriendsList from './FriendsList'
import FriendChat from './FriendChat'
import Header from '../Header'
import PopupButton from './PopupButton'
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
                            <img src="./images/chatInitiateIcon.png" 
                            className="intro-send-image-width" 
                            alt="intro-send"
                            />
                        </div>
                        <h1 className="chat-intro-heading">
                            Your Messages
                        </h1>
                        <p className="chat-intro-description">
                            Send private photos and messages to a friend or a group
                        </p>
                        <PopupButton type='button' />
                    </div>
                    )}
                    
                </div>
            </div>
            </>
        )
    }
}

export default ChatPage
