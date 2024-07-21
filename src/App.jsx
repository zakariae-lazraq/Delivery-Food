import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import LoginPoppup from "./LoginPoppup/LoginPoppup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      {showLogin && <LoginPoppup setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
