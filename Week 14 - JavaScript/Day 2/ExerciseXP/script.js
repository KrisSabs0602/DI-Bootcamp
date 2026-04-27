document.getElementsByClassName("button")[0].addEventListener("click", function() {
    let input = document.getElementsByClassName("input")[0].value;
    let result = document.getElementsByClassName("result")[0];
    result.textContent = input;
});