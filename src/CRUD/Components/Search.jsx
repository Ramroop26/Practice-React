import { useState } from "react";
import axios from "axios";
import "./STYLE/Search.css";
const Search=()=>{
    const [rollno, setRollno] = useState("");
    const [mydata, setMydata] = useState([]);
    const handleSubmit=async()=>{
        let api = `http://localhost:3000/students/?rollno=${rollno}`;
        const response = await axios(api);
        console.log(response.data);
        setMydata(response.data);
    }

    const ans = mydata.map((key) =>{
        return(
            <>
            <tr key={key.rollno}>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Search Page</h1>
        Enter Rollno : <input type="text" value={rollno}  onChange={(e) =>setRollno(e.target.value)}/>
        <button onClick={handleSubmit}>Search</button>
        <hr />

        <table width="600" border="1">
            <thead>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            </thead>
            <tbody>{ans}</tbody>
            
        </table>
        </>
    )

}
export default Search;