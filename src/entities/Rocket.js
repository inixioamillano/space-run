import React from "react";
 
function Rocket(props) {
    const size = 100;
    const x = props.x - size / 2;
    const y = 15
    return (
        <div onTouchStart={e => console.log(e.touches[0].clientX)}>
            <img style={{ position: "absolute", height: size, bottom: y, left: x }} alt="rocket" src={props.image}/>
        </div>
    );
}
 
export { Rocket };