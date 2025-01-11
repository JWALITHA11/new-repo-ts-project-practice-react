import {useState , useEffect} from 'react'
type TodoProps = {
    id : number;
    title : string;
    completed : boolean;
}
const EvenDataFetching : React.FC = () =>{
    const [filteredData,setEvenData] = useState<TodoProps[]>([])
    useEffect(() =>{
          const fetching =  async () =>{
        try{
          let response = await fetch ('https://jsonplaceholder.typicode.com/todos/');
          let data :TodoProps[]= await response.json();
          let filteredData :TodoProps[] = data.filter((item) =>(item.id % 2==0));
          setEvenData(filteredData);
          console.log("name")
        }
        catch(e){
          console.log(e);
        }
    }
   
      fetching();
    },[])
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
      {/* <button type="button" >Click here for filtered data</button> */}
      
      </>
    )
  }
  export default EvenDataFetching ;
  