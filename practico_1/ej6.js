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

let red = 255;
let green = 255;
let blue = 255;
let alpha = 255;

drawRect(imageData, red, green, blue, alpha);

function drawRect(imageData, r, g, b, a) {
  let coeficiente = 255 / (width / 9);

  for (let x = 0; x < width * 0.12; x++) {
    if (b > 0) b = b - coeficiente;
    if (r > 0) r = r - coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  for (let x = width * 0.12; x < width * 0.24; x++) {
    if (r < 255) r = r + coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  for (let x = width * 0.24; x < width * 0.37; x++) {
    if (g > 0) g = g - coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  for (let x = width * 0.37; x < width * 0.5; x++) {
    if (b < 255) b = b + coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  for (let x = width * 0.5; x < width * 0.62; x++) {
    if (r > 0) r = r - coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  for (let x = width * 0.62; x < width * 0.75; x++) {
    if (g < 255) g = g + coeficiente;
    for (let y = 0; y < height; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    }
  }
  console.log(r, g, b);
  for (let x = width * 0.75; x < width * 0.92; x++) {
    if (r < 255) r = r + coeficiente;
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
