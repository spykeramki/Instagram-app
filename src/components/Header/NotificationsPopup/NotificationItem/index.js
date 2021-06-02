import './index.css'

const NotificationItem = () => {
    return (
        <div className="notification-container">
            <div className="notification-friend-profile-image-container">
                <img src='https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg' 
                className="notification-friend-profile-image" 
                alt="friend" />
            </div>
            <p className="notification-friend-name">helena</p>
            <p className="notification-supporting-text">.</p>
            <p className="notification-time">1d</p>
            <div className="notification-cta-container">
                <button className="notification-cta-button notification-cta-follow">Follow</button>
            </div>
        </div>
    )
}

export default NotificationItem