import React,{Component} from 'react';
import axios from 'axios'
import NavbarHeader,{Button,Navbar,NavbarBrand,NavbarCollapse} from 'react-bootstrap';
import {Router,Link,Route} from 'react-router-dom'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            image:{}
        }
    }
     Child=({match})=>{
        <div>
            <h2>ID:{match.params.id}</h2>
        </div>
    }
    
    componentDidMount(){

        let options={
            url:'https://api.themoviedb.org/3/movie/top_rated?api_key=1e2bbb1e97b4751a4945af538fa72a41',
            method:"GET"
        }
        axios(options).then(
        response=>{this.setState({image:response.data})
           console.log(this.state.image) 
    
    }).catch(response=>console.log(response));
    }
    render(){
        return(
            <Navbar inverse collapseOnSelect>
           
              <NavbarBrand>
                <a href="#home">Brand</a>
              </NavbarBrand>
              <NavbarBrand>
                <a href="#home">Brand</a>
              </NavbarBrand>
              <NavbarBrand>
                <a href="#home">Brand</a>
              </NavbarBrand>
              <NavbarBrand>
                <a href="#home">Brand</a>
              </NavbarBrand>
              <NavbarBrand>
                <a href="#home">Brand</a>
              </NavbarBrand>
            <Router>
                <Route path="/" component={this.Child}>
               
                </Route>
            </Router>

            
          </Navbar>
        )
    }

}

export default App;
