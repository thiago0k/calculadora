// console.log('mensaje en la consola')
// console.info('mensaje informatico')
// console.error('erro en la consola')
// console.warn('mensaje de advertencia')
// console.clear('hola')
// console.


// console.trace("¡He llegado aquí!");

// ► ¡He llegado aquí!
//   - @DataManager.js:36
//   - @modules.js:94
//   - @index.js:1

// let styles = `
// background:linear-gradient(#884ced, #ec1cce);
// color:white;
// padding:10px 30px;
// `;

// console.log('%chola',styles);

// console.group('informacion a mostrar');
// console.log('unos');
// console.log('unos');
// console.log('unos');
// console.log('unos');
// console.log('unos');
// console.groupEnd
// console.groupCollapsed()


// const users = [
//     { name: "Manz", role: "streamer", status: "happy" },
//     { name: "BlurSoul_", role: "mod", status: "happy" },
//     { name: "felixicaza", role: "mod", status: "happy" },
//     { name: "pheralb", role: "mod", status: "porosad" }
//   ];
  
//   console.table(users);
//   console.log(users+{ name, role, status });


// console.assert(5 < 10, "5 es menor que 10");
// // No ocurre nada

// console.assert(5 < 0, "5 es menor que 0");
// // Muestra el mensaje indicado con un aviso de error
// console.log(6 < 10);


// console.log(document.head);
// ► <body class="main-page">···</body>

// for (let i = 0; i < 5; i++) {
//     console.count("test-loop");
//   }
//   console.countEnd("test-loop");

// console.time("test1");
// for (let i = 0; i < 10; i++) {
//   /* Operación costosa */
//   console.timeLog("test1", i);
// }
// console.timeEnd("test1");
function hola(a,b){
  return a + b
}

// let bolean = ;
// console.log(typeof(bolean));
// console.log(bolean.constructor.name);



// tipos de funciones en javascript

// function declaracion(){return "hola"}
// declaracion()
// console.log(typeof(declaracion));   
// let exprecion = function(){}
// new function()

// let saludar = function(){
//     return "hola"
// }
// saludar;
// let resultado = saludar()
// console.log(resultado);


// callback

// let FB = function(){
//   console.log('funcion B ejecutada');
// }

// let FA = function(callback){
//  callback()
// }

// FA(FB)

// let FB = function(){
//     console.log('funcion B ejecutada');
//   }

//   let FE = function(){
//     console.log('error');
//   }
  
//   let FA = function(callback,callbackError){
//    let n =  ~~(Math.random() * 5)
//    if(n >= 2){callback()}
//    else(callbackError())
//  }
  
//   FA(
//     function FA(){console.log('funcion b');},
//     function FE(){console.log('error');}
//   )

// let f = (function saluda(nombre){
//    return `hola como estas ${nombre}`
// })('thiago')

// console.log(typeof(f));


// let contado = document.querySelector('.contador');
// let boton1 = document.querySelector('.btn-1');
// let boton2 = document.querySelector('.btn-2');
// let boton3 = document.querySelector('.btn-3');
// let numero = 0;

// boton1.addEventListener('click',function(){Clickear(3)});
// boton2.addEventListener('click',function(){Clickear(6)});
// boton3.addEventListener('click',function(){ Clickear(20)});

// function Clickear(normal){
//  for(let i = 0; i < normal ;i++){
//     contado.textContent = i
//  }
// }

// let f = (function saludo(nombre){
//    return 2 + 'hola como estas' + nombre 
// })('thiago')

// console.log(f.constructor.name);


//clausuras 
// const Clau = (function(){
// let num = 0;
// return function(){
//     num++
//     return num
// }
// });

// console.log(Clau);

// const F = () => {this}
// let resultado = F()
// console.log(resultado);
// const E = a => {console.log('hola');}
// const B = () => 'hola'

// Si son funciones globales
// const a = function () {
//   console.log(this);
// };
// const b = () => {
//   console.log(this);
// };

// a(); // Window
// b(); // Window


// let nombre = prompt('dime your name plis');

// let fA = function() {
//  console.log('hola como estas ' + nombre);
// };

// let fB = function(callback) {
//   console.log('datos prosesado' + nombre);
//     callback();
// };

// fB(fA);

//  function sumar(a,b){
//   return `tempera celsius ${a + b}`
// };

// function fB(callback){


// }

// let resultado = sumar(6,12)

// console.log(resultado);



// let inputs = document.querySelector('.numeros');
let contado = document.querySelector('.contador');
let valor = document.querySelector('.resultado');

let boton1 = document.querySelector('.btn-1');
let boton2 = document.querySelector('.btn-2');
let boton3 = document.querySelector('.btn-3');
let numero = 0;

boton1.addEventListener('click',function(){
  let num1 = prompt('dime un numero');
  let num2 = prompt('dime otro');
  
  function multiplicar(){
    return num1 + num2
  }
  
  let resultado = multiplicar(num1,num2);
  contado.textContent = resultado;

  let valores = `${num1} + ${num2}`
  valor.textContent = valores

});

boton2.addEventListener('click',function(){
  let num1 = prompt('dime un numero');
  let num2 = prompt('dime otro');
  
  function multiplicar(){
    return num1 * num2
  }
  
  let resultado = multiplicar(num1,num2);
  contado.textContent = resultado;

  let valores = `${num1} * ${num2}`
  valor.textContent = valores
});

boton3.addEventListener('click',function(){
  let num1 = prompt('dime un numero');
  let num2 = prompt('dime otro');
  
  function multiplicar(){
    return num1 / num2
  }
  
  let resultado = multiplicar(num1,num2);
  contado.textContent = resultado;

  let valores = `${num1} / ${num2}`
  valor.textContent = valores
});