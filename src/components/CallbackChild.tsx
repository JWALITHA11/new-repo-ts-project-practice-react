import React from "react"
type ChildProps = {
    handleClick : () => void;
}


const CallbackChild: React.FC<ChildProps> =React.memo (({handleClick}) => {
    console.log("child is rendered");
  return (
    <div>
<button onClick={handleClick}>Click me (child)!!!</button>
    </div>
  )
})

export {CallbackChild};