let vetorMapa = [];
let vetorTex = ["X", " "];
let vetorProcedural = [];
let width = 100;
let heigth = 100;
var X,
  Y,
  A,
  B,
  gerator = document.getElementById("mode"),
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
  pedras = 0;
function Game() {
  for (Y = 0; Y != heigth; Y++) {
    vetorMapa.push([]);
    for (X = 0; X != width; X++) {
      Random = Math.ceil(Math.random() * 101);
      vetorMapa[Y][X] = Random < gerator.value ? vetorTex[0] : vetorTex[1];
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
  vetorProcedural[MovY][MovX] = "0";
  vetorProcedural[width / Chek - 2][width / Chek - 2]="!";
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
      vetorProcedural[B][A] = Full > Empty ? "X" : " ";
      B == 0 || B == width / Chek - 1 ? (vetorProcedural[B][A] = "X") : (B = B);
      A == 0 || A == width / Chek - 1 ? (vetorProcedural[B][A] = "X") : (A = A);
    }
  }
  Enemies();
}

function Cima() {
  if (
    vetorProcedural[MovY - 1][MovX] == " " ||
    vetorProcedural[MovY - 1][MovX] == "p" ||
    Mine > 0
  ) {
    vetorProcedural[MovY - 1][MovX] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    if (vetorProcedural[MovY - 1][MovX] == "X" && Mine > 0) {
      pedras++;
      pedra.innerHTML = "Stones = " + pedras;
    }
    MovY--;
    vetorProcedural[MovY + 1][MovX] = " ";
    vetorProcedural[MovY][MovX] = "0";
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
  }
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
  }else{
    saida.innerHTML = "Fainted"
  }
  vetorProcedural[YE][XE] = "$"; 
}

function Esquerda() {
  if (
    vetorProcedural[MovY][MovX - 1] == " " ||
    vetorProcedural[MovY][MovX - 1] == "p" ||
    Mine > 0
  ) {
    vetorProcedural[MovY][MovX - 1] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    if (vetorProcedural[MovY][MovX - 1] == "X" && Mine > 0) {
      pedras++;
      pedra.innerHTML = "Stones = " + pedras;
    }
    MovX--;
    vetorProcedural[MovY][MovX + 1] = " ";
    vetorProcedural[MovY][MovX] = "0";
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
  } 
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
  vetorProcedural[YE][XE] = "$";
}
function Baixo() {
  if (
    vetorProcedural[MovY + 1][MovX] == " " ||
    vetorProcedural[MovY + 1][MovX] == "p" ||
    Mine > 0
  ) {
    vetorProcedural[MovY + 1][MovX] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    if (vetorProcedural[MovY + 1][MovX] == "X" && Mine > 0) {
      pedras++;
      pedra.innerHTML = "Stones = " + pedras;
    }
    MovY++;
    vetorProcedural[MovY - 1][MovX] = " ";
    vetorProcedural[MovY][MovX] = "0";
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
  } 
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
  vetorProcedural[YE][XE] = "$";
}
function Direita() {
  if (
    vetorProcedural[MovY][MovX + 1] == " " ||
    vetorProcedural[MovY][MovX + 1] == "p" ||
    Mine > 0
  ) {
    vetorProcedural[MovY][MovX + 1] == "p"
      ? ((iten.innerHTML = "Pickaxe &#8504;"), Mine++)
      : (Mine = Mine);
    if (vetorProcedural[MovY][MovX + 1] == "X" && Mine > 0) {
      pedras++;
      pedra.innerHTML = "Stones = " + pedras;
    }
    MovX++;
    vetorProcedural[MovY][MovX - 1] = " ";
    vetorProcedural[MovY][MovX] = "0";
    saida.innerHTML = vetorProcedural.join("\n", ",").replaceAll(",", "|");
  }
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
  vetorProcedural[YE][XE] = "$"; 
}
function Redeclarar(){
 vetorMapa = [];
 vetorTex = ["X", " "];
 vetorProcedural = [];
 width = 100;
 heigth = 100;
   gerator = document.getElementById("mode");
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
function Enemies(){
for (
  ER = Math.ceil(Math.random() * (width / Chek));
  vetorProcedural[ER][ER] != " ";

) {
  ER = Math.ceil((Math.random() * (width - 1)) / Chek);
}
YE=ER;
XE=ER;
vetorProcedural[YE][XE]="$";
}