import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from '@/pages/Home';
import {Login} from './pages/Login';
import './App.scss';
import {Sidebar} from './layouts/Sidebar';

import 'material-symbols';

function App() {
  return (
    <div className="flex flex-row h-screen relative">
      <Sidebar/>

      <div className="p-6 size-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
