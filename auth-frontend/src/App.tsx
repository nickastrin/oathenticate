import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { About, Demo, Home, Login, Register } from "@/pages";
import { Sidebar, Navbar } from "@/layouts";
import { AuthenticationProvider } from "./features/authentication/contexts";
import "material-symbols";
import "./App.scss";
import { NavigationMotionWrapper } from "./components";

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
              <Route
                path="/"
                element={
                  <NavigationMotionWrapper>
                    <Outlet />
                  </NavigationMotionWrapper>
                }
              >
                <Route index element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/about" element={<About />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
            </Routes>
          </div>
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
