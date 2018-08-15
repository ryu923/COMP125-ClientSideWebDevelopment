"use strict"

/* Default setting on size option */
function removeSelectDefault()
{
    var selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
}

/* Remove placeholder in textarea */
function zeroPlaceholder()
{
    var instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";

    if(instrBox.value === instrBox.placeholder)
    {
        instrBox.value = "";
    }
}

/* Restore placeholder in textarea */
function checkPlaceholder()
{
    var instrBox = document.getElementById("instructions");
    
    if(instrBox.value === "")
    {
        instrBox.style.color = "rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

/* This is for browser what do not support placeholder attribute */
function generatePlaceholder()
{
    if(!Modernizr.input.placeholder)
    {
        var instrBox = document.getElementById("instructions");
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";

        if(instrBox.addEventListener)
        {
            instrBox.addEventListener("focus", zeroPlaceholder, false);
            instrBox.addEventListener("blur", checkPlaceholder, false);
        }
        else if(instrBox.attachEvent)
        {
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}

/* Initialized functions of web */
function setUpPage()
{
    removeSelectDefault();
    generatePlaceholder();
}

/* Setup function when the web loading */
if(window.addEventListener)
{
    window.addEventListener("load", setUpPage, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", setUpPage);
}