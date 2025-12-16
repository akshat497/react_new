
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


