import { useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../utils/SearchBox';
import Scroll from '../utils/Scroll';
import '../styles/Styles.css';
import ErrorBoundary from './ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error 
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {
    const { searchField, onSearchChange, onRequestRobots, isPending, robots } = props;

    useEffect(() => {
        onRequestRobots();
    }, []);

    const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? <h1 className='app-text-style'>Loading</h1> :  (
            <div className='app-text-style'>
                <h1 className='title-size'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

