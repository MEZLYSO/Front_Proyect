import { useState } from "react"
import type { User } from "../types"

const useForm = () => {

  const initialState: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }

  const [user, setUser] = useState<User>(initialState)

  const changeName = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  return { user, changeName }
}

export default useForm
