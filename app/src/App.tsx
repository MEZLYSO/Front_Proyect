import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthGuard from "./guards/AuthGuard"
import Login from "./pages/Login"
import Home from "./pages/Home"
import PublicGuard from "./guards/PublicGuard"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicGuard />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
