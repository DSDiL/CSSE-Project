import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PrepaidSignup = ({history}) => {

    const [data,setData] = useState({
        name:"",
        email:"",
        nic:"",
        mobile:"",
        password:""

    });
    const [error,setError] = useState("");
    const navigate = useNavigate(data);

    const handleChange = ({currentTarget : input}) => {
        setData({...data,[input.name]:input.value});
    };
    //const history = useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url ="http://localhost:5000/api/prepaidRegister/add";
            const {date:res} = await axios.post(url,data);
            navigate ("/prepaidQr",{state:{nic:data.nic}});
            alert("User added")
            console.log(res.message);
        }catch(error){
            if(
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.date.message);
            }
        }
    };

    return(
        <div className="container">
			
			<form className="" onSubmit={handleSubmit}>
				<br/>

				<h1 class="text-center">Create Your Prepaid Account</h1>
				<center>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Enter Name</label>
						<input
							type="text"
							placeholder="Enter your name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className="form-control w-25 p-2"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Enter Email</label>
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="form-control w-25 p-2"
						/>
					</div>
                    <div className="mb-3">
						<label htmlFor="nic" className="form-label">Enter Nic</label>
						<input
							type="text"
							placeholder="Enter your Nic"
							name="nic"
							onChange={handleChange}
							value={data.nic}
							required
							className="form-control w-25 p-2"
						/>
					</div>

                    <div className="mb-3">
						<label htmlFor="mobile" className="form-label">Enter Mobile Number</label>
						<input
							type="text"
							placeholder="Enter your Mobile"
							name="mobile"
							onChange={handleChange}
							value={data.mobile}
							required
							className="form-control w-25 p-2"
						/>
					</div>
                        

					<div className="mb-3">
						<label htmlFor="password" className="form-label">Enter Password</label>
						<input
							type="password"
							placeholder="Please enter valid Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="form-control w-25 p-2"
						/>
					</div>

					{error && <div className="">{error}</div>}
					<button type="submit" className="btn btn-secondary">
						Sign Up
					</button>
				</center>
				<br/>
			</form>
				
			
		</div>

    );

}
export default PrepaidSignup;