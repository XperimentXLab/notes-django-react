import { Link, Outlet } from "react-router-dom"

function Layout () {
  return (
    <>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/logout">Logout</Link>
        <Link className="nav-link" to="/register">Register</Link>
      </nav>
      <Outlet />

    </>
  )
}


export default Layout