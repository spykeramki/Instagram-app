import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import SuggestedFriend from './SuggestedFriend'

class SuggestionsBox extends Component{
    state={suggestionsList:[]}

    componentDidMount(){
        this.getsuggestedFriendsList()
    }

    getsuggestedFriendsList = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
        }
        const response= await fetch('http://localhost:3005/home/friendsuggestions', options)
        if (response.ok===true){
            const fetchedData = await response.json()
            const updatedData = fetchedData.data.map(eachItem => {
                return {
                    id: eachItem.user_id,
                    friendProfileImage: eachItem.friend_profile_image,
                    friendPetName: eachItem.pet_name,
                    friendName: eachItem.friend_name
                }
            })
            this.setState({suggestionsList: updatedData})
        }
    }

     suggestedUsers = () => {
        return (
            <div className="profile-container suggestion-margin">
                <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg" 
                className="suggestions-profile-image" 
                alt="self-profile-pic" 
                />
                <div className="name-container">
                    <p className="nickname">roaster</p>
                    <p className="followers">Follows you</p>
                </div>
                <p className="anchor-element">Follow</p>
            </div>
        )
    }
    
    render(){
        const{suggestionsList} = this.state
        
    return (
        <>
            <div className="heading-container">
                <p className="suggestions-heading">Suggestions For You</p>
                <p className="anchor-element black">See All</p>
            </div>
            <ul className="suggestions-container">
                {suggestionsList.map(eachItem => {
                    return <SuggestedFriend suggestionsList={eachItem} key={eachItem.id} />
                })}
            </ul>
            <p className="footer">About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top Accounts . Hashtags . Language</p>
            <p className="footer font-size">2021 INSTAGRAM FROM FACEBOOK</p>
        </>
    )
}
}

export default SuggestionsBox