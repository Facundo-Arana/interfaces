/*
6. Pintar un rectángulo en pantalla, utilizando tres o cuatro colores en un gradiente.
 Los tres colores deben ser armonías tonales. Puede ser en el eje X o Y.
 */

// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = cv.width;
let height = cv.height;
let imageData = ctx.createImageData(width, height);

// var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);

let red = 0;
let green = 0;
let blue = 0;
let alpha = 255;

drawRect(imageData, red, green, blue, alpha);

function drawRect(imageData, r, g, b, a) {  
    
  let coeficiente = 255 / (width * 0.5);
  for (let x = 0; x < width; x++) {
    if (x <= width * 0.3) {
      r = coeficiente * x;
      g = coeficiente * x;
    } else if (x <= width * 0.6) {
        coeficiente = 255 / (width * 0.4);
        if (g > 0) {
            g = g - coeficiente;
        }
    } else {
        coeficiente = 255 / width;
        r = r - coeficiente;
        b = (coeficiente * x) -r;
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
