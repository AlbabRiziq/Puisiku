import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex w-screen items-center flex-col py-10 md:scale-125 md:mt-10">
      <h1 className="text-[#7F867B] font-extrabold text-3xl">PUISIKU</h1>
      <form className="mt-10" autoComplete="off">
        <h1 className="text-[#7F867B] font-bold mt-10 text-xl text-center">
          LOGIN
        </h1>

        <br />
        <label htmlFor="noWa" className="text-[#7F867B] font-semibold">
          NO HP (Whatsapp) <br />{" "}
          <span className="text-xs">ex : 62812345678901</span>
        </label>
        <br />
        <input
          type="number"
          name="noWa"
          id="noWa"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none "
        />
        <br />
        <br />
        <label htmlFor="password" className="text-[#7F867B] font-semibold">
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none "
        />
        <br />
        <button className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10">
          LOGIN
        </button>
        <p className="text-[#7F867B] text-xs">
          Belum punya akun?{" "}
          <Link to={"/signup"} className="text-blue-500 font-semibold">
            DAFTAR
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
