import {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import './index.css';


class OtherUserPost extends Component {
    constructor(props){
        super()
        this.state = {friendPost:props.friendPost}
    }
    
    addComment = (event) => {
        const {friendPost} = this.state
        const updatedFriendPost = friendPost
        const{commentsList} = updatedFriendPost
        
        if (event.key==="Enter"){
            const comment={
                id: commentsList.length + 1,
                username: "spykeramki",
                comment: event.target.value,
            }
            console.log(comment)
            commentsList.push(comment)
            console.log(updatedFriendPost)
            this.setState({friendPost:updatedFriendPost})
            event.target.value=""
        }
    }

    appendComments = () => {
        const {friendPost} = this.state
        const{commentsList} = friendPost
        return (
            <ul className="comments-container">
                {commentsList.map(eachComment => {
                return (
                    <li className="post-description sub-heading-description comment-padding" key={eachComment.id}>{eachComment.username} <span className="comment-value">{eachComment.comment}</span></li>
                )
                })}     
            </ul>
        )
    }

    render(){
        const {friendPost} = this.state
        const {friendProfileImage, friendName, postContent, likes, commentsNumber, friendPostTime} = friendPost
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
                        <Icon.ThreeDots color="#000000" size={16} />
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
                    <p className="post-description view-all-comments comment-padding">View all {commentsNumber} comments</p>
                    {this.appendComments()}
                    <p className="post-time">{friendPostTime}</p>
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