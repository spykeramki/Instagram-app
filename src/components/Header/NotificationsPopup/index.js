import {Component} from 'react'
import Popup from 'reactjs-popup'
import NotificationItem from './NotificationItem'
import * as Icon from 'react-bootstrap-icons'
import './index.css'


class NotificationsPopup extends Component {

    render(){
        return (
            <Popup 
            className="notifications-popup"
            trigger={<div className="nav-link"><Icon.Heart color="#000000" size={24} /></div>}
            position='bottom right'
            >
                <div className="notifications-dropdown">
                    <NotificationItem />
                </div>
            </Popup>
        )
    }
}

export default NotificationsPopup