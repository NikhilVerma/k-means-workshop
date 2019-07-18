import './index.css';
import '../index.css';

const NUM_CLUSTERS = 3;
const NUM_POINTS = 50;

clusterPoints(getRandomPoints(window.innerWidth, window.innerHeight, NUM_POINTS), NUM_CLUSTERS);

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
        x: points[id].x,
        y: points[id].y,
        color: getRandomColor(),
        totalPoints: 0,
        totalX: 0,
        totalY: 0,
    }));

    // Find nearest points to cluster
    setInterval(() => {
        for (let idx = 0; idx < points.length; idx++) {
            let closestCluster = clusters[0];
            let clusterDistance = distance(clusters[0], points[idx]);

            for (let cIdx = 1; cIdx < clusters.length; cIdx++) {
                const currentClusterDistance = distance(clusters[cIdx], points[idx]);

                if (currentClusterDistance < clusterDistance) {
                    closestCluster = clusters[cIdx];
                    clusterDistance = currentClusterDistance;
                }
            }

            points[idx].color = closestCluster.color;
            closestCluster.totalPoints++;
            closestCluster.totalX += points[idx].x;
            closestCluster.totalY += points[idx].y;
        }

        for (let cIdx = 0; cIdx < clusters.length; cIdx++) {
            const currentCluster = clusters[cIdx];
            currentCluster.x = currentCluster.totalX / currentCluster.totalPoints;
            currentCluster.y = currentCluster.totalY / currentCluster.totalPoints;
            currentCluster.totalPoints = 0;
            currentCluster.totalX = 0;
            currentCluster.totalY = 0;
        }

        drawPoints([...points, ...clusters]);
    }, 1000);
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
