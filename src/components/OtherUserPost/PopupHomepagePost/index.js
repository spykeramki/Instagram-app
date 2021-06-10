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
            {close => (
            <div className="home-page-post-options-container">
                <Popup 
                    trigger={<button className="home-page-post-option-red" tabIndex={0} type="button">Report</button>}
                    className="home-page-more-options-report"
                    modal
                    nested
                    >
                        <div className="home-page-post-options-container">
                            <div className = "home-page-post-selected-heading-container">
                                <div className="home-page-post-selected-question-empty-container"></div>
                                <p className="home-page-post-selected-question">Report</p>
                                <div className="home-page-post-selected-question-close-icon" role="button" tabIndex={0} onClick={close}>{<Icon.XLg color="#262626" size={20}/>}</div>
                            </div>
                            <div className = "home-page-post-selected-question-container">
                                <p className="home-page-post-selected-question">Why are you reporting this post?</p>
                            </div>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">It's spam</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Nudity or sexual activity</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Hate speech or symbols</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Violence or dangerous organizations</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Sale of illegal or regulated goods</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Bullying or harassmant</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Intellectual property violation</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Suicide or self-injury</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Eating disorders</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Scam or fraud</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">False information</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">I just don't like it</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">Something else</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                        </div>
                    </Popup>
                <button className="home-page-post-option-red" tabIndex={0} type="button">Unfollow</button>
                <button className="home-page-post-option" tabIndex={0} type="button">Go to post</button>
                <button className="home-page-post-option" tabIndex={0} type="button" onClick={close}>Cancel</button>
            </div>
            )}
        </Popup>
        
        
    )
}

export default PopupHomepagePost