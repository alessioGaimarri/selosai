
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Pro Church Media - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);

     // nascondo la nota 'nativa' per lasciare quella con la gif animata:
                              
     var tabelle = document.getElementsByClassName("footnote");
     var numeroTabelle = tabelle.length;
     var notaDaEliminare = tabelle[numeroTabelle -1];
     notaDaEliminare.style.display = 'none';
     var notaDaEliminareDue = tabelle[numeroTabelle -2];
     notaDaEliminareDue.style.display = 'none';
     var notaDaEliminareDue = tabelle[numeroTabelle -3];
     notaDaEliminareDue.style.display = 'none';
       
  
     
    };
 // rendering delle formule con KaTeX
 katex.render(String.raw`m_{corona} = 700 g = 0,7 kg`, mCorona);
 katex.render(String.raw`d_{oro} = 19320 \frac{kg}{m^3}`, denOro);
 katex.render(String.raw`d_{argento} = 10490  \frac{kg}{m^3}`, denArg);
 katex.render(String.raw`V_{oro} = \frac{m_{corona}}{d_{oro}} = \frac{0.7 kg}{19320 \frac{kg}{m^3}} = 3,62 \times 10^{-5} m^3` , VolOro);
 katex.render(String.raw`V_{argento} = \frac{m_{corona}}{d_{argento}} = \frac{0.7 kg}{10490 \frac{kg}{m^3}} = 6,67 \times 10^{-5} m^3` , VolArg);

 katex.render(String.raw`V_{sfera} = \frac{4}{3} \pi R^3 \rightarrow  R_{sfera} = \sqrt[3]{\frac{3V}{4\pi}} `, Vsfera);

 katex.render(String.raw`R_{oro} = R_{pallina} = 2 cm`, Roro);
 katex.render(String.raw`R_{argento} = 2,5 cm`, Rarg);
 katex.render(String.raw`V_{oro} = V_{pallina} = 36,2 cm^3`, Voro_cmcubi);
 katex.render(String.raw`V_{argento} = 66,7 cm^3`, Varg_cmcubi);
 
 
 katex.render(String.raw`\Delta h_{(oro)} = \frac{V_{oro}}{l^2} = \frac{36,2 cm^3}{(32 cm)^2}  = 0,35 mm`, dh_oro);
 katex.render(String.raw`\Delta h_{(argento)} = \frac{V_{argento}}{l^2} = \frac{66,7 cm^3}{(32 cm)^2}  = 0,65 mm`, dh_arg);

 katex.render(String.raw`\Delta h_{(oro)} =  \frac{36,2 cm^3}{320 cm^2}  = 1,13 mm`, dh_oro_rett);
 katex.render(String.raw`\Delta h_{(argento)} = \frac{66,7 cm^3}{320 cm^2}  = 2,08 mm`, dh_arg_rett);

 katex.render(String.raw`F_{P_{(contrappeso)}} \cdot \overline{AC} = F_{P_{(metallo)}} \cdot \overline{BC}`, bilanciaEqIn);
 katex.render(String.raw`F_{P_{(contrappeso)}} = F_{P_{(metallo)}} \rightarrow \overline{AC} = \overline{BC}`, dedu1);
 

 katex.render(String.raw`F_{Peso} = mg`, fPeso);
 katex.render(String.raw`g = 9,8 \frac{m}{s^2}`, gi);
 katex.render(String.raw`F_{A} = V_{immerso} \cdot d_{fluido} \cdot g = m_{fluido spostato} \cdot g`, spinta);
 katex.render(String.raw`F_{P_{(contrappeso)}} \cdot \overline{EC} = (F_{P_{(metallo)}} - F_{A}) \cdot \overline{BC} `, equilibrio);

 katex.render(String.raw`d_{acqua}  =  997,8 \frac{kg}{m^3}`, densitaAcquaRT);
 katex.render(String.raw`F_{P}  = mg = 0,7kg \cdot  9,8 \frac{m}{s^2} = 6,86 N`, pesi_in_aria);
 katex.render(String.raw`F_{A_{(oro)}}  = V_{oro} \cdot d_{acqua} \cdot g = `, SpinteArchi);
 katex.render(String.raw`= 3,62 \times 10^{-5} m^3 \cdot  997,8 \frac{kg}{m^3} \cdot 9,8 \frac{m}{s^2} = 0,3539 N`, SpinteArchi2);
 katex.render(String.raw`F_{A_{(argento)}}  = V_{argento} \cdot d_{acqua} \cdot g =`, SpinteArchiArge);
 katex.render(String.raw`= 6,67 \times 10^{-5} m^3 \cdot  997,8 \frac{kg}{m^3} \cdot 9,8 \frac{m}{s^2} = 0,6522 N`, SpinteArchiArge2);

 
 katex.render(String.raw`\overline{EC}  =  \frac{(F_{P} - F_{A}) \cdot \overline{BC}}{F_{P}} = \frac{(6,86-0,35)N \cdot \overline{0,6}m}{6,86 N} = 56,9 cm`, ec);
 katex.render(String.raw`\overline{FC}  =  \frac{(F_{P} - F_{A}) \cdot \overline{BC}}{F_{P}} = \frac{(6,86-0,65)N \cdot \overline{0,6}m}{6,86 N} = 54,3 cm`, fc);
 katex.render(String.raw`F_{A_{(corona)}}  =  (\frac{x}{d_{arg}} + \frac{(1-x)}{d_{oro}}) \cdot m_{corona} \cdot d_{acqua} \cdot g`, FarchiCorona);
 katex.render(String.raw`\overline{GC}  =  \frac{(F_{P} - F_{A_{(corona)}}) \cdot \overline{BC}}{F_{P}} = 56,5 cm`, condx);
 katex.render(String.raw`F_{A_{(corona)}}  =  F_{P} (1 - \frac{56,5 cm}{60 cm})=  0.0583 \cdot F_{P} `, condx2);
 katex.render(String.raw`(\frac{x}{d_{arg}} + \frac{(1-x)}{d_{oro}})  = \frac{0.0583 \cdot F_{P}}{m_{corona} \cdot d_{acqua} \cdot g} = 5,8461 \times 10^{-5}\frac{m^3}{kg}  `, condx3);
 katex.render(String.raw`x(d_{oro} - d_{arg})  = \frac{0.0583 \cdot F_{P}}{m_{corona} \cdot d_{acqua} \cdot g} \cdot d_{arg} \cdot d_{oro} - d_{arg}`, condx4);
 katex.render(String.raw`x  = \frac{\frac{0.0583 \cdot F_{P}}{m_{corona} \cdot d_{acqua} \cdot g} \cdot d_{arg} \cdot d_{oro} - d_{arg}}{(d_{oro} - d_{arg})} = 0,153  `, condx5);
 katex.render(String.raw`x  = 0,15  `, percRilevabile);
 