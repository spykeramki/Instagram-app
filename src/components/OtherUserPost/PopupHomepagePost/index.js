import Popup from 'reactjs-popup'
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import './index.css'

const reportStatements = [
    {statementId:1, statement: "It's spam",},
    {statementId:2, statement: "Nudity or sexual activity",},
    {statementId:3, statement: "Hate speech or symbols",},
    {statementId:4, statement: "Violence or dangerous organizations",},
    {statementId:5, statement: "Sale of illegal or regulated goods",},
    {statementId:6, statement: "Bullying or harassmant",},
    {statementId:7, statement: "Intellectual property violation",},
    {statementId:8, statement: "Suicide or self-injury",},
    {statementId:9, statement: "Eating disorders",},
    {statementId:10, statement: "Scam or fraud",},
    {statementId:11, statement: "False information",},
    {statementId:12, statement: "I just don't like it",},
    {statementId:13, statement: "Something else",},
]

const PopupHomepagePost = (props) => {
    const {postId} = props

    const reportStatementsComponent = () => {
        return (
            <ul className="home-page-post-selected-question-statements">
                {reportStatements.map(eachStatement => {
                    const{statementId, statement} = eachStatement
                    return (
                        <li key={statementId}>
                            <button className="home-page-post-option" tabIndex={0} type="button">
                                <div className = "home-page-post-selected-option-container">
                                    <p className="home-page-post-selected-option">{statement}</p>
                                    <div>{<Icon.CaretRight color="#c7c7c7" size={20}/>}</div>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const renderReportStatementsPopup = (close) => {
        return (
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
                    {reportStatementsComponent()}
                </div>
            </Popup>
        )
    }
    
    return (
        <Popup 
        trigger={
            <div className="icon-conteiner right-align">
                <Icon.ThreeDots color="#000000" size={16} />
            </div>
        }
        className="home-page-more-options"
        modal
        nested
        > 
            {close => (
            <div className="home-page-post-options-container">
                {renderReportStatementsPopup(close)}
                <button className="home-page-post-option-red" tabIndex={0} type="button">Unfollow</button>
                <Link to={`/posts/${postId}`}><button className="home-page-post-option" tabIndex={0} type="button">Go to post</button></Link>
                <button className="home-page-post-option" tabIndex={0} type="button" onClick={close}>Cancel</button>
            </div>
            )}
        </Popup>
        
        
    )
}

export default PopupHomepagePost