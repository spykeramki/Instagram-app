import Popup from 'reactjs-popup'
import SearchInputSuggestion from './SearchInputSuggestion'
import './index.css'

const searchSuggestionList= [
    {
        id:1,
        friendImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1622897470/Instagram%20App/Nature%20images/profile%20images/asian-woman-posing-looking-camera_ely70t.jpg',
        friendNickname: 'lalli',
        friendFullName: 'Lalitha'
    },
    {
        id:2,
        friendImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1622897468/Instagram%20App/Nature%20images/profile%20images/5348112_z2dsas.jpg',
        friendNickname: 'madhu',
        friendFullName: 'Madhavi Latha'
    }

]

const SearchInputPopup = (props) => {
    
    return (
        <Popup 
        className="header-search-popup"
        trigger={<input type="search" placeholder="Search" className="search-input" />}
        position='bottom center'
        >
            <div className="header-search-popup-bg-container">
                <div className="header-search-popup-heading-container">
                    <h1 className="header-search-popup-heading">Recent</h1>
                    <button className="header-search-popup-clear-button" type="button" tabIndex={0}>Clear All</button>
                </div>
                <ul className="header-search-suggestions-list">
                    {searchSuggestionList.map(eachItem => {
                        return <SearchInputSuggestion suggestedFriend = {eachItem} key={eachItem.id} />
                    })}
                </ul>
            </div>
        </Popup>
    )
}

export default SearchInputPopup