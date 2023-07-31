import "@/styles/globals.css"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import NextAuthSessionProvider from "@/providers/sessionProvider"
import { getServerSession } from "next-auth"

import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { MainNav } from "@/components/main-nav"
import { dashboardConfig } from "@/config/dashboard"
import { SiteFooter } from "@/components/site-footer"
import ButtonLogout from "./components/ButtonLogout"
import { docsConfig } from "@/config/docs"

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
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <MainNav items={docsConfig.mainNav}>
                <DocsSidebarNav items={docsConfig.sidebarNav} />
              </MainNav>
              <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                <div className="flex-1 sm:grow-0">
                  <ButtonLogout></ButtonLogout>
                </div>

              </div>
            </div>
          </header>
          <div className="container flex-1">{children}</div>
          <SiteFooter className="border-t" />
        </div>
      </NextAuthSessionProvider>
    </>
  )
}
