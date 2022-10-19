import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div>
                <header id="header" class="fixed-top d-flex align-items-center">
                  <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto"><a href="index.html">Edit Toolhub Records</a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
              */}
                    <nav id="navbar" class="navbar">
                      <ul>
                        <li><Link to ="/">Home</Link></li>

                        <br/>
                        
                        <li><Link to ="/Leaderboard">Leaderboard</Link></li>
                        
                        <li><Link to ="/Recordsdashboard">Records Dashboard</Link></li>

                        {/* <li><a href="contact.html">Contact</a></li>
                        <li><a href="index.html" class="getstarted">Get Started</a></li> */}
                      </ul>
                      <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>{/* <!-- .navbar -->
              */}
                  </div>
                </header>{/* <!-- End Header --> */}
            </div>

        )
    }
}
export default Header