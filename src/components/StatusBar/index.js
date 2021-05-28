import './index.css'

const StatusBar = () => {
    const displayUserProfileStatus = () => {
        return (
            <div className="user-profile-status">
                <div className="image-container">
                    <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                    className="status-image" 
                    alt="status-pic" 
                    />
                </div>
                <p className="user-name-status">Helena</p>
            </div>
        )
    }

    return (
        <div className="user-statuses-container">
            {displayUserProfileStatus()}
        </div>
    )
}

export default StatusBar