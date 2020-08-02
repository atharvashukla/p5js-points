import p5 from 'p5';

interface Point {
  x: number;
  y: number;
}

function getCenter(p1: Point, p2: Point): Point {
  const centerX = (p1.x + p2.x) / 2;
  const centerY = (p1.y + p2.y) / 2;
  return { x: centerX, y: centerY };
}

function getDistance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

import p from './points.json';
const pointA: Point = p.pointA;
const pointB: Point = p.pointB;

const sketch = (p: p5): void => {
  p.preload = (): void => {};

  p.setup = (): void => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.windowResized = (): void => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  function drawPoint(point: Point, radius: number): void {
    p.circle(point.x, point.y, radius);
  }

  function drawLine(point1: Point, point2: Point): void {
    p.line(point1.x, point1.y, point2.x, point2.y);
  }

  function drawAnnotation(point: Point, distance: number): void {
    p.text('distance: ' + distance.toFixed(3), point.x, point.y - 20);
  }

  function drawLineSegment(p1: Point, p2: Point): void {
    drawPoint(p1, 4);
    drawPoint(p2, 4);
    drawLine(p1, p2);
  }

  function drawCenterAnnotation(p1: Point, p2: Point): void {
    const centerPoint = getCenter(p1, p2);
    const distance = getDistance(p1, p2);

    drawPoint(centerPoint, 4);
    drawAnnotation(centerPoint, distance);
  }

  function toDraw(): void {
    drawLineSegment(pointA, pointB);
    drawCenterAnnotation(pointA, pointB);
  }

  p.draw = (): void => {
    toDraw();
  };
};

new p5(sketch);
