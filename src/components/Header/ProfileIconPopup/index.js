import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import Cookies from 'js-cookie'
import './index.css'

const ProfileIconPopup = (props) => {
    const logOutClicked = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
    }

    const openProfile = () => {
        const {history} = props
        history.push('/owner')
    }

    return (
        <Popup 
        className="header-profile-image-popup"
        trigger={<img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
        className="header-profile-image" 
        alt="profile-pic"
        />}
        position='bottom right'
        >
            <div className="profile-icon-dropdown">
                <ul className="profile-icon-options-container">
                    <li className="profile-icon-option" role="button" tabIndex={0} onClick={openProfile}>
                        <div className="profile-icon-option-icon">
                            <Icon.Person color="#262626" size={18} />
                        </div>
                        <span className="profile-icon-option-name">
                            Profile
                        </span>
                    </li>
                    <li className="profile-icon-option no-top-padding">
                        <div className="profile-icon-option-icon">
                            <Icon.Bookmark color="#262626" size={18} />
                        </div>
                        <span className="profile-icon-option-name">
                            Saved
                        </span>
                    </li>
                    <li className="profile-icon-option">
                        <div className="profile-icon-option-icon">
                            <Icon.GearWide color="#262626" size={18} />
                        </div>
                        <span className="profile-icon-option-name">
                            Settings
                        </span>
                    </li>
                    <li className="profile-icon-option">
                        <div className="profile-icon-option-icon">
                            <Icon.ArrowRepeat color="#262626" size={18} />
                        </div>
                        <span className="profile-icon-option-name">
                            Switch Accounts
                        </span>
                    </li>
                </ul>
                <div className="profile-icon-logout-container" onClick={logOutClicked}>
                    <p className="profile-icon-option-logout-name">
                        Log Out
                    </p>
                </div>
            </div>
        </Popup>
    )
}

export default withRouter(ProfileIconPopup)