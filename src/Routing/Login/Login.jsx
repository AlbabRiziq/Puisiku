import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Setup from "../../config";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [password, username]);

  const login = () => {
    axios({
      url: `${Setup.apiEndoint}/login`,
      method: "POST",
      params: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.message === true) {
          localStorage.setItem("username", res.data.data.username);
          localStorage.setItem("namaLengkap", res.data.data.namaLengkap);
          localStorage.setItem("password", res.data.data.password);
          window.location.href = `${Setup.baseUrl}/`;
        } else {
          window.location.href = `${Setup.baseUrl}/`;

          alert(
            "Username atau Password salah, silahkan coba lagi atau daftar terlebih dahulu"
          );
        }
        window.location.href = `${Setup.baseUrl}/`;
      })
      .catch((err) => {
        alert(
          "Ada yang error bang, coba cek username dan password atau jaringan ente dan coba lagi"
        );
      });
  };

  return (
    <div className="flex w-screen items-center flex-col py-10 md:scale-125 md:mt-20">
      <h1 className="text-[#7F867B] font-extrabold text-3xl">PUISIKU</h1>
      <form className="" autoComplete="off">
        <h1 className="text-[#7F867B] font-bold mt-10 text-xl text-center">
          LOGIN
        </h1>
        <br />

        <label htmlFor="username" className="text-[#7F867B] font-semibold">
          USERNAME
        </label>
        <br />
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name="username"
          id="username"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
        <br />
        <br />
        <label htmlFor="password" className="text-[#7F867B] font-semibold">
          PASSWORD
        </label>
        <br />

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          id="password"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
        <br />
        <button
          type="submit"
          onClick={login}
          className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10"
        >
          LOGIN
        </button>
        <p className="text-[#7F867B] text-xs">
          Belum punya akun?{" "}
          <Link to={"/signup"} className="text-blue-500 font-semibold">
            DAFTAR
          </Link>
        </p>
        <p className="text-[#7F867B] text-xs mt-1">
          Atau masuk menggunakan mode{" "}
          <Link to={"/tamu"} className="text-blue-500 font-semibold">
            TAMU
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
