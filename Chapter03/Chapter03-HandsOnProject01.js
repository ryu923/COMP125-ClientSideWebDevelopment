function calcTotal() {
    var itemTotal = 0;
    var items = document.getElementsByTagName("input");

    for(var i = 0; i < 5; i++)
    {
        if(items[i].checked)
        {
            itemTotal += (items[i].value * 1);
        }
    }

    document.getElementById("total").innerHTML = "Your order total is $" + itemTotal + ".00";
}

var submitButton = document.getElementById("sButton");

if(submitButton.addEventListener)
{
    submitButton.addEventListener("click", calcTotal, false);
}
else if(submitButton.attachEvent)
{
    submitButton.attachEvent("onclick", calcTotal);
}