import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
  )
}