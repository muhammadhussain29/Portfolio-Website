import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-linear-to-r from-primary to-black'>
        {children}
    </div>
  )
}

export default layout