import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./STYLE/Update.css";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = async () => {
        let api = `http://localhost:3000/students`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const del = async (id) => {
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.delete(api);
        console.log(response);
        // Optional: reload data after delete
        loadData();
    };

    const myEdit = (id) => {
        navigate(`/myedit/${id}`);
    };

    const ans = mydata.map((item) => {
        return (
            <tr key={item.id} className="table-row">
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.fees}</td>
                <td>
                    <button className="btn delete-btn" onClick={() => del(item.id)}>Delete</button>
                </td>
                <td>
                    <button className="btn edit-btn" onClick={() => myEdit(item.id)}>Edit</button>
                </td>
            </tr>
        );
    });

    return (
        <div className="update-container">
            <h1 className="update-heading">Update Page</h1>
            <table className="update-table">
                <thead>
                    <tr>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div>
    );
};

export default Update;
