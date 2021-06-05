import {Component} from 'react'
import Cookies from 'js-cookie'
import OtherUserPost from '../OtherUserPost'
import SuggestionsBox from '../SuggestionsBox'
import StatusBar from '../StatusBar'
import Header from '../Header'
import './index.css'
// const friendsPostsList=[
//     {   id:0,
//         friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
//         friendName: 'Helena',
//         postContent: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653958/Instagram%20App/post-image_trxquf.jpg',
//         likes: 202,
//         commentsNumber: 22,
//         commentsList: [
//             {
//                 id: 1,
//                 username: 'Sam',
//                 comment: "Beautiful!!",
//             },
//             {
//                 id: 2,
//                 username: 'Raegar',
//                 comment: "damn good",
//             }
//         ],
//         friendPostTime: "4 HOURS AGO"
//     },
//     {   id: 1,
//         friendProfileImage: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653719/Instagram%20App/download_mqntpw.jpg',
//         friendName: 'Helena',
//         postContent: 'https://res.cloudinary.com/dwlftsdge/image/upload/v1620653958/Instagram%20App/post-image_trxquf.jpg',
//         likes: 202,
//         commentsNumber: 22,
//         commentsList: [
//             {
//                 id: 1,
//                 username: 'Sam',
//                 comment: "Beautiful!!",
//             },
//             {
//                 id: 2,
//                 username: 'Raegar',
//                 comment: "damn good",
//             }
//         ],
//         friendPostTime: "4 HOURS AGO"
//     }
// ]
class HomePage extends Component {
    state={friendsPostsList:[]}

    componentDidMount(){
        this.getPostsData()
    }

    getPostsData = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch("http://localhost:3005/home/posts", options);
        if(response.ok===true){
            const dataFetched = await response.json()
            const updatedData= dataFetched.postsResponse.map(eachItem => {
                return {
                    id: eachItem.id,
                    friendProfileImage: eachItem.friend_profile_image,
                    friendName: eachItem.friend_name,
                    postContent: eachItem.post_content,
                    likes: 202,
                    friendPostTime: eachItem.friend_post_time
                }
            })
            console.log(updatedData)
            this.setState({friendsPostsList: updatedData})
        }
        else{
            console.log(response.body)
        }
    }

    render(){
        const {friendsPostsList} = this.state
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
