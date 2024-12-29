import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "./pages/Login";
import "./App.scss";
import { Sidebar } from "./layouts/Sidebar";

import "material-symbols";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-full relative">
      <BrowserRouter>
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <div className="md:hidden">
          <Navbar />
        </div>

        <div className="p-6 size-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
