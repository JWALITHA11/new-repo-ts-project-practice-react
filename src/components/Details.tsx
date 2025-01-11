import { DetailsProps} from '../types';
// import About from '../pages/About';
import{useState,useMemo} from 'react'
const Details = (props:DetailsProps) => {
    const data = props.data;
    const listOfUsers = data.map((ele, index) => (
      <div key={index} className="div-container">
        <p>Name: {ele.name}</p>
        <p>Age: {ele.age}</p>
        <p>Place: {ele.place}</p>
      </div>
    ));
//     const user = props.user;
//   const myStyles = { border: "2px solid black", backgroundColor: "skyblue" };

//   const userList = user.map((user, index) => (
//     <div className="chidi-container" key={index}>
//       <p><b>{user.firstName}</b></p>
//       <p className="para">{user.lastName}</p>
//       <p className="para">Phone: {user.phone}</p>
//       <p>Address: {user.address}</p>
//       <button type="button" style={myStyles} onClick ={() =>alert("button clicked")}>Delete</button>
//     </div>
//   ));

  return (
    <>
    <h4>Details using props </h4>
      {listOfUsers}
      {/* {userList} */}
    </>
  );
};

export default Details;

type statusList = {
  status: string;
}

const Status = (props : statusList) =>{
  let message ;
  if(props.status === "loading"){ 
    message = "loading" ;
  }
  else if (props.status==="success"){
    message = "Successfully data is fetched" ;
  }
   
  else if (props.status==="error"){
    message = "Error occured";
  }
   else {
    message = "check the status again" ;
   }
return(
  <>
  <h3>Basic example using props</h3>
 {/* <About /> */}
  <h4>Message - {message}</h4>
  </>
)

}
export {Status} ;

//usememo

const Memo : React.FC = () =>{
  const[number,setNumber] =useState<number>(10);
  const[secondState,setsecondState]=useState<boolean>(false);
  const result = useMemo(()=>{
    console.log("calculating..")
    return number * 2;
  },[number])
return(
  <>
  <h4>useMemo example</h4>
  <input type='number' value = {number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
  <p>Result is {result}</p>
  <button onClick={()=>setsecondState(!secondState)} style={{backgroundColor: secondState ? 'green' : 'red' , color: 'white'}}>
    Toggle state : {secondState ? 'On' : 'Off'}
  </button>
  
  
  
  
  </>
)
}
export {Memo}