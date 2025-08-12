import { useState } from "react";
import axios from "axios";
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
            <tr>
                <th>{key.rollno}</th>
                <th>{key.name}</th>
                <th>{key.city}</th>
                <th>{key.fees}</th>
                
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Search Page</h1>
<<<<<<< HEAD
        Enter Rollno : <input type="text" value={rollno}  onChange={(e) =>setRollno(e.target.value)}/>
=======
        Enter Rollno : <input type="text" value={rollno}  onChange={(e) =>{e.target.value}}/>
>>>>>>> 640f06fdc5bf663e3ec35e0f02e57e7007d24ca8
        <button onClick={handleSubmit}>Search</button>
        <hr />

        <table width="600" border="1">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )

}
export default Search;