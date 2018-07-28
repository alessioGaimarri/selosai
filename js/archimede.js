
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Zach Angelo - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);

       // nascondo l'ultima nota 
                              
       var tabelle = document.getElementsByClassName("footnote");
       var numeroTabelle = tabelle.length;
       var notaDaEliminare = tabelle[numeroTabelle -1];
       notaDaEliminare.style.display = 'none';
  
     
    };

 // rendering delle formule con KaTeX
 katex.render(String.raw`V_{oro} < V_{corona} < V_{argento}`, prop1);
 katex.render(String.raw`V_{oro} - V_{oro} < V_{corona} - V_{oro} < V_{argento} - V_{oro}`, prop2);
 katex.render(String.raw`0 < V_{corona} - V_{oro} < V_{argento} - V_{oro}`, prop3);
 katex.render(String.raw`0 < \frac{V_{corona} - V_{oro}}{V_{argento} - V_{oro}}  < 1`, prop4);
 katex.render(String.raw`d_{oro} > d_{argento}`, densità);
 katex.render(String.raw`d = \frac{m}{V}  \rightarrow V = \frac{m}{d}` , volumi);
 katex.render(String.raw`V_{oro} = \frac{m_{corona}}{d_{oro}} < V_{argento} = \frac{m_{corona}}{d_{argento}}` , risultato);
 katex.render(String.raw`V_{corona} = V_{oro} \quad  \rightarrow \quad` , ipotesiGood);
 katex.render(String.raw`V_{oro} < V_{corona} < V_{argento} \quad  \rightarrow  \quad` , ipotesiNoGood);



// logica che gestisce i testo italiano/latino 
function latino() {document.getElementById("estratto").innerHTML = 
`(10) Archimedis vero cum multa miranda inventa et varia fuerint, 
ex omnibus etiam infinita sollertia id, quod exponam, videtur esse expressum. 
Nimium Hiero enim Syracusis auctus regia potestate, rebus bene gestis cum auream 
coronam votivam diis inmortalibus in quodam fano constituisset ponendam, 
manupretio locavit faciendam et aurum ad sacomam adpendit redemptori. 
Is ad tempus opus manu factum subtiliter regi adprobavit et ad sacomam 
pondus coronae visus est praestitisse. [10] Posteaquam indicium est factum 
dempto auro tantundem argenti in id coronarium opus admixtum esse, 
indignatus Hiero se contemptum esse neque inveniens, qua ratione id 
furtum reprehenderet, rogavit Archimeden, uti in se sumeret sibi de 
eo cogitationem. Tunc is, cum haberet eius rei curam, casu venit in 
balineum, ibique cum in solium descenderet, animadvertit, 
quantum corporis sui in eo insideret, tantum aquae extra solium effluere. 
Itaque cum eius rei rationem explicationis ostendisset, non est moratus, 
sed exiluit gaudio motus de solio et nudus vadens domum verius significabat 
clara voce invenisse, quod quaereret; nam currens identidem graece clamabat:

(11) Tum vero ex eo inventionis ingressu duas fecisse dicitur massas aequo pondere, 
quo etiam fuerat corona, unam ex auro et alteram ex argento. Cum ita fecisset, 
vas amplum ad summa labra implevit aquae, in quo dimisit argenteam massam. 
Cuius quanta magnitudo in vasum depressa est, tantum aquae effluxit. 
Ita exempta massa quanto minus factum fuerat, refudit sextario mensus, 
ut eodem modo, quo prius fuerat, ad labra aequaretur. Ita ex eo invenit, 
quantum ad certum pondus argenti ad certam aquae mensuram responderet.

(12) Cum id expertus esset, tum auream massam similiter pleno vaso demisit et ea exempta, 
eadem ratione mensura addita invenit ex aquae numero non tantum esse: minore quanto minus 
magno corpore eodem pondere auri massa esset quam argenti. Postea vero repleto vaso in 
eadem aqua ipsa corona demissa invenit plus aquae defluxisse in coronam quam in auream 
eodem pondere massam, et ita ex eo, quod fuerit plus aquae in corona quam in massa, 
ratiocinatus reprehendit argenti in auro mittionem et manifestum furtum redemptoris.
`};

function italiano() {document.getElementById("estratto").innerHTML = 
`
Archimede poi sebbene molte e varie sieno state le mirabili 
invenzioni, fra tutte però quella, che mostra maggior sottigliezza, è quella che dirò. 
Gerone innalzato alla potestà regale in Siracusa avendo per lo felice esito delle sue cose 
declinato di porre in un certo tempio una corona d'oro in voto agli 
dei immortali, la diede a fare di grossa valuta, e consegnò l’egual peso 
d'oro all'appaltatore. Questi al tempo stabilito presentò al Re il prescritto lavoro fatto con 
delicatezza, e il peso della corona parve che 
corrispondesse al dato; ma essendo stata fatta una 'denuncia, che ne era» 
stato tolto dell' oro , e mescolatovi altrettanto d'argento , ne andò in 
collera Gerone per essere stato burlato , nè sapendo come appurare il 
furto, ne richiese Archimede, perché se ne addossasse egli il pensiero. 
Stando egli con questa cura, andò per calò al bagno, ed ivi mentre calava nella folla, 
s’ accorse, che quanta era la massa del suo corpo che vi entrava, 
altrettanta acqua ne usciva: quindi avendo incontrato il metodo della dimostrazione di una tal cosa, 
non vi si fermò, 
ma spinto dall’allegrezza saltò fuori del labbro, e nudo correndo verso 
casa, andava ad alta voce dicendo di aver trovato quel che cercava, 
mentre correndo ogni poco gridava in greco eureca eureca. Così con 
quel principio d’invenzione si narra, che fece due masse di peso egua- 
le a quel della corona, una d'oro, l'altra d'argento; ciò fatto empì 
d'acqua fino all'orlo un gran vaso, e vi calò dentro la massa d'argento, 
onde vi versò tanta acqua, quanta era la grandezza tuffata nel vaso: 
indi estratta la massa, vi rifuse a misura l'acqua che vi era di meno, 
fino all'orlo come stava prima. 
Così trovò quanta era la quantità dell'acqua corrispondente al dato peso d'argento. 
Fatta questa esperienza, calò parimenti nel vaso pieno la massa d'oro, 
indi toltala, rifondendo della stessa maniera l’acqua a misura, trovò 
non essercene versata tanta, ma tanto meno, di quanto era minore 
di mole la massa d'oro eguale di peso a quella d’argento. Finalmente riempito di nuovo il vaso, 
tuffò nell'acqua la stessa corona, e 
scoprì , che si era versata più acqua per la corona, che per la massa 
d oro di egual peso: e così da quell'acqua di più che si era versata per la corona, 
e non per la massa, col calcolo trovò la quantità di argento mescolata nell'oro, 
e il manifesto furto dell'appaltatore.
`
};