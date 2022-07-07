import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import axios from "axios";
import Setup from "../../config";
// import Modal from "../../Components/Modal";
// import Modal from "../../Components/Modal";

function Create() {
  const [judul, setJudul] = useState("-");
  const [puisi, setPuisi] = useState("-");
  const [puisiWithHeader, setPuisiWithHeader] = useState();
  const namaLengkap = localStorage.getItem("namaLengkap");

  useEffect(() => {
    axios({
      url: `${Setup.apiEndoint}/login`,
      method: "POST",
      params: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      },
    }).then((res) => {
      if (res.data.message === false) {
        window.location.href = `${Setup.baseUrl}/login`;
      }
    });

    // console.log(isLoading);
  }, []);

  useEffect(() => {
    setPuisiWithHeader(`
${judul}

Oleh : ${namaLengkap}


${puisi}

    `);
  });

  useEffect(() => {
    console.log(puisiWithHeader);
  });

  const kirim = () => {
    axios({
      url: `${Setup.apiEndoint}/create`,
      method: "POST",
      params: {
        puisi: puisi,
        title: judul,
        author: namaLengkap,
        puisi_with_header: puisiWithHeader,
        comment: [],
      },
    });
  };

  return (
    <div className="flex w-screen  flex-col p-3 md:p-10 lg:p-16 xl:p-20">
      <h1 className="text-[#7F867B] font-extrabold text-3xl text-center">
        PUISIKU
      </h1>
      <br />
      <br />
      <br />
      <form action="">
        <label
          htmlFor="username"
          className="text-[#7F867B] font-bold text-left text-xl"
        >
          JUDUL
        </label>
        <br />
        <input
          onChange={(e) => {
            setJudul(e.target.value);
          }}
          required
          type="text"
          name="username"
          id="username"
          className="bg-[#E3E4E0] px-5 py-2 rounded-lg outline-none w-64"
        />
      </form>
      <div className="w-full mt-20">
        <p className="text-[#7F867B] font-medium text-left text-xl">
          Mulailah menulis puisimu
        </p>
        <>
          <CKEditor
            editor={Editor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setPuisi(data);
              setPuisi(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </>
      </div>
      <button
        onClick={kirim}
        type="submit"
        className="bg-[#E3E4E0] p-2 px-5 rounded-md my-10 w-64 m-auto"
      >
        KIRIM
      </button>
      {/* <Modal /> */}
    </div>
  );
}

export default Create;
