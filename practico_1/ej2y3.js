"use strict";
/**
 * 2. Pintar una región rectangular de un color utilizando el Contexto de HTML5.
 * 3. Pintar una región rectangular de un color utilizando la estructura de ImageData.
 */

// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = 500;
let height = 500;

rectanguloImgData();
ctx.putImageData(imgData, 10, 10);

/**
 *              2. rectangulo
 */
function rectangulo() {
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10 /* pos x */, 10 /* pos y */, width * 0.5, height * 0.3);
}

/**
 *              3. rectangulo con imageData (matriz)
 */
function rectanguloImgData() {
  let imgData = ctx.createImageData(width * 0.5, height * 0.3);
  let i = 0;
  while (i < imgData.data.length) {
    imgData.data[i++] = 255;
    imgData.data[i++] = 0;
    imgData.data[i++] = 0;
    imgData.data[i++] = 255;
  }
}
