import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import './index.css'

const PopupButton = (props) => {
    const{type} = props
    return (
        <Popup 
        trigger={type==='button' ? (<button type="button" className="send-message-button">Send Message</button>) : (
            <div className="friend-chat-search-container">
                <Icon.PencilSquare color="#262626" size={24} />
            </div>
        )}
        className="new-message"
        modal
        nested
        >
            {close => (
            <div className="send-message-popup-container">
                <div className="send-message-popup-header-container">
                    <div className="send-message-popup-close-icon-container" role="button" tabIndex={0} onClick={close}>
                        <Icon.XLg color='#262626' size={16} />
                    </div>
                    <h1 className="send-message-popup-heading">New Message</h1>
                    <p className="send-message-popup-anchor">Next</p>
                </div>
                <div className="send-message-popup-search-container">
                    <div className="send-message-popup-search-sub-heading">
                        To:
                    </div>
                    <input type="text" 
                    className="send-message-popup-search-input"
                    placeholder="Search..." />
                </div>
                <div className="send-message-popup-friends-list-container">
                    <p className="send-message-popup-friends-suggestions-heading">
                        Suggested
                    </p>
                    <ul className="send-message-popup-friends-suggestions-list">
                        <li className="send-message-popup-suggested-friend" key={0}>
                            <div className="send-message-popup-suggested-friend-image-container">
                                <img src='https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg' 
                                className="send-message-popup-suggested-friend-image" 
                                alt="friend" />
                            </div>
                            <div className="send-message-popup-suggested-friend-name-container">
                                <p className="send-message-popup-suggested-friend-nick-name">
                                    Helena
                                </p>
                                <p className="send-message-popup-suggested-friend-name">
                                    Helena Ardia
                                </p>
                            </div>
                            <input type="radio" className="send-message-popup-suggested-friend-checkbox" />
                        </li>
                    </ul>
                </div>
            </div>
        )}
        </Popup>
    )
}

export default PopupButton