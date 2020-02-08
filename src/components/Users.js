import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: false,
            error: null,
            text: "Seoul"
        }
        this.useEffect();
    }
    
    fetchUsers = async () => {
        try {
            this.setState({
                error: null, users: null, loading: true
            })

            const response = await axios.get(
                'https://images-api.nasa.gov/search?q='+this.state.text
            )
            console.log(response);
            this.setState({users: response.data, loading: false})
        } 
        catch (e) {
            this.setState({error: e, loading: false})
        }
    }

    useEffect = () => {
        this.fetchUsers();
    }

    setText = (e) => {
        e.preventDefault();
        this.setState({text: e.target.value});
    }

    render() {
        if (this.state.loading) return <div>불러오는 중..</div>;
        if (this.state.error) return <div>오류가 발생했습니다.</div>;
        if (!this.state.users) return null;
        return (
          <div>

<form className="form-inline my-2 my-lg-0">
			  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>


            <input type="text" value={this.state.text} onChange={this.setText} name="text"/>
            <button onClick={this.fetchUsers}>검색</button>
            <main role="main">
            <div className="album py-5 bg-light">
                <div className="container">
                <div className="row">
                        {this.state.users.collection.items.map(user => {
                            if (user.links)
                                return (
                                    <div className="col-md-4">
                                        <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" src={user.links[0].href} alt="NASA image"/>
                                            <div className="card-body">
                                                <p className="card-text">{user.data[0].title}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">9 mins</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            else return <p> no-image</p>
                        })}
                    </div>
                </div>
                </div>
            </main>
          </div>
        );
    }
}

export default Users;