import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import Login from "../features/login/Login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes
