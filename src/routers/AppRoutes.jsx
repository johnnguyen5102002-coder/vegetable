import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import Login from "../features/auth/Login"
import Register from "../features/auth/Register"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes
