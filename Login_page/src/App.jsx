
import viteLogo from '/vite.svg'
import anh1 from './assets/img/anh.png';
import anh2 from './assets/img/Photo by Alexandr Popadin.png';
import anh3 from './assets/img/picsta.png';
import anh4 from './assets/img/nice_to_see.png';
import anh5 from './assets/img/Login.png';
import anh6 from './assets/img/Password.png';
import anh7 from './assets/img/Line Field.png';

import './css/base.scss';
import './css/reset.scss';
import FacebookButtons from './component/Facebook_login';
import GoogleButtons from './component/Google_login';
import SigninButtons from './component/Signin_button';
import EmailInputFields from './component/Email_input';
import InputAdornments from './component/Password_input';
import SwitchRemember from './component/Switcher';


function App() {

  return (
    <div class="dang_nhap">
        <img class="anh_dep" src= {anh1} />
        <a href="https://unsplash.com/@irrabagon">
            <img class="Photo_Alex" src= {anh2} />
        </a>
        <div class="Log_in">
            <div class="Frame_login">
                <img class="Avatar" src= {anh3}/>
                <img class="Nice_to_see" src = {anh4}/>
                <img class="Username" src = {anh5}/>
                <img class="Password" src = {anh6}/>
            </div>
            <EmailInputFields />
            <InputAdornments />
            <SwitchRemember />
            <a className="forgotpass" href="https://www.google.com">Forgot password?</a>
            <SigninButtons />
            <img class="Or" src = {anh7}/>
            <div class="nothaveacc">Dont have an account?</div>
            <a href="https://www.google.com" className='sign_now'>Sign up now</a>
        </div>
        <FacebookButtons />
        <GoogleButtons />
    </div>

  )
}

export default App
