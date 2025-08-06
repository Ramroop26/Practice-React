import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const {id} = useParams();
const[mydata, setMydata] = useState({});

const loadData = async()=>{
    let api = `http://localhost:3000/students/${id}`;
    const response = await axios.get(api);
    setMydata(response.data);
}

const handleInput=(e)=>{
    let name=e.target.name;
    let value = e.target.value;
    setMydata(values=>({...values, [name]:value}));
    console.log(mydata);
}

useEffect(()=>{
    loadData();
}, []);

const handleSubmit =async()=>{
    let api = `http://localhost:3000/students/${id}`;
    const response = await axios.put(api, mydata);
    console.log(response.data);
    alert("Data Updated!!!");
}


const MyEdit =()=>{
    return(
        <>
        <h1>Edit Records :</h1>
        Edit Rollno: <input type="text" name="" onChange={handleInput} />
        <br />
        Edit Name: <input type="text" name="name" onChange={handleInput}/>
        <br />
        Edit City: <input type="text" name="city" onChange={handleInput}/>
        <br />
        Edit Fees: <input type="text" name="fees" onChange={handleInput}/>
        <br />
        <button onClick={handleSubmit}>Edit Save!</button>    
        </>
    )
}

export default MyEdit;  //export default keyword is used to export a single module. It is used to