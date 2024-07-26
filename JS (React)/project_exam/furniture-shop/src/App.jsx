
import { Route, Routes } from "react-router-dom"
import Introduction from "./feature-components/introduction/Introduction"
import Footer from "./core-components/footer/Footer"
import Home from "./feature-components/home/Home"
import Login from "./user-components/login/Login"
import Register from "./user-components/register/Register"
import CreateOffer from "./user-components/create-offer/CreateOffer"
import Shop from "./feature-components/shop/Shop"
import Search from "./feature-components/search/Search"
import Profile from "./user-components/profile/Profile"
import Settings from "./user-components/profile/settings/Settings"
import BrandContainer from "./shared-components/brand-container/BrandContainer"
import NotFound from "./core-components/not-found/NotFound"



function App() {

  return (
    <>

      <Introduction />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-offer" element={<CreateOffer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} >
          <Route path="my-furniture" element={<BrandContainer />} />
          <Route path="whish-list" element={<BrandContainer />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sales" element={<BrandContainer />} />
        </Route >
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
