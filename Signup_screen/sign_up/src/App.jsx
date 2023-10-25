
import viteLogo from '/vite.svg';
import './css/base.scss';
import './css/reset.scss';
import anh1 from "./assets/img/picsta.png";
import anh2 from "./assets/img/leaf.png"; 
import anh3 from "./assets/img/Google.png";
import anh4 from "./assets/img/Facebook.png";
import BasicButtons from './component/google_signin';
import BasicButtons1 from './component/facebook_signin';
import BasicButtons2 from './component/signup';
import Checkboxes from './component/checkbox';
import NameFieldSizes from './component/name_input';
import EmailFieldSizes from './component/email_input';
import PassFieldSizes from './component/password_input';


function App() {

  return (
  <div className ="dangky">
    <img className ="Picsta_logo" src = {anh1} />
    <img className ="leafphoto" src = {anh2}  />
    <div className ="Signup_With_Google_text"> Signup with Google </div>
    <img className ="Google_logo" src = {anh3}  />
    <div className = "Google_rect"></div>
    <BasicButtons />
    <div className ="Facebook_rect"></div>
    
    <div className ="Signup_With_Facebook-text"> Signup with Facebook</div>
    <img className ="Facebook_logo" src = {anh4}  />
    <BasicButtons1 />
    <div className ="SignupFrame">
        <div className = "Signup_rect">
            <div className ="Signup_text"> Signup </div>
        </div> 
        <BasicButtons2 /> 
    </div>
    <div className = "Haveanaccount">
        <div className ="Haveanaccount_text"> Have an account? </div>
        <a className ="SignIn_text" href= "https://www.google.com/"> Sign In </a>
    </div>
    <Checkboxes />
    
    <div className ="agree_text"> I agree to the </div>
    <a className ="termsandpolicy" href= "https://www.google.com/">terms & policy</a>
    <div className ="Or_Frame">
        <div className ="Or_textbox">
            <div className ="Or_text">Or</div>
        </div>
        <div className ="straight_line"></div>
    </div>
    <div className ="password_Frame1">
        <div className ="password_Frame2">
            <div className ="password_text">Password</div>
        </div>
        <PassFieldSizes />
    </div>
    
    <div className ="email_Frame1">
        <div className ="email_Frame2">
            <div className ="email_text">Email address</div>
        </div>  
        <EmailFieldSizes />  
    </div>
    
    <div className ="name_Frame1">
        <div className ="name_Frame2">
            <div className ="name_text">Name</div>
        </div>
        <NameFieldSizes />
    </div>
    
    <p className ="entercredentials">Enter your Credentials to access your account</p>
    <div className ="getstarted_text">Get Started Now</div>
  </div>

  )
}

export default App
