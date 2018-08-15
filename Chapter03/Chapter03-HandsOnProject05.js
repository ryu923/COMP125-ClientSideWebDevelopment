var i = 1;
var listItem = "";

function processInput() {
    /*
    if(i <= 5)
    {
        listItem = "item" + i;

        document.getElementById(listItem).innerHTML = document.getElementById("toolBox").value;
        document.getElementById("toolBox").value = "";

        if(i === 5)
        {
            document.getElementById("resultsExpl").innerHTML = "Thanks for your suggestions.";
        }
        i++;
    }
    */

    switch(i)
    {
        case 5:
            listItem = "item" + i;
            
            document.getElementById(listItem).innerHTML = document.getElementById("toolBox").value;
            document.getElementById("toolBox").value = "";
            document.getElementById("resultsExpl").innerHTML = "Thanks for your suggestions.";
            
            i++;
        break;

        default:
            listItem = "item" + i;
            
            document.getElementById(listItem).innerHTML = document.getElementById("toolBox").value;
            document.getElementById("toolBox").value = "";

            i++;
        break;
    }
}

var btn = document.getElementById("button");

if(btn.addEventListener)
{
    btn.addEventListener("click", processInput, false)
}
else if(btn.attachEvent)
{
    btn.attachEvent("onclock", processInput);
}