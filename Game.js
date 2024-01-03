let vetorMapa = [];
let vetorTex = ["■", " "];
let vetorProcedural = [];
let width = 100;
let heigth = 100;
var X,
  Y,
  A,
  B,
  character = "▲",
  gerator = 49,
  MovX = 1,
  MovY = 1,
  Random,
  Chek = 2,
  ChekX = Chek,
  ChekY = Chek,
  OMGX = 0,
  OMGY = 0,
  Empty,
  Full,
  PickAxe,
  Mine = 0,
  ER,
  XE,
  YE,
  next = "■",
  pedras = 0;
function Game() {
  document.getElementById("play").style.display = "none";
  document.getElementById("play2").style.display = "inherit";
  for (Y = 0; Y != heigth; Y++) {
    vetorMapa.push([]);
    for (X = 0; X != width; X++) {
      Random = Math.ceil(Math.random() * 101);
      vetorMapa[Y][X] = Random < gerator ? vetorTex[0] : vetorTex[1];
    }
  }
  Procedural();
  for (
    PickAxe = Math.ceil(Math.random() * (width / Chek));
    vetorProcedural[PickAxe][PickAxe] != " ";

  ) {
    PickAxe = Math.ceil((Math.random() * (width - 1)) / Chek);
  }
  vetorProcedural[PickAxe][PickAxe] = "p";
  vetorProcedural[MovY][MovX] = character;
  vetorProcedural[width / Chek - 2][width / Chek - 2] = "!";
  saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
}
function Procedural() {
  X = 0;
  Y = 0;
  for (
    B = 0;
    B != width / Chek;
    B++, ChekY += Chek, OMGY += Chek, OMGX = 0, ChekX = Chek
  ) {
    vetorProcedural.push([]);
    for (
      A = 0, Full = 0, Empty = 0;
      A != heigth / Chek;
      A++, ChekX += Chek, OMGX += Chek
    ) {
      for (Y = 0 + OMGY; Y != ChekY; Y++) {
        for (X = 0 + OMGX; X != ChekX; X++) {
          if (vetorMapa[Y][X] == " ") {
            Empty++;
          } else {
            Full++;
          }
        }
      }
      vetorProcedural[B][A] = Full > Empty ? "■" : " ";
      B == 0 || B == width / Chek - 1 ? (vetorProcedural[B][A] = "▓") : (B = B);
      A == 0 || A == width / Chek - 1 ? (vetorProcedural[B][A] = "▓") : (A = A);
    }
  }
  Enemies();
}
window.addEventListener("keydown", keydownHandler);
function keydownHandler(e) {
  if (e.keyCode == 65) {
    Esquerda();
  } else if (e.keyCode == 68) {
    Direita();
  } else if (e.keyCode == 87) {
    Cima();
  } else if (e.keyCode == 83) {
    Baixo();
  } else if (e.keyCode == 69) {
    Miner();
  } else if (e.keyCode == 82){
    Redeclarar();
  }
}
function Miner() {
  if (next == "■" && Mine > 0 && character == "▲") {
    vetorProcedural[MovY - 1][MovX] = " ";
    pedras++;
    pedra.innerHTML = "Stones = " + pedras;
  } else if (next == "■" && Mine > 0 && character == "◄") {
    vetorProcedural[MovY][MovX - 1] = " ";
  } else if (next == "■" && Mine > 0 && character == "▼") {
    vetorProcedural[MovY + 1][MovX] = " ";
    pedras++;
    pedra.innerHTML = "Stones = " + pedras;
  } else if (next == "■" && Mine > 0 && character == "►") {
    vetorProcedural[MovY][MovX + 1] = " ";
    pedras++;
    pedra.innerHTML = "Stones = " + pedras;
  }
  saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
}
function Cima() {
  character = "▲";
  if (vetorProcedural[MovY - 1][MovX] == "▓") {
  } else if (
    vetorProcedural[MovY - 1][MovX] == " " ||
    vetorProcedural[MovY - 1][MovX] == "p"
  ) {
    vetorProcedural[MovY - 1][MovX] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    MovY--;
    vetorProcedural[MovY + 1][MovX] = " ";
    vetorProcedural[MovY][MovX] = character;
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
    next = vetorProcedural[MovY - 1][MovX];
  }
  Enemies2();
}

function Esquerda() {
  character = "◄"; 
  if (vetorProcedural[MovY][MovX - 1] == "▓") {
  } else if (
    vetorProcedural[MovY][MovX - 1] == " " ||
    vetorProcedural[MovY][MovX - 1] == "p"
  ) {
    vetorProcedural[MovY][MovX - 1] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    MovX--;
    vetorProcedural[MovY][MovX + 1] = " ";
    vetorProcedural[MovY][MovX] = character;
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
    next = vetorProcedural[MovY][MovX - 1];
  }
 Enemies2();
}
function Baixo() {
  character = "▼";
  if (vetorProcedural[MovY + 1][MovX] == "▓") {
  } else if (
    vetorProcedural[MovY + 1][MovX] == " " ||
    vetorProcedural[MovY + 1][MovX] == "p"
  ) {
    vetorProcedural[MovY + 1][MovX] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    MovY++;
    vetorProcedural[MovY - 1][MovX] = " ";
    vetorProcedural[MovY][MovX] = character;
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
    next = vetorProcedural[MovY + 1][MovX];
  }
 Enemies2();
}
function Direita() {
  character = "►";
  if (vetorProcedural[MovY][MovX + 1] == "▓") {
  } else if (
    vetorProcedural[MovY][MovX + 1] == " " ||
    vetorProcedural[MovY][MovX + 1] == "p"
  ) {
    vetorProcedural[MovY][MovX + 1] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    MovX++;
    vetorProcedural[MovY][MovX - 1] = " ";
    vetorProcedural[MovY][MovX] = character;
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
    next = vetorProcedural[MovY][MovX + 1];
  }
  Enemies2();
}

function Redeclarar() {
  vetorMapa = [];
  vetorTex = ["■", " "];
  vetorProcedural = [];
  width = 100;
  heigth = 100;
  gerator = 49;
  MovX = 1;
  MovY = 1;
  Random;
  Chek = 2;
  ChekX = Chek;
  ChekY = Chek;
  OMGX = 0;
  OMGY = 0;
  Game();
}
function Enemies() {
  for (
    ER = Math.ceil(Math.random() * (width / Chek));
    vetorProcedural[ER][ER] != " ";

  ) {
    ER = Math.ceil((Math.random() * (width - 1)) / Chek);
  }
  YE = ER;
  XE = ER;
  vetorProcedural[YE][XE] = "¤";
}
function Enemies2(){
 if (MovX == width / Chek - 2 && MovY == width / Chek - 2) {
   Redeclarar();
 }
 if (MovX > XE) {
   XE++;
 } else if (MovX < XE) {
   XE--;
 } else if (MovY > YE) {
   YE++;
 } else if (MovY < YE) {
   YE--;
 } else {
   saida.innerHTML = "Fainted";
 }
 vetorProcedural[YE][XE] = "¤";
}
