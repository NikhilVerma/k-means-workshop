/**
 * This function returns pixel array from a given image
 * It resizes the image down to a specific size before to simplify runtime
 */
const getPixelsFromImg = (function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    /**
     * We scale the image down to 40px width
     * @type {Number}
     */
    const TARGET_WIDTH = 300;

    /**
     * Number of steps to take when scaling the image
     * @type {Number}
     */
    const SCALE_STEPS = 10;

    return function(img, pixelCallback) {
        const width = img.width;
        const height = img.height;
        canvas.width = img.width;
        canvas.height = img.height;

        let i;
        let len;
        let currW = width;
        let currH = height;
        let lastW;
        let lastH;
        const step = (width - TARGET_WIDTH) / SCALE_STEPS;
        const ratio = width / height;
        const arr = [];

        ctx.drawImage(img, 0, 0, width, height);

        for (i = 1; i <= SCALE_STEPS; i++) {
            lastW = width - i * step;
            lastH = lastW / ratio;
            ctx.drawImage(canvas, 0, 0, currW, currH, 0, 0, lastW, lastH);
            currW = lastW;
            currH = lastH;
        }

        const data = ctx.getImageData(0, 0, currW, currH).data;

        for (i = 0, len = data.length; i < len; i += 4) {
            arr.push({
                r: data[i],
                g: data[i + 1],
                b: data[i + 2],
            });
        }

        pixelCallback(arr);
    };
})();

export default function getPixelsFromSrc(src, pixelCallback) {
    const img = new Image();
    img.onload = function() {
        getPixelsFromImg(this, pixelCallback);
    };
    img.src = src;
}
