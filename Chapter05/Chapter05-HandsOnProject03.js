"use strict";

var confirmWindow;

function processInput()
{
    var propertyWidth = 300;
    var propertyHeight = 100;
    
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOptions = "width=300,height=100";
    
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;

    confirmWindow = window.open("Chapter05-HandsOnProject03B.html", "Chapter05-HandsOnProject03B", winOptions)

    setTimeout("confirmWindow.close()", 2000);
}

function createEventListener()
{
    var submitButton = document.getElementById("submit");

    if(submitButton.addEventListener)
    {
        submitButton.addEventListener("click", processInput, false);
    }
    else if(submitButton.attachEvent)
    {
        submitButton.attachEvent("onclick", processInput)
    }
}

if(window.addEventListener)
{
    window.addEventListener("load", createEventListener, false)
}
else if(window.attachEvent)
{
    window.attachEvent("onload", createEventListener);
}
