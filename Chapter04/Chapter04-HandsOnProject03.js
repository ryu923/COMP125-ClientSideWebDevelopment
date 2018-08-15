var places = [];
var i = 1;

function processInput()
{
    places[i] = document.getElementById("placeBox").value;

    document.getElementById("placeBox").value = "";

    if(i < 5)
    {
        i++;
    }
    else
    {
        document.getElementById("resultsExpl").innerHTML = "You entered the following places:";

        listItem = "";

        for(j = 1; j < 6; j++)
        {
            listItem = "item" + j;

            document.getElementById(listItem).innerHTML = places[j];
        }
    }
}

var submitButton = document.getElementById("button");

if(submitButton.addEventListener)
{
    submitButton.addEventListener("click", processInput, false);
}
else if(submitButton.attachEvent)
{
    submitButton.attachEvent("onlick", processInput);
}