import { useState } from "react";
const MyForm=()=>{
    const [emplo,setEmplo]=useState("");
    const [name,setName]=useState("");
    const [city, setCity]=useState("");
    const [salary, setSalary]=useState("");
    const handleSubmit=()=>{
        console.log({ emplo:emplo, name:name, city:city, salary:salary});
    }
    return(
        <>
        <h1>Application Form</h1>
         Enter Emp No: <input type="text" value={emplo}
        onChange={(e)=>{setEmplo(e.target.value)}} />
        <br />
         Enter Name: <input type="text" value={name}
        onChange={(e)=>{setName(e.target.value)}} />
        <br />
       
        Enter City: <input type="text" value={city}
        onChange={(e)=>{setCity(e.target.value)}} />
        <br />
         Enter Salary: <input type="text" value={salary}
        onChange={(e)=>{setSalary(e.target.value)}} />
        <br />

        <button onClick={handleSubmit}>Submit</button>
        
        </>
    )
}

export default MyForm;