"use strict";
/**
 * 4. Especificar la función para pintar un cuadrado utilizando un gradiente.
 */

// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = cv.width;
let height = cv.height;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 255;
let b = 255;
let a = 255;

drawRect(imageData, r, g, b, a);

function drawRect(imageData, r, g, b, a) {

  
  for (let x = 0; x < width; x++) {
    if (x <= width / 2) {
      let coeficiente = 255 / (width / 2);
      r = coeficiente * x;
      g = coeficiente * x;
      b = coeficiente * x;
    }
    
    for (let y = 0; y < height; y++) {
      setPixel(imageData, y, x, r, g, b, a);
    }
  }
}

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * width) * 4;
  imageData.data[index] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}

ctx.putImageData(imageData, 0, 0);