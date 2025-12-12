import {Logo,Icon} from "./logo";


export default function Heads({name}) {
  return (
   <>
     <div>{name}
    </div>
    <Logo name={name}/>
    <Icon/>
    
   </>
  )
}
