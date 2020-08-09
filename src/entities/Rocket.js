import React, { PureComponent } from "react";
 
class Rocket extends PureComponent {
    
    render() {
        const size = 100;
        const x = this.props.x - size / 2;
        const y = 15
        return (
            <div>
                <img style={{ position: "absolute", height: size, bottom: y, left: x }} alt="rocket" src="rocket.png"/>
            </div>
    );
  }
}
 
export { Rocket };