import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Leaderboard extends React.Component{
    render(){
        return(
            <div>
                <div class="table-stats order-table ov-h">
                      <table class="table ">
                          <thead>
                              <tr>
                                  <th class="serial">#</th>
                                  <th class="avatar">Avatar</th>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Product</th>
                                  <th>Quantity</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="serial">1.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/1.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <span class="name">Louis Stanley</span> </td>
                                  <td> <span class="product">iMax</span> </td>
                                  <td><span class="count">231</span></td>
                                  <td>
                                      <span class="badge badge-complete">Complete</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">2.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/2.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-complete">Complete</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">3.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/3.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-complete">Complete</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">4.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                 
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">5.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">6.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">7.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">8.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">9.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">10.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td><a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">11.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="serial">12.</td>
                                  <td class="avatar">
                                      <div class="round-img">
                                          <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                      </div>
                                  </td>
                                  
                                  <td>  <a href ="" class="name">Gregory Dixon</a> </td>
                                  <td><span class="count">250</span></td>
                                  <td>
                                      <span class="badge badge-pending">Pending</span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                    </div> {/* <!-- /.table-stats --> */}

              
            </div>
        )
    }
}
export default Leaderboard