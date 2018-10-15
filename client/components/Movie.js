import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Single from './Single'
class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state={
          path:'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
        }
      }
      
  render() {
    let  data  = this.props.data;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={{pathname:`/view/${this.props.data.id}`,
                     state:this.props.data }}>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data.poster_path}`} alt={data.title} className="grid-photo" />
          </Link>


        </div>

        <figcaption>
          <p><strong>{data.title}</strong></p>
          <div className="control-buttons">
            <button className="likes"> Rate</button>
            <Link className="button" to="">
              <span className="comment-count">
                <span className="speech-bubble"></span>
                Comment
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
     
    )
  }

};

export default Movie;
