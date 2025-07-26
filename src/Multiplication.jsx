import { useEffect, useState } from "react";

const Multiplication=()=>{
    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(0);

    useEffect(()=>{
        setMulti(count*2);
    })

    return(
        <>
        <h1>My Count: {count}</h1>
        <h2>Multiplation: {multi}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Multiplication;