"use strict";

function createTOC()
{
    var list = document.querySelector("ul");
    var headingText;
    var TOCEntry;

    for(var i = 1; i <= 10; i++)
    {
        headingText = document.getElementById(i).innerHTML;
        TOCEntry = document.createElement("li");
        TOCEntry.innerHTML = "<a href=#" + i + ">" + headingText + "</a>";
        list.appendChild(TOCEntry);
    }
}

if(window.addEventListener)
{
    window.addEventListener("load", createTOC, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", createTOC);
}