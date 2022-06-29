import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Setup from "../../config";

function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [namaLengkap, setNamaLengkap] = useState();

  /// Development (Nek arep production kudu dihapus bre, elingggg!!!!!!!!)

  useEffect(() => {
    console.log(username);
    console.log(password);
    console.log(namaLengkap);
  }, [namaLengkap, password, username]);

  /////////////

  const register = () => {
    if (
      username === undefined ||
      password === undefined ||
      namaLengkap === undefined
    ) {
      alert("HARUS DIISI SEMUA YA BANG");
    } else {
      axios({
        url: `${Setup.apiEndoint}/register`,
        method: "POST",
        params: {
          username: username,
          password: password,
          namaLengkap: namaLengkap,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <div className="flex w-screen items-center flex-col py-10 md:scale-125 md:mt-20">
      <h1 className="text-[#7F867B] font-extrabold text-3xl">PUISIKU</h1>
      <form className="mt-10" autoComplete="off">
        <h1 className="text-[#7F867B] font-bold mt-10 text-xl text-center">
          SIGN UP
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
          required
          type="text"
          name="username"
          id="username"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
        <br />
        <br />
        <label htmlFor="nama" className="text-[#7F867B] font-semibold">
          NAMA LENGKAP
        </label>
        <br />
        <input
          onChange={(e) => {
            setNamaLengkap(e.target.value);
          }}
          required
          type="text"
          name="nama"
          id="nama"
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
          required
          type="password"
          name="password"
          id="password"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />

        <br />
        <button
          type="submit"
          className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10"
          onClick={register}
        >
          DAFTAR
        </button>
        <p className="text-[#7F867B] text-xs text-left">
          Sudah punya akun? akun?{" "}
          <Link to={"/login"} className="text-blue-500 font-semibold">
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
