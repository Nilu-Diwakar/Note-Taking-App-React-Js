import React from 'react'
import Header from "../components/Header"
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
      <NavBar />
    </div>
  )
}

export default RootLayout
