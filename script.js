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

    var nuevo1 = document.createElement("h3")//añade ala pagina un texto mas
    var tx=document.createTextNode("deporte fac");
    nuevo1.appendChild(tx);
    elemento.appendChild(nuevo1);

    var nuevoinputText= document.createElement("input");
    nuevoinputText.type = "text" ;
    elemento.appendChild(nuevoinputText);

    var nuevo1 = document.createElement("h3")//añade ala pagina un texto mas
    var tx=document.createTextNode("Dni");
    nuevo1.appendChild(tx);
    elemento.appendChild(nuevo1);

    var nuevoinputText= document.createElement("input");
    nuevoinputText.type = "number" ;
    elemento.appendChild(nuevoinputText);
    
}

function Fquery(){

    var objeto = document.querySelector(".class1dom");
    objeto.innerHTML="texto cambiado por query selector";

    var objetoid = document.querySelector("#Ejemdom");
    objetoid.style.color = "red";

    var objetotag = document.querySelector("h2");
    objetotag.style.textAlign="right";
}

function Ffor(){

  const textofor = document.getElementsByClassName("for1");
  var textotal="";

  for(let i=0 ; i< textofor.length ; i++)
  {
    textofor[i].style.border = "3px solid red";
    textotal = textotal + textofor[i].innerText+'-';
  }
  var nuevofor = document.createElement("h1");
  var text = document.createTextNode(textotal);
  nuevofor.appendChild(text);
  textofor[3].appendChild(nuevofor);        
}

function Ffor2(){
    const textofor = document.querySelectorAll(".for1");
    var textotal="";

    textofor.forEach
    ( iter =>
    {
        iter.style.border="3px double blue";
        textotal = textotal + iter.innerHTML+'-';
    }
    );

    var ntxt = document.createElement("h1");
    var txt = document.createTextNode(textotal);
    ntxt.appendChild(txt);
    textofor[3].appendChild(ntxt);
}

function elima(){
    const textofor = document.getElementsByClassName("for1")

    textofor[1].remove();
}