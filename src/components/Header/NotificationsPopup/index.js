import {Component} from 'react'
import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import './index.css'

class NotificationsPopup extends Component {

    render(){
        return (
            <Popup 
            trigger={<div className="nav-link"><Icon.Heart color="#000000" size={24} /></div>}
            position='bottom right'
            >
                <div className="notifications-dropdown"></div>
            </Popup>
        )
    }
}

export default NotificationsPopup