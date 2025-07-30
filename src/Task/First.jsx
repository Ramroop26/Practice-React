const First=()=>{
    const stu1={
        "rollno": 101,
        "name":"rohit",
        "city":"indore"
    }
    const stu2={
        "rollno":121,
        "marks":670,
        "result":"pass"
    }
    const ans = ({...stu1, ...stu2});
    console.log(ans)


    return(
        <>
        <h1>First Task</h1>
        </>
    )
}

export default First;