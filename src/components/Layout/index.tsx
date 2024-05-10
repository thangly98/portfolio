import { Outlet } from 'react-router-dom'
import Menu from '@components/Layout/Menu'

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default Layout
