"use strict";
/**
 * 2. Pintar una región rectangular de un color utilizando el Contexto de HTML5.
 * 3. Pintar una región rectangular de un color utilizando la estructura de ImageData.
 * 4. Especificar la función para pintar un cuadrado utilizando un gradiente.
 */


// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = 500;
let height = 500;

let img = ctx.createImageData(width, height);
cuadradoGradiente(img);
ctx.putImageData(img, 0, 0);

/**
 *              4. cuadrado con gradiente
 *
 */
function cuadradoGradiente(imgData) {
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 255;
    
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            setPixel(imgData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imgData, x, y, r, g, b, a) {
    let i = (x + y * height) * 4;
    imgData.data[i + 0] = r;
    imgData.data[i + 1] = g;
    imgData.data[i + 2] = b;
    imgData.data[i + 4] = a;
}









// /**
//  *              2. rectangulo
//  */
// function rectangulo() {
//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.fillRect(10 /* pos x */, 10 /* pos y */, width * 0.5, height * 0.3);
// }

// rectanguloImgData()
// /**
//  *              3. rectangulo con imageData (matriz)
//  */
// function rectanguloImgData() {
//   let imgData = ctx.createImageData(width * 0.5, height * 0.3);
//   let i = 0;
//   while (i < imgData.data.length) {
//     imgData.data[i++] = 255;
//     imgData.data[i++] = 0;
//     imgData.data[i++] = 0;
//     imgData.data[i++] = 255;
//   }
//   ctx.putImageData(imgData, 10, 10);
// }
