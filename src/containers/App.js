import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../utils/SearchBox';
import Scroll from '../utils/Scroll';
import '../styles/Styles.css';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length? <h1 className='app-text-style'>Loading</h1> :  (
            <div className='app-text-style'>
                <h1 className='title-size'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    };
};

export default App;