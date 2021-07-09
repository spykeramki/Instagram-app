import { Component } from "react";
import Popup from 'reactjs-popup';
import './index.css'

class FriendProfileHoverPopup extends Component{

    renderPostUserDetails = () => {
        const {friendName, friendProfileImage} = this.props
        return (
            <div className="flex flex-row items-center">
                <img src={friendProfileImage} 
                        className="post-profile-image" 
                        alt="profileImage" 
                        />
                <p className="post-user-name">{friendName}</p>
            </div>
        )
    }

    render(){
        return(
            <Popup 
        className="friend-profile-hover-popup"
        trigger={this.renderPostUserDetails()}
        position='bottom left'
        on={['hover', 'focus']}
        arrow={false}
        mouseLeaveDelay={400}
        mouseEnterDelay={400}
        >
            <div className="w-full h-80 rounded-xl">
                <div>
                    <img src="" className="" alt="friend" />
                    <div >
                        <h1>spykeramki</h1>
                        <p>Rama Krishna</p>
                        <p>Followed by ramki and madhu</p>
                    </div>
                    <div>
                        <div>
                            <p>59</p>
                            <p>posts</p>
                        </div>
                    </div>
                    <ul></ul>
                    <button>Message</button>
                </div>
            </div>
        </Popup>
        )
    }
}

export default FriendProfileHoverPopup;