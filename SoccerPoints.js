//Write a fumction that takes such collection and ocunts the points of pur taim in the championship. Rules for counting point win 3 tie =1 lose =0

function points(games) {
    return games.reduce((acc, game) => {
        const [x,y] = game.split(':');
        const points = x > y ? 3 :x ===y ? 1 : 0;
        acc += points;
        return acc;
    }, 0)
}
// For each result you have one string
// You have to break apart the string
// Keep tract of all values and keep track of it

const points = (games) =>
    games.reduce((acc, game) => {
        const [x,y] = game.split(':');
        const points = x > y ? 3 :x ===y ? 1 : 0;
        return acc += points;
    }, 0)
