import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            advice: ''
        };

        this.getAdvice = this.getAdvice.bind(this);
        this.getAdviceByID = this.getAdviceByID.bind(this);
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

    getAdviceByID() {
        const id = parseInt(Math.random()*200);

        axios.get(
            `https://api.adviceslip.com/advice/${id}`
        ).then(response => {
            console.log(id);
            const data = JSON.parse(response.data + "}");
            const advice = data.slip.advice;
            console.log(advice);
            this.setState({advice : advice});
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
                    <button className ="button" onClick={this.getAdviceByID}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;