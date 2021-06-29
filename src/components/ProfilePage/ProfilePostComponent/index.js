import {Link} from 'react-router-dom'

import './index.css'

const ProfilePostComponent = (props) => {
    const {profilePost} = props
    const {postImageUrl, postId} = profilePost
    return(
        
        <li className="profile-page-post-item">
            <Link to={`/posts/${postId}`}>
                <div className="profile-page-post" 
                    style={{backgroundImage: `url(${postImageUrl})`, 
                    backgroundSize: "cover",
                    height: "100%",
                    backgroundPosition:'center'}}>
                    
                </div>
            </Link>
        </li>
    )
}

export default ProfilePostComponent;