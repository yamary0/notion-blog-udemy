import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import { LayoutOptions } from 'react-markdown/lib/react-markdown'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout