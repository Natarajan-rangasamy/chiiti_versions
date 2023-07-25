import React, { Component } from "react";
import CardList from "./CardList";
import Search from "./SearchBox";
import Scroll from "./Scroll";
// import { render } from "@testing-library/react";





class App extends Component{

  constructor(){
    super()
    this.state = {
      robo : [],
      searchfield : ''
    } 

  }
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState ({robo :users}))
  }

  onSearchChange = (event) =>{

    this.setState({searchfield:event.target.value })
  }


  render(){
    const { robo,searchfield } = this.state;
    const filteredrobo = robo.filter(robo => {
      return robo.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robo.length ?
       <h1>Loading...</h1> :

      (
        <>
          <div >
            <h1 className="tc f1">Chitti versions</h1>
            <Search searchChange={this.onSearchChange}/>
            <div className="">
              <Scroll>
                 <CardList robo={filteredrobo} />
              </Scroll>
            </div>
          </div>
        </>
      );

    }
  
  }


export default App;