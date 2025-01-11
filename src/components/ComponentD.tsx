import { UserContext } from "./ComponentA";
import { useContext } from "react";

const ComponentD : React.FC = () => {
 const user = useContext(UserContext);
    return (
    <div className="box">
        <h1>ComponentD </h1>
    <h3>Bye {user}</h3>
    
    </div>
  )
}

export default ComponentD