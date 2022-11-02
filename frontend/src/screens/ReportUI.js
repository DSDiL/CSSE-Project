import React from "react";
import { Table } from "react-bootstrap";

function Reports() {

    const GenarateRoadTimeData = (event) => {
        event.preventDefault();

    }
    
    const GenaratePassengerData = (event) => {
        event.preventDefault();

    }

    const GenarateRoadMapData = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <Table>
                <tr id="buttontr">
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GenarateRoadTimeData(event)}><h6>Road Time Data</h6></div>
                    </td>
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GenaratePassengerData(event)}><h6>Passenger Data</h6></div>
                    </td>
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GenarateRoadMapData(event)}><h6>Road Map Data</h6></div>
                    </td>
                </tr>
            </Table>

            <div><h4>Road Map Data</h4></div>
            <Table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Road Name</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default Reports;