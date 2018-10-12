import React from 'react';
import { Link } from 'react-router';
import {Circle} from 'rc-progress'
class Single extends React.Component{
 
  render() {
    
    console.log(this.props.location.state);
     const data = this.props.location.state;

    // const i = this.props.posts.findIndex((post) => post.code === postId);
    // const post = this.props.posts[i];

    // const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
      <figure className="grid-figure">
     
         
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data.poster_path}`} alt={data.title} className="grid-photo" />

          </figure>   
            <div className="comments" >
            <div className="comment">
            <h2>{data.title}</h2>
           
            </div>
            <div className="comment">
            <h3>{data.overview}</h3>
            </div>
            </div>
         
         
      </div>
    )
  }
};

export default Single;
