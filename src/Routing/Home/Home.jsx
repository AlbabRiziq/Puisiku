import { useEffect, useState } from "react";
import axios from "axios";
import Share from "../../assets/img/share.png";
import Copy from "../../assets/img/copy.png";
import Setup from "../../config";
import Tambah from "../../Components/Tambah";
import Komentar from "../../Components/Komentar/Komentar";
import Komen from "../../Components/Komen";
import parse from "html-react-parser";

function Home(props) {
  const [puisi, setPuisi] = useState("");
  const [author, setAuthor] = useState();
  const [judul, setJudul] = useState("");
  const [indexPuisi, setIndexPuisi] = useState();
  const [toggleShare, setToggleShare] = useState(true);

  useEffect(() => {
    const getKirimanPuisi = async () => {
      const res = await axios.get(`${Setup.apiEndoint}/kirimann/acak`);
      console.log(await res.data);
      // setPanjang(await res.data.length);
      setPuisi(await res.data.puisi);
      setAuthor(await res.data.author);
      setJudul(await res.data.title);
      setIndexPuisi(await res.data.length);
    };
    getKirimanPuisi();
    // console.log(panjang);
  }, []);
  const getPuisi = () => {
    const getKirimanPuisi = async () => {
      const res = await axios.get(`${Setup.apiEndoint}/kirimann/acak`);
      console.log(await res.data);
      // setPanjang(await res.data.length);
      setPuisi(await res.data.puisi);
      setAuthor(await res.data.author);
      setJudul(await res.data.title);
      setIndexPuisi(await res.data.length);
    };
    getKirimanPuisi();
    console.log(indexPuisi);
  };

  return (
    <div className="w-screen ">
      <article className="flex p-3 flex-col max-w-3xl  ">
        <section className="flex w-full justify-between">
          <div>
            <h1 className="font-bold text-[#7F867B] text-lg">{judul}</h1>
            <p className="text-[#7F867B] text-xs mt-5">{author}</p>
          </div>
          <Tambah />
        </section>
        <main className="text-[#7F867B] font-light text-sm mt-10">
          <p className="leading-6 whitespace-pre-wrap">{parse(puisi)}</p>
        </main>
        <div className="flex items-center">
          <button
            onClick={getPuisi}
            className="bg-[#E3E4E0] text-xs p-2 px-5 rounded-md my-10 print:hidden text-[#7F867B]"
          >
            ACAK
          </button>
          <Komen />
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
      {/* <Komentar /> */}
    </div>
  );
}

export default Home;
