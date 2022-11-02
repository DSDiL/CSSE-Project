/* eslint-disable jsx-a11y/alt-text */
import {useLocation} from "react-router-dom";
import React, { useRef, useState } from "react";

import {QRCodeCanvas} from "qrcode.react";


const nic = () =>{
// eslint-disable-next-line react-hooks/rules-of-hooks
const location = useLocation();
console.log(location);
// eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
const [src,setSrc] = useState("");

// const qrCodeEncoder = (e) => {
//     setSrc(e.location.state.nic);
// };
// eslint-disable-next-line react-hooks/rules-of-hooks
const qrRef = useRef();
const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.jpg`;
    document.body.appendChild(anchor);
    anchor.click();
    setSrc(src);
  };

const qrcode = (
      <QRCodeCanvas
    id="qrCode"
     value={location.state.nic}
     size={300}
     bgColor={"#0000"}
     level={"H"}
     />
     );

return(
    <>
    <br/>
    <div><h3  class="text-center">NIC Number: {location.state.nic}</h3></div>
    <br/>
    <form >
    
    <center><div ref={qrRef}>{qrcode}</div>
    
      <br/>
    <button type="submit" onClick={downloadQRCode} class="btn btn-secondary">
            Download QR code
          </button></center>
    </form>      
    </>
    
)
};
export default nic;