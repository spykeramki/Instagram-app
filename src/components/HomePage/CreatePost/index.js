import CreatePostPopup from '../CreatePostPopup'
import './index.css'

const CreatePost = () => {

    const renderInstagramIcon = () => {
        return (
            <div className="create-post-image-container">
                <img src='./images/instagramLogoIcon.jpg' 
                className="create-post-image" 
                alt="post" />
            </div>
        )
    }

    const renderCreatePostInputElement = () => {
        return <input type="text" className="create-post-input" placeholder="How's your day?" />
    }

    return (
        <div className="create-post-container">
            <div className="create-post-search-container">
                {renderInstagramIcon()}
                {renderCreatePostInputElement()}
            </div>
            <div className="create-post-select-container">
                <CreatePostPopup />
            </div>
        </div>
    )
}

export default CreatePost