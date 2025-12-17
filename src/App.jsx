
// import {  useState } from 'react'
// import './App.css'
// import Header from './Header'
// import { BrowserRouter } from 'react-router-dom'
// function App() {
//   const arr=["akshat",1,22.2,"hello"]
//   // const obj={name:"akshat",age:25,phone:123456}
//   // const [show, setshow] = useState(true)
 
//   return (
//     <>
    
//     {/* <button onClick={()=>{setshow(!show)}}>{show?"hide":"show"}</button>
//     {show&&<Header/>}
//     {arr.map((value,index)=>{
//       return(
//        <div key={index} > {value}</div>
//       )
//     })} */}

//     {/* {
//       Object.keys(obj).map((value)=>{


//         return(<>
//           {obj[value]}
//         </>)
//       })
//     } */}
//       {/* {
//         arr.map((value,index)=>{

//           return(<>
//             <ul>{index}{value}</ul>
//           </>)
//         })
//       } */}
//     </>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Header from './Header'
export default function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
    
     <Route path="/aboutus" element={<Aboutus/>} />
     <Route path="/contactus" element={<Contactus/>} />
      
      
    </Routes>
      <Header/>
        
    </BrowserRouter>
    </>
  )
}
