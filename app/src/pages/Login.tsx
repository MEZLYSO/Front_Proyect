import useSession from "../hooks/useSession"

function Login() {

  const { createToken, handleChange, validate } = useSession()

  return (
    <>
      <div className="bg-indigo-700 h-dvh flex justify-center items-center">
        <div className="bg-indigo-100 w-full max-w-xs m-auto rounded p-5">
          <form onSubmit={createToken} className="flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            {validate ? (
              <div className="bg-red-400 text-white rounded text-center animate-slide-in-left">Error en los datos verifica <br /> que esten correctos !!!</div>
            ) : (<></>)}
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" onChange={handleChange} id="email" type="text" placeholder="email" />
            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" onChange={handleChange} id="password" type="password" placeholder="password" />
            <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Login" />
            <footer>
              <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="/">Forgot Password?</a>
              <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="/singup">Create Account</a>
            </footer>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login
