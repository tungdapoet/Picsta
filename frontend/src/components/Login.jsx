import {useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import "./base.css"

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };


  const responseGoogle = (response) => {
    console.log(response)
    localStorage.setItem('client_id', response?.clientId);
    localStorage.setItem('credential', response?.credential);
    navigate('/', {replace: true});

  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">

      <div className=" relative w-full h-full bg-gray-100">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <div className="shadow-2xl rounded-2xl w-96">
            <div className="flex flex-col justify-center items-center mt-5">
              <svg height="40" viewBox="-3 -3 82 82" width="40" style={{display: "block"}}>
                <title>Logo Pinterest</title>
                <circle cx="38" cy="38" fill="white" r="40"></circle>
                <path d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z" fill="#e60023" fillRule="evenodd">
                </path>
              </svg>
              <span className="text-2xl font-medium">Welcome to Piczio</span>
            </div>
            <form className="flex flex-col items-center" onSubmit={handleLogin}>
              <div className="m-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-normal mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none focus-visible:outline-none border-4 border-transparent rounded-lg w-64 py-2 px-3 text-gray-700 leading-tight focus-visible:border-4 focus-visible:border-sky-300 focus:shadow-outline"
                  placeholder="Enter your username"
                />
              </div>
              <div className="m-2">
                <label htmlFor="password" className="block text-gray-700 text-sm font-normal mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none focus-visible:outline-none border-4 border-transparent rounded-lg w-64 py-2 px-3 text-gray-700 leading-tight focus-visible:border-4 focus-visible:border-sky-300 focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-2 mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-64 focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
              <div className="mb-2 mt-2">
                <span className="font-bold">OR</span>
              </div>

              <div className="mt-2 mb-8">
                <GoogleLogin
                  size="large"
                  width={256}
                  clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                  shape="circle"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
