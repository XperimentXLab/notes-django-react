import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import Register from './pages/Register'
import ProtectedRouted from "./components/ProtectedRoute"
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Layout from "./components/Layout"

function App() {

  function Logout() {
    localStorage.clear()
    return <Navigate to='/login' />
  }

  function RegisterAndLogout () {
    localStorage.clear()
    return <Register />
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>

      <Route path="/" element={
        <ProtectedRouted>
          <Home />
        </ProtectedRouted>
      } />

      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />

    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
