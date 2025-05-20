function NotFoundPage() {
  return (
    <div className="bg-red-400 flex justify-center items-center w-full h-screen flex-col">
      <h1 className="font-bold text-white text-3xl animate-bounce "><i class="fa-solid fa-circle-exclamation"></i> Pagina no encontrada</h1>
      <a className="mt-5 text-white text-2xl rounded-4xl bg-black px-6 py-3" href="/">Volver <i className="fa-solid fa-arrow-right"></i></a>
    </div>
  )
}

export default NotFoundPage
