import {Component} from 'react'
import OtherUserPost from '../OtherUserPost'
import SuggestionsBox from '../SuggestionsBox'
import StatusBar from '../StatusBar'
import Header from '../Header'
import './index.css'
const friendsPostsList=[
    {   id:0,
        friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
        friendName: 'Helena',
        postContent: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653958/Instagram%20App/post-image_trxquf.jpg',
        likes: 202,
        commentsNumber: 22,
        commentsList: [
            {
                id: 1,
                username: 'Sam',
                comment: "Beautiful!!",
            },
            {
                id: 2,
                username: 'Raegar',
                comment: "damn good",
            }
        ],
        friendPostTime: "4 HOURS AGO"
    },
    {   id: 1,
        friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
        friendName: 'Helena',
        postContent: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653958/Instagram%20App/post-image_trxquf.jpg',
        likes: 202,
        commentsNumber: 22,
        commentsList: [
            {
                id: 1,
                username: 'Sam',
                comment: "Beautiful!!",
            },
            {
                id: 2,
                username: 'Raegar',
                comment: "damn good",
            }
        ],
        friendPostTime: "4 HOURS AGO"
    }
]
class HomePage extends Component {
    render(){
        return (
            <>
            <Header />
            <div className="home-bg-container">
                <div className="status-posts-container">
                    <StatusBar />
                    <ul className="friends-posts-container">
                        {friendsPostsList.map(eachPost => {
                            return <OtherUserPost friendPost={eachPost} key={eachPost.id}/>
                        })}
                    </ul>
                </div>
            <SuggestionsBox />
            </div>
            </>
        )
    }
}

export default HomePage
