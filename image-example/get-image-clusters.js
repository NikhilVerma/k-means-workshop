export default function getImageClusters(pixelItems, numClusters) {
    // Simple implementation
    const totalClusters = pixelItems.reduce((acc, { r, g, b }) => {
        const pixelCell = `${r},${g},${b}`;
        if (!acc[pixelCell]) {
            acc[pixelCell] = {
                color: { r, g, b },
                count: 1,
            };
        }

        acc[pixelCell].count++;

        return acc;
    }, {});

    const clusters = Object.values(totalClusters)
        .sort((keyA, keyB) => keyB.count - keyA.count)
        .slice(0, numClusters);

    return clusters;
}
