let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000
  },
{
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000
  }
];

//Crear una función que reciba como parámetro él arreglo de objetos, un continente, y un número de población.
//La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro.
//Si no encuentra coincidencias deberá retornar un array vacío

function pai(arr, cont, pob) {

  let arregloNuevo =[];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].continente === cont && arr[i].poblacion >= pob) {
      arregloNuevo.push(arr[i]);
    }

  }

  return arregloNuevo

};

console.log(pai(paises, "Sudamérica", 300000000))


// Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 9], // 1
  [4, 4, 5]  // 2
];


function ma (matriz){

  let total = 0;

  for(let i = 0; i < matriz[1].length; i++){
    total+= matriz[1][i]
  }

  return total 
  
}

console.log(ma(matriz));

//Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.

function mat (matriz){


  let array = [];

  for(let i = 0 ; i < matriz.length; i++ ){ 

    for(let j = 0; j < matriz[i].length; j++){

      if (matriz[i][j] % 2 === 0){
        array.push(matriz[i][j])
      }
    }

    }

    return array 
}

console.log(mat(matriz));





