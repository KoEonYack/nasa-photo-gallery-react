
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Body extends Component {
  render() {
    return (

	<main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src="https://image.dongascience.com/Photo/2018/01/15159739972169[1].jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Test</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button className="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button className="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
			</div>


            </div>
          </div>
		</div>
    </main>
		
	
    );
  }
}

export default Body;
