import React from 'react';
import '../styles/Styles.css';

class ErrorBoundary extends React.Component {
    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 className='app-text-style'>Oops. That is not good</h1>
        }
        return this.props.children;
    };
};

export default ErrorBoundary;