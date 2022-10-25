import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bills from "./screens/BillUI";
import Foreigner from "./screens/ForeignerUI";
import Home from "./screens/HomeUI";
import Manager from "./screens/ManageUI";
import PeakOffpeak from "./screens/PeakOffpeakUI";
import Postpaid from "./screens/PostpaidUI";
import PrepaidPassengers from "./screens/PrepaidPassengerUI";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/foreigner" element={<Foreigner/>}/>
      <Route path="/bills" element={<Bills/>}/>
      <Route path="/manage" element={<Manager/>}/>
      <Route path="/peakoffpeak" element={<PeakOffpeak/>}/>
      <Route path="/postpaid" element={<Postpaid/>}/>
      <Route path="/prepaid" element={<PrepaidPassengers/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
