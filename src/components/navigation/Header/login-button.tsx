"use client"

import { signIn } from "next-auth/react"

export default function NavigationHeaderLoginButton() {
  const handleSignin = () => {
    signIn(undefined)//"coppetec", { callbackUrl: "/inicio" })
  }

  return(
    // <form action={handleSignin}>
      <button onClick={handleSignin}>
        Login
      </button>
    // </form>
  )
}