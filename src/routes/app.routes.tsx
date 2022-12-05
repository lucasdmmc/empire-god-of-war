import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}