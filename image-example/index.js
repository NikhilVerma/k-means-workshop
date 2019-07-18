import getPixelsFromSrc from './get-pixels-from-src';
import getImageClusters from './get-image-clusters';
import './index.css';
import '../index.css';

const imageSrc = require('../images/example1.webp');

document.querySelector('.sample-image').src = imageSrc;

getPixelsFromSrc(imageSrc, pixels => {
    const clusters = getImageClusters(pixels, 5);
    const colorsContainer = document.querySelector('.colors-found');

    clusters.forEach(({ color: { r, g, b }, count }) => {
        const color = document.createElement('div');
        color.className = 'color';
        color.style.background = `rgba(${r},${g},${b})`;
        color.textContent = count;
        colorsContainer.appendChild(color);
    });

    console.log(clusters);
});
