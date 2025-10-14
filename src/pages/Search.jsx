import React from 'react'
import SignIn from '../components/SignInAllPages/SignIn'
import Register from '../components/SignInAllPages/Register'
import ForgetPassword from '../components/SignInAllPages/ForgetPassword'
import OTP from '../components/SignInAllPages/OTP'

const Search = () => {
  return (
    <div>
      <SignIn/>
      <Register/>
      <ForgetPassword/>
      <OTP/>
    </div>
  )
}

export default Search