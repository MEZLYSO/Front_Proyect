import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Profile() {

  const navigate = useNavigate()
  const from = "/"


  const deleteToken = () => {
    localStorage.clear()
    navigate(from, { replace: true })
  }


  const [user, setUser] = useState({ name: "" })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null)
  }, [])

  return (
    <>
      <div className="bg-indigo-700 h-dvh flex flex-col items-center gap-2 pt-5 w-dvw pl-5 pr-5">
        <div className="bg-indigo-100 p-2 rounded w-full flex justify-between items-center">
          <h1 className="sm:text-3xl font-bold text-2xl">Settings</h1>
          <a href="/home">Home</a>
        </div>
        <div className="bg-indigo-100 w-full px-2 rounded py-5">
          <h3>Your info</h3>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="w-full sm:w-xl">
          <button className="bg-red-500 w-full text-white px-8 py-6 rounded-2xl" onClick={deleteToken}>Close Session</button>
        </div>
      </div>
    </>
  )
}

export default Profile
