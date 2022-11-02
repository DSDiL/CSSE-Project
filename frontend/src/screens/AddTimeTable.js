import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";

function AddTimeTable() {

    const [inputData, setInputData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [formValues, setFormValues] = useState({
        date: "",
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        busno: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/timetable/${formValues.date}`).then((res) => {
            setInputData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[formValues.date]);

    const HandleChange = (event) => {
        event.preventDefault();

        const {name, value} = event.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const SaveTemp = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:5000/api/timetable/`, formValues).then((res) => {
                setInputData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    const DeleteTemp = (event, id, date) => {
        event.preventDefault();

        axios.delete(`http://localhost:5000/api/timetable/del/${id}/${date}`).then((res) => {
            setInputData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const SaveTimeTable = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:5000/api/timetable/add/${formValues.date}`, inputData).then((res) => {
            setErrorMsg(res.data);
        }).catch((err) => {
            console.log(err);
        })        
    }

    return (
        <div className="container-sm">
            
            <Form className="row row g-4 justify-content-center" onSubmit={(event) => SaveTemp(event)}>

                {errorMsg ? (
                    <div id="error">{errorMsg}</div>
                    ):(
                        <div id="error"></div>
                    )}

                <Form.Group className="col-8">
                    <h2>Add Time Table</h2>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="date"
                        name="date"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Source</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="source"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="destination"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Departure</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="time"
                        name="departure"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Arrival</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="time"
                        name="arrival"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="col-8">
                    <Form.Label>Bus Number</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="busno"
                        onChange={HandleChange}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group id="button" className="col-8">
                    <Button className="btn btn-success btn-lg" type="submit">Add</Button>
                </Form.Group>
            </Form>

            <Table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Bus Number</th>
                    </tr>
                </thead>
                <tbody>
                {inputData.map(data =>
                    <tr key={data._id}>
                        <td>{data.date}</td>
                        <td>{data.source}</td>
                        <td>{data.destination}</td>
                        <td>{data.departure}</td>
                        <td>{data.arrival}</td>
                        <td>{data.busno}</td>
                        <td>
                            <Button type="button" id="button" className="btn btn-warning btn-sm" onClick={(event) => DeleteTemp(event, data._id, data.date)}>Remove</Button>
                        </td>
                    </tr>
                )}   
                </tbody>
            </Table>
            <Button className="btn btn-success btn-lg" id="button" type="submit" onClick={(event) => {SaveTimeTable(event)}}> Save TimeTable</Button>
        </div>
    )
}

export default AddTimeTable;