function insert(num) {
    document.resultWindow.resultText.value = document.resultWindow.resultText.value+num
}

function equals() {
    var exp = document.resultWindow.resultText.value;
    if(exp){
        document.resultWindow.resultText.value = eval(exp)
    }
}

function clr() {
    document.resultWindow.resultText.value="";
}

function sqrRoot() {
    var squareRoot = Math.sqrt(document.resultWindow.resultText.value)
    document.resultWindow.resultText.value = squareRoot
}