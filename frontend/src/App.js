import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import LogIn from "./auth_pages/LogIn";
import SignUp from "./auth_pages/SignUp";
import Main from "./auth_pages/Main";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./utils/PrivateRoutes";
import UserMain from "./user_pages/Main";
import VendorForm from "./user_pages/VendorForm";
import VendorProducts from "./user_pages/VendorProducts";
import Tshirts from "./NavBar_pages/Tshirts";
import Women from "./NavBar_pages/Women";
import Men from "./NavBar_pages/Men";
import About from "./NavBar_pages/About";
import Contact from "./NavBar_pages/Contact";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateRoutes />}>
            <Route path="/loggedInUser" element={<UserMain />} />
            <Route path="/vendorform" element={<VendorForm />} />
            <Route path="/vendorproducts" element={<VendorProducts />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/authmain" element={<Main />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
