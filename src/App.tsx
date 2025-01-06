import './App.css'

import Details ,{Status }from './components/Details.tsx';
import State ,{Counter ,TrailCounter}from './components/State.tsx';
import Lists , {NumList} from './components/Lists.tsx';
import Fetching from './components/Fetching.tsx';
import Form from './components/Form.tsx';
// import { TrailCounter } from './components/State.tsx';
function App() {
  
  
  const details  = [{
    name:"suman",
    age : 23,
    place:"hyderabad"
  },
  
  {
  name:"keerthi",
  age : 13,
  place:"punjab"
  },
  {
  name:"priya",
  age : 21,
  place:"chennai"
  },
  {
  name:"suji",
  age : 22,
  place:"goa"
  },
  {
  name:"ram",
  age : 33,
  place:"pune"
  }
  ];
  
  const fruits = ["apple","banana","cherry","avacado" ,"pear","grapes"];
  const nums = [10,20,21,3,45,8,7,0,32,55,87];


  // const chidi  = [{
  //   firstName: "Chidi",
  //   lastName: "Anagonye",
  //   phone: 555_366_8987,
  //   address: "St. John's University, Sydney, Australia"
  // },
  // {
  //   firstName: "Chidi",
  //   lastName: "Anagonye",
  //   phone: 555_366_8987,
  //   address: "St. John's University, Sydney, Australia"
  // },
  // {
  //   firstName: "Chidi",
  //   lastName: "Anagonye",
  //   phone: 555_366_8987,
  //   address: "St. John's University, Sydney, Australia"
  // },
  // {
  //   firstName: "Chidi",
  //   lastName: "Anagonye",
  //   phone: 555_366_8987,
  //   address: "St. John's University, Sydney, Australia"
  // },
  // {
  //   firstName: "Chidi",
  //   lastName: "Anagonye",
  //   phone: 555_366_898,
  //   address: "St. John's University, Sydney, Australia"
  // },
  // ]
  return (
    <>
  <Details data = {details}  />
  <Lists fruit = {fruits} />
  <NumList numbers = {nums} />
  <Status status = "loading" />
  <Status status = "success" />
  <Status status = "hsdjb" />
  <State />
  <Counter />
  <TrailCounter />
  <Fetching />
  <Form />
    </>
  );

    
}

export default App
