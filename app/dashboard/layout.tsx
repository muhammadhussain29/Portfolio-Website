"use client";

import React, { useState } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

const Layout = ({children}: {children: React.ReactNode}) => {

  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  
  return (
    <div className='min-h-screen w-full flex'>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <main className='flex-1 max-w-screen'>
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className='px-6 py-4 md:px-10 md:py-6 bg-background-light text-slate-900'>
                {children}
        </div>
        </main>
    </div>
  )
}

export default Layout