import { useEffect, useState } from "react"
import type { User } from "../types/user"

const useUser = () => {

  const initialState = {
    name: "",
    surname1: "",
    surname2: "",
    email: "",
    number: ""
  }

  const [user, setUser] = useState<User>(initialState)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null)
  }, [])

  return { user }

}

export default useUser
