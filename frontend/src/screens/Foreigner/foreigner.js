import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Sidebar from "../Sidebar";


const Foreigner = () => {
    const [data, setData] = useState({
      email: "",
      passport: "",
      contact: "",
    });
   
    function refreshPage() {
      window.location.reload(false);
    }
  
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
    };
  
    const handleSubmit = async (e) => {
  
      e.preventDefault();
      try {
        const url = "http://localhost:5000/api/foreigner";
        const { data: res } = await axios.post(url, data);
        navigate("/");
        console.log(res.message);
        console.log(res.data);
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
                <h3>Foreigner Details</h3>
                <br></br>
                <input
                  type="text"
                  placeholder="Foreigner Name"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Foreigner passport number"
                  name="passport"
                  onChange={handleChange}
                  value={data.passport}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact"
                  onChange={handleChange}
                  value={data.contact}
                  required
                  className={styles.input}
                />
                {error && <div className={styles.error}>{error}</div>}
  
                <button type="submit" className={styles.btnb}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
  
  
        <Link to="">
          <button type="button" onClick={refreshPage} className={styles.clear_btn}>
            Clear
          </button>
        </Link>
  
      </div>
    );
  
  };
  export default Foreigner;