import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return <SignIn redirectUrl="/brandlist" />
}

export default SignInPage
