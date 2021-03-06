
window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Paweł Czerwiński - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);
    };



// formule KaTeX
katex.render(String.raw`LP^2 = TL^2 + TP^2 -2 \cdot TL \cdot TP \cos(\alpha)`, lionePraga);
katex.render(String.raw`LP^2 = (235km)^2 + (752km)^2 -2 \cdot 235km \cdot 752km \cos(105°)`, lionePraga2);
katex.render(String.raw`LP = \sqrt[2]{712199,272km^2} = 843,9 km`, lionePraga3);
katex.render(String.raw`A_{(Pra-Li-To)} = \frac{TL \cdot TP \cdot \sin(\alpha)}{2} `, AreaTPL);
katex.render(String.raw`A_{(Pra-Li-To)} = \frac{235km \cdot 752km \cdot \sin(105°)}{2} = 85346,9 km^2`, AreaTPL2);

katex.render(String.raw`(lat: \gamma_{1} = 45°08′00′′ N; long: 10°02′ E) `, cremonaLatLong);

katex.render(String.raw`(lat: \gamma_{2} = 2°39′0″ S; long: 10°00′ E) `, gambaLatLong);

katex.render(String.raw`R_{Terrestre} = AC = CB = 6371 km`, raggioTerrestre);
katex.render(String.raw`\alpha_{1} = \beta_{1} = \frac{180° - \gamma_{1} - \gamma_{2}}{2} \approx \frac{180° - 45° - 3°}{2} = 66°`, ugAngoli);



katex.render(String.raw`\frac{CB}{\sin( \widehat{BLC} )} = \frac{LC}{\sin( \widehat{CBL} )}`, applicazioneTeoSeni);
katex.render(String.raw`\frac{CB}{\sin(\beta_{2} - \alpha_{1})} = \frac{LC}{\sin(180° - \beta_{2})}`, appTeoSeni);
katex.render(String.raw`LC = CB \cdot \frac{\sin(180° - \beta_{2})}{\sin(\beta_{2} - \alpha_{1})}  `, distanzaTerraLuna);
katex.render(String.raw`\sin(\alpha) = \sin(\pi - \alpha)= \sin(180° - \alpha)`, risuSeni);
katex.render(String.raw`LC = 6371 km \cdot \frac{\sin(\beta_{2})}{\sin(\beta_{2} - 66°)} `, distanzaTerraLuna2);

katex.render(String.raw`\begin{cases} \beta_{1} + \beta_{2} + \widehat{ABL} = 180° \\ \alpha_{1} + \widehat{BLC} + \beta_{1} + \widehat{ABL} = 180°  \end{cases} `, sistema);
katex.render(String.raw`\begin{cases} \widehat{ABL} = 180° - \beta_{1} - \beta_{2}  \\  \widehat{BLC}  = 180° - \alpha_{1} -  \beta_{1} - \widehat{ABL}  \end{cases} `, sistema2);
katex.render(String.raw`\widehat{BLC}  = 180° - \alpha_{1} -  \beta_{1} - (180° - \beta_{1} - \beta_{2})  = \beta_{2} - \alpha_{1}`, sistema3);