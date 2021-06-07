import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import './index.css'

const PopupHomepagePost = () => {
    return (
        <Popup 
        trigger={<Icon.ThreeDots color="#000000" size={16} />}
        className="home-page-more-options"
        modal
        nested
        >
            <div className="home-page-post-options-container">
                <button className="home-page-post-option-red" tabIndex={0} type="button">Report</button>
                <button className="home-page-post-option-red" tabIndex={0} type="button">Unfollow</button>
                <button className="home-page-post-option" tabIndex={0} type="button">Go to post</button>
                <button className="home-page-post-option" tabIndex={0} type="button">Cancel</button>
            </div>
        </Popup>
    )
}

export default PopupHomepagePost