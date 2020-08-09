const MoveRocket = (entities, { input }) => {
    
    let { payload } = input.find(x => x.name === "onMouseMove") || {};
    const rocket = entities["rocket"];
    if (payload) {
      rocket.target = payload.pageX;
    }
    if (Math.abs(rocket.target - rocket.x)>10){
        if (rocket.target < rocket.x){
            rocket.x = rocket.x - 10
        } else {
            rocket.x = rocket.x + 10
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
            asteroid.speed = 10 + Math.random()*5
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
            asteroid.speed = 10 + Math.random()*5
            if (score.lives === 0){
                score.gameOver(score.score)
                score.score = 0
            }
        }
        asteroid.y = asteroid.y - asteroid.speed;
    }
    return entities
    
}
export { MoveRocket, MoveAsteroid };