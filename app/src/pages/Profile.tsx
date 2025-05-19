import useUser from "../hooks/useUser"
import useSession from "../hooks/useSession"

function Profile() {

  const { deleteToken } = useSession()
  const { user } = useUser()

  return (
    <>
      <div className="bg-gray-800 h-dvh flex flex-col items-center gap-2 w-dvw pl-5 pr-5">
        <div className="w-full flex justify-between items-center fixed max-w-sm">
          <div className="p-5 flex justify-between items-center w-full bg-gray-800">
            <h1 className="text-white sm:text-3xl font-bold text-2xl">Settings</h1>
            <a className="text-white text-xl" href="/home"><i className="fa-solid fa-house"></i></a>
          </div>
        </div>
        <div className="bg-white w-full px-2 rounded py-5 mt-20 max-w-sm">
          <h3>Your info</h3>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
        <div className="w-full sm:w-xl max-w-sm">
          <button className="bg-red-500 w-full text-white py-4 rounded-2xl" onClick={deleteToken}>Cerrar sesion <i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
      </div>
    </>
  )
}

export default Profile
