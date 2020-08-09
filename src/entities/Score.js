import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default function Score(props) {
    const getShieldStyle = (shield) => {
        return {
            marginLeft: 2,
            marginRight: 2,
            fontSize: 20,
            color: shield > props.lives ? "#B3000C" : "#00B32C"
        }
    }
    return (
        <div className="space" style={{textAlign: "center", position: "absolute", top: 0, left: 0, width: "100%", height: 50, zIndex: 10, color: "white", background: "linear-gradient(to right top, #052337, #273162, #6c327a, #b51a72, #eb124b)"}}>
                Score: {props.score}
                <br />
                <i className="fa fa-shield" style={getShieldStyle(1)}></i>
                <i className="fa fa-shield" style={getShieldStyle(2)}></i>
                <i className="fa fa-shield" style={getShieldStyle(3)}></i>
                <i className="fa fa-shield" style={getShieldStyle(4)}></i>
                <i className="fa fa-shield" style={getShieldStyle(5)}></i>
        </div>
    )
}
