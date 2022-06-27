function Verifikasi() {
  return (
    <div className="flex w-screen items-center flex-col py-10 md:scale-125 md:mt-10">
      <h1 className="text-[#7F867B] font-extrabold text-3xl">PUISIKU</h1>
      <form className="mt-10" autoComplete="off">
        <h1 className="text-[#7F867B] font-bold mt-10 text-xl text-center">
          LOGIN
        </h1>

        <br />
        <label
          htmlFor="kode"
          className="text-[#7F867B] font-light text-[10px] text-center"
        >
          <p className="w-60">
            MASUKAN KODE VERIFIKASI YANG TELAH DIKIRIM KE NOMOR WHATSAPP KAMU
          </p>
        </label>
        <br />
        <input
          type="text"
          name="kode"
          id="kode"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none "
        />

        <br />
        <button className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10">OKE</button>
      </form>
    </div>
  );
}

export default Verifikasi;
