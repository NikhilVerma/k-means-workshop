import './index.css';
import '../index.css';

const NUM_CLUSTERS = 3;
const NUM_POINTS = 50;

clusterPoints(getRandomPoints(window.innerWidth, window.innerHeight, NUM_POINTS), NUM_CLUSTERS);

function clusterPoints(points, numClusters) {
    drawPoints(points);
}

function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function drawPoints(points) {
    const divElement = document.querySelector('.two-d-example');
    divElement.innerHTML = '';

    points.forEach(({ x, y, color, isCluster }) => {
        const point = document.createElement('div');
        point.className = 'point';
        point.style.background = color;
        point.style.left = `${x}px`;
        point.style.top = `${y}px`;

        if (isCluster) {
            point.style.width = '50px';
            point.style.height = '50px';
        }

        divElement.appendChild(point);
    });
}

function getRandomPoints(maxX, maxY, count) {
    // Don't do this
    return Array(count)
        .fill(0)
        .map(() => ({
            color: getRandomColor(),
            x: Math.round(maxX * Math.random()),
            y: Math.round(maxY * Math.random()),
        }));
}

function getRandomColor() {
    return `rgb(${getRandomValueBetween(0, 255)},${getRandomValueBetween(
        0,
        255
    )},${getRandomValueBetween(0, 255)})`;
}

function getRandomValueBetween(min, max) {
    return Math.round(min + Math.random() * (max - min));
}
