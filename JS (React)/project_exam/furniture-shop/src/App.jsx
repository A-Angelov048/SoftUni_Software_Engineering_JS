
import { Route, Routes } from "react-router-dom"
import Footer from "./core-components/footer/Footer"
import Header from "./core-components/header/Header"
import Home from "./feature-components/home/Home"



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
