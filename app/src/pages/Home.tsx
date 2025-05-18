import { useState, useEffect } from "react"

function Home() {

  const [user, setUser] = useState({ name: "" })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null)
  }, [])

  return (
    <>
      <div className=" px-2 py-1 w-full flex justify-between items-center fixed">
        <div className="flex justify-between items-center w-full bg-indigo-100 border-2 border-solid rounded-3xl p-2">
          <h1 className="sm:text-3xl font-bold text-2xl">Welcome {user.name}</h1>
          <a href="/profile">Profile</a>
        </div>
      </div>
      <div className="bg-indigo-700 h-full flex flex-col items-center gap-2 sm:pt-16 pt-14 pb-5 w-dvw pl-5 pr-5">
        <div className="bg-indigo-100 w-full px-2 rounded py-5 h-50">
          DIV
        </div>
        <div className="bg-indigo-100 w-full px-2 rounded py-5 h-200">
          DIV
        </div>
        <div className="bg-indigo-100 w-full px-2 rounded py-5 h-200">
          DIV
        </div>
      </div>
    </>
  )
}

export default Home
