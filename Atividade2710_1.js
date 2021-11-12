window.onload = function () {
    do {
      var valor = window.prompt("Informe um número de 1 a 10");
    } while (valor < 1 || valor > 10);
    var nomeDog ;
    var nomeCat;
    var container = document.getElementById("container");
    var dogAtual = 0;
    var catAtual = 0;
    for (var i = 0; i < valor; i++) {
  
      var container = document.getElementById("container");

      var divisao = document.createElement("div");
  
      var section = document.createElement("section");
      var section2 = document.createElement("section");
  
      section.className = "dog";
      var nomeDog = "dog"+ i;
      section.id = nomeDog;
      console.log(nomeDog);
  
      section2.className = "cat";
      var nomeCat = "cat"+ i;
      section2.id = nomeCat;
      console.log(nomeCat);
  
      container.appendChild(divisao);
  
      divisao.appendChild(section);
  
      divisao.appendChild(section2);

      fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
        
        return data.json();
    }).then(function(json){
      var resultado = json.message;
      var nomeDog = "dog"+ dogAtual;
      console.log(nomeDog);
      document.getElementById(nomeDog).style.backgroundImage ="url('"+resultado+"')";
      dogAtual += 1;
    })

    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
       
        console.log(catAtual);
        return data.json();
    }).then(function(json){  
      var resultado = json[0].url;
      
        nomeCat =  "cat"+catAtual;
        console.log(nomeCat);
        document.getElementById(nomeCat).style.backgroundImage ="url('"+resultado+"')";
        catAtual += 1;
        
    })

      
    }
 
  };
  
  