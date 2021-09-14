import "./App.css";
import AllPages from "./component/AllPage/AllPages.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllPages />
      </div>
    </BrowserRouter>
  );
}

export default App;
