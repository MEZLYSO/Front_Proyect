import axios from 'axios'
import { useState } from "react"

function Login() {
  const [userLogin, setUserLogin] = useState({ name: "", password: "" })
  const [submit, setSubmit] = useState({ name: "", password: "" })

  const onChangeInput = (e: any) => {
    setUserLogin({
      ...userLogin,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const baseUrl = "http://localhost:3000"
    console.log(`${baseUrl}/${userLogin.name}`)
    axios.get(baseUrl + `/${userLogin.name}`).then((response: any) => setSubmit(response.data))
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            {submit.id ? <h1>"Existe"</h1> : <h1>"No existe"</h1>}
            <input id="name" onChange={onChangeInput} type="text" placeholder="Username" />
            <input id="password" onChange={onChangeInput} type="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
