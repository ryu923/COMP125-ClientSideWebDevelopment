// Global Variables
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRights = false;

// Calculate all cost
function calcStaff() {
    var num = document.getElementById("photognum");
    console.log("Num: " + num);

    var hrs = document.getElementById("photoghrs");
    console.log("Hrs: " + hrs);

    var distance = document.getElementById("distance");
    console.log("Distance: " + distance);

    // This is for cancel selection
    totalCost -= photographerCost;
    console.log("TotalCost: " + totalCost);

    photographerCost = (num.value * 100 * hrs.value) + (distance.value * num.value);
    console.log("photographerCost: " + photographerCost);
    
    totalCost += photographerCost;
    console.log("TotalCost: " + totalCost);

    document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// Adds or subtract cost of Memory Book option
function toggleMembook() {
    (document.getElementById("membook").clicked === false)? totalCost -= 250 : totalCost += 250;

    document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// Adds or subtract cost of Reproduction option
function toggleRights() {
    (document.getElementById("reprodrights").clicked === false)? totalCost -= 1250 : totalCost += 1250;

    document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// Set all value
function resetForm() {
    document.getElementById("photognum").value = 1;
    document.getElementById("photoghrs").value = 2;
    document.getElementById("membook").checked = memoryBook;
    document.getElementById("reprodrights").checked = reproductionRights;
    document.getElementById("distance").value = 0;

    calcStaff();
    createEventListeners();
}

function createEventListeners() {
    document.getElementById("photognum").addEventListener("change", calcStaff, false);
    document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
    document.getElementById("membook").addEventListener("change", toggleMembook, false);
    document.getElementById("reprodrights").addEventListener("change", toggleRights, false);
    document.getElementById("distance").addEventListener("change", calcStaff, false);
}

window.addEventListener("load", resetForm, false);