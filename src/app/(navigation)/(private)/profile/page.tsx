import { auth } from "@/lib/auth"

export default async function ProfilePage() {
  const user = await auth()

  return(
    <h1> PROFILE PAGE FOR {user?.user?.name} </h1>
  )
}