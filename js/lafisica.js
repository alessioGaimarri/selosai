
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: NASA - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);
    };

  
// FORMULE KaTeK
katex.render(String.raw`F  = -k \triangle x  `, leggeHooke);
katex.render(String.raw`F  = G \frac{m_{1}m_{2}}{r^2}  `, leggeGrav);
katex.render(String.raw`i \hbar \frac{\partial \Psi}{\partial t}  = H \Psi`, eqSch);
katex.render(String.raw`R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R + \Lambda g_{\mu\nu} = \frac{8 \pi G}{c^4} T_{\mu\nu}`, eqCampoEinstein);
katex.render(String.raw`\nabla \cdot \textbf{D} = \rho`, eqMaxwell_1);
katex.render(String.raw`\nabla \cdot \textbf{B} = 0 `, eqMaxwell_2);
katex.render(String.raw`\nabla  \times \textbf{E} = - \frac{\partial \textbf{B}}{\partial t}`, eqMaxwell_3);
katex.render(String.raw`\nabla  \times \textbf{H} = \textbf{J} + \frac{\partial \textbf{D}}{\partial t} `, eqMaxwell_4);
katex.render(String.raw`pV = nkT`, eqStatoGasPerfetti);

// Logica carosello immagini fenomeni fisici 

var indiceImmagine = 0;
elencoImmagini = ["ciliegie","arcobaleno","tempesta","eclisse","galassie"];


function immaginePrecedente(){
  if(indiceImmagine > 0){
    // nascondo il blocco di partenza
    document.getElementById(elencoImmagini[indiceImmagine]).style.display = "none";
    // rendo visibile il blocco target
    document.getElementById(elencoImmagini[indiceImmagine-1]).style.display = "block";
    // aggiorno il contatore
    indiceImmagine = indiceImmagine - 1;
} else {
    indiceImmagine = elencoImmagini.length - 1;
    // nascondo il blocco di partenza
    document.getElementById(elencoImmagini[0]).style.display = "none";
    // rendo visibile il blocco target
    document.getElementById(elencoImmagini[indiceImmagine]).style.display = "block";
}
}

function immagineSuccessiva(){
   
    if(indiceImmagine < (elencoImmagini.length - 1)){
        // nascondo il blocco di partenza
        document.getElementById(elencoImmagini[indiceImmagine]).style.display = "none";
        // rendo visibile il blocco target
        document.getElementById(elencoImmagini[indiceImmagine+1]).style.display = "block";
        // aggiorno il contatore
        indiceImmagine = indiceImmagine +1;
    } else {
        indiceImmagine = 0;
         // nascondo il blocco di partenza
         document.getElementById(elencoImmagini[(elencoImmagini.length - 1)]).style.display = "none";
         // rendo visibile il blocco target
         document.getElementById(elencoImmagini[indiceImmagine]).style.display = "block";
    }
}

// logica secondo carosello immagini biologia e chimica

var indiceImg = 0;
elencoImg = ["tardigrado","reazione"];



function imgPrecedente(){
    if(indiceImg > 0){
      // nascondo il blocco di partenza
      document.getElementById(elencoImg[indiceImg]).style.display = "none";
      // rendo visibile il blocco target
      document.getElementById(elencoImg[indiceImg-1]).style.display = "block";
      // aggiorno il contatore
      indiceImg = indiceImg - 1;
  } else {
      indiceImg = elencoImg.length - 1;
      // nascondo il blocco di partenza
      document.getElementById(elencoImg[0]).style.display = "none";
      // rendo visibile il blocco target
      document.getElementById(elencoImg[indiceImg]).style.display = "block";
  }
  }

  
function imgSuccessiva(){
   
    if(indiceImg < (elencoImg.length - 1)){
        // nascondo il blocco di partenza
        document.getElementById(elencoImg[indiceImg]).style.display = "none";
        // rendo visibile il blocco target
        document.getElementById(elencoImg[indiceImg+1]).style.display = "block";
        // aggiorno il contatore
        indiceImg = indiceImg +1;
    } else {
        indiceImg = 0;
         // nascondo il blocco di partenza
         document.getElementById(elencoImg[(elencoImg.length - 1)]).style.display = "none";
         // rendo visibile il blocco target
         document.getElementById(elencoImg[indiceImg]).style.display = "block";
    }
}


// logica slider delle formule 

var count = 0;
lista = ["hooke","gravitazione","gasPerfetti","equazioniMaxwell","schroedinger","relGen"];

function formulaPrec(){
    if(count > 0){
        // nascondo il blocco di partenza
        document.getElementById(lista[count]).style.display = "none";
        // rendo visibile il blocco target
        document.getElementById(lista[count-1]).style.display = "block";
        // aggiorno il contatore
        count = count - 1;
    } else {
        count = 5;
        // nascondo il blocco di partenza
        document.getElementById(lista[0]).style.display = "none";
        // rendo visibile il blocco target
        document.getElementById(lista[count]).style.display = "block";
    }
   }

function formulaSucc(){
    if(count < 5){
        // nascondo il blocco di partenza
        document.getElementById(lista[count]).style.display = "none";
        // rendo visibile il blocco target
        document.getElementById(lista[count+1]).style.display = "block";
        // aggiorno il contatore
        count = count +1;
    } else {
        count = 0;
         // nascondo il blocco di partenza
         document.getElementById(lista[5]).style.display = "none";
         // rendo visibile il blocco target
         document.getElementById(lista[count]).style.display = "block";
    }
}