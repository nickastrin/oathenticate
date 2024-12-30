import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "@/pages/pages";
import { Sidebar, Navbar } from "@/layouts/layouts";
import "material-symbols";
import "./App.scss";

function App() {
  return (
    <div className="flex flex-col md:flex-row size-full relative overflow-hidden">
      <BrowserRouter>
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <div className="md:hidden">
          <Navbar />
        </div>

        <div className="relative flex-grow overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
