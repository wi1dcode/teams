import React from "react"

class Counter extends React.Component {
    render() {
        return(
            <div>
            <button onClick={this.props.substract}>+</button>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.increase}>-</button>
            </div>
        )
    }
}


export default Counter