import { useState, useEffect ,useRef } from "react";
// import images from 'src\assets\images'
const State: React.FC = () => {
    const [color, setColor] = useState<string>("Red");
    return (
        <>
            <div className="state-container-1">
                <h4>My Color is {color}</h4>
                <button type="button" onClick={() => { setColor("Blue") }
                }>Blue</button>
            </div>
        </>
    );
}
export default State;

const Counter: React.FC = () => {
    const [count, setCount] = useState<number | null>(null);
    const updater = () => {
        setCount((prevCount) => (prevCount !== null ? prevCount + 1 : 1));
    }
    return (
        <>
        <h4>Counter </h4>
            <div className="state-container-1">
                <h4>Count is {count}</h4>
                <button type="button" onClick={updater} >Click : {count}</button>
            </div>
        </>
    )
}
export { Counter };


const TrailCounter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0)
    useEffect(() => {
        setTimeout(() => {
            setCounter((counter) => counter + 1);
        }, 10000)

    })

    return (
        <div>

     
        <h4>Trail counter using useEffect hook :- </h4>
        <p>I have rendered {counter} times</p>



        </div>
    )
}
export { TrailCounter };

const Toggle: React.FC = () => {
    const handleClick = () => {
        let body = document.body.style;
        if (body.backgroundColor === "aqua") {
            body.backgroundColor = "white";
        }
        else {
            body.backgroundColor = "lightblue";
        }
    }

    return (
        <>
            <div className="toggle">
                <button type="button" onClick={handleClick}>Click here</button>
            </div>
        </>
    )
}
export { Toggle }


// type slideProps = {
//     url: string;
// }

// const slides: slideProps[] = [
//     { url: "src/assets/images/image.jpg" },
//     { url: "images/images (2).jpg" },
//     { url: "images/images.jpg" }
// ];

// // src\assets\images\image.jpg

// const Slider: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const prev = () => {
//         let newindex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newindex);
//     }
//     const next = () => {
//         let newindex = currentIndex === 0 ? currentIndex + 1 : slides.length - currentIndex - 1;
//         setCurrentIndex(newindex)
//     }

//     console.log(slides[currentIndex].url, "slides")

//     return (
//         <>
//             <h5>Image slider</h5>
//             <button type="button" onClick={prev}>Back</button>
//             <img width={'10%'} height={'10%'} alt="test" src="/new-repo-ts-project-practice-react/image.jpg" />
//             <button type="button" onClick={next}>Next</button>

//         </>
//     )
// }
// export { Slider }


const Effect :React.FC = () =>{
    const[count,setCount] = useState(0);
    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
       console.log(` you clicked this ${count} times`)
        
       },[count])
    

       useEffect(() =>{
        console.log('this is with no second argument')
       })
   
      useEffect(() =>{
       setTimeout(() =>{
            console.log("hi");
        },2000)
   
    }
      ,[])

  useEffect(() =>{
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER IS ADDED");

    return () => {
        window.removeEventListener("resize",handleResize);
        console.log("EVENT LISTENER IS REMOVED");
    }
  },[]);

function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
 
return(
    <div>
        {/* <h2>{count} times uisng useEffect</h2> */}
        {/* <h2>{name}</h2> */}
        <button type="button" onClick={() => setCount(count+1)} >UseEffect - Button count = {count}</button>
   <h4>Dimensions : </h4>
    <p> Window width {width} px</p>
    <p> Window height {height} px</p>
    </div>
)
}
export{Effect};


//useref 
const Reference : React.FC = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() =>{
        console.log("COMPONENT IS RENDERED")
    });
    function handleClick(){
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = "gray";
            inputRef.current.style.color = "white"
        }
    }
  const[user , setUser] = useState("");
  const count = useRef(0);
  useEffect(
    () =>{
        count.current = count.current+1;
        console.log(count.current)
    }
  )
   
return(
    <>
   
<div>
    <h4>useRef example :-</h4>
    <button onClick = {handleClick} >Click Here for the focus</button>
    <input type = "text" ref = {inputRef}/> </div>
    <div>
    <input type = "text" onChange = {(e) =>{setUser(e.target.value)}} value = {user} style = {{marginTop:'30px',width:'250px', textAlign:'center'}} placeholder="type something and check the count"/>
      <h4>Count renders = {count.current} </h4>
 
    </div>
   
      </>
)
}
export {Reference}


