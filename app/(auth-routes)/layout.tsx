import "@/styles/globals.css"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { nextAuthOptions } from "../api/auth/[...nextauth]/route"

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect("/dashboard")
  }

  return <div className="bg-slate-100">{children}</div>
}
