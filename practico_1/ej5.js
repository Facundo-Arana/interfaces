/*
5. Pintar un rectángulo en pantalla, utilizando tres colores en un gradiente: 
De negro a amarillo en la primera mitad del ancho del rectángulo
De amarillo a rojo, en la segunda mitad.
Por otro lado, en Y el degrade se mantiene constante.
*/

// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = cv.width;
let height = cv.height;
let imageData = ctx.createImageData(width, height);

// var my_gradient=ctx.createLinearGradient(0, 0, 170, 0);

let red = 0;
let green = 0;
let blue = 0;
let alpha = 255;

drawRect(imageData, red, green, blue, alpha);

function drawRect(imageData, r, g, b, a) {
  let coeficiente = 255 / (width / 2);
  for (let x = 0; x < width; x++) {
    if (x <= width / 2) {
      r = coeficiente * x;
      g = coeficiente * x;
    } else {
      g = g - coeficiente;
    }
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
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
