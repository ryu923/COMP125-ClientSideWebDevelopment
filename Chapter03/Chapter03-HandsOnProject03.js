var places = ["Fargo", "Las Vegas", "Sacramento", "Newark", "Murfreesboro"];

function processPlaces() {
    for(var i = 0; i < 5; i++)
    {
        listItem = "item" + (i + 1);

        document.getElementById(listItem).innerHTML = places[i];
    }
}

if(window.addEventListener) {
    window.addEventListener("load", processPlaces, false);
}
else if(window.attchEvent)
{
    window.attachEvent("onload", processPlaces)
}