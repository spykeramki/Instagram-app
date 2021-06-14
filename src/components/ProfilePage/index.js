import {Component} from 'react'
import * as Icon from 'react-bootstrap-icons'
import Header from '../Header'
import ProfilePostComponent from './ProfilePostComponent'
import './index.css'

const profilePageInfo = 
    {
        id:1,
        selfProfileImageUrl:'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
        petName:'spykeramki',
        postsCount: 19,
        followersCount: 179,
        followingCount: 328,
        fullName: 'Rama Krishna Oguri'
    }
const ProfilePosts = [
    {
        postId:1,
        postImageUrl:'https://res.cloudinary.com/dwlftsdge/image/upload/v1622907681/Instagram%20App/Nature%20images/paris-city-landscape-france-eiffel-tower_49537-226_l2nzno.jpg',
    },
    {
        postId:2,
        postImageUrl:'https://res.cloudinary.com/dwlftsdge/image/upload/v1622907681/Instagram%20App/Nature%20images/paris-city-landscape-france-eiffel-tower_49537-226_l2nzno.jpg',
    }
]

class ProfilePage extends Component {
    state = {profilePageUserDetails: profilePageInfo, postsInfo:ProfilePosts}

    render(){
        const{profilePageUserDetails, postsInfo} = this.state
        const{selfProfileImageUrl, petName, postsCount, followersCount, followingCount, fullName} = profilePageUserDetails
        return(
            <>
                <Header />
                <div className="profile-page-bg-container">
                    <div className="profile-page-content-container">
                    <div className="profile-info-container">
                        <div className="profile-page-profile-picture-container">
                            <img src={selfProfileImageUrl} 
                            className="profile-page-profile-picture" 
                            alt="profile-user" />
                        </div>
                        <div className="profile-page-profie-details-container">
                            <div className="profile-page-user-details-1">
                                <h1 className="profile-page-user-pet-name">{petName}</h1>
                                <button type="button" className="profile-page-user-details-edit-button">Edit Profile</button>
                                <div className="profile-page-user-details-settings-icon-container">
                                    <Icon.GearWide color="#262626" size={24} />
                                </div>
                            </div>
                            <div className="profile-page-user-details-2">
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">{postsCount}</span> posts
                                </p>
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">{followersCount}</span> followers
                                </p>
                                <p className="profile-page-profile-details-info">
                                    <span className="profile-page-profile-details-info-number">{followingCount}</span> following
                                </p>
                            </div>
                            <h1 className="profile-page-user-full-name">{fullName}</h1>
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
                    <div className="profile-page-posts-list-container">
                        <ul className="profile-page-posts-container">
                            {postsInfo.map(eachItem => {
                                return <ProfilePostComponent profilePost={eachItem} key={eachItem.postId} />
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfilePage