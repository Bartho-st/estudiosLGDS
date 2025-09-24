//

let varGlobal="vrabld goblal";
window.vtexto1="";

function FcambioColor(){

    vtexto1 =document.getElementById("Ejemdom");
    document.body.style.backgroundColor="black";

    vtexto1.textContent="texto cambio por el fcambiocolor()";
    vtexto1.style.color="red"; 
    vtexto1.insertAdjacentHTML("afterbegin", "texto adcional "); 

}

function Prueba(){
    document.close();   
}

function FcambioClas(){
    let vtxt2 =document.getElementsByClassName("class1dom");
    vtxt2[1].innerHTML="elemento[1] de la clase dom";
    vtxt2[1].innerHTML="\n su tipo of es "+typeof(vtxt2);
    varGlobal="varible h";

}

function Fcambiotag(){
    let vtxt3=document.getElementsByTagName('h2');
    vtxt3[6].innerHTML="elemento h2 vabiado";
    varGlobal="varible h";
    vtxt3[10].innerHTML=`tipo variable de vargoblal es: ${typeof(varGlobal)} `
}

//function Fcrear(){
        //document.write("<ul>"+
      //   "<li>pollo</li>"+
    //     "<li>papa</li>"+ 
  //       "</ul>")
//}

function Fcrear(){
        let vlista=document.getElementById("Ejemdom");
        
        vlista.innerHTML="<ul>' '<li>pollo</li>' '<li>papa</li>''</ul> ";
}
function agregadopermaentne(){
    let vtxt4="<img src='img/disney.jpg' alt='no cargo ' width='10000em'>"
    vtexto1.innerHTML= vtexto1.innerHTML+ vtxt4
}
function Crearlemnto(){
    var elemento = document.getElementById("comple1");

    var nuevo1 = document.createElement("h3")
    var tx=document.createTextNode("deporte fac");
    nuevo1.appendChild(tx);
    elemento.appendChild(nuevo1);

    var nuevoinputText= document.createElement("input");
    nuevoinputText.type = "text" ;
    elemento.appendChild(nuevoinputText);
}