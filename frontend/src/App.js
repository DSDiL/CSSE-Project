import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom'
import QrCode from './screens/QrCode';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/qrfg" exact element={<QrCode />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
