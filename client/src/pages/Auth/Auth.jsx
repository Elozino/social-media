import React from 'react'
import "./Auth.css"
import Logo from "../../assets/images/logo.png"

const Auth = () => {
  return (
    <div className='Auth'>
      <div className="Auth__left">
        <img src={Logo} alt="logo" />
        <div className="Auth__webname">
          <h1>SDK Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div >
  )
}

function SignUp() {
  return (
    <div className='Auth__right'>
      <form action="" className='infoForm'>
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder='First Name'
            className='infoInput' name="firstName"
          />
          <input type="text" placeholder='Last Name'
            className='infoInput' name="lastName"
          />
        </div>
        <div>
          <input type="text" className="infoInput" name='username' placeholder='Username' />
        </div>
        <div>
          <input type="password" className="infoInput" name="password" placeholder='Password' />
          <input type="password" className="infoInput" name="confirm-password" placeholder='Confirm Password' />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Already have an account? Login!</span>
        </div>
        <button className='Auth__btn'>
          Signup
        </button>
      </form>
    </div>
  )
}


function Login() {
  return (
    <div className='Auth__right login'>
      <form action="" className='infoForm login1'>
        <h3>Login</h3>
        <div>
          <input type="text" className="infoInput" name='username' placeholder='Username' />
        </div>
        <div>
          <input type="password" className="infoInput" name="password" placeholder='Password' />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account? Sign Up!</span>
        </div>
        <button className='Auth__btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Auth