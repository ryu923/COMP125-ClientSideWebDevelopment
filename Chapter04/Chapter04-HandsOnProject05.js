var kilometersElement = document.getElementById("kValue");
var milesElement = document.getElementById("mValue");

function convert()
{
    var km = milesElement.value * 1.6;
    kilometersElement.innerHTML = km;
}

function milesToKmLoad()
{
    document.getElementById("mValue").value = "";
    document.getElementById("kValue").innerHTML = "";
}

var submitButton = document.getElementById("convertButton");

if(submitButton.addEventListener)
{
    submitButton.addEventListener("click", convert, false);

    window.addEventListener("load", milesToKmLoad, false);
}
else if(submitButton.attachEvent)
{
    submitButton.attachEvent("onClick", convert);

    window.addEventListener("onload", milesToKmLoad);
}