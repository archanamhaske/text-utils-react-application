import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props) {
//   const [myStyle,setMyStyle]= useState({
//      color:'white',
//      backgroundColor:'black'
//  })
//  const[btntext,setBtnText]= useState("On")
//  const darkMode=()=>{
//      if(myStyle.color==='white'){
//          setMyStyle({
//              color:'black',
//              backgroundColor:'white'
//          })
//          setBtnText("Off")
//      }
//      else{
//          setMyStyle({
//              color:'white',
//              backgroundColor:'black'
//          })
//      }
//  }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container" >
          <Link className="navbar-brand" to="/" >
           {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >
                {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                {props.contactText}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch me-2">
           <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                   <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>
        
      </form> */}
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    homeText:PropTypes.string,
    aboutText:PropTypes.string,
    contactText:PropTypes.string
}

Navbar.defaultProps = {
    title: 'Mary'
  };