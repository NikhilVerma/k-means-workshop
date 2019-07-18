import './index.css';
import '../index.css';

const NUM_CLUSTERS = 3;
const NUM_POINTS = 100;

clusterPoints(getRandomPoints(window.innerWidth, NUM_POINTS), NUM_CLUSTERS);

function clusterPoints(points, numClusters) {
    drawPoints(points);

    const clusterIds = [];

    // Pick random clusters
    while (clusterIds.length < numClusters) {
        const id = Math.floor(Math.random() * points.length);
        if (clusterIds.indexOf(id) === -1) {
            clusterIds.push(id);
        }
    }

    const clusters = clusterIds.map(id => ({
        isCluster: true,
        value: points[id].value,
        color: getRandomColor(),
        totalPoints: 0,
        totalValue: 0,
    }));

    // Find nearest points to cluster
    setInterval(() => {
        for (let idx = 0; idx < points.length; idx++) {
            let closestCluster = clusters[0];
            let clusterDistance = Math.abs(clusters[0].value - points[idx].value);

            for (let cIdx = 1; cIdx < clusters.length; cIdx++) {
                const currentClusterDistance = Math.abs(clusters[cIdx].value - points[idx].value);

                if (currentClusterDistance < clusterDistance) {
                    closestCluster = clusters[cIdx];
                    clusterDistance = currentClusterDistance;
                }
            }

            points[idx].color = closestCluster.color;
            closestCluster.totalPoints++;
            closestCluster.totalValue += points[idx].value;
        }

        for (let cIdx = 0; cIdx < clusters.length; cIdx++) {
            const currentCluster = clusters[cIdx];
            currentCluster.value = currentCluster.totalValue / currentCluster.totalPoints;
            currentCluster.totalPoints = 0;
            currentCluster.totalValue = 0;
        }

        drawPoints([...points, ...clusters]);
    }, 1000);
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
