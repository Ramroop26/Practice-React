import { useState } from "react";

const MultiForm = () => {

   const [input, setInput] = useState({});
   const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);

   }

    return (
        <>
            <h1>MultiForm</h1>

            Enter Emp No: <input type="text" name="empno" onChange={handleInput} />
            <br />
            Enter Name: <input type="text" name="name"  onChange={handleInput}/>
            <br />

            Enter City: <input type="text" name="city"  onChange={handleInput}/>
            <br />
            Enter Salary: <input type="text" name="salary"  onChange={handleInput} />
            <br />

            <button >Submit</button>


        </>
    )
}

export default MultiForm;