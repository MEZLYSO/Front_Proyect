import { useEffect, useState } from "react"

const useUser = () => {

  const [user, setUser] = useState({ name: "" })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null)
  }, [])

  return { user }

}

export default useUser
