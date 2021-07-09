import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import {Component} from 'react';
import {FiSend} from 'react-icons/fi'
import ProfileIconPopup from './ProfileIconPopup'
import NotificationsPopup from './NotificationsPopup'
import SearchInputPopup from './SearchInputPopup'

import './index.css'

class Header extends Component {

    renderNavLinks = () => {
        return (
            <div className="nav-links-container">
                <Link className="nav-link" to='/'>
                    <Icon.HouseDoorFill color="#000000" size={24} />
                </Link>
                <Link className="nav-link" to='/inbox'>
                    {/* <Icon.ArrowUpRightCircle color="#000000" size={24} /> */}
                    <FiSend className="header-nav-link" />
                </Link>
                <div className="nav-link">
                    <Icon.Compass color="#000000" size={24} />
                </div>
                <NotificationsPopup />
                <ProfileIconPopup />
            </div>
        )
    }

    render(){
        return (
            <div className="header-bg-container">
                <nav className="header-container">
                    <Link className="nav-link" to='/'>
                        <img src="../images/instagramLogo.png" className="logo" alt="logo" />
                    </Link>
                    <SearchInputPopup />
                    {this.renderNavLinks()}
                </nav>
            </div>
        )
    }
}

export default Header