import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Setup from "./config";
import Home from "./Routing/Home/Home";
import Login from "./Routing/Login/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      url: `${Setup.apiEndoint}/login`,
      method: "POST",
      params: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      },
    })
      .then((res) => {
        if (res.data.message === true) {
          setIsLogin(true);
        }
      })
      .finally(() => {
        setTimeout(() => {
          //// Ngko ngger wis production hapus bang, aja kelalen
          setIsLoading(false);
        }, 1000);
      });

    // console.log(isLoading);
  });

  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App flex items-center justify-center ">
      {isLogin ? <Home /> : <Login />}
    </div>
  );
}

export default App;
