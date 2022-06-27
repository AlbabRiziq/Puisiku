import { useParams } from "react-router-dom";
import Home from "./Routing/Home/Home";

function App() {
  const id = useParams().id;
  return (
    <div className="App flex items-center justify-center">
      <Home id={id} />
    </div>
  );
}

export default App;
