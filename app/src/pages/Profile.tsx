import useUser from "../hooks/useUser"
import useSession from "../hooks/useSession"

function Profile() {

  const { deleteToken } = useSession()
  const { user } = useUser()

  return (
    <>
      <div className="w-full flex justify-between items-center fixed">
        <div className="p-5 flex justify-between items-center w-full bg-gray-800">
          <h1 className="text-white sm:text-3xl font-bold text-2xl">Perfil</h1>
          <a className="text-white text-xl" href="/home"><i className="fa-solid fa-house"></i></a>
        </div>
      </div>
      <div className="bg-gray-800 h-dvh flex flex-col items-center gap-2 w-dvw pl-5 pr-5">
        <div className="bg-white w-full px-2 rounded py-5 mt-20 max-w-sm">
          <h3 className="text-center text-2xl font-bold">Tu informacion</h3>
          <form className="px-3 flex flex-col gap-2">
            <label className="font-semibold">Nombre:</label>
            <input className="border-b-2" value={user.name} type="text" />
            <label className="font-semibold">Primer Apellido:</label>
            <input className="border-b-2" value={user.surname1} type="text" />
            <label className="font-semibold">Segundo Apellido:</label>
            <input className="border-b-2" value={user.surname2} type="text" />
            <label className="font-semibold">Email:</label>
            <input className="border-b-2" value={user.email} type="email" />
            <label className="font-semibold">Numero Telefonico:</label>
            <input className="border-b-2" value={user.number} type="tel" />
            <div className="flex justify-center gap-2">
              <button
                className="font-semibold text-base px-5 py-3 rounded-4xl bg-blue-600 text-white"
              ><i className="fa-solid fa-rotate-right"></i> Refrescar</button>
              <button
                className="font-semibold text-base px-5 py-3 rounded-4xl bg-green-600 text-white"
              > <i className="fa-solid fa-floppy-disk"></i> Guardar cambios</button>
            </div>
          </form>
        </div>
        <div className="w-full sm:w-xl max-w-sm flex flex-col gap-2 justify-center">
          <button className="bg-red-500 w-full text-white py-4 rounded-2xl" onClick={deleteToken}><i className="fa-solid fa-trash-can"></i> Eliminar cuenta</button>
          <button
            className="bg-red-500 w-full text-white py-4 rounded-2xl"
            onClick={deleteToken}>
            <i className="fa-solid fa-right-from-bracket mr-1"></i>
            Cerrar sesion
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile
