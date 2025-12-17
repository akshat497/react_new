import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Header(){
    const [first, setfirst] = useState(0)


 useEffect(()=>{

   const id= setInterval(() => {
        console.log("hii")
    }, 1000);

    return ()=>{
        clearInterval(id)
    }
   
  },
  [])
   function add(){
    setfirst(first+1)
    console.log(first)
   }
console.log(first)

    return(<>
    <div>{first}</div>
    <button onClick={add}>increase</button>
    <Link to="/aboutus">About us</Link>
    <Link to="/contactus">Contact us</Link>
    
    
     </>
    )
}