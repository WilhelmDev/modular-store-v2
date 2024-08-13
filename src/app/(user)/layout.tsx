import UserSidebar from '@/components/common/sidebars/User'
import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function LayoutUser({ children }: Props) {
  return (
    <main className='container flex flex-col md:flex-row'>
      <div className='flex flex-col md:flex-row'>
        <aside>
          <UserSidebar />
        </aside>
        <main>
          {children}
        </main>
      </div>
      <footer>
        <p>🔥🔥 2024 Modular Store v2. Todos los derechos reservados. 🔥🔥</p>
      </footer>
    </main>
  )
}
