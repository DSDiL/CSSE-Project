import React ,{useState ,useEffect}from "react";
import axios from "axios";
//import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function PrepaidPassengers() {


    const [packages,setPackages] = useState([]);

    useEffect(() => {

        function getPackages(){
            axios.get("http://localhost:5000/api/packages/get",packages).then((res)=>{
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackages();

    },[packages])
    const navigate = useNavigate(packages);
    const onsubmit = (_id,pPrice) => {
        // axios.get("http://localhost:5000/api/packages/get/:id",packages).then((res)=>{
        //         setPackages(res.data);
        //     }).catch((err) => {
        //         alert(err.message);
        //     })
        navigate ("/payment",{state:{id:_id,price:pPrice}});


    }

    
    return (
        <div className="container">
            <br/>
            <h1 class="text-center">Prepaid Packages</h1>
            <br/>

            <div class="  ">
                <center>
                    <table class="table p-3 mb-2 bg-light text-dark w-50 p-3">
                        {
                            packages.map((packages) =>(
                                <td class="border border-secondary w-25 p-3" >
                                    <center>
                                    <tr>{packages.pName}</tr>
                                    <tr>{packages.pDate}</tr>
                                    <tr>{packages.pPrice}</tr>
                                    <tr class="btn btn-secondary"><button class="btn btn-secondary" type="submit" onClick={()=>{onsubmit(packages._id,packages.pPrice)}}>Parches</button></tr>
                                    </center>
                                </td>
                            ))}
                    </table>
                </center>
            </div>
        </div>
    )
}

export default PrepaidPassengers;