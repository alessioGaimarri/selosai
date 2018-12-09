window.onload = function () { var node = document.createElement("span");
var textnode = document.createTextNode("cover:  John Moeses Bauan - (unsplash.com)");
node.appendChild(textnode);
node.className = "credits-header";
var target = document.querySelectorAll('section.credits')[0]
target.appendChild(node);
 
}


// logica mostra nascondi soluzioni
function mostraSoluzione(nomeIdSol) {
    document.getElementById(nomeIdSol).style.display = "block";
    var stringaBtnMostra = "bottoneMostra_" + nomeIdSol;
    document.getElementById(stringaBtnMostra).style.display = "none";
    var stringaBtnNascondi = "bottoneNascondi_" + nomeIdSol;
    document.getElementById(stringaBtnNascondi).style.display = "block";
   
};

function nascondiSoluzione(nomeIdSol) {
    document.getElementById(nomeIdSol).style.display = "none";
    var stringaBtnMostra = "bottoneMostra_" + nomeIdSol;
    document.getElementById(stringaBtnMostra).style.display = "block";
    var stringaBtnNascondi = "bottoneNascondi_" + nomeIdSol;
    document.getElementById(stringaBtnNascondi).style.display = "none";
   
};

// Logica accensione risposte

function giusta(x) {
    if (x.style.color == "green"){
       x.style.color = "black";
    } else {
       x.style.color = "green";
      
    }
   }

   function sbagliata(x) {
    if (x.style.color == "red"){
       x.style.color = "black";
    } else {
       x.style.color = "red";
       
    }
   }



// Formule KaTeX
katex.render(String.raw`x^2 + y^2 - 4x = 0`, circ_1);
katex.render(String.raw`C = (x_{c}, y_{c})`, centro);
katex.render(String.raw`(x - x_{c})^2 + (y - y_{c})^2 = r^2`, eq_circ_c_r);
katex.render(String.raw`x^2 + y^2  -2x_{c}x -2y_{c}y + x_{c}^2 + y_{c}^2 - r^2 = 0`, eq_circ_c_r_2);
katex.render(String.raw`a = -2x_{c}`, eq_circ_c_r_3);
katex.render(String.raw`b = -2y_{c}`, eq_circ_c_r_4);
katex.render(String.raw`c = x_{c}^2 + y_{c}^2 - r^2 = 0`, eq_circ_c_r_5);
katex.render(String.raw`x^2 + y^2  +ax +by + c = 0`, eq_circ_c_r_6);
katex.render(String.raw`C = (2, 0) r = 2`, eq_circ_c_r_7);
katex.render(String.raw`5^{2x + 1} = \frac{1}{5}`, eq_esp_1);
katex.render(String.raw`5^{2x + 1} = 5^{-1}`, eq_esp_2);
katex.render(String.raw`kx^2 -3kx +(k+1) = 0`, eq2grad_param_1);
katex.render(String.raw`18 cm^2`, rispP8_5);
katex.render(String.raw`18\sqrt{2} cm^2`, rispP8_1);
katex.render(String.raw`18\sqrt{3} cm^2`, rispP8_2);
katex.render(String.raw`36\sqrt{3} cm^2`, rispP8_3);
katex.render(String.raw`54\sqrt{2} cm^2`, rispP8_4);
katex.render(String.raw`ax^2 +bx + c = 0`, eq2g);
katex.render(String.raw`x_{1,2} = \frac{-b\pm\sqrt{b^2 - 4ac}}{2a}`, eq2g_formula);
katex.render(String.raw`x_{1,2} = \frac{3k\pm\sqrt{9k^2 - 4k(k+1)}}{2k} = \frac{3k\pm\sqrt{5k^2 - 4k}}{2k}`, p7_secg);
katex.render(String.raw`BC^2 = (18 cm)^2 = AC^2 + AB^2`, p7_1);
katex.render(String.raw`AC^2 = AH^2 + CH^2 =  AH^2 + 144cm^2`, p7_2); 
katex.render(String.raw`AB^2 = AH^2 + HB^2 =  AH^2 + 36cm^2 `, p7_3); 
katex.render(String.raw`AC^2 - AB^2 = 108 cm^2`, p7_4); // 
katex.render(String.raw`\begin{cases} AC^2 + AB^2 = 324 cm^2 \\ AC^2 - AB^2 = 108 cm^2 \end{cases} `, p7_5);
katex.render(String.raw`\begin{cases} AC = \sqrt{\frac{324cm^2+108cm^2}{2}} = \sqrt{216cm^2} = 6\sqrt{6} cm \\ AB = \sqrt{\frac{324cm^2-108cm^2}{2}} = \sqrt{108cm^2} = 6\sqrt{3} cm \end{cases} `, p7_6);
katex.render(String.raw`A = \frac{AC \cdot AB}{2} = 54\sqrt{2} cm^2`, p7_7);


katex.render(String.raw`\overline{x}_{tot} = \frac{x_{1} + x_{2} + x_{3} + x_{4} + x_{5}}{5} = 14`, mediap1);
katex.render(String.raw`\overline{x}_{1,2} = \frac{x_{1} + x_{2}}{2} = 20`, mediap1_2);
katex.render(String.raw`\overline{x}_{3,4,5} = \frac{x_{3} + x_{4} + x_{5}}{3} = ?`, mediap1_3);
katex.render(String.raw`x_{1} + x_{2} + x_{3} + x_{4} + x_{5} = 14 \cdot 5 = 70`, solp1_1);
katex.render(String.raw`x_{1} + x_{2} = 20 \cdot 2 = 40`, solp1_2);
katex.render(String.raw`x_{3} + x_{4} + x_{5} = 70 - 40 = 30`, solp1_3);
katex.render(String.raw`\overline{x}_{3,4,5} = \frac{x_{3} + x_{4} + x_{5}}{3} = \frac{30}{3} = 10`, solp1_4);
katex.render(String.raw`P_{9} = \frac{casi favorevoli}{totale casi possibili} = \frac{4}{36} = \frac{1}{9}`, prob_prob2);
katex.render(String.raw`P(x_{p},y_{p})`, genPunto);
katex.render(String.raw`y - y_{p} = m(x - x_{p})`, rettaPassP);
katex.render(String.raw`y = mx - m - 1`, rettaPassP2);
katex.render(String.raw`y = -2x - 6`, eq_retta_p3);
katex.render(String.raw`y = \frac{1}{2}x - \frac{3}{2}  \longrightarrow 2y -x + 3 = 0`, solP3);
katex.render(String.raw`A_{2} = \frac{3k \cdot 4k}{2} = k^2 \cdot \frac{3 \cdot 4}{2} = k^2 \cdot A_{1} = 4 A_{1}`, AreaTriangoliSimili);
katex.render(String.raw`ipotenusa = 2 \cdot \sqrt{3^2 + 4^2} = 2 \cdot \sqrt{9 + 16} = 2 \cdot \sqrt{25} = 2 \cdot 5 = 10`, ipotenusa);
katex.render(String.raw`\frac{x}{x + 2} - \frac{x - 2}{x}`, prob10);
katex.render(String.raw`\frac{4}{x(x + 2)}`, prob10_a);
katex.render(String.raw`\frac{x - 2}{x + 2}`, prob10_b);
katex.render(String.raw`\frac{-4}{x(x + 2)}`, prob10_c);
katex.render(String.raw`\frac{2x^2 -4}{x(x + 2)}`, prob10_d);
katex.render(String.raw`\frac{4}{x + 2}`, prob10_e);
katex.render(String.raw`\frac{x^2 - (x -2)(x+2)}{x(x + 2)} = \frac{x^2 - (x^2 - 4)}{x(x + 2)} = \frac{4}{x(x + 2)}`, procP10_1);
katex.render(String.raw`\sqrt{6} - \sqrt{2}`, cat1);
katex.render(String.raw`\sqrt{6} + \sqrt{2}`, cat2);
katex.render(String.raw`2\sqrt{2}`, p11_a);
katex.render(String.raw`2\sqrt{6}`, p11_b);
katex.render(String.raw`\sqrt{16 + 2\sqrt{12}}`, p11_e);
katex.render(String.raw`\sqrt{(\sqrt{6} - \sqrt{2})^2 + (\sqrt{6} + \sqrt{2})^2}`, solP11_1);
katex.render(String.raw`\sqrt{6 -2\sqrt{12} + 2 + 6 +2\sqrt{12} + 2 }`, solP11_2);
katex.render(String.raw`\sqrt{16} = 4`, solP11_3);
katex.render(String.raw`(4x)^{-2} \sqrt{16x^6}`, p12_en);
katex.render(String.raw`\frac{x^2}{4}`, p12_d);
katex.render(String.raw`x^2`, p12_e);
katex.render(String.raw`(4x)^{-2} = \frac{1}{(4x)^{2}}`, p12s1);
katex.render(String.raw`\sqrt{16x^6} = (2^4x^6)^{\frac{1}{2}} = 2^{\frac{4}{2}} x^{\frac{6}{2}} = 4x^3`, p12s2);
katex.render(String.raw`\frac{4x^3}{(4x)^{2}} = \frac{x}{4}`, p12s3);




