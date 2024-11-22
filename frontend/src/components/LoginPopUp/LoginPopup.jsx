import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setshowLogin}) => {

   const {url, setToken} = useContext(StoreContext)

   const [curState, setcurState] = useState("Login")
   const [data, setData] = useState({
    name : "",
    email : "",
    password : ""
   })

   const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name] : value}))
   }

   const onLogin = async(event) => {
      event.preventDefault()
      let newUrl = url
      if(curState === "Login") {
        newUrl += "/api/user/login"
      }
      else {
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl, data)

      if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
          setshowLogin(false)
      }
      else {
        alert(response.data.message)
      }
   }


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{curState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
            {curState === "Login"?<></>:<input name = 'name' onChange={onChangeHandler} value = {data.name} type="text" placeholder='Your Name' required/>}
            <input name = 'email' onChange={onChangeHandler} value = {data.email} type="email" placeholder='Your Email' required/>
            <input name = 'password' onChange={onChangeHandler} type="password" value={data.password} placeholder='Password' required/>
        </div>

        <button type='submit'>{curState === "Login" ? "Login" : "Create Account"}</button>
        
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        
        {curState === "Login" 
        ? <p>Create a new account? <span onClick={()=>setcurState("Sign Up")}>Click Here</span></p>
        : <p>Already have an account? <span onClick={()=>setcurState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  )
}


export default LoginPopup
