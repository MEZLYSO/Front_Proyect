import { Navigate, Outlet } from "react-router-dom"

function AuthGuard() {
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate replace to="/" />
}

export default AuthGuard
