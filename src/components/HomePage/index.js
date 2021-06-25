import {Component} from 'react'
import Cookies from 'js-cookie'
import OtherUserPost from '../OtherUserPost'
import SuggestionsBox from '../SuggestionsBox'
import StatusBar from '../StatusBar'
import Header from '../Header'
import CreatePostPopup from './CreatePostPopup'
import './index.css'

class HomePage extends Component {
    state={friendsPostsList:[], userData:[]}

    componentDidMount(){
        this.getPostsData()
        this.getOwnerData()
    }

    getOwnerData = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch("http://localhost:3005/owner/info", options);
        if(response.ok===true){
            const dataFetched = await response.json()
            const formattedData= {
                    userId: dataFetched.user_id,
                    profileImageUrl: dataFetched.profile_image_url,
                    petName: dataFetched.pet_name,
                    fullName: dataFetched.full_name
                }
            this.setState({userData:formattedData})
        }
    }

    getPostsData = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch("http://localhost:3005/home/posts", options);
        if(response.ok===true){
            const dataFetched = await response.json()
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
        else{
            console.log(response.body)
        }
    }

    render(){
        const {friendsPostsList, userData} = this.state
        const{profileImageUrl, fullName, petName} = userData
    
        return (
            <>
            <Header />
            <div className="home-bg-container">
                <div className="status-posts-container">
                    <StatusBar />
                    <div className="create-post-container">
                        <div className="create-post-search-container">
                            <div className="create-post-image-container">
                                <img src='https://res.cloudinary.com/dwlftsdge/image/upload/v1623776629/Instagram%20App/instagram%20login%20page%20images/307779-P800TT-551_gdhglg.jpg' 
                                className="create-post-image" 
                                alt="post" />
                            </div>
                            <input type="text" className="create-post-input" placeholder="How's your day?" />
                        </div>
                        <div className="create-post-select-container">
                            <CreatePostPopup />
                        </div>
                    </div>
                    <ul className="friends-posts-container">
                        {friendsPostsList.map(eachPost => {
                            return <OtherUserPost friendPost={eachPost} key={eachPost.id}/>
                        })}
                    </ul>
                </div>
                <div className="suggestions-bg-container">
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
                    <SuggestionsBox />
                </div>
            </div>
            </>
        )
    }
}

export default HomePage
