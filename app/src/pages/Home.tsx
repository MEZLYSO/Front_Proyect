import useUser from "../hooks/useUser"

function Home() {

  const { user } = useUser()

  return (
    <div className="bg-gray-800 h-dvh">
      <div className="w-full flex justify-between items-center fixed">
        <div className="p-5 flex justify-between items-center w-full bg-gray-800">
          <h1 className="text-white sm:text-3xl font-bold text-2xl">{user.name}</h1>
          <a className="text-white text-xl" href="/profile"><i className="fa-solid fa-gear"></i></a>
        </div>
      </div>
      <div className="bg-gray-800 h-full flex flex-col items-center gap-2 sm:pt-20 pt-20 pb-5 w-dvw pl-5 pr-5">
        <div className="bg-white w-full px-2 rounded py-2 h-50">
          <div className="text-center">
            <h2 className="text-xl font-bold">Proximos eventos...</h2>
          </div>
          {/* Posible componente */}
          <div className="flex justify-center shadow rounded h-fit m-2">
            <p>Aun no tienes eventos</p>
          </div>
        </div>
        <div className="bg-white w-full px-2 rounded py-2 h-50">
          <div className="text-center">
            <h2 className="text-xl font-bold">Eventos disponibles</h2>
          </div>
        </div>
        <div className="bg-white w-full px-2 rounded py-2 h-50">
          <div className="text-center">
            <h2 className="text-xl font-bold">Eventos pasados</h2>
          </div>
          {/* Posible componente */}
          <div className="flex justify-center shadow rounded h-fit m-2">
            <p>Aun no tienes eventos</p>
          </div>

        </div>
        <div className="bg-white w-full px-2 rounded py-2 h-20 flex justify-center items-center">
          <h2 className="text-xl font-bold">Proximamente... <i className="fa-solid fa-person-digging animate-pulse"></i></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
