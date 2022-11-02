import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import { FaPen, FaTrashAlt, FaEdit } from "react-icons/fa"

function Manager() {
    
    const [tableValues, setTableValues] = useState([]);
    const [editData, setEditData] = useState({
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        busno: ""
    });
    const [editDataID, setEditDataID] = useState();
    const [addForm, setAddForm] = useState(false);
    const [formValues, setFormValues] = useState({
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        busno: ""
    });
    
    const current = new Date();
    let month = (current.getMonth() + 1).toString();
    let day = (current.getDate()).toString();
    const year = (current.getFullYear()).toString();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    const date = `${year}-${month}-${day}`;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/timetable/table/${date}`).then((res) => {
            setTableValues(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[date]);

    const DeleteData = (event, did, tid) => {
        event.preventDefault();

        axios.put(`http://localhost:5000/api/timetable/table/${did}/${tid}`).then((res) => {
            setTableValues(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const EditClick = (event, t) => {
        event.preventDefault();

        setEditDataID(t._id);

        const values = {
            id: t._id,
            source: t.source,
            destination: t.destination,
            departure: t.departure,
            arrival: t.arrival,
            busno: t.busno
        }
        setEditData(values);
    }

    const EditData = (event) => {
        event.preventDefault();

        const {name, value} = event.target;
        setEditData({ ...editData, [name]: value});
    }

    const SaveEditData = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:5000/api/timetable/table/update`, editData).then((res) => {
            setTableValues(res.data);
            window.location.reload(true);
        }).catch((err) => {
            console.log(err);
        })
    }

    const AddClick = (event) => {
        event.preventDefault();

        setAddForm(true);
    }

    const HandleChange = (event) => {
        event.preventDefault();

        const {name, value} = event.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const AddData = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:5000/api/timetable/table/add/${date}`, formValues).then((res) => {
            // setTableValues(res.data);
            // window.location.reload(true);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div><h1>Dashboard</h1></div>
            <Form onSubmit={(event) => SaveEditData(event)}>
            <Table id="table" className="table table-striped table-bordered table-hover">   
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Bus Number</th>
                    </tr>
                </thead>
                {tableValues.map((data) => (
                <tbody key={data._id}>
                    {data.timetable.map((t) => (
                        <Fragment>
                        { editDataID === t._id ? (
                            <tr>
                                <td>
                                    <Form.Control
                                        className="input-control"
                                        type="text"
                                        name="source"
                                        value={editData.source}
                                        onChange={EditData}
                                        required>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Form.Control
                                        className="input-control"
                                        type="text"
                                        name="destination"
                                        value={editData.destination}
                                        onChange={EditData}
                                        required>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Form.Control
                                        className="input-control"
                                        type="time"
                                        name="departure"
                                        value={editData.departure}
                                        onChange={EditData}
                                        required>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Form.Control
                                        className="input-control"
                                        type="time"
                                        name="arrival"
                                        value={editData.arrival}
                                        onChange={EditData}
                                        required>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Form.Control
                                        className="input-control"
                                        type="text"
                                        name="busno"
                                        value={editData.busno}
                                        onChange={EditData}
                                        required>
                                    </Form.Control>
                                </td>
                                <td>
                                    <Button type="submit" className="btn btn-success btn-sm">Save</Button>
                                </td>
                            </tr> ) : (
                                <tr key={t._id}>
                                    {console.log}
                                    <td>{t.source}</td>
                                    <td>{t.destination}</td>
                                    <td>{t.departure}</td>
                                    <td>{t.arrival}</td>
                                    <td>{t.busno}</td>
                                    <td>
                                        <FaPen id="img" onClick={(event) => EditClick(event, t)}></FaPen>
                                        <FaTrashAlt id="img" onClick={(event) => DeleteData(event, data._id, t._id)}></FaTrashAlt>
                                        <FaEdit id="img" onClick={(event) => AddClick(event)}></FaEdit>
                                    </td>
                                </tr>
                            )}
                        </Fragment>                       
                    ))}    
                </tbody>
                ))}
            </Table>
            </Form>

            {addForm === true ? (
                <Form onSubmit={(event) => AddData(event)}>
                <Table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Bus Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Control
                                    className="input-control"
                                    type="text"
                                    name="source"
                                    onChange={HandleChange}
                                    required>
                                </Form.Control>
                            </td>
                            <td>
                                <Form.Control
                                    className="input-control"
                                    type="text"
                                    name="destination"
                                    onChange={HandleChange}
                                    required>
                                </Form.Control>
                            </td>
                            <td>
                                <Form.Control
                                    className="input-control"
                                    type="time"
                                    name="departure"
                                    onChange={HandleChange}
                                    required>
                                </Form.Control>
                            </td>
                            <td>
                                <Form.Control
                                    className="input-control"
                                    type="time"
                                    name="arrival"
                                    onChange={HandleChange}
                                    required>
                                </Form.Control>
                            </td>
                            <td>
                                <Form.Control
                                    className="input-control"
                                    type="text"
                                    name="busno"
                                    onChange={HandleChange}
                                    required>
                                </Form.Control>
                            </td>
                            <td>
                                <Button type="submit" className="btn btn-success btn">Save</Button>
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </Form>
            ) : (
                <div></div>
            )}

        </div>
    )
}

export default Manager;