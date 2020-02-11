import React from 'react';
import axios from 'axios';
import Search from './Search'
import Pagination from './Pagination'
import Card from './Card'


class NasaData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nasaData: null,
            loading: false,
            error: null,
            text: "Seoul",
            ////////////////
            posts: [],
            setPosts: [],
            setLoading: false,
            currentPage: 1,
            setCurrentPage: 1,
            postsPerPage: 6,
            //indexOfLastPost: 0,
            //indexOfFirstPost: 1,
            ///////////////////
        }

        this.useEffect();
    }
    
    fetchData = async () => {
        try {
            this.setState({
                error: null, nasaData: null, loading: true
            })
            const response = await axios.get(
                'https://images-api.nasa.gov/search?q='+this.state.text
            )
            //console.log(response);
            this.setState({nasaData: response.data, loading: false})
        } catch (e) {
            this.setState({error: e, loading: false})
        }
    }

    useEffect = () => {
        this.fetchData();
    }
    
    setText = (e) => {
        e.preventDefault();
        this.setState({text: e.target.value});
    }

    paginate = (pageNumber) => { 
        this.setState({pageNumber: pageNumber}); 
    }

    render() {
        if (this.state.loading) return <div class="loader"></div>;
        if (this.state.error) return <div>오류가 발생했습니다.</div>;
        if (!this.state.nasaData) return null;


        //this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        //this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
        //this.currentPosts = this.state.nasaData.collection.items.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);


        return (
          <div>
            <main role="main">
            <div className="album py-5 bg-white">
                <div className="container">
                    <Search s_value={this.state.text} s_change={this.setText} s_click={this.fetchData}/>
                    <br /><br />
                <div className={"row"}>
                        {this.state.nasaData.collection.items.map(apiData => {
                            return <Card
                                user={apiData}
                                img_src={apiData.links ? apiData.links[0].href : "http://design-ec.com/d/e_others_50/m_e_others_501.png"}
                                title={apiData.data[0].title ? apiData.data[0].title : "No title"}
                                keywords = {apiData.data[0].keywords ? apiData.data[0].keywords  : ["No keyword info"] }
                                description = {apiData.data[0].description ? apiData.data[0].description : "No description info" }
                                date_created={apiData.data[0].date_created ? apiData.data[0].date_created : "No date created info" }
                                key={apiData.data[0].nasa_id ? apiData.data[0].nasa_id : "No nasa id"}
                            />
                        })}


                            <Pagination 
                                postsPerpage={this.state.postsPerPage} 
                                totalPosts={this.state.nasaData.collection.metadata.total_hits} 
                                paginate={this.paginate}
                            />
                        </div>
                    </div>
                </div>
            </main>
          </div>
        );
    }
}



export default NasaData;



