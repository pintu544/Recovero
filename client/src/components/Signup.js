import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'
import { success } from '../Toast';
import { signup } from '../Utils/ApiUtils';

function Signup() {

  const [signUpData, setLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const onHandleEvent = (event) => {
    setLogin({ ...signUpData, [event.target.name]: event.target.value, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
    console.log(signUpData);
  }

  const onSignUp = async () => {
    console.log(signUpData);
    const apiResponce = await signup(signUpData)
    if (apiResponce.status === 200) {
        success(apiResponce.data.message)
        console.log("responcemessage", apiResponce);
        navigate('/signin');
    } else {
        console.log("error");
    }
  }


  return (
    <div>
      <NavBar />
      <h4 className="my-5 fs-2 text-danger">SIGNUP</h4>
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

          <select onChange={onHandleEvent} className="form-control w-50 mt-2" name="status">
            <option>Choose an option</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          
        </form>
        <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onSignUp()}>
          SIGNUP
        </button>
        <div>
          <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => navigate('/signin')}>
            SIGNIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup