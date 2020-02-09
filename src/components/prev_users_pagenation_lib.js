import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search'
import Pagination from './Pagination'


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: false,
            error: null,
            text: "Seoul",
            recent_text: "",
            ////////////////
            posts: [],
            setPosts: [],
            setLoading: false,
            currentPage: 1,
            setCurrentPage: 1,
            postsPerPage: 2,
        }

//        this.paginate();
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


        this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
        this.currentPosts = this.state.users.collection.items.slice(this.indexOfFirstPost, this.indexOfLastPost);
        this.paginate = (pageNumber) => this.state.setCurrentPage(pageNumber);


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
                                        
                            1. {this.state.postsPerPage} /
                            2. {this.state.users.collection.metadata.total_hits} /
                            3. {this.state.paginate} 
                            <br />
                            <Pagination 
                                postsPerpage={this.state.postsPerPage} 
                                totalPosts={this.state.users.collection.metadata.total_hits} 
                                paginate={this.state.paginate}
                            />
                        </div>
                    </div>
                </div>
            </main>
          </div>
        );
    }
}

export default Users;