import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const gifImageUrlsList = [
    "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/1_acczbw.jpg",
    "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/2_o19qtx.jpg",
    "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/3_rl1r2t.jpg",
    "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135385/Instagram%20App/instagram%20login%20page%20images/4_pdzcdz.jpg",
    "https://res.cloudinary.com/dwlftsdge/image/upload/v1622135386/Instagram%20App/instagram%20login%20page%20images/5_xog2nr.jpg"
]

const storesLinkImages = [
    {
        storeId: 1,
        storeLink: "https://apps.apple.com/app/instagram/id389801252?vt=lo",
        imgLink: "https://res.cloudinary.com/dwlftsdge/image/upload/v1622138121/Instagram%20App/instagram%20login%20page%20images/180ae7a0bcf7_rkjmc4.png",
        altText: "Available on app store"
    },
    {
        storeId: 2,
        storeLink: "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=BB526C81-9F2F-4CBE-892D-4A5AA8A0E177&utm_content=lo&utm_medium=badge",
        imgLink: "https://res.cloudinary.com/dwlftsdge/image/upload/v1622138121/Instagram%20App/instagram%20login%20page%20images/e9cd846dc748_zwkgwe.png",
        altText: "Available on google store"
    }
]

const footerLinks = [
    {footerLinkId : 1, LinkText : "About", redirectLink : "#"},
    {footerLinkId : 2, LinkText : "Blog", redirectLink : "#"},
    {footerLinkId : 3, LinkText : "Jobs", redirectLink : "#"},
    {footerLinkId : 4, LinkText : "Help", redirectLink : "#"},
    {footerLinkId : 5, LinkText : "API", redirectLink : "#"},
    {footerLinkId : 6, LinkText : "Privacy", redirectLink : "#"},
    {footerLinkId : 7, LinkText : "Terms", redirectLink : "#"},
    {footerLinkId : 8, LinkText : "Top Accounts", redirectLink : "#"},
    {footerLinkId : 9, LinkText : "Hashtags", redirectLink : "#"},
    {footerLinkId : 10, LinkText : "Locations", redirectLink : "#"},
]

const appLanguages = [
    {
        id: 1,
        language: "English",
        languageCode: "ENG"
    },
    {
        id: 2,
        language: "Telugu",
        languageCode: "TEL"
    },
    {
        id: 3,
        language: "Hindi",
        languageCode: "HIN"
    },
    {
        id: 4,
        language: "Kannada",
        languageCode: "KAN"
    }
]

class LoginPage extends Component {
    state= { mobileImage : gifImageUrlsList[0], 
            username:'', 
            password:''}

    componentDidMount(){
        this.changeImagesInMobile()
    }

    changeImagesInMobile = () => {
        let count=0
        this.gifTimerId = setInterval(() => {
            count+=1;
            if (count >= gifImageUrlsList.length){
                count=0;
            }
            let newImage = gifImageUrlsList[count]
            this.setState({mobileImage:newImage})
        },4000)
    }

    LoginWithFacebookComponent = () => {
        return(
            <>
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
            </>
        )
    }

    renderLoginPageImage = () => {
        const {mobileImage} = this.state
        return (
            <div className="login-phone-image-container">
                <div className="login-gif-image-container">
                    <img src={mobileImage} className="login-gif-image" alt="instagram" />
                </div>
            </div>
        )
    }

    renderLoginForm = () => {
        return (
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
                    {this.LoginWithFacebookComponent()}
                </form>
            </div>
        )
    }

    renderSignUpComponent = () => {
        return (
            <div className="sign-up-text-container">
                <p className="sign-up-description">
                    Don't have an account? <a className="sign-up-text" href="http://localhost:3004/signup">Sign up</a>
                </p>
            </div>
        )
    }

    storeLinkImageComponent = (appStore) => {
        const {storeId, storeLink, imgLink, altText} = appStore
        return (
            <a className="store-image-link" key = {storeId}
            href={storeLink}
            tabIndex='0'>
                <img src={imgLink} 
                className="store-image" 
                alt={altText}
                />
            </a>
        )
    }

    renderGetAppComponent = () => {
        return(
            <div className="install-app-stores-links-container">
                <p className="install-app-stores-links-heading">
                    Get the app.
                </p>
                <div className="install-app-stores-links-images-container">
                    {storesLinkImages.map(eachStore => {
                        return (this.storeLinkImageComponent(eachStore))
                    })}
                </div>
            </div>
        )
    }

    footerLinkComponent = (footerLink) => {
        const{footerLinkId, LinkText, redirectLink} = footerLink
        return (
        <li className="login-page-footer-link" key={footerLinkId}>
            <a href={redirectLink}>{LinkText}</a>
        </li>
        )
    }

    languageComponent = (appLanguage) => {
        const {id, language, languageCode} = appLanguage;
        return <option key={id} value={languageCode}>{language}</option>
    }

    renderFooterComponent = () => {
        return(
            <footer className="login-page-footer-container">
                <ul className="login-page-footer-links-container">
                    {footerLinks.map(eachLink => {
                        return this.footerLinkComponent(eachLink)
                    })}
                </ul>
                <div className="copy-rights-container">
                    <select className="login-page-language-selection">
                        {appLanguages.map(eachLanguage => {
                            return this.languageComponent(eachLanguage)
                        })}
                    </select>
                    <span className="login-copy-right">2021 Instagram from Facebook</span>
                </div>
            </footer>
        )
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    onLoginSuccess =(jwtToken) => {
        Cookies.set('jwt_token', jwtToken)
        const {history} = this.props
        history.replace('/')
    }

    submitLoginForm = async (event) => {
        const {username, password} = this.state
        event.preventDefault()
        if (username!=='' && password!==''){
            const userDetails = {
                username : username,
                password : password
            }
            const options={
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify(userDetails)
            }
            const response = await fetch('http://localhost:3005/login',options);
            if(response.ok===true){
                const data = await response.json()
                this.onLoginSuccess(data.jwt_token)
            }
            else{
                console.log(response)
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.gifTimerId)
    }

    render(){
        const jwt_token = Cookies.get('jwt_token')
        if(jwt_token !==undefined){
            return <Redirect to='/' />
        }

        return(
            <div className="login-page-bg-container">
                <div className="login-page-content-container">
                    {this.renderLoginPageImage()}
                    <div className="login-page-creds-container">
                        {this.renderLoginForm()}
                        {this.renderSignUpComponent()}
                        {this.renderGetAppComponent()}
                    </div>
                </div>
                {this.renderFooterComponent()}
                
            </div> 
        )
    }
}

export default withRouter(LoginPage)