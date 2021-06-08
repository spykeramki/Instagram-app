import * as Icon from 'react-bootstrap-icons'
import './index.css'

const SearchInputSuggestion = (props) => {
    const {suggestedFriend} = props
    const{friendImage, friendNickname, friendFullName} = suggestedFriend
    return (
        <li className="search-input-suggestion-bg-container">
            <div className="search-input-suggestion-image">
                <img src={friendImage} className="friend-image" alt="suggestion" />
            </div>
            <div className="search-input-suggestion-details">
                <p className="search-input-suggestion-nick-name">{friendNickname}</p>
                <p className="search-input-suggestion-full-name">{friendFullName}</p>
            </div>
            <div className="search-input-suggestion-close-icon-container">
                <Icon.XLg color='#8e8e8e' size={14} />
            </div>
        </li>
    )
}

export default SearchInputSuggestion