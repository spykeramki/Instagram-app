import {Component} from 'react'
import * as Icon from 'react-bootstrap-icons'
import Header from '../Header'
import './index.css'

class ProfilePage extends Component {
    render(){
        return(
            <>
                <Header />
                <div className="profile-page-bg-container">
                    <div className="profile-info-container">
                        <div className="profile-page-profile-picture-container">
                            <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                            className="profile-page-profile-picture" 
                            alt="profile-user" />
                        </div>
                        <div className="profile-page-profie-details-container">
                            <div className="profile-page-user-details-1">
                                <h1 className="profile-page-user-pet-name">spykeramki</h1>
                                <button type="button" className="profile-page-user-details-edit-button">Edit Profile</button>
                                <div className="profile-page-user-details-settings-icon-container">
                                    <Icon.GearWide color="#262626" size={24} />
                                </div>
                            </div>
                            <div className="profile-page-user-details-2">
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">19</span> posts
                                </p>
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">179</span> followers
                                </p>
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">328</span> following
                                </p>
                            </div>
                            <h1 className="profile-page-user-full-name">RAMA KRISHNA OGURI</h1>
                        </div>
                    </div>
                    
                    <div className="profile-page-my-statuses-container">
                        <ul className="profile-page-statuses-list-container">
                            <li className="profile-page-status-container">
                                <div className="profile-page-status-image-container">
                                    <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                                    className="profile-page-status-image" 
                                    alt="status"/>
                                </div>
                                <p className="profile-page-status-title">cute</p>
                            </li>
                        </ul>
                    </div>
                    <nav className="profile-page-nav-links-container">
                        <div className="profile-page-nav-link">
                            <div className="profile-page-nav-link-icon-container">
                                <Icon.Grid3x3 color="#8e8e8e" size={12} />
                            </div>
                            <span className="profile-page-nav-link-name">POSTS</span>
                        </div>
                        <div className="profile-page-nav-link">
                            <div className="profile-page-nav-link-icon-container">
                                <Icon.Display color="#8e8e8e" size={12} />
                            </div>
                            <span className="profile-page-nav-link-name">IGTV </span>
                        </div>
                        <div className="profile-page-nav-link">
                            <div className="profile-page-nav-link-icon-container">
                                <Icon.Bookmark color="#8e8e8e" size={12} />
                            </div>
                            <span className="profile-page-nav-link-name">SAVED</span>
                        </div>
                        <div className="profile-page-nav-link">
                            <div className="profile-page-nav-link-icon-container">
                                <Icon.PersonSquare color="#8e8e8e" size={12} />
                            </div>
                            <span className="profile-page-nav-link-name">TAGGED</span>
                        </div>
                    </nav>
                    <ul className="profile-page-posts-container">
                        <li className="profile-page-post-item">
                            <div className="profile-page-post" 
                            style={{backgroundImage: "url('https://res.cloudinary.com/dwlftsdge/image/upload/v1622907681/Instagram%20App/Nature%20images/paris-city-landscape-france-eiffel-tower_49537-226_l2nzno.jpg')", 
                            backgroundSize: "cover",
                            height: "100%",
                            backgroundPosition:'center'}}></div>
                        </li>
                        <li className="profile-page-post-item">
                            <div className="profile-page-post" 
                            style={{backgroundImage: "url('https://res.cloudinary.com/dwlftsdge/image/upload/v1622907681/Instagram%20App/Nature%20images/paris-city-landscape-france-eiffel-tower_49537-226_l2nzno.jpg')", 
                            backgroundSize: "cover",
                            height: "100%",
                            backgroundPosition:'center'}}></div>
                        </li>
                        <li className="profile-page-post-item">
                            <div className="profile-page-post" 
                            style={{backgroundImage: "url('https://res.cloudinary.com/dwlftsdge/image/upload/v1622907681/Instagram%20App/Nature%20images/paris-city-landscape-france-eiffel-tower_49537-226_l2nzno.jpg')", 
                            backgroundSize: "cover",
                            height: "100%",
                            backgroundPosition:'center'}}></div>
                        </li>
                        
                    </ul>
                </div>
            </>
        )
    }
}

export default ProfilePage