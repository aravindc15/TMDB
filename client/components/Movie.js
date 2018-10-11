import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
          <Link to={`/view/${data.title}`}>
            <img src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg' alt={data.title} className="grid-photo" />
          </Link>

           <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={data.title} className="likes-heart">{data.title}</span>
          </CSSTransitionGroup> 

        </div>

        <figcaption>
          <p>{data.title}</p>
          <div className="control-buttons">
            <button className="likes">&hearts; More Info</button>
            <Link className="button" to={`/view/${data.title}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                Comments
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }

};

export default Movie;
