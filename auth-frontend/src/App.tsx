import { BrowserRouter, Route, Routes } from "react-router";
import { About, Home, Login, Register } from "@/pages";
import { Sidebar, Navbar } from "@/layouts";
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

        <div className="relative flex flex-grow overflow-y-auto px-2 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
