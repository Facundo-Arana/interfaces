/*
7. Cargar una Imagen desde disco o URL
a) Dibujar la imagen dentro del canvas
b) Implementar una función que aplique el filtro de escala de grises y muestre el resultado en el
canvas.
 */
// canvas,  contexto y dimensiones
let cv = document.getElementById("canvas");
let ctx = cv.getContext("2d");
let width = cv.width;
let height = cv.height;

// imagen
let img = new Image();
img.crossOrigin = "anonymous";
img.src =
  "https://pbs.twimg.com/media/E6rr4aeXoAATGkj?format=jpg&name=4096x4096";

img.addEventListener("load", () => ctx.drawImage(img, 0, 0));

// boton
let conteiner = document.getElementById("conteiner");
let btn = document.createElement("button");
btn.type = "button";
btn.style.fontSize = "80px";
btn.innerText = "aplicar filtro";
conteiner.appendChild(btn);
btn.addEventListener("click", aplicarFiltro);

function aplicarFiltro() {
  let imageData = ctx.getImageData(0, 0, width, height);
  //  let data = imageData.data;

  let r, g, b, a;
  a = 255;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      r = getRed(imageData, x, y);
      g = getGreen(imageData, x, y);
      b = getBlue(imageData, x, y);
      grey = (r + g + b) / 3;
      setPixel(imageData, x, y, grey, grey, grey, a);
    }
  }

  ctx.putImageData(imageData, 0, 0);

  btn.removeEventListener("click", aplicarFiltro);
  btn.addEventListener("click", () => {
    ctx.drawImage(img, 0, 0);
    btn.addEventListener("click", aplicarFiltro);
  });
}

function getRed(img, x, y) {
  let index = (x + y * width) * 4;
  return img.data[index];
}

function getGreen(img, x, y) {
  let index = (x + y * width) * 4;
  return img.data[index + 1];
}

function getBlue(img, x, y) {
  let index = (x + y * width) * 4;
  return img.data[index + 2];
}

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * width) * 4;
  imageData.data[index] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}
