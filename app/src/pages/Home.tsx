import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()
  const from = "/"

  const deleteToken = () => {
    localStorage.clear()
    navigate(from, { replace: true })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={deleteToken}>Close Session</button>
    </>
  )
}

export default Home
