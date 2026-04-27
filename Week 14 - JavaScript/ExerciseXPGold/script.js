document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "button")[0].addEventListener("click", function() {
    let input = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "input")[0].value;
    let result = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "div")[0];
    result.textContent = input;
});