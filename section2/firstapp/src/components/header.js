import { Button, Switch } from "@mui/material";  
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../userContext";
import Swal from "sweetalert2";

const Header = ({ darktheme, setDarktheme }) => {
  // const [loggedin, setLoggedin] = useState(true);
  // const [loggedin, setLoggedin] = useState(false);

  const {loggedin,setloggedin,setCurrentUser}=useContext(userContext)

  const navigate = useNavigate();

  const logout =()=>{
    setloggedin(false)
    setCurrentUser(null)
    navigate("/login")
    sessionStorage.removeItem("user")
    if(logout){
      return(
        Swal.fire({
          icon: "success",
          title: "Loggedout",
          text: "Loggedout successfully",
        })
      )
    }
  }


  
  const showLoggedin= () =>{
    if(!loggedin){
      return(  
        <NavLink className="navbar-brand" to="/login">login</NavLink>
       )
    }else{
    return(
      <li className="nav-item">
       <Button variant="contained" color="error" onClick={logout}>Logout</Button>
       </li>
      //  for pop up 
      
    )
    }
  }
  return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addproduct">Add-products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/manage">Browse-products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/event">Event-handler</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/chat">Chat-Us</NavLink>
        </li>

        {showLoggedin()}
            <li className="nav-item">
              <Switch
                color="secondary"
                checked={darktheme}
                onChange={(e, v) => {
                  setDarktheme(v)
                }}
              />
            </li>


          <li className="nav-item">
          <NavLink className="nav-link" to="products">Products</NavLink>
          </li>

      </ul> 
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
    
}
export default Header;



