"use strict";

function closeWindow()
{
    window.close();
}

function createEventListener()
{
    var closeButton = document.getElementById("closeB");
    
    if(closeButton.addEventListener)
    {
        closeButton.addEventListener("click", closeWindow, false);
    }
    else if(closeButton.attachEvent)
    {
        closeButton.attachEvent("onclick", closeWindow);
    }
}

if(window.addEventListener)
{
    window.addEventListener("load", createEventListener, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", createEventListener);
}