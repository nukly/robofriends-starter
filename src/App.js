import React from 'react'
import CardList from './components/CardList'
import {robots} from './robots'
import Seacrhbox from './components/Seacrhbox'



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
           return  response.json()
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
    
        this.setState({searchfield: event.target.value})

    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (

            <div className='tc'>
                <h1>Robofriends</h1>
                <Seacrhbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
          )
    }
}

export default App