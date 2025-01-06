import { DetailsProps} from '../types';
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

  <h4>Message - {message}</h4>
)

}
export {Status} ;