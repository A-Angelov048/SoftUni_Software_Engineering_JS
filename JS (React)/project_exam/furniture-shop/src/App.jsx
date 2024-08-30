
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
import Details from "./feature-components/details/Details"
import Edit from "./user-components/edit-furniture/Edit"
import { ContextProvider } from "./context/AuthContext"
import { FurnitureContextProvider } from "./context/FurnitureContext"
import GuestGuard from "./shared-components/guards/GuestGuard"
import AuthGuard from "./shared-components/guards/AuthGuard"



function App() {

  return (

    <ContextProvider>

      <Introduction />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />

        <Route element={<AuthGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<GuestGuard />}>
          <Route path="/create-offer" element={<CreateOffer />} />
        </Route>

        <Route element={<FurnitureContextProvider />}>
          <Route path="/details-furniture/:furnitureId" element={<Details />} />
          <Route element={<GuestGuard />}>
            <Route path="/edit-furniture/:furnitureId" element={<Edit />} />
          </Route>
        </Route>

        <Route path="/profile/:profileId" element={<Profile />} >
          <Route path="my-furniture" element={<BrandContainer />} />
          <Route path="wishlist" element={<BrandContainer />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sales" element={<BrandContainer />} />
        </Route >

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </ContextProvider>

  )
}

export default App
