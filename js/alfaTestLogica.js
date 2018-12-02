window.onload = function () { var node = document.createElement("span");
var textnode = document.createTextNode("cover: Ashley Batz  - (unsplash.com)");
node.appendChild(textnode);
node.className = "credits-header";
var target = document.querySelectorAll('section.credits')[0]
target.appendChild(node);

}


// Logica accensione risposte

function giusta(x) {
   
    if (x.style.color == "green"){
       x.style.color = "black";
    } else {
       x.style.color = "green";
    }
    
   };


/*

   su w3school funziona

          <audio id="audioGiusta" src="horse.ogg" ></audio>
         <audio id="audioSbagliata" src="horse.mp3" ></audio>
         <span onclick="myFunc()">cliccami</span>
         
         <script>
         function myFunc(){
          var audio = document.getElementById("audioGiusta");
            audio.play();
         }
         </script>
      
*/

   function sbagliata(x) {
    if (x.style.color == "red"){
       x.style.color = "black";
    } else {
       x.style.color = "red";
       
    }
   }



// logica mostra nascondi soluzioni
function mostraSoluzione(nomeIdSol) {
    document.getElementById(nomeIdSol).style.display = "block";
    var stringaBtnMostra = "bottoneMostra_" + nomeIdSol;
    document.getElementById(stringaBtnMostra).style.display = "none";
    var stringaBtnNascondi = "bottoneNascondi_" + nomeIdSol;
    document.getElementById(stringaBtnNascondi).style.display = "block";
};

function nascondiSoluzione(nomeIdSol) {
    document.getElementById(nomeIdSol).style.display = "none";
    var stringaBtnMostra = "bottoneMostra_" + nomeIdSol;
    document.getElementById(stringaBtnMostra).style.display = "block";
    var stringaBtnNascondi = "bottoneNascondi_" + nomeIdSol;
    document.getElementById(stringaBtnNascondi).style.display = "none";
   
};


// rendering delle formule con KaTeX

katex.render(String.raw`V = L^3 = n^3`, volCubo);
katex.render(String.raw`n^3 < 359`, volCubo2);
katex.render(String.raw`n = 6 \longrightarrow V = 6^3 = 216`, volCubo3);
katex.render(String.raw`n = 7 \longrightarrow V = 7^3 = 343`, volCubo4);
katex.render(String.raw`n = 8 \longrightarrow V = 8^3 = 512`, volCubo5);
katex.render(String.raw`\begin{cases} 14g = 4\Delta P + 3\Delta C  \\ 18g = 4\Delta P + 5\Delta C  \end{cases} `, sistemaPappagalli);
katex.render(String.raw`4g = 2\Delta C \longrightarrow \Delta C = 2g`, sistemaPappagalli2);
katex.render(String.raw`\Delta P = \frac{14g - 6g}{4} = 2g`, sistemaPappagalli3);
katex.render(String.raw`\Delta s = 375 km \cdot 2 = 750 km`, udm1);
katex.render(String.raw`\frac{750 km}{25\frac{km}{l}} = 30 litri`, udm2);
katex.render(String.raw`30 litri = \frac{30 litri}{3,75 \frac{litri}{gallone}} = 8 galloni`, udm3);
katex.render(String.raw`prezzo = 3 \frac{£}{gallone} \cdot 8 galloni = 24 £`, udm4);
katex.render(String.raw`prezzo = 24 £ \cdot 1.25 \frac{€}{£} = 30 €`, udm5);
katex.render(String.raw`\frac{responsabili}{ricercatori} \leq \frac{20}{30} = \frac{2}{3}`, respRic);
katex.render(String.raw`\frac{10€ + 15€ + 12€ + 35€}{4} = \frac{72€}{4} = 18€`, condi);
katex.render(String.raw`v_{m} = \frac{60 \frac{miglia}{h}}{8 miglia} \cdot 5 km = 37,5 \frac{km}{h}`, convSbagliata);
katex.render(String.raw`\Delta t = \frac{\Delta s}{v_{m}} = \frac{200 km}{37,5 \frac{km}{h}} = 5,33 h`, deltaTSbagliato);
katex.render(String.raw`0,33h : 1h = x : 60 min`, propMinuti);
katex.render(String.raw`x = \frac{60 min \cdot 0,33 h}{1h} =  19,8 minuti \approx 20 min`, propMinuti2);
katex.render(String.raw`v_{m} = \frac{60 \frac{miglia}{h}}{5 miglia} \cdot 8 km = 96 \frac{km}{h}`, convCorretta);
katex.render(String.raw`\Delta t = \frac{\Delta s}{v_{m}} = \frac{200 km}{96 \frac{km}{h}} = 2,083 h`, deltaTCorretto);
katex.render(String.raw`0,083h : 1h = x : 60 min`, propMinutiCorretti);
katex.render(String.raw`x = \frac{60 min \cdot 0,083 h}{1h} =  4,98 minuti \approx 5 min`, propMinutiCorretti2);


