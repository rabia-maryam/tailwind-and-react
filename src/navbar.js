import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <ul>
         <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link> 
        <Link to='/contact-us'>Contact Us</Link>
        <Link to='/services'>Services</Link>
        <Link to='/state'>State</Link>
        </ul>
        </>
    )
}
export default Navbar