
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Jack T - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);

    
     
    };


// rendering delle formule con KaTeX
katex.render(String.raw`\alpha + \beta + \gamma = 180° = \pi`, sommaAngoliInterni);
katex.render(String.raw`90 ° + \beta + \gamma = 180°`, sommaAngoliInterniRettangolo);
katex.render(String.raw`\beta + \gamma = 180° - 90° = 90° = \frac{\pi}{2}`, sommaAngoliInterniRettangolo2);
katex.render(String.raw`b = a \sin(\beta) = a \cos(\gamma)`, pTr_1);
katex.render(String.raw`c = a \sin(\gamma) = a \cos(\beta)`, pTr_2);
katex.render(String.raw`\frac{b}{c} = \frac{a \sin(\beta)}{a \cos(\beta)} = \frac{\sin(\beta)}{\cos(\beta)} = \tan(\beta) \longrightarrow`, bfrattoc_1);
katex.render(String.raw`\frac{b}{c} = \frac{a \cos(\gamma)}{a \sin(\gamma)} = \frac{\cos(\gamma)}{\sin(\gamma)} = \cot(\gamma) \longrightarrow`, bfrattoc_2);
katex.render(String.raw`b = c \tan(\beta) = c \cot(\gamma)`, prime);
katex.render(String.raw`c = b \cot(\beta) = b \tan(\gamma)`, seconde);

katex.render(String.raw`A = \frac{base * altezza}{2} =  \frac{AB \cdot CH}{2}`, areaTriangolo);
katex.render(String.raw`CH = BC \sin(\beta) `, altezzaFangolo);
katex.render(String.raw`A = \frac{AB \cdot BC \sin(\beta)}{2}`, areaTrQualsiasi);
katex.render(String.raw`A = \frac{b \cdot c \sin(\alpha)}{2} = \frac{a \cdot c \sin(\beta)}{2} = \frac{a \cdot b \sin(\gamma)}{2}`, relazioniATQ);
katex.render(String.raw`AB = 2r \cdot sin(\beta) = 2r \cdot sin(\alpha)`, teoremaCorda);
katex.render(String.raw`\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)} `, teoremaSeni);
katex.render(String.raw`AC = b = 2r \cdot \sin(\beta)`, dimostrazione_Tseni_1);
katex.render(String.raw`BC = a = 2r \cdot \sin(\alpha)`, dimostrazione_Tseni_2);
katex.render(String.raw`AB = c = 2r \cdot \sin(\gamma)`, dimostrazione_Tseni_3);
katex.render(String.raw`\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)} = 2r`, dimostrazione_Tseni_fine);
katex.render(String.raw`a^2 = b^2 + c^2 -2bc \cos(\alpha)`, teoremaCoseno_1);
katex.render(String.raw`b^2 = a^2 + c^2 -2ac \cos(\beta)`, teoremaCoseno_2);
katex.render(String.raw`c^2 = a^2 + b^2 -2ab \cos(\gamma)`, teoremaCoseno_3);









