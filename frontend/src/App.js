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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
