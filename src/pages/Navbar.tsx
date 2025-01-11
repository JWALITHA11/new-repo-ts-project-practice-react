import { Link } from "react-router-dom";
const Navbar : React.FC = () =>{
return(
    <>
    <ul className="nav-items">

   <li><Link to = '/'>Home</Link></li> 
    <li><Link to = '/about'>About</Link></li>
    <li><Link to = '/blogs'>Blog</Link></li>
    <li><Link to = '/evendata'>Evendata</Link></li>
    <li><Link to = '/form'>Form</Link></li>
    {/* <Link to = '*'></Link> */}
    
    </ul>
 
    
    </>
)
}
export default Navbar;