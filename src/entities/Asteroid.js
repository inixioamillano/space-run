import React, {PureComponent} from 'react'
import asteroid from '../images/asteroid.png'

export class Asteroid extends PureComponent {
    render(){
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
        <div style={{}}>
            <img style={{ position: "absolute", height: size, bottom: y, left: x }} alt="asteroid" src={asteroid}/>
        </div>
        
    )
    }
}
