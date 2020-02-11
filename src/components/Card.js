import React from 'react';
//import LinesEllipsis from 'react-lines-ellipsis'
//import ReadMoreReact from 'read-more-react';
import ClampLines from 'react-clamp-lines';
import './Card.css';

class Card extends React.Component {
    render(){
        return(
            <div className="col-md-4">
                <div className="card mb-4 box-shadow thecard">
                    <img className="card-img-top" src={this.props.img_src} alt="NASA" />
                    <div className="card-body">
                        <p className="card-text"><strong>Title:</strong> {this.props.title}</p>
                        <p className="card-text"><strong>Date Created:</strong> {this.props.date_created}</p>
                        <p className="card-text"><strong>Keywords:</strong> 
                            {this.props.keywords.map((keyword) => { return keyword + "  "} )} 
                        </p>
                        <p className="card-text"><strong>Description:</strong> 
                            <div className="Synopsis">
                                <ClampLines
                                        text={this.props.description}
                                        id="really-unique-id"
                                        lines={2}
                                        ellipsis="..."
                                        moreText="Read more"
                                        lessText="Collapse"
                                        className="clamp-button"
                                        innerElement="p"
                                    />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
