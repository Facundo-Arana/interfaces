// 1. Repaso Javascript: Definir una matriz de 100 elementos x 100 elementos y completarla con
// valores enteros random, y resuelva los siguientes incisos:

// a) Escribir una función que retorne el valor máximo de toda la matriz
// b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor
//    mínimo en las filas impares
// c) Calcular el valor promedio de cada fila y guardarlos en un arreglo.

/**
 * numero de celdas en cada arreglo
 */
const MAX = 10;

/**
 * @param { Array } arr
 * @returns suma total del arreglo
 */
const getTotal = (arr) => arr.reduce((acc, cur) => acc + cur);

/**
 * @param { Array } arr
 * @returns valor minimo del arreglo
 */
const getMin = (arr) => arr.reduce((acc, cur) => (cur < acc ? cur : acc));

/**
 * @param { Array } arr
 * @returns valor maximo del arreglo
 */
const getMax = (arr) => arr.reduce((acc, cur) => (cur > acc ? cur : acc));

/**
 * @param { Array(Arrays) } matriz
 * @returns { Array } promedio de cada fila de la matriz
 */
const getPromedios = (mat) => {
  return mat.reduce((acc, arr) => {
    acc.push(getTotal(arr) / MAX);
    return acc;
  }, []);
};

/**
 * @param { Array(Arrays) } matriz
 * @returns valor maximo de la matriz
 */
const getMaxMatriz = (matriz) => {
  let max = matriz[0][0];
  matriz.forEach((arr) => {
    let maxArr = getMax(arr);
    if (maxArr > max) max = maxArr;
  });
  return max;
};

/**
 * @returns número random entre 1 y MAX
 */
const random = () => {
  return Math.ceil(Math.random() * MAX);
};

/**
 * @returns { Array(Array) } matriz con numeros random entre 1 y 1 millon
 */
const crearMatriz = () => {
  return Array.from(Array(MAX), () => Array.from(Array(MAX), () => random()));
};

/**

 * @param { Array(Array) } matriz 
 * @returns { JSON } valor maximo en filas pares y valor minimo en filas impares
 */
const getMaxParesMinImpares = (matriz) => {
  let maxP = (minI = matriz[0][0]);
  matriz.forEach((arr, i) => {
    let val;
    if (i % 2 == 0) {
      val = getMax(arr);
      if(val > maxP) maxP = val;
    } else {
      val = getMin(arr);
      if(val < minI) minI = val;
    }
  });
  return { maxPares: maxP, minImpares: minI };
};



let matriz = crearMatriz();
console.log(matriz);

// 1. console.log(getMaxMatriz(matriz));
// 2. console.log(getMaxParesMinImpares(matriz));
// 3. console.log(getPromedios(matriz));
