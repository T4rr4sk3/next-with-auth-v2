"use client"

import { login } from "@/actions/login"

//import { signIn } from "@/lib/auth"

//import { signIn } from "next-auth/react"

/** Botão de login pelo "client"
 * @deprecated Não está funcionando bem
*/
export default function LoginButton() {
//action={login}
  return(
    <form action={() => login()}>
      <button className="font-medium px-4 py-2 bg-slate-600">
        Login
      </button>
    </form>
  )
}