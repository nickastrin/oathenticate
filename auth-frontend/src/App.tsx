import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "./pages/Login";
import { Sidebar } from "./layouts/Sidebar";
import { Navbar } from "./layouts/Navbar";
import "material-symbols";
import "./App.scss";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <BrowserRouter>
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <div className="md:hidden">
          <Navbar />
        </div>

        <div className="relative size-full overflow-auto p-6">
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
