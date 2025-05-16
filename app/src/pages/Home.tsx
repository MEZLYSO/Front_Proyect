import useForm from "../hooks/useForm"

function Home() {

  const { user } = useForm()

  return (
    <>
      <h1>{user.name}</h1>
    </>

  )
}

export default Home
