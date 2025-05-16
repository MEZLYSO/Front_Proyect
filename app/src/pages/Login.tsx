
function Login({ changeName }: any) {
  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center">
      <div className="bg-white w-sm h-auto py-4 rounded-2xl">
        <form className="flex flex-col items-center gap-5">
          <h1 className="text-3xl font-bold">Login</h1>
          <input className="border-b-2 outline-0" type="text" id="name" placeholder="Write your email" onChange={changeName} />
          <input className="border-b-2 outline-0" type="password" id="password" placeholder="Write your password" onChange={changeName} />
          <input className="bg-blue-500 text-white px-23 py-2 rounded-2xl text-xl hover:opacity-65" type="button" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
