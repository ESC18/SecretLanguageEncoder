window.onload = function () {
    let form = document.getElementById("form");
    let box = document.getElementById("Password").value;
    let div = document.getElementById("p");
    let div2 = document.getElementById("p2");
    let baseAr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "~", "-", "_", "=", "+", ",", ".", "/", "?", ">", "<", "[", "]", "{", "}", "'", '"', ";", ":", "*", " ", "!", "@", "#", "$", "%", "&","ENC"];
    let TransAr = ["e", "!", "7", "p", "s", "[", "/", "@", "=", "5", "j", "a", "*", " ", "8", "c", ";", "'", '"', "q", "0", "1", "x", "#", "6", "4", "%", "&", "]", "+", ":", "i", ",", "{", "-", "~", "w", "b", "d", "g", "3", "h", "f", "z", "2", "y", "_", ".", "?", ">", "9", "k", "m", "n", "l", "<", "r", "v", "hey", "}", "o", "$", "u","DEC"];
    let test = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "!", "?"];
    let test2 = ["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"0" ,"~" ,"_" ,"@" ,"#" ,"$" ,"%" ,"^" ,"&" ,"*" ,"(" ,")" ,"[" ,"]" ,"{" ,"}" ,"=", "|", ":", "+"];
    form.addEventListener("submit", submitFunction);
    function submitFunction(event) {
        event.preventDefault();
        let inputText = box;
        let savedText = inputText;
        let savedText2 = inputText;
        for (index = 0; index < test.length; index++) {
                savedText = savedText.replaceAll(test[index],test2[index]);
                div.innerHTML = savedText;
                savedText2 = savedText2.replaceAll(test2[index],test[index]);
                div2.innerHTML = savedText2
            }
        } 
}

