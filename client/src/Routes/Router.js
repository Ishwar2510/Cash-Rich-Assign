import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

import RegisterPage from "../pages/RegisterPage";

function Routerall() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="*"
          element={
            <h1 style={{ marginTop: "150px" }}>Pls enter a valid url</h1>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default Routerall;
