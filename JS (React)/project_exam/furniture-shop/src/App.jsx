
import { Route, Routes } from "react-router-dom"
import Introduction from "./feature-components/introduction/Introduction"
import Footer from "./core-components/footer/Footer"
import Home from "./feature-components/home/Home"
import Login from "./user-components/login/Login"



function App() {

  return (
    <>

      <Introduction />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
