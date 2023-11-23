function placacarro(){
    const lastnumber = document.querySelector("#valor").value;
    const dayweek = document.querySelector("#valor1").value;
    const texto = document.querySelector("h1");
    const img = document.querySelector("img");
    
    if((lastnumber== 1 || lastnumber==2) && (dayweek=="Segunda" || dayweek=="segunda" ||dayweek=="segunda-feira" || dayweek=="Segunda-Feira")){
        texto.innerHTML = "Não é permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else if((lastnumber== 3 || lastnumber==4) && (dayweek=="Terça" || dayweek=="terça" ||dayweek=="Terça-Feira" || dayweek=="terça-feira")){
        texto.innerHTML = "Não é permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else if((lastnumber== 5 || lastnumber==6) && (dayweek=="Quarta" || dayweek=="quarta" ||dayweek=="quarta-feira" || dayweek=="Quarta-Feira")){
        texto.innerHTML = "Não é permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else if((lastnumber== 7 || lastnumber==8) && (dayweek=="Quinta" || dayweek=="quinta" ||dayweek=="quinta-feira" || dayweek=="Quinta-Feira")){
        texto.innerHTML = "Não é permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else if((lastnumber== 9 || lastnumber==0) && (dayweek=="sexta" || dayweek=="Sexta" ||dayweek=="Sexta-Feira" || dayweek=="sexta-feira")){
        texto.innerHTML = "Não é permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else if(dayweek=="Sábado" || dayweek=="sábado" ||dayweek=="sabado" || dayweek=="Sabado" || dayweek=="Domingo" || dayweek=="domingo"){
        texto.innerHTML = "É permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaof.jfif");
        img.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "É permitido circular nas ruas e avenidas internas!!!";
        img.setAttribute("src","./img/placaon.png");
        img.setAttribute("width","250px");
    }
}