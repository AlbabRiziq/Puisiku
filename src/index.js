import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./Routing/SignUp/SignUp";
import Puisi from "./Routing/Puisi";
import Login from "./Routing/Login/Login";
import Home from "./Routing/Home/Home";
import Create from "./Routing/Create/Create";
import Kiriman from "./Routing/Kiriman/Kiriman";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/puisi" element={<Puisi />}>
          <Route path=":id" element={<Puisi />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tamu" element={<Home />} />
        <Route path="/tambah" element={<Create />} />
        <Route path="/kiriman" element={<Kiriman />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
