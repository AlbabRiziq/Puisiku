function SignUp() {
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
          type="password"
          name="password"
          id="password"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
        <br />
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
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
        <br />
        <button className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10">
          DAFTAR
        </button>
      </form>
    </div>
  );
}

export default SignUp;
