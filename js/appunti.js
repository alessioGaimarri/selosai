window.onload = function () { 
    // aggiungo nel footer l'autore della foto usata nella cover 
    var node = document.createElement("span");
    var textnode = document.createTextNode("cover: Med Badr Chemmaoui - (unsplash.com)");
    node.appendChild(textnode);
    node.className = "credits-header";
    var target = document.querySelectorAll('section.credits')[0]
    target.appendChild(node);

   
     
    };


    // rendering delle formule con KaTeX
 katex.render(String.raw`\longrightarrow`, fsinistra);
 katex.render(String.raw`\longrightarrow`, fdestra);