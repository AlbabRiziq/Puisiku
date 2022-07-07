import { Link } from "react-router-dom";
import KomenPng from "../assets/img/comment.png";

function Komen(props) {
  return (
    <div className="print:hidden print:bg-black">
      <button
        onClick={() => {
          alert("Untuk fitur komentar masih dalam pengembangan bang 😁");
        }}
      >
        <img src={KomenPng} className="h-8 mx-4" alt="" />
      </button>
    </div>
  );
}

export default Komen;
