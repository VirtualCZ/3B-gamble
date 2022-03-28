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
import Crud from "./routes/crud";
import Cases_old from "./routes/cases_old";
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
      <Route path="crud" element={<Crud/>} />
      <Route path="cases_old" element={<Cases_old/>} />

    </Routes>
  </BrowserRouter>,
  rootElement
);