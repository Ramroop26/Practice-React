import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [mydata, setMydata] = useState();
    const navgate = useNavigate();
    const loadData = async()=>{
        let api = `http://localhost:3000/students`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();

    }, [])
    const del = async(id)=>{
        let api = `http://localhost:3000/students/${id}`
        const response  = await axios.delete(api);
        console.log(response);
    
    }

    const myEdit = ()=>{
        navgate(`/myedit/${id}`)
    }

    const ans  = mydata.map((item)=>{
        return(
            <>
            <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.fees}</td>
                <td>
                    <button onClick={()=>del(item.rollno)}>Delete</button>
                </td>
                <td>
                    <button onClick={()=>myEdit(item.rollno)}>Edit</button>
                    
                </td>

            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to Update Page</h1>
        </>
    )

}
export default Update;