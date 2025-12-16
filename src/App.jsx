<<<<<<< HEAD

import {  useState } from 'react'
import './App.css'
import Header from './Header'
function App() {
  const arr=["akshat",1,22.2,"hello"]
  // const obj={name:"akshat",age:25,phone:123456}
  const [show, setshow] = useState(true)
 
  return (
    <>
    <button onClick={()=>{setshow(!show)}}>{show?"hide":"show"}</button>
    {show&&<Header/>}
    {arr.map((value,index)=>{
      return(
       <div key={index} > {value}</div>
      )
    })}

    {/* {
      Object.keys(obj).map((value)=>{


        return(<>
          {obj[value]}
        </>)
      })
    } */}
      {/* {
        arr.map((value,index)=>{

          return(<>
            <ul>{index}{value}</ul>
          </>)
        })
      } */}
    </>
  )
}

export default App


=======
import { useState } from "react";
import Heads from "./Heads";

function App() {
  let name = "akshat";
  let arr=["akshat",24,"kushal",22,"kanika","vishal"]
  const [first, setfirst] = useState({name:"",age:null})
  function count(){
    setfirst({
      name:"akshat",
      age:first.age+1
    })
  }
  return (
    <>
    {first.name}{first.age}
      <Heads name={name} age={23} />
      
     <ul>
       {arr.map((value,index)=>{


        return(<>
        <li onClick={()=>{count(index)}} >{index } {value}</li>
       
        </>)
      })}
     </ul>
     
    </>
  );
}

export default App;
>>>>>>> 47194c46849211df8c2ca288806dcf6305fed7b4
