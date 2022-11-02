import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Sidebar from "../Sidebar";

const ForeignerID = () => {
    const [data, setData] = useState({
        _id: "",
        passport: "",
        email: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/foreigner/insert-fgid";
            const { data: res } = await axios.post(url, data);
            navigate("/qrfg");
            console.log("aaaa", res);
            console.log(res.data);
            console.log("bbbb", res.foreigner.passport);

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };
    return (
        <div>
            <Sidebar />
            <div className={styles.foreigner_container}>
                <div className={styles.foreigner_form_container}>
                    <div className={styles.colt}></div>
                    <div className={styles.colt2}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <h3>Generate QR Code</h3>
                            <br></br>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Your Passport number"
                                name="passport"
                                onChange={handleChange}
                                value={data.passport}
                                required
                                className={styles.input}
                            />

                            {error && <div className={styles.error}>{error}</div>}

                            <button type="submit" className={styles.btnb}>
                                Enter
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Link to="/qrfg">
                <button type="button" className={styles.clear_btn}>
                    Generate QR Code
                </button>
            </Link>

        </div>
    );

};

export default ForeignerID;