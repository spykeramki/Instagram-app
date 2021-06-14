import './index.css'

const ProfilePostComponent = (props) => {
    const {profilePost} = props
    const {postImageUrl} = profilePost
    return(
        <li className="profile-page-post-item">
            <div className="profile-page-post" 
                style={{backgroundImage: `url(${postImageUrl})`, 
                backgroundSize: "cover",
                height: "100%",
                backgroundPosition:'center'}}>
                
            </div>
        </li>
    )
}

export default ProfilePostComponent;