"use strict";

var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

function pageSetup()
{
    document.getElementsByTagName("img")[0].src = figFilename;

    createEventListener();
}

function closeWin()
{
    window.close();
}

function createEventListener()
{
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if(closeWindowDiv.addEventListener)
    {
        closeWindowDiv.addEventListener("click", closeWin, false);
    }
    else if(closeWindowDiv, attachEvent)
    {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
}

window.onload = pageSetup;