import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import './index.css'

const SendPostAsMessagePopup = (props) => {
    return (
        <Popup 
        trigger={<Icon.ArrowUpRightCircle color="#000000" size={24} />}
        className="sendMessagePost"
        modal
        nested
        >
            {close => (
            <div className="send-post-message-popup-container">
                <div className="send-post-message-popup-header-container">
                    <p className="send-post-message-popup-anchor"></p>
                    <h1 className="send-post-message-popup-heading">Share</h1>
                    <div className="send-post-message-popup-close-icon-container" role="button" tabIndex={0} onClick={close}>
                        <Icon.XLg color='#262626' size={16} />
                    </div>
                </div>
                <div className="send-post-message-popup-search-container">
                    <div className="send-post-message-popup-search-sub-heading">
                        To:
                    </div>
                    <input type="text" 
                    className="send-post-message-popup-search-input"
                    placeholder="Search..." />
                </div>
                <div className="send-post-message-popup-friends-list-container">
                    <p className="send-post-message-popup-friends-suggestions-heading">
                        Suggested
                    </p>
                    <ul className="send-post-message-popup-friends-suggestions-list">
                        <li className="send-post-message-popup-suggested-friend" key={0}>
                            <div className="send-post-message-popup-suggested-friend-image-container">
                                <img src='https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg' 
                                className="send-post-message-popup-suggested-friend-image" 
                                alt="friend" />
                            </div>
                            <div className="send-post-message-popup-suggested-friend-name-container">
                                <p className="send-post-message-popup-suggested-friend-nick-name">
                                    Helena
                                </p>
                                <p className="send-post-message-popup-suggested-friend-name">
                                    Helena Ardia
                                </p>
                            </div>
                            <input type="radio" className="send-post-message-popup-suggested-friend-checkbox" />
                        </li>
                    </ul>
                </div>
            </div>
        )}
        </Popup>
    )
}

export default SendPostAsMessagePopup