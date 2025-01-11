import './App.css'
// import { createContext } from 'react';
import Details ,{Status ,Memo}from './components/Details.tsx';
import State ,{Counter ,TrailCounter,Toggle,Effect,Reference}from './components/State.tsx';
import Lists , {NumList , Cart,Layout}from './pages/Lists.tsx';
import Fetching from './components/Fetching.tsx';// , {EvenDataFetching}
import Form from './pages/Form.tsx';
import Navbar from './pages/Navbar.tsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import NoPage from './pages/NoPage.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Blogs from './pages/Blogs.tsx';
import EvenDataFetching from './pages/EvenFetching.tsx';
import ComponentA   from './components/ComponentA.tsx';
import CallbackParent from './components/CallbackParent.tsx';
// import { TrailCounter } from './components/State.tsx';

function App (){




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
     
   

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/about' element = {<About />} />
      <Route path = '/blogs' element = {<Blogs />} />
      {/* <Route path = '*' element = {<NoPage />} /> */}
      <Route path = '/evendata' element = {<EvenDataFetching />} />
      <Route path = '/form' element = {<Form />} />
    
    </Routes>
    </BrowserRouter>
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
<Reference />
  {/* <EvenDataFetching /> */}
  <Toggle />
  {/* <Slider /> */}
  <Cart />
  <Effect />
  <Memo />
<h4>useContext Example</h4>
 <ComponentA />
  {/* <Child /> */}
 <Layout />
 <CallbackParent />
    </>
  );

    
}

export default App
