let numero1 = document.querySelector('.soma1');
let numero2 = document.querySelector('.soma2');
let result = document.querySelector('#result');
let res = document.querySelector('#res');




function somar(){
   let somar = Number(numero1.value) + Number(numero2.value);
    res.value = somar;
}

document.querySelector('.subtr').addEventListener('click', function(){

    let subtrair = Number(numero1.value) - Number(numero2.value);
    res.value = subtrair
})


document.querySelector('.mult').addEventListener('click', function(){
    let multiplicar = Number(numero1.value) * Number(numero2.value);
    res.value = multiplicar
})


document.querySelector('.division').addEventListener('click',function(){
    let dividir = Number(numero1.value) / Number(numero2.value);
    res.value = dividir;
})