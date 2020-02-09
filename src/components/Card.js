import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Card extends React.Component {
    render(){
        return(
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={this.props.img_src} alt="NASA image"/>
                    <div className="card-body">
                        <p className="card-text"><strong>Title:</strong> {this.props.title}</p>
                        <p className="card-text"><strong>Keywords:</strong> 
                                {this.props.keywords.map((keyword) => { return keyword + ", "} )} 
                        </p>
                        <p className="card-text"><strong>Description:</strong> {this.props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted"><strong>Date Created:</strong> {this.props.date_created}</small>
                        </div>
                    </div>
                </div>
            </div>
)
    }
}

export default Card;
