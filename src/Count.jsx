import { useState } from "react";

const Count=()=>{
    const[count,setCount]=useState(0);

    const MyDec=()=>{
        if(count<=1){
            alert("No Increment");
        }
        else{
            setCount(count-1);
        }
    }

    return(
        <>
        <h1>Welcome to Counter App</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Count:{count}</h1>
        <button onClick={MyDec}> Decrement</button>
        </>


    )
}

export default Count;