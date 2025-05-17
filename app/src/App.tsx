import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthGuard from "./guards/AuthGuard"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
