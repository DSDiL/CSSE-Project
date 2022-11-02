import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom'
import QrCode from './screens/QrCode';
import Sidebar from './screens/Sidebar';
import Foreigner from './screens/Foreigner/foreigner';
import ForeignerID from './screens/ForeignerID/foreigner';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/qrfg" exact element={<QrCode />} />
          <Route path="/sidebar" exact element={<Sidebar />} />
          <Route path="/" exact element={<Foreigner />} />
          <Route path="/fgid" exact element={<ForeignerID />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
