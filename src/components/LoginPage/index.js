import {Component} from 'react'
import './index.css'

class LoginPage extends Component {
    constructor(){
        super()
        this.gifImageUrlsList = [
            "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/1_acczbw.jpg",
            "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/2_o19qtx.jpg",
            "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/3_rl1r2t.jpg",
            "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/4_pdzcdz.jpg",
            "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135386/Instagram%20App/instagram%20login%20page%20images/5_xog2nr.jpg"
        ]
        this.state= { mobileImage : this.gifImageUrlsList[0], 
            username:'', 
            password:'', 
            showUsernameErrMsg: false, 
            showPasswordErrMsg: false}
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    submitLoginForm = async (event) => {
        const {username, password} = this.state
        event.preventDefault()
        this.validatingInputFields()
        if (username!=='' && password!==''){
            const userDetails = {
                username : username,
                password : password
            }
            console.log(userDetails)
            const options={
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify(userDetails)
            }
            const response = await fetch('http://localhost:3005/login',options);
            const data = await response.json()
            console.log(data)
        }
    }

    validatingInputFields = () => {
        const {username, password} = this.state
        if (username===''){
            this.setState({showUsernameErrMsg: true})
        }
        else{
            this.setState({showUsernameErrMsg: false})
        }
        if (password===''){
            this.setState({showPasswordErrMsg: true})
        }
        else{
            this.setState({showPasswordErrMsg: false})
        }
    }

    componentDidMount(){
        this.changeImagesInMobile()
    }

    changeImagesInMobile = () => {
        let count=0
        this.gifTimerId = setInterval(() => {
            count+=1;
            if (count >= this.gifImageUrlsList.length){
                count=0;
            }
            let newImage = this.gifImageUrlsList[count]
            this.setState({mobileImage:newImage})
        },4000)
    }

    componentWillUnmount() {
        clearInterval(this.gifTimerId)
    }

    render(){
        const {mobileImage} = this.state

        return(
            <div className="login-page-bg-container">
                <div className="login-page-content-container">
                    <div className="login-phone-image-container">
                        <div className="login-gif-image-container">
                            <img src={mobileImage} className="login-gif-image" alt="instagram" />
                        </div>
                    </div>
                    <div className="login-page-creds-container">
                        <div className="login-creds-inputs-container">
                            <div className="login-form-logo-container">
                                <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620665013/Instagram%20App/lofo_wiqvao.png" 
                                className="login-form-logo" 
                                alt="logo"
                                />
                            </div>
                            <form className="inputs-form-container" onSubmit={this.submitLoginForm}>
                                <div className="login-input-container">
                                    <input type="text" className="input" placeholder="Phone number, username, or email" onChange={this.changeUsername} />
                                </div>
                                <div className="login-input-container">
                                    <input type="password" className="input" placeholder="Password" onChange={this.changePassword}/>
                                </div>
                                <div className="login-button-container">
                                    <button type="submit" className="login-button">Log In</button>
                                </div>
                                <div className="divider-container">
                                    <div className="divider-line"></div>
                                    <div className="divider-text">OR</div>
                                    <div className="divider-line"></div>
                                </div>
                                <div className="facebook-login-container">
                                    <div className="facebook-icon-container">
                                        <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1622137179/Instagram%20App/instagram%20login%20page%20images/download_e4q3v5.png" 
                                        className="facebook-logo-icon"
                                        alt="fb"
                                        />
                                    </div>
                                    <p className="facebook-login-text">Log in with Facebook</p>
                                </div>
                                <div className="forget-password-container">
                                    <p className="forget-password-text">
                                        Forget password?
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="sign-up-text-container">
                            <p className="sign-up-description">
                                Don't have an account? <span className="sign-up-text">Sign up</span>
                            </p>
                        </div>
                        <div className="install-app-stores-links-container">
                            <p className="install-app-stores-links-heading">
                                Get the app.
                            </p>
                            <div className="install-app-stores-links-images-container">
                                <a className="store-image-link" 
                                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                                tabIndex='0'>
                                    <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1622138121/Instagram%20App/instagram%20login%20page%20images/180ae7a0bcf7_rkjmc4.png" 
                                    className="store-image" 
                                    alt="Available on app store"
                                    />
                                </a>
                                <a className="store-image-link" 
                                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=BB526C81-9F2F-4CBE-892D-4A5AA8A0E177&utm_content=lo&utm_medium=badge" 
                                tabIndex='0'>
                                    <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1622138121/Instagram%20App/instagram%20login%20page%20images/e9cd846dc748_zwkgwe.png" 
                                    className="store-image" 
                                    alt="Available on google store"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="login-page-footer-container">
                    <div className="login-page-footer-links-container">
                        <p className="login-page-footer-link">About</p>
                        <p className="login-page-footer-link">Blog</p>
                        <p className="login-page-footer-link">Jobs</p>
                        <p className="login-page-footer-link">Help</p>
                        <p className="login-page-footer-link">API</p>
                        <p className="login-page-footer-link">Privacy</p>
                        <p className="login-page-footer-link">Terms</p>
                        <p className="login-page-footer-link">Top Accounts</p>
                        <p className="login-page-footer-link">Hashtags</p>
                        <p className="login-page-footer-link">Locations</p>
                    </div>
                    <div className="copy-rights-container">
                        <select className="login-page-language-selection">
                            <option value="English">English</option>
                            <option value="Hindi" >Hindi</option>
                            <option value="Tamil" >Tamil</option>
                            <option value="Kanada" >Kanada</option>
                        </select>
                        <span className="login-copy-right">2021 Instagram from Facebook</span>
                    </div>
                </footer>
            </div> 
        )
    }
}

export default LoginPage