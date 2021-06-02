import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class SignUpPage extends Component {
    constructor(){
        super()
        
        this.state= {
            email:'',
            fullName:'',
            username:'', 
            password:'',
            showEmailErrMsg: false, 
            showUsernameErrMsg: false, 
            showPasswordErrMsg: false}
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changeFullName = (event) => {
        if (event.target.value===''){
            this.setState({fullName: null})
        }
        else{
            this.setState({fullName: event.target.value})
        }
        
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    onSignUpSuccess =() => {
        const {history} = this.props
        history.replace('/login')
    }

    submitLoginForm = async (event) => {
        const {email,fullName,username, password} = this.state
        event.preventDefault()
        this.validatingInputFields()
        if (email!=='' && username!=='' && password!==''){
            const userDetails = {
                email : email,
                fullName: fullName,
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
            const response = await fetch('http://localhost:3005/users/signup',options);
            if(response.ok===true){
                console.log('User successfully signed up')
                this.onSignUpSuccess()
            }
            else{
                console.log(response)
            }
        }
    }

    validatingInputFields = () => {
        const {username, password, email} = this.state
        if (email===''){
            this.setState({showEmailErrMsg: true})
        }
        else{
            this.setState({showEmailErrMsg: false})
        }
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

    render(){
        const jwt_token = Cookies.get('jwt_token')
        if(jwt_token !==undefined){
            return <Redirect to='/' />
        }

        return(
            <div className="signup-page-bg-container">
                
            <div className="signup-page-creds-container">
                <div className="signup-creds-inputs-container">
                    <div className="signup-form-logo-container">
                        <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1620665013/Instagram%20App/lofo_wiqvao.png" 
                        className="signup-form-logo" 
                        alt="logo"
                        />
                    </div>
                    <p className="signup-page-description">
                        Sign up to see photos and videos from your friends
                    </p>
                    <div className="signup-fb-button-container">
                        <button type="button" className="signup-fb-button">
                        <div className="facebook-signup-container">
                            <div className="facebook-signup-icon-container">
                                <img src="https://res.cloudinary.com/dwlftsdge/image/upload/v1622656724/Instagram%20App/instagram%20login%20page%20images/pngkit_facebook-logo-png_4120_v3vhsi.png" 
                                className="facebook-signup-logo-icon"
                                alt="fb"
                                />
                            </div>
                            <p className="facebook-signup-text">Log in with Facebook</p>
                        </div>
                        </button>
                    </div>
                    
                    <div className="signup-divider-container">
                            <div className="signup-divider-line"></div>
                            <div className="signup-divider-text">OR</div>
                            <div className="signup-divider-line"></div>
                        </div>
                    <form className="signup-inputs-form-container" onSubmit={this.submitLoginForm}>
                        <div className="signup-input-container">
                            <input type="text" className="signup-input" placeholder="Mobile Number or Email" onChange={this.changeEmail}/>
                        </div>
                        <div className="signup-input-container">
                            <input type="text" className="signup-input" placeholder="Full Name" onChange={this.changeFullName}/>
                        </div>
                        <div className="signup-input-container">
                            <input type="text" className="signup-input" placeholder="Username" onChange={this.changeUsername} />
                        </div>
                        <div className="signup-input-container">
                            <input type="password" className="signup-input" placeholder="Password" onChange={this.changePassword}/>
                        </div>
                        <div className="signup-button-container">
                            <button type="submit" className="signup-button">Sign up</button>
                        </div>
                        
                        
                        <div className="signup-tc-container">
                            <p className="signup-tc-text">
                                By signing up, you agree to our Terms , Data Policy and Cookies Policy.
                            </p>
                        </div>
                    </form>
                </div>
                <div className="login-text-container">
                    <p className="login-description">
                        Have an account? <a className="login-text" href="http://localhost:3004/login">Login in</a>
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

export default withRouter(SignUpPage)