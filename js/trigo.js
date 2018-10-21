
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


