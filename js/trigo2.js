
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover:  Simone Hutsch - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);
    };

// rendering delle formule con KaTeX


katex.render(String.raw`A = \frac{base \cdot altezza}{2} =  \frac{AB \cdot CH}{2}`, areaTriangolo);
katex.render(String.raw`CH = BC \sin(\beta) `, altezzaFangolo);
katex.render(String.raw`A = \frac{AB \cdot BC \sin(\beta)}{2}`, areaTrQualsiasi);
katex.render(String.raw`A = \frac{b \cdot c \sin(\alpha)}{2} = \frac{a \cdot c \sin(\beta)}{2} = \frac{a \cdot b \sin(\gamma)}{2}`, relazioniATQ);
katex.render(String.raw`AB = 2r \cdot sin(\beta) = 2r \cdot sin(\alpha)`, teoremaCorda);
katex.render(String.raw`AB = 2r \cdot sin(\alpha) = 2r \cdot sin(90°) = 2r \cdot 1 = 2r`, teoremaCorda_diametro);
katex.render(String.raw`AB = AM \cdot sin(\widehat{AMB}) = 2r \cdot sin(\widehat{AMB})`, teoremaCorda_NonDiametro);
katex.render(String.raw`sin(\alpha) = sin(\widehat{AHB}) = sin(\widehat{AMB})`, teoremaCorda_NonDiametro2);
katex.render(String.raw`\widehat{AIB} = \pi - \widehat{AHB} = \pi - \alpha`, teoremaCorda_NonDiametro3);
katex.render(String.raw`\sin(\alpha) = \sin(\pi - \alpha)`, teoremaCorda_NonDiametro4);


katex.render(String.raw`\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)} `, teoremaSeni);
katex.render(String.raw`AC = b = 2r \cdot \sin(\beta)`, dimostrazione_Tseni_1);
katex.render(String.raw`BC = a = 2r \cdot \sin(\alpha)`, dimostrazione_Tseni_2);
katex.render(String.raw`AB = c = 2r \cdot \sin(\gamma)`, dimostrazione_Tseni_3);
katex.render(String.raw`\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)} = 2r`, dimostrazione_Tseni_fine);
katex.render(String.raw`a^2 = b^2 + c^2 -2bc \cos(\alpha)`, teoremaCoseno_1);
katex.render(String.raw`b^2 = a^2 + c^2 -2ac \cos(\beta)`, teoremaCoseno_2);
katex.render(String.raw`c^2 = a^2 + b^2 -2ab \cos(\gamma)`, teoremaCoseno_3);
