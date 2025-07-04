import React from 'react'
import "./navbar.css"
const Navbar = ({setCategory}) => {

  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-5'>News_Mag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("business")}>Buisness</div>
        </li>
         <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("health")}>Health</div>
        </li>
          <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("science")}>Science</div>
        </li>
          <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("sports")}>Sport</div>
        </li>
          <li className="nav-item">
          <div className="nav-link nav-hover" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
