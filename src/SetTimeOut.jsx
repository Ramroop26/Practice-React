import { useState , useEffect} from "react";

const SetTimeOut=()=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        }, 1000);
    }, [])

    return(
        <>
        <h1>My Count: {count}</h1></>
    )
}

export default SetTimeOut;