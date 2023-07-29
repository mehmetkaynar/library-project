import React from "react";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* PrivateRouter ile sunu yaptim. About ve Detail sayfasina gittigimde direk beni logine yonlendirdim.Giris yapmadan about ve detail sayfasina kullanicinn girmesine izin vermedim */}
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>

        {/* Yukaridaki icin 2. alternatif yol asagida yazdim kosul ayni old. icin kisa kod. */}
        {/* <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
