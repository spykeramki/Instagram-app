import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import {Component} from 'react'

import './index.css'

class Header extends Component {
    render(){
        return (
            <div className="header-bg-container">
                <nav className="header-container">
                    <div className="logo-container">
                        <Link className="nav-link" to='/'>
                            <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620665013/Instagram%20App/lofo_wiqvao.png" className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="search-input-container">
                        <input type="search" placeholder="Search" className="search-input" />
                    </div>
                    <div className="nav-links-container">
                        <Link className="nav-link" to='/'>
                            <Icon.HouseDoorFill color="#000000" size={24} />
                        </Link>
                        <Link className="nav-link" to='/inbox'>
                            <Icon.ArrowUpRightCircle color="#000000" size={24} />
                        </Link>
                        <div className="nav-link">
                            <Icon.Compass color="#000000" size={24} />
                        </div>
                        <div className="nav-link">
                            <Icon.Heart color="#000000" size={24} />
                        </div>
                        <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                        className="header-profile-image" 
                        alt="profile-pic"
                        />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header