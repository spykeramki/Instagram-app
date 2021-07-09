import { Component } from "react";
import Cookies from 'js-cookie'
import { withRouter } from "react-router-dom";
import Header from '../Header';
import ProfilePostComponent from '../ProfilePage/ProfilePostComponent'
import SpecificUserPost from '../OtherUserPost/SpecificUserPost'

import './index.css'

class SpecifiedUserPostDetailedPage extends Component{

    state={friendPost:{}, loading:true, otherPostsList:[], friendPetName:''}

    componentDidMount(){
        this.getPostDetails()
        this.getOtherPostsDetails()
    }

    getPostDetails = async () => {
         const{match} = this.props
         const{params} = match
         const{id} = params
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(`http://localhost:3005/posts/${id}`, options);
        if (response.ok===true){
            const dataFetched=await response.json()
            const updatedData =  {
                id: dataFetched.data.id,
                friendProfileImage: dataFetched.data.friend_profile_image,
                friendName: dataFetched.data.friend_name,
                petName: dataFetched.data.pet_name,
                postContent: dataFetched.data.post_content,
                likes: dataFetched.data.likes,
                friendPostTime: dataFetched.data.friend_post_time,
                user:dataFetched.data.user
            }
            this.setState({friendPost: updatedData, loading:false, friendPetName:updatedData.petName})
        }
    }

    getOtherPostsDetails = async () => {
        const{match} = this.props
         const{params} = match
         const{id} = params
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(`http://localhost:3005/posts/${id}/other?limit=6`, options)
        if (response.ok===true){
            const fetchedData = await response.json()
            const postsDetails = fetchedData.data.map(eachItem => {
                return {
                    postId: eachItem.post_id,
                    postType: eachItem.post_type,
                    postImageUrl: eachItem.post_url,
                    postCreatedTime: eachItem.post_created_time
                }
            })
            this.setState({otherPostsList:postsDetails})
        }
    }

    render(){
        const {friendPost, loading, otherPostsList, friendPetName} = this.state
        return(
            <>
            <Header />
            <div className="specified-user-post-detailed-page-container">
                {loading ? '' : <SpecificUserPost friendPost={friendPost}/>}
                <hr className="specified-user-post-detailed-page-horizontal-line" />
                <div className="specified-user-post-detailed-page-posts-list-heading-container">
                    <p className="specified-user-post-detailed-page-posts-list-heading">More posts from <span className="specified-user-pet-name">{friendPetName}</span></p>
                </div>
                <div className="specified-user-post-detailed-page-posts-list-container">
                    <ul className="specified-user-post-detailed-page-posts-container">
                        {otherPostsList.map(eachItem => {
                            return <ProfilePostComponent profilePost={eachItem} key={eachItem.postId} />
                        })}
                    </ul>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(SpecifiedUserPostDetailedPage)