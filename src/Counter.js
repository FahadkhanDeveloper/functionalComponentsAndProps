import {Component, Coponent} from 'react';
class Counter extends Component {
    constructor() {
        super();   // super is used to override the state of the parent class (component class) and we a new state 
        this.state={
            count:0
        }
    }
    plus= () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    minus = () => {
        // console.log("Minus is called")
        this.setState({
            count:this.state.count - 1
        })
    }
    reset = () => {
        // console.log("Reset is Called")
        this.setState({
            count:0
        })
    }
render() {
    return(
        <div>
              Count: {this.state.count}
            <button onClick={this.plus}>Plus</button>
            <button onClick={this.minus}>Minus</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        


    )
}
}
export default Counter;