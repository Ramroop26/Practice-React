import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MyEdit = () => {

    const { id } = useParams();  // useParams inside component
    const [mydata, setMydata] = useState({});  //  useState inside component

    const loadData = async () => {
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
    };

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }));
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSubmit = async () => {
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.put(api, mydata);
        console.log(response.data);
        alert("Data Updated!!!");
    };

    return (
        <>
            <h1>Edit Records :</h1>

            Edit Rollno:
            <input
                type="text"
                name="rollno"
                value={mydata.rollno || ""}
                onChange={handleInput}
            />
            <br />

            Edit Name:
            <input
                type="text"
                name="name"
                value={mydata.name || ""}
                onChange={handleInput}
            />
            <br />

            Edit City:
            <input
                type="text"
                name="city"
                value={mydata.city || ""}
                onChange={handleInput}
            />
            <br />

            Edit Fees:
            <input
                type="text"
                name="fees"
                value={mydata.fees || ""}
                onChange={handleInput}
            />
            <br />

            <button onClick={handleSubmit}>Edit Save!</button>
        </>
    );
};

export default MyEdit;
