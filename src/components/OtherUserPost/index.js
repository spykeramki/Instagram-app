import {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import Cookies from 'js-cookie'
import moment from 'moment'
import PopupHomepagePost from './PopupHomepagePost'
import './index.css';

class OtherUserPost extends Component {
    constructor(props){
        super()
        this.state = {
            friendPost:props.friendPost, 
            commentsList:[], 
            ostCreatedTime:'now', 
            liked:false, 
            likes:props.friendPost.likes, 
            saved:false
        }
    }

    changeSavedStatus = () => {
        //write API call to add saved status to post in database
        this.setState(prevState => {
            return {saved: !prevState.saved}
        })
    }

    changeLikeStatus = () => {
        const {liked} = this.state
        if (!liked){
            //write API call to add a like to database
            this.setState(prevState => {
                return {likes: prevState.likes+1}
            })
        }
        else {
            //write API call to remove a like to database
            this.setState(prevState => {
                return {likes: prevState.likes-1}
            })
        }
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
    
    addComment = (event) => {
        const{friendPost,commentsList} = this.state
        const updatedCommentList = commentsList
        if (event.key==="Enter"){
            //write API call to add comment in database
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

    //write function and API call to delete comment in database

    componentDidMount(){
        this.getCommentsList()
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

    appendComments = () =>{
        const{commentsList} = this.state
        const no_of_comments = commentsList.length
        let slicedArray = commentsList
        if (no_of_comments > 2){
            slicedArray = commentsList.slice(no_of_comments-2,no_of_comments)
        }
        return (
                <>
                    {no_of_comments>2 ?<p className="post-description view-all-comments comment-padding">View all {no_of_comments} comments</p>:''}
                    <ul className="comments-container">
                        {slicedArray.map(eachComment => {
                        return (
                                <li className="post-description sub-heading-description comment-padding" key={eachComment.id}>{eachComment.commenters} <span className="comment-value">{eachComment.comment}</span></li>
                        )
                        })}     
                    </ul>
                </>
            )
    }

    render(){
        const {friendPost, liked, saved, likes} = this.state
        const {friendProfileImage, friendName, postContent} = friendPost
        return(
            <div className="post-container">
                <div className="user-details-container">
                    <img src={friendProfileImage} 
                    className="post-profile-image" 
                    alt="profileImage" 
                    />
                    <p className="post-user-name">
                        {friendName}
                    </p>
                    <div className="icon-conteiner right-align">
                        <PopupHomepagePost />
                    </div>
                </div>
                <img src={postContent} 
                className="post-image" 
                alt="postImage"
                />
                <div className="post-icons-container">
                    <div className="icon-conteiner" role="button" tabIndex={0} onClick={this.changeLikeStatus}>
                        {liked ? <Icon.HeartFill color="#ed4956" size={24} /> : <Icon.Heart color="#000000" size={24} />}
                    </div>
                    <div className="icon-conteiner">
                    <Icon.Chat color="#000000" size={24} />
                    </div>
                    <div className="icon-conteiner">
                    <Icon.ArrowUpRightCircle color="#000000" size={24} />
                    </div>
                    <div className="icon-conteiner right-align" role="button" tabIndex={0} onClick={this.changeSavedStatus}>
                        {saved ? <Icon.BookmarkFill color="#000000" size={24} /> : <Icon.Bookmark color="#000000" size={24} />}
                    
                    </div>
                </div>
                <div className="text-content-container">
                    <p className="post-description sub-heading-description">{likes} likes</p>
                    {this.appendComments()}
                    <p className="post-time">{this.displayPostTime()}</p>
                </div>
                <form className="add-comment-section">
                    <Icon.EmojiSmile color="#000000" size={24} />
                    <textarea placeholder="Add a comment" type="text" className="comment-input" onKeyDown={this.addComment} />
                </form>
            </div>
        )
    }
}

export default OtherUserPost