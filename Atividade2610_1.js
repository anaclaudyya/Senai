function teste(){
var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
var corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
var corDoTexto = ["white","black"];

var posicaoFundo = Math.floor(Math.random() * 3);
var posicaocorDosElementosSobrepostos = Math.floor(Math.random() * 3);
var posicaocorDoTexto = Math.floor(Math.random() * 2);


document.body.style.backgroundColor =corDeFundo[posicaoFundo];

document.getElementsByClassName('container')[0].style.backgroundColor =corDosElementosSobrepostos[posicaocorDosElementosSobrepostos];
document.getElementsByTagName('p')[0].style.color =corDoTexto[posicaocorDoTexto];
//container.setAttribute('style',strTexto);

}