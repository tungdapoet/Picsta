
import viteLogo from '/vite.svg'

import './css/base.scss';
import './css/reset.scss';
import anh1 from './assets/anh1.png';
import anh2 from './assets/anh2.png';
import BasicButtons from './component/Button_otp';
import BasicTextFields from './component/Email_input';
import FaceButtons from './component/Facebook_login';
import GoogleButtons from './component/Google_login';

function App() {
  
  return (
  <div className='forgotpassword'>
      <GoogleButtons />
      <FaceButtons />
      <BasicTextFields />
      <BasicButtons />
      <img className = 'bigimg' src= {anh1}/>
      <img className = 'picsta' src= {anh2}/>
      <div className = 'forgot'>Forgot Password</div>
      <div className= 'remember'>Did you remember your password?<a href="https://www.google.com" > Login </a></div>
  </div>
  );
}

export default App
