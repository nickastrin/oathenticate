import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Login, Register } from "@/pages";
import { Sidebar, Navbar } from "@/layouts";
import { AuthenticationProvider } from "./features/authentication/contexts";
import "material-symbols";
import "./App.scss";

function App() {
  return (
    <div className="flex flex-col md:flex-row size-full relative overflow-hidden">
      <BrowserRouter>
        <AuthenticationProvider>
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
            </Routes>
          </div>
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
