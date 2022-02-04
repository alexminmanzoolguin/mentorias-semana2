//inicio imprimir desde consola
console.log("estoy escribiendo en un archivo en js");

//constante y variables
//la constante es un valor que nunca va cambiar durante en el periodo en que esta corriendo
const nombre ="alex yazmin";  //string una cadena de texto
const nombres=prompt('ingresa el nombre');// para poner nombres
console.log("mi nombre es:"+ nombre); //imprimir variables
console.log("mi nombre es:"+ nombres); //imprimir variables


//nombre="nombre"; no se le puede dejar sin constante 
//variables : las cuales sirven para guasrdar con la funcion let 
let edad=22;
console.log("minombre es:" +nombre +"tengo una edad" +edad+ "años");

edad= 23;
edad = prompt('ingrese su edad');

console.log("minombre es:" +nombres +"tengo una edad" +edad+ "años");

//condicionales
let decision= true;
let decisiones =edad >=18;
let decision2 = nombres==="alex yazmin";
console.log(decision);
//si la condicion se cumple
if(decision){
console.log("la decision es verdadera");
}else{
    console.log("es falso");
}

//si la consicion con limite pase lo que pase
console.log(decisiones);
//deccion con limite de edad

if(edad > 18){
    console.log(`${nombres} es mayor de edad`);
}else{
    console.log(`${nombres} es menor de edad`);
}
//donde hace la comparacion si oi con la edad
if(edad >= 18){
    console.log(`${nombres} es mayor de edad`);
}else{
    console.log(`${nombres} es menor de edad`);
}

//comparar si es es igual a

//console.log("decisiones=>", true);
//console.log("decision2=>",true);
console.log("decisiones=>", decisiones);
console.log("decision2=>",decision2);
if(decision|| decision2){
    console.log('entra en verdadero')
}else{
    console.log('entracomo falso');
}

if(decision&&decision2){
    console.log('entra en verdadero')
}else{
    console.log('entra como falso');
}

let variable =false;
variable=true;

const number=20;
//se compara el tipo dato de numerico
//= para asignar
//==pára comparar
//===para comparar valor y tipo de dato
console.log(number==="20");


//si el numero de condiciones se cumplen o no

if(decisiones){
    console.log('entra a la primera condicion');
}else if(decision2){
console.log('entra la segunda condicion');
}else{
    console.log("niinguna de las condicion es verdadera");
}


//ternario asignar un valor depende a lo que pase

edad > 18 ? console.log("es mayor de edad"): console.log("es menor de edad");
//ciclo pedaso de codigo que vamos a ejecutarlo  tantas veces

for(let indice = 0; indice<10; indice++){
console.log(`el valor de indice es = ${indice}`);
}


//arreglo es una lista donde podemos poner un sin fin de variables
const arreglo=[`alex`,`nestor`,`hector`];
console.log("arreglo =>",arreglo);
//console.log(arreglo[]); se ocupara para indicar la posion del arreglo a imprimir
for(let indice = 0; indice<arreglo.length; indice++){
    console.log(`el nombre de la persona es  = ${arreglo[indice]}`);
    }

//ciclo for con if parea asegurar hasta donde parar daber
for(let indice = 0; indice<10; indice++){
    if(indice===2){
        console.log("2")
        break;//terminar cuando el se encontro el dato
    }
    console.log("otro codigo");
    }
     console.log("se termino el for");

//cada elemento que tengas dentro de este arreglo le podre nombre crear una variable a cada nombre
 
arreglo.forEach((nombres) => console.log(`el nombre de la persona es ${nombre}`));

//hacer algo mientras cuando el usuario no haga otra cosa, se utiliza para cuandoqueramos que la ejecutamos una condicion que dependa del cliente 
let  contador=0;

while(contador<1000){
    console.log(contador);
    contador=contador+1;
}


//para asignar una variable y imprimermas facil

const nombre1= "alex";
const texto=`mi nombre es ${nombre}`;
console.log(texto);

//funciones que son pedaso de codigo encapsuladas
function saludar(){
    console.log("hola a todos");
}

saludar();
//parametro llama a saludar o a decir algo especifico
function saludar1(nombre){
    console.log(`hola ${nombre}, ¿como estas?`);
}

saludar1("yazmin");

//para hacer comparaciones con constantes

const persona1={
    nombre: "yazmin",
    apellido: "manzo",
    edad: 22
};
const persona2={
    nombre: "alex",
    apellido: "olguin",
    edad: 15

};

const arregloPersonas =[persona1,persona2];
const admitirPaso= (persona) =>{
    if(persona.edad >=18){
        console.log(`puedes pasar ${persona.nombre} ${persona.apellido}`);
    }else{
        console.log(`no puede pasar ${persona.nombre} ${persona.apellido}`);
    }
};
arregloPersonas.forEach((persona)=>{
    admitirPaso(persona);
});
admitirPaso(persona1);
admitirPaso(persona2);



//boton
function alerta(){
    alert("bienvenido a la pagina");
}

const esMayor=(edad) =>{
    if(edad>= 18){
        return true;
    }else{
        return false;
    }
};

const variables = esMayor(50);
console.log(variables);

