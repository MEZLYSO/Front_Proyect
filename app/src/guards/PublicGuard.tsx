import { Navigate, Outlet } from "react-router-dom"

function PublicGuard() {
  const token = localStorage.getItem("token")
  return !token ? <Outlet /> : <Navigate replace to="/home" />
}

export default PublicGuard
