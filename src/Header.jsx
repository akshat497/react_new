import { useState } from "react"

export default function Header(){
    const [first, setfirst] = useState(0)



   function add(){
    setfirst(first+1)
    console.log(first)
   }
console.log(first)

    return(<>
    <div>{first}</div>
    <button onClick={add}>increase</button> </>
    )
}