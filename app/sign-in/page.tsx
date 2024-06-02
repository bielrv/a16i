import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to A16i</h1>
        <p className="text-lg">Your personal mentor for personal and profesional growth.</p>
      </div>
      <LoginButton />
    </div>
  )
}
