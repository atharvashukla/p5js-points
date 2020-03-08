import p5 from 'p5';
function getCenter(p1, p2) {
    const centerX = (p1.x + p2.x) / 2;
    const centerY = (p1.y + p2.y) / 2;
    return { x: centerX, y: centerY };
}
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
import p from './points.json';
let state = p.points;
const sketch = (p) => {
    p.preload = () => { };
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    function toDraw(state) {
        p.background(153);
        p.strokeWeight(2);
        p.stroke('red');
        p.fill('blue');
        const pointCircleRadius = 8;
        const pointA = state[0];
        const pointAX = pointA.x;
        const pointAY = pointA.y;
        const pointB = state[1];
        const pointBX = pointB.x;
        const pointBY = pointB.y;
        p.circle(pointAX, pointAY, pointCircleRadius);
        p.circle(pointBX, pointBY, pointCircleRadius);
        p.stroke('white');
        p.line(pointAX, pointAY, pointBX, pointBY);
        p.stroke('red');
        const centerPoint = getCenter(pointA, pointB);
        const centerPointX = centerPoint.x;
        const centerPointY = centerPoint.y;
        p.circle(centerPointX, centerPointY, pointCircleRadius);
        p.noStroke();
        p.fill('white');
        const distance = getDistance(pointA, pointB).toFixed(3);
        p.text('distance: ' + distance, centerPointX, centerPointY - 20);
    }
    p.draw = () => {
        toDraw(state);
    };
};
new p5(sketch);
//# sourceMappingURL=index.js.map