import Verifikasi from "./Components/Verifikasi/Verifikasi";
import Login from "./Routing/Login/Login";

function App() {
  if (localStorage.getItem("username") && localStorage.getItem("no")) {
    return (
      <div>
        <h1>HOME</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
