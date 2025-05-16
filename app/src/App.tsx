import { BrowserRouter, Routes, Route } from "react-router-dom"
import useForm from "./hooks/useForm"
import Login from "./pages/Login"

function App() {

  const { user, changeName } = useForm()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login changeName={changeName} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
