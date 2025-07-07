"use client";
import { Header } from '@/components'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header onCreateAccount={()=> {}} onLogin={()=> {}} onLogout={() => {}}/>
      {children}
    </>
  )
}
