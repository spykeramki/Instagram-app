import {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import Cookies from 'js-cookie'
import moment from 'moment'
import PopupHomepagePost from './PopupHomepagePost'
import './index.css';

class OtherUserPost extends Component {
    constructor(props){
        super()
        this.state = {friendPost:props.friendPost, commentsList:[], postCreatedTime:'now'}
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
        return (
                <>
                    {no_of_comments>2 ?<p className="post-description view-all-comments comment-padding">View all {no_of_comments} comments</p>:''}
                    <ul className="comments-container">
                        {commentsList.map(eachComment => {
                        return (
                                <li className="post-description sub-heading-description comment-padding" key={eachComment.id}>{eachComment.commenters} <span className="comment-value">{eachComment.comment}</span></li>
                        )
                        })}     
                    </ul>
                </>
            )
    }

    render(){
        const {friendPost} = this.state
        const {friendProfileImage, friendName, postContent, likes} = friendPost
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
                    <div className="icon-conteiner">
                        <Icon.Heart color="#000000" size={24} />
                    </div>
                    <div className="icon-conteiner">
                    <Icon.Chat color="#000000" size={24} />
                    </div>
                    <div className="icon-conteiner">
                    <Icon.ArrowUpRightCircle color="#000000" size={24} />
                    </div>
                    <div className="icon-conteiner right-align">
                    <Icon.Bookmark color="#000000" size={24} />
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