
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  render() {
    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input value={this.props.s_value} onChange={this.props.s_change} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={this.props.s_click} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
  }
}

export default Search;
