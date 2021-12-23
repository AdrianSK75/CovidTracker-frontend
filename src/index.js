import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import NewGame from "./pages/NewGamePage/NewGame";


const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<App />}/>
      </Routes>
    </BrowserRouter>,
    rootElement
);