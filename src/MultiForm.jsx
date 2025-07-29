import { useState } from "react";

const MultiForm = () => {

   const [input, setInput] = useState({});
   const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(value=>({...value, [name]:value}))
    console.log(input)

   }

    return (
        <>
            <h1>MultiForm</h1>

            Enter Emp No: <input type="text" value="empno" onChange={handleInput} />
            <br />
            Enter Name: <input type="text" value="name"  onChange={handleInput}/>
            <br />

            Enter City: <input type="text" value="city"  onChange={handleInput}/>
            <br />
            Enter Salary: <input type="text" value="salary"  onChange={handleInput} />
            <br />

            <button >Submit</button>


        </>
    )
}

export default MultiForm;