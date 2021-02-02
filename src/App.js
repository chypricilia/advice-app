import React from 'react';
import axios from 'axios';

class App extends React.Component {


    componentDidMount() {
        this.getAdvice();
    }

    getAdvice () {
        axios.get(
            'https://api.adviceslip.com/advice'
        ).then(response => {
            const data = response.data.slip.advice;
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        return (
            <h1> Test My App</h1>
        );
    }
}

export default App;