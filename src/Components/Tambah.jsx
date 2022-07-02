import { Link } from "react-router-dom";
import createPng from "../assets/img/create.png";

function Tambah() {
  return (
    <div className="print:hidden">
      <Link to="/tambah" className="fixed right-5">
        <img
          src={createPng}
          className="h-5 m-1"
          alt="Buat puisi"
          title="Buat puisi"
        />
      </Link>
    </div>
  );
}

export default Tambah;
