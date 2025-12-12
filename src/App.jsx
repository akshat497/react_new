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
