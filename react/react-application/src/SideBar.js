import React from 'react'
import './index.css'
import {FaFacebook, FaTwitter,FaHome,FaLinkedin,FaYoutube} from 'react-icons/fa'
const SideBar = () => {
    return ( 
<div className='position-absolute'>
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
<i class="bi bi-list"></i>
</a>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
</div> 
<ul className='logo position-absolute' id='sidebar'>
            <li><a href='/'><FaHome/>HOME</a></li>
            <li><a href='/'><FaFacebook/>FACEBOOK</a></li>
            <li><a href='/'><FaTwitter/>TWITTER</a></li>
            <li><a href='/'><FaLinkedin/>LINKEDIN</a></li>
            <li><a href='/'><FaYoutube/>YOUTUBE</a></li>
            
            
        </ul>
</div>
</div>
     )
}
export default SideBar;