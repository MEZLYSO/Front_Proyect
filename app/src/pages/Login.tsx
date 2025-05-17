import useLogin from "../hooks/useLogin"

function Login() {

  const { createToken } = useLogin()

  return (
    <>
      <div className="bg-blue-400 w-full h-screen flex justify-center items-center">
        <div className="bg-white p-10 shadow-2xl rounded-2xl">
          <form onSubmit={createToken} className="flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input className="bg-green-400 rounded-2xl" type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
