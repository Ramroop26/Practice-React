import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("rohit");
    const myname = () => {
        setName("Ramroop");
    }

    return (
        <>
            <h1>hello i am: {name}</h1>
            <button onClick={myname}>Click me</button>
        </>
    )
}



export default Contact;
//