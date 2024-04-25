"use server"

import { signIn } from "@/lib/auth"

export async function login(formData?: FormData) {
  try {
    if(formData) {
      await signIn("coppetec", formData)//, [["csrfToken", (formData.get("csrfToken")?.toString() || "")]])
      return undefined //console.log("Login foi", r)
    }

    return signIn()

  } catch(r: any) {
    // Isto não está funcionando normalmente
    //if(r.message === "NEXT_REDIRECT") redirect("/", RedirectType.replace)

    const code: string | undefined = r.code
    const digest: string | undefined = r.digest || undefined

    return { code, digest }
  }

  // const formData = new FormData()

  // formData.append("login", "teste")

  // try {
  //   await signIn("coppetec")//, formData)

  //   console.log("FOI?")
  // } catch(r: unknown) {

  //   console.log(r)
  // }
}