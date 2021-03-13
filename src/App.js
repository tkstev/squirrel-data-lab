import React from 'react';
import './App.css';
import Squirrel from './Components/Squirrel.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squirrels:[]
    };
}

//   add a componentDidMount lifecycle method to fetch data from the API
componentDidMount = () => { 
    let appToken = 'saTk3qHoWnoCdGHXFjmDhHqht';
    let query = `https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=${appToken}&running=true`; 
    fetch(query)
    .then(response => response.json())
   .then(data => 
    {this.setState(state=> {
        state.squirrels = data
    return state  
		})
    })
    .catch(e => console.log(e))
}

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
				<h1>{this.state.squirrels.length}</h1>
				{this.state.squirrels.map(squirrels => {
					return <Squirrel id= {squirrels.unique_squirrel_id}
									 age = {squirrels.age}
									running = {squirrels.running}
					/>
				})
			}
      </div>
		);
		}
  }


export default App;
