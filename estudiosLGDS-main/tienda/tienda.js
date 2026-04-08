function butoncal() {

  const cantidad = parseInt(document.getElementById("cantidad").value);

  const filas = document.getElementsByTagName("tr");
  const precio = parseFloat(filas[1].getAttribute("data-price")); 

  const total = precio * cantidad;

  const h2 = document.createElement("h2");
  h2.textContent = "Total: S/" + total;
  const cont = document.getElementById("res-total");
  cont.innerHTML = "";
  cont.appendChild(h2);
}

function mostrarIDs() {
  const textos = document.getElementsByClassName("info-text");
  let concatenado = "";

  for (let i = 0; i < textos.length; i++) {
    concatenado = concatenado + textos[i].id; 
  }

  const h2 = document.createElement("h2");
  h2.textContent = concatenado;
  const cont = document.getElementById("res-ids");
  cont.innerHTML = "";
  cont.appendChild(h2);
}
//contarinp

function contarInputs() {
  const textos = document.getElementsByClassName("info-text");
  const cantidad = textos.length; 

  const p = document.createElement("p");
  p.textContent = "Número de inputs de texto: " + cantidad;
  const cont = document.getElementById("res-contar");
  cont.innerHTML = "";
  cont.appendChild(p);
}

///desxc
function calcularDescRec() {
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const referencia = document.getElementById("referencia").value;

//sumas
  const totalChars = nombre.length + direccion.length + referencia.length;

  const cantidad = parseInt(document.getElementById("cantidad").value);

//precio del primero purcuto
  const filas = document.getElementsByTagName("tr");
  const precio = parseFloat(filas[1].getAttribute("data-price"));

//total
  const total = precio * cantidad;

  const textarea = document.getElementById("observaciones");

  if (totalChars > cantidad) {
//dedcuento
    const descuento = total * 0.10;
    const totalPagar = total - descuento;
    textarea.value = "Descuento: S/" + descuento + ". Total: S/" + totalPagar;
  } else {
//agregado
    const recargo = total * 0.05;
    const totalPagar = total + recargo;
    textarea.value = "Recargo: S/" + recargo + ". Total: S/" + totalPagar;
  }
}