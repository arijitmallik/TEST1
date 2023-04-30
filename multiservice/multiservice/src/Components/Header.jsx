
import './Header.css';
import {Outlet, Link} from "react-router-dom";
// import hand from './logo/hand.jpg';

function Header(){


    
    return(
        <>
         <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
         <div className="container-fluid">
         {/* <img class='circle' src={hand} alt="Logo" /> */}
    
          <h1 className="navbar-brand"> hand to help </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                	<span className="navbar-toggler-icon"></span>
                	
                	
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                               	<ul className="nav navbar-nav mx-auto">
                		<li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                		
                		
                		<li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/service">Avilable service</Link></li> */}

                	    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                	    {/* <li className="nav-item"><Link className="nav-link" to="/order">Order</Link></li> */}
                	
                
                  
                	<li className="dropdown"><Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/">More<span className="caret"></span></Link>
                			<ul className="dropdown-menu">
                				<li className="nav-item"><Link className="nav-link text-dark" to="/">Register your service</Link></li>
                				<li className="nav-item"><Link className="nav-link text-dark" to="/">help</Link></li>
                                <li className="nav-item"><Link className="nav-link text-dark" to="/About">About</Link></li>

                			</ul>
                		</li>
                        </ul>
                	
                	

        <ul className="nav navbar-nav navbar-right">          
      <li className="nav-item"><Link className="nav-link" to="/Signup"><i className="fa-solid fa-user"></i> Sign Up</Link></li>
      <li className="nav-item"><Link  className="nav-link" to="/Login"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
    </ul>

          </div>
         </div>
         </nav>
        <Outlet/>
        </>

    );
 }

export default Header;