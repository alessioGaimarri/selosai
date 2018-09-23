
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Keith Johnston - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);

    
     
    };

 // rendering delle formule con KaTeX
 katex.render(String.raw`\vec{F}_{peso} + \vec{F}_{attrito} = 0 \longrightarrow \vec{v}_{caduta} = costante \neq 0`, annullamento);
 katex.render(String.raw`\vec{a} = \frac{\Delta \vec{v}}{\Delta t} `, accelerazione);
 katex.render(String.raw`\vec{F}_{totale} = m \vec{a}`, leggeFD);
 katex.render(String.raw`\vec{F} = costante`, propInv1);
 katex.render(String.raw`(m_{1} > m_{2}) \longrightarrow \vec{a}_{1} < \vec{a}_{2}`, propInv2);
 katex.render(String.raw`\vec{a} \propto \frac{1}{m}`, prop);
 katex.render(String.raw`\vec{a} \propto \vec{F}_{totale}`, propLin);
 katex.render(String.raw`1 Newton = 1 N = 1 kg \frac{m}{s^2}`, udm);
 katex.render(String.raw`\vec{F}_{A \rightarrow B} = - \vec{F}_{B \rightarrow A}`, terzoP);
