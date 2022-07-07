import Komentarnya from "./Komentarnya";

function Komentar() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed z-50 bottom-0 w-full bg-[#7F867B] p-10 h-96 overflow-scroll">
      {/* Buatkan box komentar */}
      <form onsubmit="return false">
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            class="block  p-4 pl-10 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:border-blue-500"
            placeholder="Tulis komentar"
          />
          <button
            onClick={onSubmit}
            n
            type="button"
            class="text-white absolute right-2.5 bottom-2.5 bg-[#7F867B] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Kirim
          </button>
        </div>
      </form>
      <Komentarnya />
    </div>
  );
}

export default Komentar;
