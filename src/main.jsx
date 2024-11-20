import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home";
import "./scss/pages/home.scss";
import "./styles/main.css";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route >
        <Route path="" element={<Home/>} />
      </Route>
    </Routes>
  </Router>
);
