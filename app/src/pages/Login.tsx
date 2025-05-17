import { Navigate } from "react-router-dom"
import useSession from "../hooks/useSession"

function Login() {

  const { createToken, handleChange, validate } = useSession()

  return (
    <>
      <div className="bg-blue-400 w-full h-screen flex justify-center items-center">
        <div className="bg-white p-10 shadow-2xl rounded-2xl">
          <form onSubmit={createToken} className="flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <input onChange={handleChange} id="email" type="text" placeholder="email" />
            <input onChange={handleChange} id="password" type="password" placeholder="password" />
            <input className="bg-green-400 rounded-2xl" type="submit" value="Login" />

            {validate ? (
              <div className="bg-red-400 text-white">Error en los datos verifica <br /> que esten correctos</div>
            ) : (<></>)}
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
