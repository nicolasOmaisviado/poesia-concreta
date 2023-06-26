function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);

  let maximo = width;
  let minimo = 0;
  let palavra = "A imaginação é o limite!";
  let palavra2 = "Crie algo incrível hoje!";
  let letras = map(mouseX, 0, width, 1, palavra.length);
  let letras2 = map(mouseX, 0, width, 1, palavra2.length);
  let parcial = palavra.substring(0, letras);
  let parcial2 = palavra2.substring(0, letras2);
  text(parcial, 960, 540);
  text(parcial2, 960, 620);
}
