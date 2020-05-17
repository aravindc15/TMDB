import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import axios from 'axios'
import Movie from './Movie';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movie_data:[],
      
    }
  }
  componentDidMount(){
    
    const option={
      url:'https://api.themoviedb.org/3/movie/popular?api_key=123',
      method:'GET'
    }
    axios(option).then((response)=>{
            
           this.setState({movie_data:response.data.results});
           console.log('During api call',this.state.movie_data)
           console.log(this.state.movie_data)

    }).catch((res)=>res)
  }


    
  
    render(){
    if(!this.state.movie_data){
      return(
        
        <ReactLoading type="bars" color="blue" height={667} width={375}  />
        
      )
    }
      
      return (
       <div className="photo-grid">
          {this.state.movie_data.map((post)=>{
            return <Movie data={post} />
          })}
       </div>  
      )

  }  
    
}


export default App;
