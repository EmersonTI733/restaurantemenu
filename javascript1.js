// MOSTRA A TABELA DE VER PEDIDO
const form= document.querySelector('.formulario-ver-pedido');
const mascaraform= document.querySelector('.mascara-formulario');

function mostrarform(){
    form.style.left= "50%";
    form.style.transform= "translateX(-50%)";
    mascaraform.style.visibility= "visible";
}

function guardeform(){
    form.style.left= "-300px";
    form.style.transform= "none";
    mascaraform.style.visibility= "hidden";
}

// FECHAMENTO DE PEDIDO O CANCELAMENTO


function FinPedido() {
    alert('finalizou o pedido');
}
function CancPedido(){
    alert('tem certeza que quer cancelar?');
}