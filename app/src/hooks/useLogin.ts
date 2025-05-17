import { useNavigate } from "react-router-dom"
import { PrivatePages } from "../types/pages"

const useLogin = () => {

  const navigate = useNavigate()

  const createToken = (e: any) => {
    e.preventDefault()
    localStorage.setItem("token", JSON.stringify("token"))
    navigate(PrivatePages.HOME, { replace: true })
  }

  return { createToken }
}

export default useLogin

