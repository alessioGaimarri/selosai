window.onload = function () { var node = document.createElement("span");
var textnode = document.createTextNode("cover: jason-leung - (unsplash.com)");
node.appendChild(textnode);
node.className = "credits-header";
var target = document.querySelectorAll('section.credits')[0]
target.appendChild(node);
 
}


// tarots pixabay.com

// rendering delle formule con KaTeX

katex.render(String.raw`D_{n,k} = n(n-1)(n-2)...(n-k+1)`, disposizioniSemplici);
katex.render(String.raw`D_{26,4} = 26(26-1)(26-2)(26-3)= 26 \cdot 25 \cdot 24 \cdot 23 = 358800`, disposizioniSemplici_esempio);
katex.render(String.raw`D_{n,k} = n^k`, disposizioniConRipetizione);
katex.render(String.raw`D_{26,4} = n^k = 26^4 = 26 \cdot 26 \cdot 26 \cdot 26 = 456976`, disposizioniConRipetizione_esempio);


katex.render(String.raw`P_{n} = n(n-1)(n-2)... \cdot 3 \cdot 2 \cdot 1 =  n!`, permutazioniElementiDistinti);
katex.render(String.raw`P_{52} = 52(51)(50)... \cdot 3 \cdot 2 \cdot 1 =  52! = \approx 8.0658 \times 10^{67}`, permutazioniElementiDistinti_esempio);
katex.render(String.raw`P^{*}_{MAMMA} = \frac{5!}{2! \cdot 3!} = \frac{120}{2 \cdot 6} = 10`, permutazioniConRipetizione_esempio);
katex.render(String.raw`P^{*} = \frac{n!}{a_{1}! \cdot a_{2}! \cdot ... \cdot a_{k}!}`, permutazioniConRipetizione);

katex.render(String.raw`C_{n,k} =  {n \choose k} = \frac{D_{n,k}}{k!} = \frac{ n(n-1)(n-2) ... (n-k+1)}{k!}`, coeffBinomiale);
katex.render(String.raw`C_{n,0} =  1`, coeffBinomiale_esempio_0);
katex.render(String.raw`C_{n,0} =  n`, coeffBinomiale_esempio_1);
katex.render(String.raw`C^{*}_{n,k} = {n + k - 1 \choose k}`, combConRip);
katex.render(String.raw`x_{rosse} + x_{verdi} + x_{gialle} = 10`, condi1);
katex.render(String.raw`*****|**|***`, condi2);

katex.render(String.raw`C^{*}_{10,3} = {10 + 3 - 1 \choose 3} = {12 \choose 3} = \frac{ 12 \cdot 11 \cdot 10 \cdot 9 \cdot 8}{3!} = \frac{95040}{6} = 15840`, soluzione);
