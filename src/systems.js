const MoveRocket = (entities, { input }) => {
    
    let { payload } = input.find(x => x.name === "onMouseMove") || {};
    const rocket = entities["rocket"];
    if (payload) {
      rocket.x = payload.pageX;
    }
    return entities;
};

const MoveMobileRocket = (entities, { input }) => {
    
    let { payload } = input.find(x => x.name === "onTouchMove") || {};
    const rocket = entities["rocket"];
    if (payload) {
        const newLocation = payload.touches[0].pageX;
        if (newLocation < window.innerWidth && newLocation > 53){
            rocket.x = newLocation
        }
    }
    
    return entities;
};

const MoveAsteroid = (entities, { input }) => {
    if (entities) {
        const asteroid = entities["asteroid"];
        const score = entities["score"];
        const rocket = entities.rocket
        if (asteroid.y < 100){
            asteroid.y = window.innerHeight - 100;
            asteroid.x = Math.random()*(window.innerWidth - 101);
            if (score) {
                score.score = score.score+50;
            }
        }
        const aLeft = asteroid.x;
        const aRight = aLeft + 100
        const rocketLeft = rocket.x;
        const rocketRight = rocketLeft + 53.09;
        var overlap = (Math.abs(asteroid.y - rocket.y) < 100 &&  ((rocketLeft > aLeft && rocketLeft < aRight) || (rocketRight > aLeft && rocketRight < aRight)))
        if (overlap){
            score.lives = score.lives-1;
            asteroid.y = window.innerHeight - 100;
            asteroid.x = Math.random()*(window.innerWidth-101);
            if (score.lives < 0){
                score.gameOver(score.score)
                score.score = 0
            }
        }
        asteroid.y = asteroid.y - asteroid.speed;
    }
    return entities
    
}
export { MoveRocket, MoveAsteroid, MoveMobileRocket };