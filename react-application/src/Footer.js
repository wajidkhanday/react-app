const Footer  = () => {
    return (  
    <footer className='bg-dark'>    
<div>
   <div className='row text-white'>
    <div className='col-sm-4' >
    <img src="images/log.png" width="300px" height="120px" alt="logo"/>
    <p>AchieversIT - Provides a wide group of opportunities for freshers
     and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
    </div>
 
     <div className='col-sm-2'>
        <h4>COMPANY</h4>
        <ul>
            <li>home</li>
            <li>placements</li>
            <li>corporate training</li>
            <li>contact us</li>
            
        </ul>

</div>

<div className='col-sm-3'>
        <h4>TRENDING COURSES</h4>
        <ul>
            <li>UI Development Course</li>
            <li>Angular JS Course</li>
            <li>React JS Course</li>
            <li>Digital Marketing Course</li>
            <li>Python Course</li>
        </ul>

</div>

<div className='col-sm-3'>
        <h4>CONTACT INFO</h4> 
        <p>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</p> 

    <p>India : +91 8431-040-457</p> 

    <p>info@achieversit.com</p>
        
</div>
<hr></hr> 
<h4 className="text-center fs-4">Copyright © 2020 AchieversIT. All Rights Reserved</h4>
   </div>
 
   </div> 



</footer>
     );
}
 
export default Footer ;