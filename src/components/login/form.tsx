"use client"

import { login } from "@/actions/login"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"


export default function LoginForm({ id }: { id: string }) {
  const params = useSearchParams()
  const router = useRouter()

  async function action(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const f = new FormData(e.currentTarget)

    try{
      const error = await login(f)

      const callback = error?.digest?.split(";")[2]

      if(!!error?.code) return

      const url = params.get("callbackUrl") || callback || "/inicio"

      router.push(url)

    } catch(r: any) {
      console.log(JSON.stringify(r, null, 2))
    }

  }

  return(
    <form id={id} onSubmit={action} className="grid grid-flow-row gap-y-4">
      <input name="username" placeholder="username..." />

      <label htmlFor="login"> Test </label>

      <input name="login" placeholder="login..." />

      {/* <input hidden type="hidden" name="csrfToken" value={crsfToken || token} /> */}
      <input name="password" placeholder="password..." type="password" />
      <button> teste </button>
    </form>
  )
}