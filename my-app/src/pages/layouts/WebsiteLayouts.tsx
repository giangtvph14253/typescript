import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayouts = (props: Props) => {
  return (
    <div>
        <header>
            Header Admin
        </header>
        <aside>
            Menu Admin
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default WebsiteLayouts