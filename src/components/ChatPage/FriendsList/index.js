import {Component} from 'react';
import EachFriend from './EachFriend';
import * as Icon from 'react-bootstrap-icons';

import './index.css'

class FriendsList extends Component {
    render(){
        const {friendsChatList, getFriendChat} = this.props
        return(
            <div className="friends-chat-list-container">
                <div className="profile-name-container">
                    <div className="chat-list-heading-empty-container"></div>
                    <div className="chat-page-profile-name-heading">
                        <h1 className="profile-name">
                            spyke
                        </h1>
                        <Icon.CaretDown color="#262626" size={20} />
                    </div>
                    <div className="friend-chat-search-container">
                        <Icon.PencilSquare color="#262626" size={24} />
                    </div>
                </div>
                <nav className="chats-all-types-nav-container">
                    <div className="chats-type-heading-container chats-type-heading-selected" href="" tabIndex="0">
                        <p className="chats-type-heading">PRIMARY</p>
                    </div>
                    <div className="chats-type-heading-container" href="" tabIndex="0">
                        <p className="chats-type-heading">GENERAL</p>
                    </div>
                </nav>
                <ul className="friends-list-container">
                    {friendsChatList.map(eachFriend => {
                        return <EachFriend friendChat={eachFriend} getFriendChat={getFriendChat} key={eachFriend.id}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default FriendsList
