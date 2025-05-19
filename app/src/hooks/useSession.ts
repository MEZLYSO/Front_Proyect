import { useNavigate } from "react-router-dom"
import { PrivatePages } from "../types/pages"
import fetchData from "../services/fetchData"
import { useState } from "react"

const useSession = () => {

  const [validate, setValidate] = useState(false)
  const [valueForm, setValueForm] = useState({
    email: "",
    password: ""
  })
  const { fetchUser } = fetchData()
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    setValueForm({
      ...valueForm,
      [e.target.id]: e.target.value,
    })
  }


  const from = "/"

  const deleteToken = () => {
    localStorage.clear()
    navigate(from, { replace: true })
  }

  const createToken = async (e: any) => {
    e.preventDefault()
    const user = await fetchUser(valueForm.email)
    if (user && user.email === valueForm.email && user.password === valueForm.password) {
      localStorage.setItem("token", JSON.stringify(user.token))
      localStorage.setItem("user", JSON.stringify(user))
      navigate(PrivatePages.HOME, { replace: true })
    } else {
      setValidate(true)
    }
  }

  return { createToken, deleteToken, handleChange, validate }
}

export default useSession

