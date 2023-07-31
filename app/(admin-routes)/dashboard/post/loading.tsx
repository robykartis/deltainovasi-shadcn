import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    </DashboardShell>
  )
}
