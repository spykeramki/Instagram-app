import {Component} from 'react'
import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import Cookies from 'js-cookie'
import {storage} from '../../firebase'
import './index.css'

class CreatePostPopup extends Component {
    state = {image:null, postDescription:'', postPrivacy: 'friends'}

    handleChange = (event) => {
        if(event.target.files[0]){
            this.setState({image:event.target.files[0]})
        }
    }

    handleUpload = () => {
        const {image, postDescription, postPrivacy} = this.state
        const jwtToken = Cookies.get('jwt_token')
        const presentDate = new Date();
        if (image!==null){
        const uploadTask = storage.ref(`userPosts/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("userPosts")
                    .child(image.name)
                    .getDownloadURL()
                    .then(async (url) => {
                        console.log(url);
                        const postDetails={
                            postType: "image", 
                            postUrl: `${url}`, 
                            postCreatedTime: `${presentDate.getFullYear()}-${presentDate.getMonth() + 1}-${presentDate.getDate()} ${presentDate.getHours()}:${presentDate.getMinutes()}:${presentDate.getSeconds()}`, 
                            postDescription: postDescription, 
                            postPrivacy: postPrivacy
                        }
                        const options = {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": 'application/json',
                                authorization: `Bearer ${jwtToken}`,
                            },
                            body: JSON.stringify(postDetails)
                        }
                        const response = await fetch('http://localhost:3005/owner/posts', options)
                        if (response.ok === true){
                            console.log("posted successfully")
                        }
                        this.setState({image:null})
                    });
            }
        )
    }
    }

    render(){
        return (
            <Popup 
            trigger={<button className="create-post-image-select-container">
                    <div className="create-post-icon-container">
                        <Icon.ImageFill color='#ffffff' size={24} />
                    </div>
                    <p className="create-post-image-upload-title">Upload</p>
                </button>}
            className="create-post-popup"
            modal
            nested
            >
                {close => (
                <div className="create-post-popup-container">
                    <div className="create-post-popup-header-container">
                        <p className="create-post-popup-anchor"></p>
                        <h1 className="create-post-popup-heading">Create Post</h1>
                        <div className="create-post-popup-close-icon-container" role="button" tabIndex={0} onClick={close}>
                            <Icon.XLg color='#262626' size={16} />
                        </div>
                    </div>
                    <div className="create-post-popup-suggested-friend" key={0}>
                        <div className="create-post-popup-suggested-friend-image-container">
                            <img src='https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg' 
                            className="create-post-popup-suggested-friend-image" 
                            alt="profile" />
                        </div>
                        <div className="create-post-popup-suggested-friend-name-container">
                            <p className="create-post-popup-suggested-friend-nick-name">
                                spykeramki
                            </p>
                            <select className="create-post-popup-suggested-friend-name">
                                <option value="public">Public</option>
                                <option value="friends">Friends</option>
                                <option value="only me">Only me</option>
                            </select>
                        </div>
                    </div>
                    <div className="create-post-popup-choose-file-container">
                        <label className="create-post-popup-choose-file-styling" htmlFor="postInput">
                            <input id='postInput' type="file" className="create-post-popup-choose-file-input" onChange={this.handleChange} />
                            Select Image
                        </label>
                        <textarea className="create-post-popup-post-description" placeholder="Describe your feeling.."></textarea>
                    </div>
                    <div className="create-post-popup-post-button-container">
                        <button className="create-post-popup-post-button1" type="button" 
                        onClick={(event) => {this.handleUpload(event); close()}}>
                            Post
                        </button>
                    </div>
                </div>
                )}
            </Popup>
        )
    }
}

export default CreatePostPopup