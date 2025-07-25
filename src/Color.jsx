import {useState} from "react";


const Color=()=>{
    const [color,setColor]=useState("red");

    return(
        <>
        <h1 style={{color:color}}>My Favrouit Color: {color} </h1>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>yellow</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("orange")}>orange</button>

        </>
    )
}

export default Color;  