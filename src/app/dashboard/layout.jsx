import { DashboardHeader } from '../dashboard/components/header'

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}
