import { useState } from "react";
type TodoProps = {
    id : number;
    title : string;
    completed : boolean;
}
const Fetching : React.FC = () =>{
const [data,setData] = useState<TodoProps[]>([]);
  const dataFetch = async () =>{
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        let data : TodoProps[] = await response.json();
        setData(data);
    }
    catch(e){
    console.log(e);
    }
};
  return(
    <>
    <button type = "button" onClick = { dataFetch} className="button-fetch">Click Me</button>
    <div >
    <ol>
        {data.map(item => (
            <li key = {item.id}>
                <p>Id : {item.id}</p>
                <p>Title : {item.title}</p>
                <p>Completed : {item.completed ? "Yes" : "No" }</p>
              
            </li>
            
        ))}
        
    </ol>
  
    </div>
    </>
  )


}
export default Fetching;

const EvenDataFetching : React.FC = () =>{
  const [filteredData,setEvenData] = useState<TodoProps[]>([])
  const fetchingData = async () =>{
    try{
      let response = await fetch ('https://jsonplaceholder.typicode.com/todos/');
      let data :TodoProps[]= await response.json();
      let filteredData :TodoProps[] = data.filter((item) =>(item.id % 2==0));
      setEvenData(filteredData);
    }
    catch(e){
      console.log(e);
    }
    
  }
  return (
    <>
    <h4>Even data</h4>
    <ol>
      {filteredData.map((ele) => (
        <li key = {ele.id}>
          <p>Id : {ele.id}</p>
          <p>Title : {ele.title}</p>
          <p>Completed : {ele.completed ? "yes" : "no"}</p>
         </li>
      ))}
    </ol>
    <button type="button" onClick={fetchingData} >Click here for filtered data</button>
    
    </>
  )
}
export {EvenDataFetching} ;

