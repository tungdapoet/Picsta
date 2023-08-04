import {useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây (có thể gửi thông tin đăng nhập lên  hoặc xử lý ở phía client)
    console.log("Username:", username);
    console.log("Password:", password);
  };


  const responseGoogle = (response) => {
    console.log(response)
    localStorage.setItem('client_id', JSON.stringify(response?.clientId));
    localStorage.setItem('credentials', JSON.stringify(response?.credentials));
    navigate('/', {replace: true});

  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">

      <div className=" relative w-full h-full bg-gray-100">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <div className="shadow-2xl rounded-2xl">
            <form className="flex flex-col items-center" onSubmit={handleLogin}>
              <div className="m-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your username"
                />
              </div>
              <div className="m-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-2 mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="m-4">
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
