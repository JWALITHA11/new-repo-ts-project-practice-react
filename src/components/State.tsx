import { useState , useEffect } from "react";
const State :React.FC = () => {
const [color , setColor] = useState<string>("Red");
return(
    <>
    <div className="state-container-1">
    <h4>My Color is {color}</h4>
    <button type = "button" onClick = {() =>
        {setColor("Blue")}
    }>Blue</button>
    </div>
    </>
);
}
export default State;

const Counter :React.FC = () =>{
   const [count,setCount] = useState<number | null>(null);
   const updater = () =>{
    setCount((prevCount) => (prevCount !== null ? prevCount + 1 : 1));
   }
   return (
    <>
    <div className="state-container-1">
    <h4>Count is {count}</h4>
    <button type = "button" onClick = {updater} >Click : {count}</button>
    </div>
    </>
   )
}
export {Counter};


const TrailCounter : React.FC = () =>{
    const[counter ,setCounter] = useState<number>(0)
    useEffect(() =>{
        setTimeout(() =>{
            setCounter((counter) => counter+1);
        },5000)
      
    })

return (
    <p>I have rendered {counter} times</p>
)
}
export {TrailCounter};