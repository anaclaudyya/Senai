function recarregar() {
    var arr = [];
    var inferior;
    var superior;
    var Quantidade100 = 0 ;
    var numero  = 0 ;
   
    for (var i=0, t=1000; i<t; i++) {
        numero = Math.round(Math.random() * t) ;
        arr[t]= numero;
        if (numero ==100) {
            Quantidade100 +=1;
        }
        if (numero > 500){
            superior += 1;
        }
        else{
            inferior +=1;
        }
    }
    if (inferior > superior){
        fundo="url(https://via.placeholder.com/500)";
    }else{
        fundo="url(https://picsum.photos/200/300)";
    }
    var corf="black";

    if (Quantidade100==1)
        var corf="orange"
    document.getElementById("body").style.backgroundColor= corf;
    document.getElementById("body").style.backgroundImage=fundo;
}