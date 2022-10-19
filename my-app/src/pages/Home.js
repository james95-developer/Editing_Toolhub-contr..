import React, {Component} from 'react';
class Home extends React.Component{
    render(){
        return(
            <div>
                              
                <main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6">
            
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>

          </div>
        </div>

      </div>
    </section>{/* <!-- End About Section -->
 */}
    {/* <!-- ======= Clients Section ======= --> */}
    

    {/* <!-- ======= Services Section ======= --> */} 
    <section id="services" class="services">
      <div class="container">

        <div class="row">
          <div class="col-md-6">
          <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">search</button>
          </div>
          </div>
          
        </div>

      </div>
    </section>{/* <!-- End Services Section -->

    <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">Next</li>
              
              
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/> 
              <div class="portfolio-info">
                
          
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>{/* <!-- End Portfolio Section -->
 */}
  </main>{/* <!-- End #main --> */}

  
            </div>
        )
    }
}
export default Home