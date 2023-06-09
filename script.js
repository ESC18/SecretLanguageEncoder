window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", submitFunction);
}
let submitFunction = function (event) {
    event.preventDefault();
    let test = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3","4","5","6","7","8","9","0",".",",","?","/","<",">","|","[","]","{","}",";",":","'",'"',"~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let test2 = ["π","∞","Σ","√","∫","∮","∀","∁","∂","∅","∆","∈","∎","∏","∑","∓","∘","∟","∡","∤","∴","≣","⊠","⊙","⋙","≹",/*numbers*/"◍","❂","⊪","☢","〶","╟","╝","┝","╥","⊮",/*symbols*/"⍋","﹝","⌧","⍙","⌬","⌮","⌗","⍞","⍥","⌘","⌆","⍵","⌤","⌨","⍹","⌸","␢","⌯","⌝","⌂","⌔","⌌","⍟","⌭","⍠","⍦","⍪","⍭","❏","▩","☵",/*uppercase*/"↭","➫","⬲","➙","↟","⟿","⥑","➽","⟱","⥼","⥉","⥤","☍","⭀","➤","↩","➴","⬲","⤼","⟺","⭇","➠","☊","↹","↡","⇹"];
    let div = document.getElementById("p");
    let div2 = document.getElementById("p2");
    let box = document.getElementById("Password").value;
    let savedText = box;
    let savedTextTwo = box;
    for (index = 0; index < test.length; index++) {
        savedText = savedText.replaceAll(test[index], test2[index]);
        div.innerText = savedText;
        savedTextTwo = savedTextTwo.replaceAll(test2[index], test[index]);
        div2.innerHTML = savedTextTwo;
        form.reset();
    }
}
