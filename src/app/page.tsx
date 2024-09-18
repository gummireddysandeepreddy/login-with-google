import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { LoginButton, LogoutButton } from "../components/auth-buttons"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {session ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
          <p className="mb-4">You are logged in.</p>
          <LogoutButton />
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
          <p className="mb-4">Please sign in to continue.</p>
          <LoginButton />
        </>
      )}
    </div>
  )
}