// const Second=()=>{
//     const stu={
//         "subject":["Rohit", "kachi", "muskan","mohit","gourav"],
//         "game":["pubji", "lodo", "snake"],
//         "hobbies":{"singing":true, "dance":true,"game":["lodo","snake"]

//         }
//     }

//         console.log(stu.subject[1])
//         console.log(stu.game[1])
//         console.log(stu.hobbies.game[1])
//         console.log(stu.hobbies)


    

//     return(
//         <>

//         Second Task
//         </>

//     )
// }
// export default Second;


import { useState } from "react";

const Second=()=>{
    const [input, setInput]  = useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
        console.log(input);

    }
    const handleSubmit=async()=>{
    let api = "";
    const response =await axios.POST(api, input);
        
        console.log(response);
        alert("Data Successfully Save !!!");
    }


    return(
        <>
        
        <h1>Application Form</h1>
        Enter rollno: <input type="text"  name="rollno" onChange={handleInput}/>
        <br />
        Enter Name: <input type="text"  name="name" onChange={handleInput}/>
        <br />
        Enter City: <input type="text"  name="city" onChange={handleInput}/>
        <br />
         Enter fees: <input type="text"  name="fees" onChange={handleInput}/>
         <br />

         <button onClick={handleSubmit}>Save!!</button>
         <br />

        </>
    )
}

export default Second;  //exporting the component to use in other files
