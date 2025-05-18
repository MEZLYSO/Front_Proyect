import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()
  const from = "/"

  const [user, setUser] = useState({ name: "" })

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
      <div className="bg-indigo-700 h-dvh flex flex-col items-center gap-2 pt-5 w-dvw pl-5 pr-5">
        <div className="bg-indigo-100 px-10 py-2 rounded w-full flex justify-between items-center">
          <h2>Profile</h2>
          <h1 className="font-bold text-3xl">Welcome {user.name}</h1>
          <h2></h2>
        </div>
        <div className="bg-indigo-100 w-full px-2 rounded py-5">
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
        <div>
          <button className="bg-indigo-500 text-white px-8 py-6 rounded-2xl" onClick={deleteToken}>Close Session</button>
        </div>
      </div>
    </>
  )
}

export default Home
