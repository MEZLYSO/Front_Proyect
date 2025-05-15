import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import { PublicPages } from "./models/pages"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path={PublicPages.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
