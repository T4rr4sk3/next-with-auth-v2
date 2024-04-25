import { auth, signIn, signOut } from "@/lib/auth"
import NavigationHeaderLoginButton from "./login-button"

export default async function NavigationHeader() {
  const session = await auth()

  async function handleSignout() {
    "use server"
    return signOut()
  }

  async function handleSignin() {
    "use server"
    return signIn("coppetec", { })
  }

  return(
    <header className="w-full sticky top-0 left-0 flex items-center justify-between px-8 bg-slate-600 text-white">
      <div> ICON </div>
      <div>
        {session?.user ?
          <form action={handleSignout}>
            <button>
              Logout
            </button>
          </form>
          :
          // <div className="grid grid-cols-2 gap-x-4">
            <div className="flex items-center space-x-2">
              <span> Client: </span>
              <NavigationHeaderLoginButton />
            </div>

          //   <div className="flex items-center space-x-2">
          //     <span> Server: </span>
          //     <LoginButton />
          //   </div>
          // </div>
        }
      </div>
    </header>
  )
}