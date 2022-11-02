/* eslint-disable react-hooks/rules-of-hooks */
import {useLocation} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const payment = () =>  {


// eslint-disable-next-line react-hooks/rules-of-hooks
const location = useLocation();
console.log(location);
// eslint-disable-next-line react-hooks/rules-of-hooks
//const [src,setSrc] = useState("");

const [data,setData] = useState({
    packageId:location.state.id,
    paymentDate:"",
    nic:"",
    price:location.state.price
});
// eslint-disable-next-line no-unused-vars
const [error, setError] = useState("");
//const navigate = useNavigate(data);

const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const url = "http://localhost:5000/api/payment/add";
        const {data:res} = await axios.post(url,data);
       // navigate ("/purchasedPackages",{state:{nic:data.nic,packageId:data.packageId}});
        alert("payment Added")
        console.log(res.message);
    }catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
}


return(
    <div>
        {/* Packages id:{location.state.id}
        Packages price:{location.state.price} */}

        <form className="container" onSubmit={handleSubmit}>
			<br/>
            <h1 class="text-center">Payment</h1>
			<br/>
			<center>
				<div className="mb-3">
					<label htmlFor="packageId" className="form-label">Package ID</label>
					<input
						type="text"
						placeholder="Package ID"
						name="packageId"
						// onChange={handleChange}
						value={data.packageId}
						required
						className="form-control w-25 p-2"
						readonly
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="paymentDate" className="form-label">Package Date</label>
					<input
						type="date"
						placeholder="Package Date"
						name="paymentDate"
						onChange={handleChange}
						value={data.paymentDate}
						required
						className="form-control  w-25 p-2"
						
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="nic" className="form-label">Enter Nic</label>
					<input
						type="text"
						placeholder="nic"
						name="nic"
						onChange={handleChange}
						value={data.nic}
						required
						className="form-control  w-25 p-2"
						
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">Price</label>
					<input
						type="text"
						placeholder="price"
						name="price"
						//onChange={handleChange}
						value={data.price}
						required
						className="form-control  w-25 p-2"
						readonly
					/>
				</div>

				{error && <div className="">{error}</div>}
				<button type="submit" className="btn btn-secondary">
					Add Payment
				</button>
			</center>
        </form>


    </div>
    

)

};
export default payment;