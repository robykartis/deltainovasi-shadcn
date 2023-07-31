import "@/styles/globals.css"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import NextAuthSessionProvider from "@/providers/sessionProvider"
import { getServerSession } from "next-auth"

import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { MainNav } from "@/components/main-nav"
import { dashboardConfig } from "@/config/dashboard"
import { DashboardNav } from "@/components/nav"
import { SiteFooter } from "@/components/site-footer"

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <>
      <NextAuthSessionProvider>
        <div className="flex min-h-screen flex-col space-y-6">
          <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <MainNav items={dashboardConfig.mainNav} />

            </div>
          </header>
          <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
            <aside className="hidden w-[200px] flex-col md:flex">
              <DashboardNav items={dashboardConfig.sidebarNav} />
            </aside>
            <main className="flex w-full flex-1 flex-col overflow-hidden">
              {children}
            </main>
          </div>
          <SiteFooter className="border-t" />
        </div>
      </NextAuthSessionProvider>
    </>
  )
}
