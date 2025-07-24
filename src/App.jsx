





const App = () => {
  const myval = (e)=>{
    let mytype = e.type;
    let mynm = e.target.name;
    let myval = e.target.value;
    alert(`type : ${mytype} name: ${mynm}  value: ${myval}`)
 
}

  return (
    <>
<h1>welcome to cybrom</h1>
<button name="btn1" value="mybtn2" onClick={myval}>click me</button>


   




    </>
  )
}

export default App;