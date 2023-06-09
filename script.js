window.onload = function () {
    let form = document.getElementById("form");
    let box = document.getElementById("Password").value;
    let div = document.getElementById("p");
    let div2 = document.getElementById("p2");
    let button = document.getElementById("thebutton");
    let button2 = document.getElementById("thebutton2");
    let test = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "!", "?"];
    let test2 = ["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"0" ,"~" ,"_" ,"@" ,"#" ,"$" ,"%" ,"^" ,"&" ,"*" ,"(" ,")" ,"[" ,"]" ,"{" ,"}" ,"=", "|", ":", "+"];
    button.addEventListener("click", submitFunction);
    button2.addEventListener("click", refreshFunction);
    let inputText = box;
    let savedText = inputText;
    let savedText2 = inputText;
    function submitFunction(event) {
        event.preventDefault();
        for (index = 0; index < test.length; index++) {
                savedText = savedText.replaceAll(test[index],test2[index]);
                div.innerHTML = savedText;
                savedText2 = savedText2.replaceAll(test2[index],test[index]);
                div2.innerHTML = savedText2;
            }
            
        } 
    function refreshFunction() {
        location.reload();
        
    }
}

