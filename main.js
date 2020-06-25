//For Basic Calculator
function insert(num) {
    document.resultWindow.resultText.value = document.resultWindow.resultText.value+num
}


function clr() {
    document.resultWindow.resultText.value = "";
}

function del() {
    var exp = document.resultWindow.resultText.value;
    document.resultWindow.resultText.value = exp.substring(0, exp.length - 1)
}

function equals() {
    var exp = document.resultWindow.resultText.value;
    if(exp){
        document.resultWindow.resultText.value = eval(exp)
    }
}

function sqrRoot() {
    var squareRoot = Math.sqrt(document.resultWindow.resultText.value)
    document.resultWindow.resultText.value = squareRoot
}

//For BMI Calculator
function hideMetric() {
    document.getElementById("metricForm").style.visibility="hidden";
    document.getElementById("USForm").style.visibility="visible";
}

function hideUS() {
    document.getElementById("metricForm").style.visibility="visible";
    document.getElementById("USForm").style.visibility="hidden";
}

function calMetric() {
    var mValue1 = document.getElementById('kg').value;
    var mValue2 = document.getElementById('cm').value;
    // calculate BMI 
    var bmiMetric = mValue1/mValue2/mValue2*10000;
    //round number to 1 decimal place
    var bmiRounded =bmiMetric.toFixed(1);

    document.getElementById('yourBMI').innerHTML = "Your BMI Is: " + bmiRounded; 

    //For converting to U.S. Measurements
    //weight
    var con1 = (mValue1 * 2.2).toFixed(3)
    //round number to 1 decimal
    var conRounded = (mValue1 * 2.2).toFixed(1)
    //height
    var con2 = (mValue2 / 2.54).toFixed(0)

    //additional information
    console.log('Your Actual BMI: ' + bmiMetric)
    console.log('Your BMI Rounded to Nearest First Decimal: ' + bmiRounded)
    console.log('Your Converted Weight in lbs: ' + con1)
    console.log('Your Converted Hieght in Inches: ' + con2)

    document.getElementById('conversions').innerHTML ='Your Converted Weight in U.S. Standard is: ' + conRounded;

}