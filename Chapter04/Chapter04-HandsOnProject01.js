/* User Input Fieldset */
var acresComplete = false;
var cropsComplete = false;
var monthsComplete = false;
var fuelComplete = true;

/* Output Message */
var messageHeadElement = document.getElementById("messageHead");
var messageElement = document.getElementById("message");

/* Fieldset Elements */
var acresFieldset = document.getElementsByTagName("fieldset")[0];
var cropsFieldset = document.getElementsByTagName("fieldset")[1];
var monthsFieldset = document.getElementsByTagName("fieldset")[2];
var fuelFieldset = document.getElementsByTagName("fieldset")[3];

/* Text Input Elements */
var acresBox = document.forms[0].acres;
var monthsBox = document.forms[0].months;

/* Verify Acres Section */
function verifyAcres()
{
    var validity = true;
    var messageText = "";

    try
    {
        if(!(acresBox.value > 0))
        {
            throw "Please enter a number of acres greater than 0.";
        }
    }
    catch(message)
    {
        validity = false;
        messageText = message;
        acresBox.value = "";
    }
    finally
    {
        acresComplete = validity;
        messageElement.innerHTML = messageText;
        messageHeadElement.innerHTML = "";
        testFormCompleteness();
    }
}

/* Verify Checkbox Section */
function verifyCrops()
{
    try
    {
        for(var i = 0; i < 7; i++)
        {
            if(cropsFieldset.getElementsByTagName("input")[i].checked)
            {
                cropsComplete = true;
                messageElement.innerHTML = "";
                testFormCompleteness();

                i = 8;
            }
        }

        if( i === 7)
        {
            throw "Please select at least one crop."
        }
    }
    catch(message)
    {
        cropsComplete = false;
        messageHeadElement.innerHTML = "";
        messageElement.innerHTML = message;
    }
}

/* Verify Months Section */
function verifyMonths()
{
    var validity = true;
    var messageText = "";

    try
    {
        if(!(monthsBox.value >= 1 && monthsBox.value <= 12))
        {
            throw "Please enter a number of months between 1 and 12.";
        }
    }
    catch(message)
    {
        validity = false;
        messageText = message;
        monthsBox.value = "";
    }
    finally
    {
       monthsComplete = validity;
       messageElement.innerHTML = messageText;
       messageHeadElement.innerHTML = "";
    
       testFormCompleteness();
    }
}

/* Verify Fuel Section */
function verifyFuel()
{
    testFormCompleteness();
}

/* Check All Sections */
function testFormCompleteness()
{
    if(acresComplete && cropsComplete && monthsComplete && fuelComplete)
    {
        createRecommendation();
    }
}

function createRecommendation()
{
    if(acresBox.value <= 5000)
    {
        if(monthsBox.value >= 10)
        {
            messageHeadElement.innerHTML = "E3250";
            messageElement.innerHTML = "A workhorse for a small farm or a big backyard. A medium- to heavy-duty tractor that can haul whatever you throw at it year-round.";
        }
        else
        {
            messageHeadElement.innerHTML = "E2600";
            messageElement.innerHTML = "Perfect for a small farm, or just a big backyard. A light- to medium-duty tractor that can make short work of most any chore.";
        }
    }
    else
    {
        if(monthsBox.value <= 9)
        {
            messageHeadElement.innerHTML = "W1205";
            messageElement.innerHTML = "Can't be beat for the general tasks of a large farm. Medium- to heavy-duty muscle that's there then you need it.";
        }
        else
        {
            messageHeadElement.innerHTML = "W2500";
            messageElement.innerHTML = "Our heavy-duty tractor for general use. A reliable piece of equipment that you can turn to all year long.";
        }
    }

    if(document.getElementById("E85").checked)
    {
        messageHeadElement.innerHTML += "E";
    }
    else if(document.getElementById("biodiesel").checked)
    {
        messageHeadElement.innerHTML += "B";
    }
    else
    {
        messageHeadElement.innerHTML += "D";
    }
}

/* Create EventListener Function */
function createEventListeners()
{
    acresBox.value = "";
    monthsBox.value = "";

    if(acresBox.addEventListener)
    {
        acresBox.addEventListener("input", verifyAcres, false);
    }
    else if(acresBox.attachEvent)
    {
        acresBox.attachEvent("onchange", verifyAcres);
    }

    var cropsBox;

    for(var i = 0; i < 7; i++)
    {
        cropsBox = cropsFieldset.getElementsByTagName("input")[i];
        cropsBox.checked = false;

        if(cropsBox.addEventListener)
        {
            cropsBox.addEventListener("click", verifyCrops, false);
        }
        else if(cropsBox.attachEvent)
        {
            cropsBox.attachEvent("onclick", verifyCrops);
        }
    }

    if(monthsBox.addEventListener)
    {
        monthsBox.addEventListener("input", verifyMonths, false);
    }
    else if(monthsBox.attachEvent)
    {
        monthsBox.attachEvent("onchange", verifyMonths);
    }

    var fuelBox;

    for(var i = 0; i < 3; i++)
    {
        fuelBox = fuelFieldset.getElementsByTagName("input")[i];
        fuelBox.checked = false;
        if(fuelBox.addEventListener)
        {
            fuelBox.addEventListener("click", verifyFuel, false);
        }
        else if(fuelBox.attachEvent)
        {
            fuelBox.attachEvent("onclick", verifyFuel);
        }
    }
}

/* Web Loading Setting */
if(window.addEventListener)
{
    window.addEventListener("load", createEventListeners, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", createEventListeners);
}