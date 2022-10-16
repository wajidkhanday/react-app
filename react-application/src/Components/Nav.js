import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (  
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary p-3 ">
  <div className="container-fluid">
    <Link to='home' className="navbar-brand"><img src="images/log.png" alt="log"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
        <li className="nav-item">
          <Link to="home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="pagination" className="nav-link">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="form" className="nav-link" >Form</Link>
        </li>
        <li className="nav-item">
          <Link to="sidebar" className="nav-link" >SideBar</Link>
        </li>
        <li className="nav-item">
          <Link to="todoapp" className="nav-link">Todoapp</Link>
        </li>
        <li className="nav-item">
          <Link to='counter'className="nav-link" href="/">Counter</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to='hooks' class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to='usestatehook' class="dropdown-item">UseState Hook</Link></li>
            <li><Link to='useeffecthook' class="dropdown-item">UseEffect hook</Link></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
         
        
      </ul>
      
    </div>
  </div>
</nav>
</div>

     )
}
 
export default Nav ;