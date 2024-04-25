import { auth } from "@/lib/auth"
import { LayoutProps } from "@/types/props/LayoutProps"
import { redirect } from "next/navigation"

export default async function PrivateTemplate(props: LayoutProps) {
  console.log("Loading private template...")

  const session = await auth()

  if(!session) {
    if(process.env.AUTH_REDIRECT_ON_SESSION_ERROR === "true") redirect("/not-permitted")

    return <h1> Entre no sistema para acessar esta funcionalidade. </h1>
  }

  return(
    <div>
      <div>
        <h2> Layout privado </h2>
      </div>

      {props.children}
    </div>
  )
}