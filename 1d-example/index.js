import './index.css';
import '../index.css';

const NUM_CLUSTERS = 3;
const NUM_POINTS = 100;

clusterPoints(getRandomPoints(window.innerWidth, NUM_POINTS), NUM_CLUSTERS);

function clusterPoints(points, numClusters) {
    drawPoints(points);
}

function drawPoints(points) {
    const divElement = document.querySelector('.one-d-example');
    divElement.innerHTML = '';

    points.forEach(({ value, color, isCluster }) => {
        const point = document.createElement('div');
        point.className = 'point';
        point.style.background = color;
        point.style.left = `${value}px`;

        if (isCluster) {
            point.style.width = '10px';
        }

        divElement.appendChild(point);
    });
}

function getRandomPoints(max, count) {
    // Don't do this
    return Array(count)
        .fill(0)
        .map(() => ({ color: getRandomColor(), value: Math.round(max * Math.random()) }));
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
