
//PARTE 1
//1
var container;
//2
container=document.getElementById('c1');

//3
container.innerText='¡hola mundo!';

//4
container.style.backgroundColor='#000000';

//5
container.style.color='#1cb723';

//6
container.style.height='200px';
container.style.width='200px';


//7
container.innerHTML=' <input type=”text” placeholder=’escriba su texto’>'

//PARTE 2

//1
var containers=document.querySelectorAll('.c2');

//2
containers.forEach(e=>{
    e.style.backgroundColor='#009999';
})

//3
containers.forEach(e=>{
    e.innerHTML='<input type="text" placeholder="Escriba su texto">';
})

//PARTE 3
//1
var boton=document.getElementById('btn-click');

//2
boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

//3
var btnCopy=document.getElementById('btnCopy');

//4
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
