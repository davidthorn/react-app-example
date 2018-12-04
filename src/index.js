import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Navbar() {
    return <div className="Navbar"></div>
}

class Greeting extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            counting: props.shouldStartTimer,
            time: new Date().toLocaleTimeString() , 
            message: this.props.message
         }
    }

    handleClick(e) {
        e.preventDefault()
        if(this.handle !== undefined) {
            clearInterval(this.handle)
            this.handle = undefined
            this.setState({counting: false })
        } else {
            this.startTimer()
        }
    }

    startTimer() {
        this.handle = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
                counting: true
            })
       }, 1000)
    }

    componentWillMount() {
        if(this.state.counting) {
            this.startTimer()
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1>Hi there, {this.state.message}</h1>
                <h3>The time currently is:</h3>
                <p>
                    {this.state.time}
                </p>
                <div className="buttonWrapper">
                <button onClick={this.handleClick.bind(this)}>{ this.state.counting ? "Stop" : "Start" }</button>
                </div>
                
            </div>
            
        )
    }
    
}

function David(props) {
    return <Greeting message={props.name} shouldStartTimer={true}/>
}

ReactDOM.render(<David name="David"/>, document.getElementById('root'))