
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  render() {
    return (
      <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href=".">NASA Search Photo</a>
		  <div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto">
			</ul>
			<form className="form-inline my-2 my-lg-0">
			  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		  </div>
		</nav>
      </div>
    );
  }
}

export default Search;
