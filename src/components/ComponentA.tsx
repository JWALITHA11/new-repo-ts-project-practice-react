import {createContext} from 'react';
import ComponentD from "./ComponentB";
export const UserContext = createContext("");
const ComponentA : React.FC = () => {
    const user= "React";
  return (
    <div className="box">
      
        <h1>ComponentA</h1>
        <h3>Hello {user}</h3>
        <UserContext.Provider value = {user}>
        <ComponentD />
        </UserContext.Provider>
     
        </div>
  )
}

export default ComponentA