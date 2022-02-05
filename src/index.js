import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import NewGame from "./pages/NewGamePage/NewGame";
import Login from "./pages/SecuritiesPage/Login";
import Register from "./pages/SecuritiesPage/Register";


const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<App />}/>
      </Routes>
    </BrowserRouter>,
    rootElement
);