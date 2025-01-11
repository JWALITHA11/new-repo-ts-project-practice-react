import { useState} from "react";
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

// type titleProps = {
//   title : string;
// }
// const Titles : React.FC = () =>{
//   const[titles,setTitles] =useState<titleProps[]>([])
//   useEffect(
//     ()=>{
//       const fetchingTitles = async () =>{
//         try{
//           let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//           let details : titleProps[] = await response.json();
//           let titles  = details.map((ele : titleProps) => ele.title);
//          setTitles(titles)
//          console.log(titles);
//         }
//         catch(e){
//           console.log(e);
//         }
//       }
//       fetchingTitles();
//     },titles)
//     return(
//       <>
//       <h4>All titles are : </h4>
//       <ul>
// {titles.map((element,index) =>(
//  <li key = {index}>{element}</li>
// )
 
// )}
       
 
//       </ul>
      
//       </>
//     )
// }
// export {Titles};