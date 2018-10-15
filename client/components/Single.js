import React from 'react';
import axios from 'axios'
import { Link } from 'react-router';
import {Circle} from 'rc-progress'
class Single extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
    data:{}
    }
  }
  componentDidMount(){
    
    const option={
      url:`https://api.themoviedb.org/3/movie/${this.props.location.state.id}?api_key=1e2bbb1e97b4751a4945af538fa72a41`,
      method:'GET'
    }
    axios(option).then((response)=>{
            
           this.setState({data:response.data});
           console.log('During api call',response)
           console.log(this.state.data);

    }).catch((res)=>res)
  }
  render() {
    
    console.log(this.props.location.state);
     const data = this.props.location.state;

    // const i = this.props.posts.findIndex((post) => post.code === postId);
    // const post = this.props.posts[i];

    // const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
      <figure className="grid-figure">
     
          
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.data.poster_path}`}  className="grid-photo" />

          </figure>   
            <div className="comments" >
            <div className="comment">
            <h2>{this.state.data.title}</h2>
           
            </div>
            <div className="comment">
            <h3>{this.state.data.overview}</h3>
            </div>
            </div>
         
         
      </div>
    )
  }
};

export default Single;
