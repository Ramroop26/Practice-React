
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./CRUD/Components/Home";
import Contact from "./CRUD/Components/Contact";
import Update from "./CRUD/Components/Update";
import Search from "./CRUD/Components/Search";
import Insert from "./CRUD/Components/Insert";
import Display from "./CRUD/Components/Display";



const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>

      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="search" element={<Search/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;


