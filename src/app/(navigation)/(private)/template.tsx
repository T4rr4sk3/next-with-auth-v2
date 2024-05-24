import RedirectForLogin from "@/components/auth/RedirectForLogin"
import { auth } from "@/lib/auth"
import { LayoutProps } from "@/types/props/LayoutProps"

export default async function PrivateTemplate(props: LayoutProps) {
  //console.log("Loading private template...")

  const session = await auth()

  if(!session) {
    const willRedirect = process.env.AUTH_REDIRECT_ON_SESSION_ERROR === "true"

    //if(willRedirect) redirect('/login?callbackUrl=/profile') // signIn()

    return (
      <div>
        <h1> Entre no sistema para acessar esta funcionalidade. </h1>

        {willRedirect && <RedirectForLogin />}
      </div>
    )
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