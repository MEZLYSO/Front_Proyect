import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()
  const from = "/"

  const [user, setUser] = useState({})

  const deleteToken = () => {
    localStorage.clear()
    navigate(from, { replace: true })
  }

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null)
  }, [])

  return (
    <>
      <h1>Welcome {user.name}</h1>
      <button onClick={deleteToken}>Close Session</button>
    </>
  )
}

export default Home
