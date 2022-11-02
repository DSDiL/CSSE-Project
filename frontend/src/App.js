import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bills from "./screens/BillUI";
import Foreigner from "./screens/ForeignerUI";
import Home from "./screens/HomeUI";
import Manager from "./screens/ManageUI";
import PeakOffpeak from "./screens/PeakOffpeakUI";
import Postpaid from "./screens/PostpaidUI";
import PrepaidPassengers from "./screens/PrepaidPassengerUI";
import PrepaidSignup from "./screens/prepaidRegisterUI";
import PrepaidQr from "./screens/QrcodePrepaidUI";
import Payment from "./screens/PaymentUI";
import Sidebar from "./components/sidebar";
import AddTimeTable from "./screens/AddTimeTable";
import Reports from "./screens/ReportUI";
import ForeignerID from './screens/ForeignerID/foreigner';
import QrCode from './screens/QrCode';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/foreigner" element={<Foreigner/>}/>
          <Route path="/bills" element={<Bills/>}/>
          <Route path="/manage" element={<Manager/>}/>
          <Route path="/peakoffpeak" element={<PeakOffpeak/>}/>
          <Route path="/postpaid" element={<Postpaid/>}/>
          <Route path="/prepaid" element={<PrepaidPassengers/>}/>
          <Route path="/prepaidadd" element={<PrepaidSignup/>}/>
          <Route path="/prepaidQr" element={<PrepaidQr/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/addtimetable" element={<AddTimeTable/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/qrfg" exact element={<QrCode />} />
          <Route path="/sidebar" exact element={<Sidebar />} />
          <Route path="/fgid" exact element={<ForeignerID />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
