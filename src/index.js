import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import NewGame from "./pages/NewGamePage/NewGame";
import FirstPage from "./pages/FirstPage/FirstPage.js";
import { AuthProvider } from "./pages/Authentication/AuthProvider";
import { LoginScreen, RegisterScreen } from "./pages/Authentication/AuthStack";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Lobby } from "./pages/Dashboard/Lobby";


const rootElement = document.getElementById("root");
render (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/groups" element={<Dashboard />} />
            <Route path="/group/create" element={<NewGame />} />
            <Route path="/group/:id/lobby" element={<Lobby/>} />
            <Route path="/group/:id/run" element={<App />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>,
    rootElement
);