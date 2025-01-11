import { CallbackChild } from "./CallbackChild";
import { useCallback,useState } from "react";
import React from 'react'

const CallbackParent: React.FC = () => {
    const[count,setCount] = useState<number>(0);
    // const[toggle,setToggle] = useState<boolean>(false);
    const handleChildClick = useCallback(()=>{
        console.log("button clicked from child ");
    },[]);
  return (
    <div>
        <h4>useCallback example</h4>
<p>Parent Count : {count}</p>
<button onClick={()=>setCount(count+1)}>Increment Count</button>
{/* <button onClick = {()=>setToggle(!toggle)} >
    Toggle State : {toggle ? 'On' : 'Off'}
</button> */}
<CallbackChild handleClick={handleChildClick} />












    </div>
  )
}

export default CallbackParent