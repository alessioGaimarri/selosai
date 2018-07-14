

window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Gerd Altmann - (pixabay.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);
   
    };
    
    function setup() {
        
        var myCanvas = createCanvas(500, 500);
        myCanvas.parent("RappSegmento");
        background(255);
        textSize(12);
        strokeWeight(2);
        };

        

    passaggi = 0;

   function aggiungiTag(idTargetDiv, tipoElemento, classeElemento, contenuto){
        var divTarget = document.getElementById(idTargetDiv);
        var spandes = document.createElement(tipoElemento);
        spandes.setAttribute("class", classeElemento); 
        var desc = document.createTextNode(contenuto);
        spandes.appendChild(desc);
        divTarget.appendChild(spandes);
   }


function rimuoviPrimoElemento(lista) {
   lista[0].remove(); 
}

   function aggiornaDescrizione(passaggio){
      if (passaggio == 1) {
        aggiungiTag("passaggi","p","pass",passaggio.toString() + ") Consideriamo il quadrato di lato AB");
      } else if (passaggio == 2) {
        aggiungiTag("passaggi","p","pass",passaggio.toString() + ") Prendiamo il punto medio M del lato AE e congiungiamolo con B");
      } else if (passaggio == 3) {
        aggiungiTag("passaggi","p","pass",passaggio.toString() + ") sul prolungamento del lato AE troviamo il punto F, intersezione con l'arco di circonferenza avente centro in M e raggio MB");
      } else if (passaggio == 4) {
        aggiungiTag("passaggi","p","pass", passaggio.toString() + ") il punto C sarà l'intersezione dell'arco di circonferenza di centro A e raggio AF con il lato AB");
      }
      /*
      else if (passaggio == 5) {
        // cambia il tasto in ricomincia ... 
        //alert("ricominciamo!!!!");
        // cancella tutti i passaggi nel div 
        var passaggi = document.getElementsByClassName("pass");
        for(var i = 0; i <4; i++){
            rimuoviPrimoElemento(passaggi);
           }
        
           //remove();
           

      }
      */
   };
 
   function avanti(){
       if(passaggi < 5){
       passaggi++;
       aggiornaDescrizione(passaggi);
    } 
   };


        function draw() {
          
    if (passaggi == 0){
        line(50, 200, 350, 200); 
        text("A", 40, 200);
        text("B", 355, 200);
    }
    else if (passaggi == 1){
             line(50, 200, 50, 500); 
             text("E", 40, 500);
             line(50, 500, 350, 500); 
             text("D", 355, 500);
             line(350, 500,350, 200);

        
    } else if (passaggi == 2){
               ellipse(50,350,2,2);
               text("M", 37, 350);
               line(50, 350,350, 200); // congiungo M con B
    }
    else if (passaggi == 3){
             line(50,200,50,10) 
             text("F", 40, 15);
             arc(50, 200, 600, 370, HALF_PI*3, 0)
             ellipse(50,15,2,2);
   }  else if (passaggi == 4){
     
            arc(50, 200, 370, 370, HALF_PI*3, 0)
            ellipse(235,200,2,2);
            text("C", 235, 220);
   }      
};


// logica evidenzia medi ed estremi della proporzione 
// al passaggio del puntatore sulla parola nel testo


function evidenziaMedi(){
    var mords = document.getElementsByClassName("mord");
    mords[28].style.color = "#ff0000";
     mords[29].style.color = "#ff0000";
     mords[30].style.color = "#ff0000";
   
     var mbins = document.getElementsByClassName("mbin");
     mbins[0].style.color = "#ff0000";

   
   var ref = document.getElementById("refMed");
   ref.style.color = "#ff0000";
   
   }
   
   function normalizzaMedi(){
    var mords = document.getElementsByClassName("mord");
    mords[28].style.color = "black";
     mords[29].style.color = "black";
     mords[30].style.color = "black";
     var mbins = document.getElementsByClassName("mbin");
     mbins[0].style.color = "black";

   
   var ref = document.getElementById("refMed");
   ref.style.color = "black";
   }
   
 
function evidenziaEstremi(){
    var mords = document.getElementsByClassName("mord");
     mords[27].style.color = "blue";
      mords[31].style.color = "blue";
   
   
   var ref = document.getElementById("refEst");
   ref.style.color = "blue";
   
   }
   
   function normalizzaEstremi(){
    var mords = document.getElementsByClassName("mord");
     mords[27].style.color = "black";
      mords[31].style.color = "black";
   
   var ref = document.getElementById("refEst");
   ref.style.color = "black";
   
   }





// rendering delle formule con KaTeX
katex.render(String.raw`AC:AB = CB:AC`, proporzione);
katex.render(String.raw`(AC > CB)`, condSeg);
katex.render(String.raw`\tau = \frac{AB}{AC} = \frac{AC}{CB}`, tauRapp);
katex.render(String.raw`\tau * (\tau-1) = 1`, passaggioA1);
katex.render(String.raw`1:\tau = (\tau-1):1`, proporzioneX);
katex.render(String.raw`\tau^2 -\tau -1 = 0`, eqSecGrado);
katex.render(String.raw`ax^2 +bx +c = 0`, eqSGgen);
katex.render(String.raw`x_{1,2} = \frac{-b\pm\sqrt{b^2 - 4ac}}{2a}`, formulaRisolutiva);
katex.render(String.raw`\tau = \frac{1 + \sqrt{5}}{2} = 1.6180339887498948...`, tauAlgebrica);

 // rendering della successione di Fibonacci
 katex.render(String.raw`F_0 = 1`, mykatex1);
 katex.render(String.raw`F_1 = 1`, mykatex2);
 katex.render(String.raw`F_n = F_{n-2} + F_{n-1}`, mykatex3);
 katex.render(String.raw`(\forall n \ge 2)`, mykatex4);




katex.render(String.raw`\tau = 1.6180339887498948...`, fi);
katex.render(String.raw`\lim\limits_{n \to \infty} \frac{F_{n+1}}{F_{n}} = \tau`, limite);


 // Logica sezione aurea - calcolo di phi 
 var fiboSequence = [1,1];
        
 function nextStep(sequenza){
     var lastIndex = sequenza.length;
     next = sequenza[lastIndex-1]+sequenza[lastIndex-2];
     sequenza.push(next);
 };

 function calcolaRapporto(sequenza){
     nextStep(sequenza);
     var lastIndex = sequenza.length;
     var ratio = sequenza[lastIndex-1]/sequenza[lastIndex-2];
     ratio = ratio.toFixed(16);
     var label = ""+sequenza[lastIndex-1].toString()+"/"+sequenza[lastIndex-2].toString();
     var enne = lastIndex -2;
     var graphPoint = [label, ratio,enne];
     return graphPoint;
     
 };

 function confrontaValori(rapporto){
     var decimaliPHI = "6180339887498948";
     var decimaliRapporto = (rapporto+"").split(".")[1];
     var stringaSiNo = "";
    
     for (var i = 0; i < decimaliRapporto.length; i++){
        if(decimaliRapporto[i] == decimaliPHI[i]){
           stringaSiNo = stringaSiNo.concat("S");
        }
        else {
          stringaSiNo = stringaSiNo.concat("N");
        }
     }

     var divTarget = document.getElementById("fi");
     var cifrePhi = divTarget.getElementsByClassName("mord");
     var soloSI =  (stringaSiNo+"").split("N")[0];

       for(var j = 0; j < soloSI.length; j++){
           cifrePhi[j+3].style.color = "blue";
       }
     };

 function calcolaRap() {
     var nuovoPunto = calcolaRapporto(fiboSequence);
     if(fiboSequence.length < 23){
       confrontaValori(nuovoPunto[1]);
       document.getElementById("frazio").innerHTML = nuovoPunto[0]; // frazione a/b
       document.getElementById("display").innerHTML = nuovoPunto[1];
       document.getElementById("indi").innerHTML = nuovoPunto[2];
       document.getElementById("epsilon").innerHTML = 1.6180339887498948 - nuovoPunto[1];
     } else {
       // nascondi tasto calcola e mostra quello per ricominciare
         var tastoPhiRicomincia = document.getElementById('phiRicomincia');
         var tastoPhiCalcola = document.getElementById('phiCalcola');
         tastoPhiRicomincia.style.display = 'block'; 
         tastoPhiCalcola.style.display = 'none';
     }
     };


     function reset() {
         fiboSequence = [1,1];
         document.getElementById("display").innerHTML = "1";
         document.getElementById("frazio").innerHTML = "1/1"; // frazione a/b
          document.getElementById("indi").innerHTML = "0";
           document.getElementById("epsilon").innerHTML = 0.6180339887498948;
         // rimetti il colore nero ai decimali di phi
           var divTarget = document.getElementById("fi");
           var cifrePhi = divTarget.getElementsByClassName("mord");
           for(var k = 0; k < cifrePhi.length; k++){
              cifrePhi[k].style.color = "black";
             
           }

         // fai riapparire il bottone calcola e nascondi ricomincia
            var tastoPhiRicomincia = document.getElementById('phiRicomincia');
             var tastoPhiCalcola = document.getElementById('phiCalcola');
             tastoPhiRicomincia.style.display = 'none'; 
             tastoPhiCalcola.style.display = 'block';
         };
