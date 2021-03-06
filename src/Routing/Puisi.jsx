import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Copy from "../../src/assets/img/copy.png";
import Tambah from "../Components/Tambah";

function Puisi() {
  const [puisi, setPuisi] = useState("");
  const [author, setAuthor] = useState();
  const [judul, setJudul] = useState("");

  const id = useParams().id;
  useEffect(() => {
    axios.get(`http://localhost:8080/api/puisi/${id}`).then((res) => {
      console.log(res.data);
      setPuisi(res.data.puisi);
      setAuthor(res.data.author);
      setJudul(res.data.title);
    });
  });

  return (
    <main className="flex w-screen  p-3 flex-col max-w-3xl items-center justify-center">
      <div>
        <section className="flex w-full justify-between">
          <div>
            <h1 className="font-bold text-[#7F867B] text-xl">{judul}</h1>
            <p className="text-[#7F867B] text-xs mt-5">{author}</p>
          </div>
          <Tambah />
        </section>
        <article className="text-[#7F867B] font-light text-sm mt-10">
          <p className="leading-6 whitespace-pre-wrap">{puisi}</p>
        </article>
        <div className="flex items-center">
          <div className="flex items-center print:hidden">
            <img src={Copy} alt="Salin link" className="h-10" />
            <button
              onClick={() => {
                window.print();
              }}
              className="bg-[#E3E4E0] p-2 px-5 rounded-md text-xs my-10 print:hidden text-[#7F867B]"
            >
              PRINT PDF
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Puisi;
