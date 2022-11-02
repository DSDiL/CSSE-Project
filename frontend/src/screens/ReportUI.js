import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

function Reports() {

    const [date, setDate] = useState();

    const GetRoadTimeData = (event) => {
        event.preventDefault();

    }

    const GetPassengerData = (event) => {
        event.preventDefault();

    }

    const GetRoadMapData = (event) => {
        event.preventDefault();
    }

    const GenarateRoadTimeData = (event) => {
        event.preventDefault();

    }
    
    const GenaratePassengerData = (event) => {
        event.preventDefault();

    }

    const GenarateRoadMapData = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:5000/api/report/map/${date}`).then((res) => {
            //setTableValues(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <div>
            <Table>
                <tr id="buttontr">
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GetRoadTimeData(event)}><h6>Road Time Data</h6></div>
                    </td>
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GetPassengerData(event)}><h6>Passenger Data</h6></div>
                    </td>
                    <td id="buttontd">
                        <div id="data" onClick={(event) => GetRoadMapData(event)}><h6>Road Map Data</h6></div>
                    </td>
                </tr>
            </Table>

            <div><h4>Road Map Data</h4></div>

            <Form id="form" onSubmit={(event) => GenarateRoadMapData(event)}>
                <Form.Group>
                    <Form.Label><b>Date</b></Form.Label>
                    <Form.Control
                        className="input-control"
                        type="date"
                        name="date"
                        onChange={(event) => setDate(event.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button id="button" className="btn btn-success btn" type="submit">Search</Button>
                </Form.Group>
            </Form>

            <Table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Road Name</th>
                        <th>Number of Buses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Reports;