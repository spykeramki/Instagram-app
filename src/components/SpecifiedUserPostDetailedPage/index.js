import { Component } from "react";
import Cookies from 'js-cookie'
import { withRouter } from "react-router-dom";
import Header from '../Header';
import ProfilePostComponent from '../ProfilePage/ProfilePostComponent'
import SpecificUserPost from '../OtherUserPost/SpecificUserPost'

import './index.css'

let friendedPost = {
    id: 0,
    friendProfileImage: "https://res.cloudinary.com/dwlftsdge/image/upload/v1622897468/Instagram%20App/Nature%20images/profile%20images/5366575_jrfppm.jpg",
    friendName: "ramaraju",
    postContent: "https://res.cloudinary.com/dwlftsdge/image/upload/v1620653958/Instagram%20App/Nature%20images/post-image_trxquf.jpg",
    friendPostTime: "2021-06-04 00:17:24",
    user: "krishna",
    likes: 4
  }
const postsInfo = [
    {
        postId: 21,
        postType: "image",
        postImageUrl: "https://firebasestorage.googleapis.com/v0/b/project-hamgram.appspot.com/o/userPosts%2F307779-P800TT-551.jpg?alt=media&token=71909ba8-c1cf-4984-ae6a-bd6260046fcb",
        postCreatedTime: "2021-06-16 23:06:10"
      },
      {
        postId: 22,
        postType: "image",
        postImageUrl: "https://firebasestorage.googleapis.com/v0/b/project-hamgram.appspot.com/o/userPosts%2F307779-P800TT-551.jpg?alt=media&token=71909ba8-c1cf-4984-ae6a-bd6260046fcb",
        postCreatedTime: "2021-06-16 23:06:10"
      }
]

class SpecifiedUserPostDetailedPage extends Component{

    state={friendPost:{}, loading:true}

    componentDidMount(){
        this.getPostDetails()
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
                postContent: dataFetched.data.post_content,
                likes: dataFetched.data.likes,
                friendPostTime: dataFetched.data.friend_post_time,
                user:dataFetched.data.user
            }
            console.log(updatedData)
            this.setState({friendPost: updatedData, loading:false})
        }
    }

    render(){
        const {friendPost, loading} = this.state
        console.log(friendPost)
        return(
            <>
            <Header />
            <div className="specified-user-post-detailed-page-container">
                {loading ? '' : <SpecificUserPost friendPost={friendPost}/>}
                <hr className="specified-user-post-detailed-page-horizontal-line" />
                <div className="specified-user-post-detailed-page-posts-list-heading-container">
                    <p className="specified-user-post-detailed-page-posts-list-heading">More posts from <span>spyke</span></p>
                </div>
                <div className="specified-user-post-detailed-page-posts-list-container">
                    <ul className="specified-user-post-detailed-page-posts-container">
                        {postsInfo.map(eachItem => {
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