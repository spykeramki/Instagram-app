import {Component} from 'react';
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import Cookies from 'js-cookie'
import moment from 'moment'
import PopupHomepagePost from './PopupHomepagePost'
import SendPostAsMessagePopup from './SendPostAsMessagePopup'
import FriendProfileHoverPopup from './FriendProfileHoverPopup';

import './index.css';

class OtherUserPost extends Component {
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

    getFormattedTodayDate = () => {
        const presentDate = new Date();
        const formattedDate = `${presentDate.getFullYear()}-${presentDate.getMonth() + 1}-${presentDate.getDate()} ${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()}`;
        console.log(formattedDate)
        return formattedDate
    }

    postApiCall = async (url, bodyDetails) => {
        const jwtToken = Cookies.get('jwt_token');
        const options={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(bodyDetails)
        }
        const response = await fetch(url, options)
        if (response.ok===true){ 
            console.log("success")
        }
        else {
            console.log('failure')
            
        }
    }

    changeSavedStatus = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const savedPostDetails = {
            savedTime : this.getFormattedTodayDate()
        }
        const url = `http://localhost:3005/home/posts/${id}/saved`
        await this.postApiCall(url, savedPostDetails)
        this.setState(prevState => {
            return {saved: !prevState.saved}
        })
    }

    updateLikes =async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const {liked} = this.state
        const url = `http://localhost:3005/home/posts/${id}/likes`
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
            likedTime : this.getFormattedTodayDate()
        }
        
        await this.postApiCall(url, likeDetails)
        this.setState(prevState => {
            return {liked: !prevState.liked}
        })
    }

    displayPostTime = () => {
        const {friendPost} = this.props
        const {friendPostTime} = friendPost
        const time = new Date(friendPostTime)
        const timeString = [time.getFullYear(),time.getMonth(),time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()]
        const displayTime = (moment(timeString).fromNow()).toUpperCase()
        return displayTime
    }

    updateStateWithNewComment = (commentText) => {
        const{friendPost, commentsList} = this.state
        const updatedCommentList = commentsList
        const comment={
            id: updatedCommentList.length + 1,
            commenters: friendPost.user,
            comment: commentText,
        }
        updatedCommentList.push(comment)
        this.setState({commentsList:updatedCommentList})
    }
    
    addComment = async (event) => {
        const{friendPost} = this.state
        const{id} = friendPost
        const url = `http://localhost:3005/home/posts/${id}/comments`
        if (event.key==="Enter"){
            const commentDetails = {
                comment: event.target.value,
                commentedTime: this.getFormattedTodayDate()
            }
            await this.postApiCall(url, commentDetails)
             
            this.updateStateWithNewComment(event.target.value)
            event.target.value=""
        }
    }

    //write function and API call to delete comment in database

    componentDidMount(){
        this.getCommentsList()
        this.isPostLiked()
        this.isPostSaved()
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
        if (response.ok===true){
            const dataFetched=await response.json()
            return dataFetched
        }
    }

    getCommentsList = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const url = `http://localhost:3005/home/posts/${id}/comments`
        const dataFetched=await this.getApiCall(url)
        this.setState({commentsList: dataFetched.data})
    }

    isPostLiked = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const url = `http://localhost:3005/home/post/${id}/liked`
        const dataFetched=await this.getApiCall(url)
        this.setState({liked: dataFetched.liked})
        
    }

    isPostSaved = async () => {
        const{friendPost} = this.props
        const{id} = friendPost
        const url = `http://localhost:3005/home/post/${id}/saved`
        const dataFetched=await this.getApiCall(url)
        this.setState({saved: dataFetched.saved})
    }

    renderComments = () =>{
        const{commentsList, likes} = this.state
        const{friendPost} = this.props
        const{id} = friendPost
        const no_of_comments = commentsList.length
        let slicedArray = commentsList
        if (no_of_comments > 2){
            slicedArray = commentsList.slice(no_of_comments-2,no_of_comments)
        }
        return (
                <div className="text-content-container">
                    <p className="post-description sub-heading-description">{likes} likes</p>
                    {no_of_comments>2 ?<Link to={`/posts/${id}`} className="view-all-comments"><p className="post-description comment-padding">View all {no_of_comments} comments</p></Link>:''}
                    <ul className="comments-container">
                        {slicedArray.map(eachComment => {
                        return (
                                <li className="post-description sub-heading-description comment-padding" key={eachComment.id}>{eachComment.commenters} <span className="comment-value">{eachComment.comment}</span></li>
                        )
                        })}     
                    </ul>
                    <p className="post-time">{this.displayPostTime()}</p>
                </div>
            )
    }

    renderPostIcons = () => {
        const {friendPost, liked, saved} = this.state
        const{id} = friendPost
        return(
            <div className="post-icons-container">
                <div className="icon-conteiner" role="button" tabIndex={0} onClick={this.updateLikes}>
                    {liked ? <Icon.HeartFill color="#ed4956" size={24} /> : <Icon.Heart color="#000000" size={24} />}
                </div>
                <Link to={`/posts/${id}`}>
                    <div className="icon-conteiner">
                        <Icon.Chat color="#000000" size={24} />
                    </div>
                </Link>
                <div className="icon-conteiner">
                    <SendPostAsMessagePopup />
                </div>
                <div className="icon-conteiner right-align" role="button" tabIndex={0} onClick={this.changeSavedStatus}>
                    {saved ? <Icon.BookmarkFill color="#000000" size={24} /> : <Icon.Bookmark color="#000000" size={24} />}
                
                </div>
            </div>
        )
    }

    renderAddComment  = () => {
        return (
            <form className="add-comment-section">
                <Icon.EmojiSmile color="#000000" size={24} />
                <textarea placeholder="Add a comment" type="text" className="comment-input" onKeyDown={this.addComment} />
            </form>
        )
    }

    render(){
        const {friendPost} = this.state
        const {id,friendProfileImage, friendName, postContent} = friendPost
        return(
            <div className="post-container">
                <div className="user-details-container">
                    <FriendProfileHoverPopup friendName={friendName} friendProfileImage={friendProfileImage} />
                    <PopupHomepagePost  postId={id}/>
                </div>
                
                <img src={postContent} className="post-image" alt="postImage" />

                {this.renderPostIcons()}
                
                {this.renderComments()}
                    
                {this.renderAddComment()}
            </div>
        )
    }
}

export default OtherUserPost