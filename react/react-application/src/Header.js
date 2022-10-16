const Header  = () => {
    return ( 
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary p-3 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="images/log.png" alt="log"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">All Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Corporate Training</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Placement</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Internships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        
        
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>


     );
}
 
export default Header ;