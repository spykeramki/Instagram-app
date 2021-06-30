import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class SuggestedFriend extends Component {

    state={followed: false}

    followUser = async () => {
        const {suggestionsList} = this.props
        const {id} = suggestionsList
        const jwtToken = Cookies.get('jwt_token');
        const followingDetails = {
            followingUserId: id
        }
        const options={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(followingDetails)
        }
        const response = await fetch(`http://localhost:3005/following`, options)
        if(response.ok===true){
            this.setState({followed:true})
        }
    }

    render(){
        const {followed} = this.state
        const {suggestionsList} = this.props
        const {friendProfileImage, friendPetName} = suggestionsList

        return (
            <div className="profile-container suggestion-margin">
                <img src={friendProfileImage}
                className="suggestions-profile-image" 
                alt="friend-profile-pic" 
                />
                <div className="name-container">
                    <p className="nickname">{friendPetName}</p>
                    <p className="followers">Follows you</p>
                </div>
                {followed ? <button className="anchor-element anchor-element-following">Following</button>
                 : 
                <button className="anchor-element" onClick={this.followUser}>Follow</button>}
               
            </div>
        )
    }
}

export default SuggestedFriend