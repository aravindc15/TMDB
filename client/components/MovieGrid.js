import React from 'react';
import App from './App'

class MovieGrid extends React.Component{
  render() {
    console.log(this.props.data);
    return (
      <div className="photo-grid">
      <App />
        
      </div>
    )
  }
};

export default MovieGrid;
