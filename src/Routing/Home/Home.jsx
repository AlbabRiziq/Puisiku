import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../../assets/img/share.png";
import Copy from "../../assets/img/copy.png";
import Setup from "../../config";

function Home(props) {
  const [puisi, setPuisi] = useState("");
  const [author, setAuthor] = useState();
  const [judul, setJudul] = useState("");
  const [indexPuisi, setIndexPuisi] = useState();
  const [toggleShare, setToggleShare] = useState(true);

  useEffect(() => {
    axios.get(`${Setup.apiEndoint}/puisi/acak`).then((res) => {
      console.log(res.data);
      setPuisi(res.data.data.puisi);
      setAuthor(res.data.data.author);
      setJudul(res.data.data.title);
      setIndexPuisi(res.data.index);
      console.log(res.data);
    });
  }, []);
  const getPuisi = () => {
    axios.get(`${Setup.apiEndoint}/puisi/acak`).then((res) => {
      console.log(res.data);
      setPuisi(res.data.data.puisi);
      setAuthor(res.data.data.author);
      setJudul(res.data.data.title);
    });
  };

  return (
    <article className="flex w-screen p-3 flex-col max-w-3xl  ">
      <section className="flex w-full justify-between">
        <div>
          <h1 className="font-bold text-[#7F867B] text-xl">{judul}</h1>
          <p className="text-[#7F867B] text-xs mt-5">{author}</p>
        </div>
      </section>
      <main className="text-[#7F867B] font-light text-sm mt-10">
        <p className="leading-6 whitespace-pre-wrap">{puisi}</p>
      </main>
      <div className="flex items-center">
        <button
          onClick={getPuisi}
          className="bg-[#E3E4E0] text-xs p-2 px-5 rounded-md my-10 print:hidden text-[#7F867B]"
        >
          ACAK
        </button>
        <button
          onClick={() => {
            setToggleShare(!toggleShare);
          }}
        >
          <img src={Share} className="h-7 mx-5 print:hidden" alt="" />
        </button>
        {!toggleShare && (
          <div className="flex items-center print:hidden">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `localhost:3001/puisi/${indexPuisi}`
                );
              }}
            >
              <img src={Copy} alt="Salin link" className="h-10" />
            </button>
            <button
              onClick={() => {
                window.print();
              }}
              className="bg-[#E3E4E0] p-2 px-5 rounded-md text-xs my-10 print:hidden text-[#7F867B]"
            >
              PRINT PDF
            </button>
          </div>
        )}
        <div></div>
      </div>
    </article>
  );
}

export default Home;
