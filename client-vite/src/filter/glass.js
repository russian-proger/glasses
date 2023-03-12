/**
 * @param {HTMLCanvasElement } canvas
 */
function glassFilter(canvas) {

    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const {width, height, data} = imgData;


    // data - pixel array. There are 4 bytes for each pixel, represented as 4 integers in range [0..255]

    for (let i = 0; i < height; ++i) {
        for (let j = 0; j < width; ++j) {
            const offset = (i*width + j) * 4;
            
            for (let k = 0; k < 3; ++k) {
                data[offset + k] *= 0.75;
            }
        }
    }



    ctx.putImageData(imgData, 0, 0);
}

export default glassFilter;