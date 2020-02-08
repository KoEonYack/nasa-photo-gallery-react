import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: false,
            error: null,
            text: "Seoul",
            recent_text: ""
        }
        this.useEffect();
    }
    
    fetchUsers = async () => {
        try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        this.setState({
            error: null, users: null, loading: true
        })
        // loading 상태를 true 로 바꿉니다.
        const response = await axios.get(
            'https://images-api.nasa.gov/search?q='+this.state.text
        )
        console.log(response);
        this.setState({users: response.data, loading: false})
            // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
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
        if (this.state.loading) return <div class="loader"></div>;
        if (this.state.error) return <div>오류가 발생했습니다.</div>;
        if (!this.state.users) return null;
        return (
          <div>
            <main role="main">
            <div className="album py-5 bg-white">
                <div className="container">
                    {this.recent_text = this.state.text}
                    <Search s_value={this.state.text} s_change={this.setText} s_click={this.fetchUsers}/>
                    <div> <strong>최근 검색어:</strong> {this.recent_text = this.recent_text + " " }  </div>
                    <br /><br />
                    {this.state.users.collection.metadata.total_hits}

                <div className="row">
                        {this.state.users.collection.items.map(user => {
                            if (user.links)
                                return (
                                    <div className="col-md-4">
                                        <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" src={user.links[0].href} alt="NASA image"/>
                                            <div className="card-body">
                                                <p className="card-text"><strong>Title:</strong> {user.data[0].title}</p>
                                                <p className="card-text"><strong>Keywords:</strong> {user.data[0].keywords}</p>
                                                <p className="card-text"><strong>Description:</strong> {user.data[0].description}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-muted"><strong>Date Created:</strong> {user.data[0].date_created}</small>
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