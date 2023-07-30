"use client"

import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export default function ButtonLogout() {
  const router = useRouter()

  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace("/")
  }

  return (
    <Button onClick={logout} variant={"outline"}>
      Logout
    </Button>
  )
}
