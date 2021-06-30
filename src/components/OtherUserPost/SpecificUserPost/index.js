import {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import Cookies from 'js-cookie'
import moment from 'moment'
import PopupHomepagePost from '../PopupHomepagePost'
import SendPostAsMessagePopup from '../SendPostAsMessagePopup'
import './index.css';

class SpecifiedUserPost extends Component {
    constructor(props){
        super()
        this.state = {
            friendPost:props.friendPost, 
            commentsList:[],
            liked:false, 
            likes:props.friendPost.likes, 
            saved:false
        }
    }

    changeSavedStatus = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const presentDate = new Date()
        const savedPostDetails = {
            savedTime : `${presentDate.getFullYear()}-${presentDate.getMonth() + 1}-${presentDate.getDate()} ${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()}`
        }
        
        const options={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(savedPostDetails)
        }
        const response = await fetch(`http://localhost:3005/home/posts/${id}/saved`, options)
        if (response.ok===true){ 
            console.log("save success")
        }
        else {
            console.log('save failure')
            
        }
        this.setState(prevState => {
            return {saved: !prevState.saved}
        })
    }

    updateLikes =async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const presentDate = new Date()
        const {liked} = this.state
        if (liked){
            this.setState(prevState => {
                return {likes: prevState.likes-1}
            })
        }
        else{
            this.setState(prevState => {
                return {likes: prevState.likes+1}
            })
        }
        const likeDetails = {
            likedTime : `${presentDate.getFullYear()}-${presentDate.getMonth() + 1}-${presentDate.getDate()} ${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()}`
        }
        
        const options={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(likeDetails)
        }
        const response = await fetch(`http://localhost:3005/home/posts/${id}/likes`, options)
        if (response.ok===true){ 
            console.log("like success")
        }
        else {
            console.log('like failure')
            
        }
        this.setState(prevState => {
            return {liked: !prevState.liked}
        })
    }

    changeLikeStatus = () => {
        this.updateLikes()
    }

    displayPostTime = () => {
        const {friendPost} = this.props
        const {friendPostTime} = friendPost
        const time = new Date(friendPostTime)
        const timeString = [time.getFullYear(),time.getMonth(),time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()]
        const displayTime = (moment(timeString).fromNow()).toUpperCase()
        return displayTime
    }
    
    addComment = async (event) => {
        const{friendPost,commentsList} = this.state
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const presentDate = new Date()
        const updatedCommentList = commentsList
        if (event.key==="Enter"){
            //write API call to add comment in database
            const commentDetails = {
                comment: event.target.value,
                commentedTime:`${presentDate.getFullYear()}-${presentDate.getMonth() + 1}-${presentDate.getDate()} ${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()}`
            }
            
            const options={
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json',
                    authorization: `Bearer ${jwtToken}`,
                },
                body: JSON.stringify(commentDetails)
            }
            const response = await fetch(`http://localhost:3005/home/posts/${id}/comments`, options)
            if (response.ok===true){ 
                const comment={
                    id: updatedCommentList.length + 1,
                    commenters: friendPost.user,
                    comment: event.target.value,
                }
                updatedCommentList.push(comment)
                this.setState({commentsList:updatedCommentList})
                event.target.value=""
            }
            
        }
    }

    //write function and API call to delete comment in database

    componentDidMount(){
        this.getCommentsList()
        this.isPostLiked()
        this.isPostSaved()
    }

    getCommentsList = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(`http://localhost:3005/home/posts/${id}/comments`, options);
        if (response.ok===true){
            const dataFetched=await response.json()
            this.setState({commentsList: dataFetched.data})
        }
    }

    isPostLiked = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(`http://localhost:3005/home/post/${id}/liked`, options);
        if (response.ok===true){
            const dataFetched=await response.json()
            this.setState({liked: dataFetched.liked})
        }
    }

    isPostSaved = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(`http://localhost:3005/home/post/${id}/saved`, options);
        if (response.ok===true){
            const dataFetched=await response.json()
            this.setState({saved: dataFetched.saved})
        }
    }

    appendComments = () =>{
        const{commentsList} = this.state
        return (
                <ul className="specified-post-comments-container">
                    {commentsList.map(eachComment => {
                    return (
                            <li className="specified-post-description specified-post-comment-padding" key={eachComment.id}>{eachComment.commenters} <span className="comment-value">{eachComment.comment}</span></li>
                    )
                    })}     
                </ul>
            )
    }

    render(){
        const {friendPost, liked, saved, likes} = this.state
        const {id, friendProfileImage, friendName, postContent} = friendPost
        return(
            <div className="specified-post-container">
                <div className="specified-post-image-container">
                    <img src={postContent} 
                    className="specified-post-image" 
                    alt="postImage"
                    />
                </div>
                <div className="specified-post-user-content-container">
                    <div className="specified-post-user-details-container">
                        <img src={friendProfileImage} 
                        className="specified-post-profile-image" 
                        alt="profileImage" 
                        />
                        <p className="specified-post-user-name">
                            {friendName}
                        </p>
                        <div className="specified-post-icon-conteiner specified-post-right-align">
                            <PopupHomepagePost postId={id}/>
                        </div>
                    </div>
                    <div className="specified-post-text-content-container">
                        {this.appendComments()}
                    </div>
                    <footer className="specified-post-content-footer">
                        <div className="specified-post-icons-container">
                            <div className="specified-post-icon-container" role="button" tabIndex={0} onClick={this.changeLikeStatus}>
                                {liked ? <Icon.HeartFill color="#ed4956" size={24} /> : <Icon.Heart color="#000000" size={24} />}
                            </div>
                            <div className="specified-post-icon-container">
                            <Icon.Chat color="#000000" size={24} />
                            </div>
                            <div className="specified-post-icon-container">
                                <SendPostAsMessagePopup />
                            </div>
                            <div className="specified-post-icon-container right-align" role="button" tabIndex={0} onClick={this.changeSavedStatus}>
                                {saved ? <Icon.BookmarkFill color="#000000" size={24} /> : <Icon.Bookmark color="#000000" size={24} />}
                            
                            </div>
                        </div>
                        <div className="specified-post-likes-container">
                            <p className="specified-post-likes-description">{likes} likes</p>
                        </div>
                        <div className="specified-post-time-container">
                            <p className="specified-post-time">{this.displayPostTime()}</p>
                        </div>
                        <form className="specified-post-add-comment-section">
                            <Icon.EmojiSmile color="#000000" size={24} />
                            <textarea placeholder="Add a comment" type="text" className="specified-post-comment-input" onKeyDown={this.addComment} />
                        </form>
                    </footer>
                </div>
            </div>
        )
    }
}

export default SpecifiedUserPost