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
        if (this.state.loading) return <div>로딩중..</div>;
        if (this.state.error) return <div>에러가 발생했습니다</div>;
        if (!this.state.users) return null;
        return (
          <div>
            <input type="text" value={this.state.text} onChange={this.setText} name="text"/>
            <button onClick={this.fetchUsers}>검색</button>
            <ul>
                {this.state.users.collection.items.map(user => {
                    if (user.links)
                    return (
                <li>
                    <img src={user.links[0].href}/>
                    <p> {user.data[0].title} </p>
                </li>)
                else return <p> no-image</p>
                })}
            </ul>
          </div>
        );
    }
}

export default Users;