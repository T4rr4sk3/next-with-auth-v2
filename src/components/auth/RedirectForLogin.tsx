'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RedirectForLogin({ callbackUrl }: { callbackUrl?: string }) {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/login?callbackUrl=' + encodeURIComponent(callbackUrl || path))
      router.refresh()
    }, 500)

    return () => { clearTimeout(timeout) }
  }, [callbackUrl, path, router])

  return <h1> Redirecting for login... </h1>
}