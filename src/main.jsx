//import knihoven
import { render } from "react-dom";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

//css (TailWind)
import './index.css'

//import jednotlivých dílů stránky
import App from "./App";
import Cases from "./routes/cases";
import Upgrader from "./routes/upgrader";
import Contracts from "./routes/contracts";
import Inventory from "./routes/inventory";
import Navbar from "./navbar"

//obsah stránky
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cases" element={<Cases />} />
      <Route path="upgrader" element={<Upgrader />} />
      <Route path="contracts" element={<Contracts />} />
      <Route path="inventory" element={<Inventory />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);