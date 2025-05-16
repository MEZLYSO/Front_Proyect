import { BrowserRouter, Routes, Route } from "react-router-dom"
import useForm from "./hooks/useForm"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  const { user, changeName } = useForm()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} changeName={changeName} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
