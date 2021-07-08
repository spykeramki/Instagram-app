import {Component} from 'react'
import Cookies from 'js-cookie'
import OtherUserPost from '../OtherUserPost'
import SuggestionsBox from '../SuggestionsBox'
import Header from '../Header'
import CreatePost from './CreatePost'

import './index.css'

class HomePage extends Component {
    state={friendsPostsList:[], userData:[]}

    componentDidMount(){
        this.getPostsData()
        this.getOwnerData()
    }

    getApiCall = async (url) => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(url, options);
        if(response.ok===true){
            const dataFetched = await response.json()
            return dataFetched
        }
    }

    getOwnerData = async () => {
        const url = "http://localhost:3005/owner/info"
        const dataFetched = await this.getApiCall(url)
        const formattedData= {
                userId: dataFetched.user_id,
                profileImageUrl: dataFetched.profile_image_url,
                petName: dataFetched.pet_name,
                fullName: dataFetched.full_name
            }
        this.setState({userData:formattedData})
        
    }

    getPostsData = async () => {
        const url = "http://localhost:3005/home/posts"
        const dataFetched = await this.getApiCall(url)
        const updatedData= dataFetched.postsResponse.map(eachItem => {
            return {
                id: eachItem.id,
                friendProfileImage: eachItem.friend_profile_image,
                friendName: eachItem.friend_name,
                postContent: eachItem.post_content,
                likes: eachItem.likes,
                liked: eachItem.liked,
                friendPostTime: eachItem.friend_post_time,
                user:eachItem.user
            }
        })
        this.setState({friendsPostsList: updatedData})
    }

    renderFriendsPosts = () => {
        const {friendsPostsList} = this.state
        return (
            <ul className="friends-posts-container">
                {friendsPostsList.map(eachPost => {
                    return <OtherUserPost friendPost={eachPost} key={eachPost.id}/>
                })}
            </ul>
        )
    }

    renderLoginUserDetails = () => {
        const {userData} = this.state
        const{profileImageUrl, fullName, petName} = userData
        return(
            <div className="profile-container">
                <img src={profileImageUrl}
                className="suggestions-self-profile-image" 
                alt="self-profile-pic" 
                />
                <div className="name-container">
                    <p className="nickname">{petName}</p>
                    <p className="full-name">{fullName}</p>
                </div>
                <p className="anchor-element">Switch</p>
            </div>
        )
    }

    render(){
    
        return (
            <>
            <Header />
            <div className="home-bg-container">
                <div className="status-posts-container">
                    <CreatePost />
                    {this.renderFriendsPosts()}
                </div>
                <div className="suggestions-bg-container">
                    {this.renderLoginUserDetails()}
                    <SuggestionsBox />
                </div>
            </div>
            </>
        )
    }
}

export default HomePage
