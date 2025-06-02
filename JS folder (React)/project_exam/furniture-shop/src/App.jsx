import { Route, Routes } from "react-router-dom";

import { ErrorContextProvider } from "./context/ErrorContext";
import { ContextProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";

import Introduction from "./feature-components/introduction/Introduction";
import Footer from "./core-components/footer/Footer";
import Home from "./feature-components/home/Home";
import Login from "./user-components/login/Login";
import Register from "./user-components/register/Register";
import CreateOffer from "./user-components/create-offer/CreateOffer";
import Shop from "./feature-components/shop/Shop";
import Search from "./feature-components/search/Search";
import Profile from "./user-components/profile/Profile";
import NotFound from "./core-components/not-found/NotFound";
import Details from "./feature-components/details/Details";
import Edit from "./user-components/edit-furniture/Edit";
import GuestGuard from "./shared-components/guards/GuestGuard";
import AuthGuard from "./shared-components/guards/AuthGuard";
import ScrollToTop from "./shared-components/scroll-to-top/ScrollToTop";
import Basket from "./user-components/basket/Basket";
import AdminGuard from "./shared-components/guards/AdminGuard";
import RestrictAdminGuard from "./shared-components/guards/RestrictAdminGuard";
import Checkout from "./user-components/basket/checkout/Checkout";

function App() {
  return (
    <ErrorContextProvider>
      <ContextProvider>
        <BasketProvider>
          <Introduction />

          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/search" element={<Search />} />

              <Route element={<AuthGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<AdminGuard />}>
                <Route path="/create-offer/admin" element={<CreateOffer />} />
              </Route>

              <Route element={<GuestGuard />}>
                <Route path="/profile/:profileId" element={<Profile />} />
              </Route>

              <Route
                path="/details-furniture/:furnitureId"
                element={<Details />}
              />

              <Route element={<AdminGuard />}>
                <Route
                  path="/edit-furniture/:furnitureId/admin"
                  element={<Edit />}
                />
              </Route>

              <Route element={<RestrictAdminGuard />}>
                <Route path="/basket" element={<Basket />} />
                <Route element={<GuestGuard />}>
                  <Route path="/checkout" element={<Checkout />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>

          <Footer />
        </BasketProvider>
      </ContextProvider>
    </ErrorContextProvider>
  );
}

export default App;
