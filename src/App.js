import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            advice: ''
        };

        this.getAdvice = this.getAdvice.bind(this);
    }

    componentDidMount() {
        this.getAdvice();
    }

    getAdvice () {
        axios.get(
            'https://api.adviceslip.com/advice'
        ).then(response => {
            const data = response.data.slip.advice;
            console.log(data);

            this.setState({advice : data});
        }).catch(error => {
            console.log(error);
        });
    }

    render(){

        const {advice} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="header"> {advice}</h1>
                </div>
            </div>
            
        );
    }
}

export default App;