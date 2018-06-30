
window.onload = function () { 
                              // aggiungo nel footer l'autore della foto usata nella cover 
                              var node = document.createElement("span");
                              var textnode = document.createTextNode("cover: Itay Kabalo - (unsplash.com)");
                              node.appendChild(textnode);
                              node.className = "credits-header";
                              var target = document.querySelectorAll('section.credits')[0]
                              target.appendChild(node);
                              // nascondo la nota 'nativa' per lasciare quella bilingue:
                              
                              var tabelle = document.getElementsByClassName("footnote");
                               var numeroTabelle = tabelle.length;
                               var notaDaEliminare = tabelle[numeroTabelle -1];
                               notaDaEliminare.style.display = 'none';
                               
                              };
                    
function latino() {document.getElementById("estratto").innerHTML = 
`Quot paria coniculorum in uno anno ex uno parlo germinentur. 
Qvidam posuit unum par cuniculorum in quodam loco, qui erat undique pariete circundatus, 
ut sciret, quot ex eo paria germinarentur in uno anno: cum natura eorum sit per singulum mensem 
aliud par germinare; et in secundo mense ab eorum nati uitate germinant. 
Quia suprascriptum par in primo mense germinai, duplicabis ipsum, erunt paria duo in uno mense. 
Ex quibus unum, scilicet primum, in secundo mense geminat; et sic sunt in secundo mense paria 3; 
ex quibus in uno mense duo pre gnantur; et geminantur in tercio mense paria 2 coniculorum; 
et sic sunt paria 5 in ipso mense; ex quibus in ipso pregnantur paria 3; et sunt in quarto mense 
paria 8; ex quibus paria 5 geminant alia paria 5: quibus additis cum parijs 8, 
faciunt paria 13 in quinto mense; ex quibus paria 5, que geminata fuerunt in ipso mense, 
non con cipiunt in ipso mense, sed alia 8 paria pregnantur; et sic sunt in sexto mense paria 21;
cum quibus additis parijs 13, que geminantur in septimo, erunt in ipso paria 34; 
cum quibus additis parijs 21, que geminantur in octauo mense, erunt in ipso paria 55; 
cum quibus additis parjis 34, que geminantur in nono mense, erunt in ipso paria 89; 
cum quibus additis rursum parijs 55, que geminantur in decimo, erunt in ipso paria 144; 
cum quibus additis rursum parijs 89, que geminantur in undecimo mense , erunt in ipso paria 233. 
Cum quibus etiam additis parijs 144, que geminantur in ultimo mense, erunt paria 377; 
et tot paria peperit suprascriptum par in prefato loco in capite unius anni. 
Potes enim uidere in liac margine, qualiter hoc operati fuimus, scilicet quod iunximus 
primum numerum cum secundo, uidelicet i cum 2; et secundum cum tercio; et tercium cum quarto; 
et quartum cum quinto, et sic deinceps, donec iunximus decimum cum undecimo, uidelicet 144 cum 233; 
et habuimus suprascriptorum cunicu lorum summam, uidelicet 377; et sic posses facere per ordinem de 
infìnitis numeri mensibus`};

function italiano() {document.getElementById("estratto").innerHTML = 
`Quante coppie di conigli saranno prodotte in un anno da una coppia. 
Un tale mise una coppia di conigli in un luogo che era circondato da ogni parte 
da una parete per sapere quante coppie da essa fossero prodotte in un anno, 
la loro natura essendo che ogni mese fosse prodotta un’altra coppia e che cominciassero 
a figliare il secondo mese dopo la nascita. Poiché la coppia soprascritta figlia il primo mese, 
lo stesso raddoppierai; saranno due coppie dopo un mese. Delle quali una, cioè la prima, 
figlierà nel secondo mese, e così nel secondo mese saranno 3 coppie. Delle quali in un mese due 
resteranno gravide e produrranno il terzo mese 2 coppie di conigli, 
e così in questo mese ci saranno 5 coppie di conigli. 
Delle quali 3 resteranno gravide, e nel quarto mese saranno 8 paia. 
Delle quali 5 produrranno altre 5 paia che aggiunte alle 8 fanno 13 nel quinto mese. 
Delle quali 5 coppie che furono prodotte nello stesso mese, non concepiscono in questo mese, 
ma le altre 8 resteranno gravide, e così nel sesto mese sono 21 coppie. Aggiunti ai quali le 13 coppie 
che nasceranno nel settimo, saranno nello stesso 34 coppie: aggiunte alle quali le 21 coppie che 
nasceranno nell’ottavo mese, saranno in esso 55 coppie. Aggiunte alle quali le 34 coppie che 
nasceranno nel nono mese, saranno in esso 89 coppie: aggiunte alle quali di nuovo 55 che nasceranno 
nel decimo, saranno in esso 144 coppie. Aggiunte alle quali di nuovo 89 coppie che nasceranno 
nell’undecimo mese, saranno in esso 233 coppie. Aggiunti con questi 144 coppie che nasceranno 
nell’ultimo mese, saranno 377 paia. E tante paia produrrà la soprascritta coppia nel luogo 
predetto in capo di uno anno. Puoi infatti vedere in questo margine come abbiamo operato, 
vale a dire come aggiungemmo il primo numero con il secondo, cioè 1 con 2, e il secondo con il terzo, 
e il terzo con il quarto, e il quarto con il quinto, e così via, finché aggiungemmo il decimo con l’undecimo, 
cioè 144 con 233, e avemmo la somma dei soprascritti conigli, cioè 377. E così puoi fare con ordine 
per un numero infinito di mesi.`
};



// Logica della tabella conigli

function resetta() {
    var tabella = document.getElementById("conigliera");
    var rows = tabella.rows;
    var i = rows.length;
    while (--i) {
        rows[i].parentNode.removeChild(rows[i]);
    }
    var riga = document.createElement("TR");
    // colonna mese
    var colonnaMese = document.createElement("TD");
    colonnaMese.setAttribute("style", "text-align:center;");
    var t = document.createTextNode("0");
    colonnaMese.appendChild(t);
    riga.appendChild(colonnaMese);
    // colonna Conigli
    var colonnaConigli = document.createElement("TD");
    colonnaConigli.setAttribute("class", "rabbits"); 
    colonnaConigli.setAttribute("style", "text-align:center;");
    var conigli = document.createTextNode("c");
    colonnaConigli.appendChild(conigli);
    riga.appendChild(colonnaConigli);
    // colonna Totale coppie
   var colonnaTotCoppie = document.createElement("TD");
   colonnaTotCoppie.setAttribute("style", "text-align:center;");
   var totale = document.createTextNode("1");
   colonnaTotCoppie.appendChild(totale);
   riga.appendChild(colonnaTotCoppie);
   // aggiungiamo riga
   tabella.appendChild(riga);

    contatoreMesi = 0;
    conigliera = "c";

    // rimette il solo tasto applica regola
    var tastoRicomincia = document.getElementById('ricomincia');
    var tastoRegola = document.getElementById('regola');
    tastoRicomincia.style.display = 'none'; 
    tastoRegola.style.display = 'block';

    };

    function cancellaPrimaRiga(){
        var tabella = document.getElementById("conigliera");
        var righe = tabella.rows;
        righe[1].parentNode.removeChild(righe[1]);
        };

function aggiornaTabella(mese,conigli, totaleCoppie) {
var tabella = document.getElementById("conigliera");
tabella.setAttribute("class", "contenitore");
var riga = document.createElement("TR");
// colonna mese
var colonnaMese = document.createElement("TD");
colonnaMese.setAttribute("style", "text-align:center;");
var t = document.createTextNode(mese);
colonnaMese.appendChild(t);
riga.appendChild(colonnaMese);
// colonna Conigli
var colonnaConigli = document.createElement("TD");
colonnaConigli.setAttribute("class", "rabbits"); 
colonnaConigli.setAttribute("style", "text-align:center;");
var conigli = document.createTextNode(conigli);
colonnaConigli.appendChild(conigli);
riga.appendChild(colonnaConigli);
// colonna Totale coppie
var colonnaTotCoppie = document.createElement("TD");
colonnaTotCoppie.setAttribute("style", "text-align:center;");
var totale = document.createTextNode(totaleCoppie);
colonnaTotCoppie.appendChild(totale);
riga.appendChild(colonnaTotCoppie);
// aggiungiamo riga
tabella.appendChild(riga);

};


var conigliera = "c";
var contatoreMesi = 0;

function itera(){
    if (conigliera.length == 0) {
    conigliera = "c"; // primo passo
    aggiornaTabella(contatoreMesi,conigliera,conigliera.length);
    contatoreMesi += 1;

    } else {
        var nuovaConigliera = "";
        for (var i = 0; i < conigliera.length; i++) {
 
            if (conigliera.charAt(i) == "c"){
  
              nuovaConigliera += "C";
             } else if (conigliera.charAt(i) == "C"){
             nuovaConigliera += "Cc";
             }
        }

conigliera = nuovaConigliera;
contatoreMesi += 1;
if(contatoreMesi<14){
aggiornaTabella(contatoreMesi,conigliera,conigliera.length);
} 
  else if (contatoreMesi==14) {
  cancellaPrimaRiga();
  cancellaPrimaRiga();
  
  // nasconde il tasto regola e fa comparire il tasto ricomincia
    var tastoRicomincia = document.getElementById('ricomincia');
    var tastoRegola = document.getElementById('regola');
    tastoRegola.style.display = 'none'; //or tastoRicomincia.style.visibility = 'hidden';
    tastoRicomincia.style.display = 'block';
}
// superato un certo num di righe comincia ad eliminare la prima...
var tabella = document.getElementById("conigliera");
var righe = tabella.rows;
if(righe.length > 4){
    cancellaPrimaRiga();
}



    }
};
// fine logica della tabella conigli


        // rendering delle formule con KaTeX
        katex.render(String.raw`F_0 = 1`, mykatex1);
        katex.render(String.raw`F_1 = 1`, mykatex2);
        katex.render(String.raw`F_n = F_{n-2} + F_{n-1}`, mykatex3);
        katex.render(String.raw`(\forall n \ge 2)`, mykatex4);
    
        
        // fine rendering

       

