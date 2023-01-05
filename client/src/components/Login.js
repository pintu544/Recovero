import React, { useState } from 'react'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom';
import { signin } from '../Utils/ApiUtils';
import { success } from '../Toast';

function Login() {

  const [signUpData, setLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const onHandleEvent = (event) => {
    setLogin({ ...signUpData, [event.target.name]: event.target.value, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
    console.log(signUpData);
  }

  const onSignIn = async () => {
    console.log(signUpData);
    const apiResponce = await signin(signUpData)
    if (apiResponce.status === 200) {
        console.log("responcemessage", apiResponce);
        success(apiResponce.data.message)
        if(apiResponce.data.user.status === 'admin'){
          navigate('/adminDashboard');
        }else{
          navigate('/userDashboard');
        }
        
    } else {
        console.log("error");
    }
  }


  return (
    <div>
      <NavBar />
      <h4 className="my-5 fs-2 text-danger">LOGIN</h4>
      <div>
        <form className="d-flex flex-column align-items-center ">
          <input
            type='text'
            name='email'
            placeholder='Ex:abc@gmail.com'
            className="form-control w-50 mt-2"
            onChange={(e) => onHandleEvent(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control w-50 mt-2"
            onChange={(e) => onHandleEvent(e)}
          />
        </form>
        <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onSignIn()}>
          SIGNIN
        </button>
        <div>
          <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => navigate('/')}>
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login