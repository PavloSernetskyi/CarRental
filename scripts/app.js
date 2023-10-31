"use strict";
window.onload = function () {
    //grab button estimate total cost from html using id.
    const btn = document.getElementById("estimate-total-cost");
    //run specific functions when i click button.
    btn.onclick = TotalCost;
};


function TotalCost() {
    let carRentalCostRate = 29.99;
    //getting inputs from user interface.
    const date = new Date(document.getElementById('pickup-date').value);
    let numOfDays = document.getElementById('number-of-days').value;

    //grabbing input from checkboxes.
    let tollTag = document.getElementById('toll-tag').checked;
    let gps = document.getElementById('GPS').checked;
    let roadsideAssistance = document.getElementById('roadside-assistance').checked;
    //calculating checkboxes logic.
    let extraPerDay = 0;
    if (tollTag) {
        extraPerDay += 3.95;
    }
    if (gps) {
        extraPerDay += 2.95;
    }
    if (roadsideAssistance) {
        extraPerDay += 2.95;
    }
    // arithmetic calculations.
    let carRentalCost = numOfDays * carRentalCostRate;
    extraPerDay = extraPerDay * numOfDays;

    //grabing inputs from radio button.
    let radioNO = document.getElementById('under-25-no').checked;
    let radioYes = document.getElementById('under-25-yes').checked;

    let surcharge = 0;
    if(radioYes){
        surcharge = (carRentalCost + extraPerDay) * 0.30;
    }
    else
    {
        surcharge = 0;
    }
    // arithmetic calculations.
    let GrandTotal = (carRentalCost + extraPerDay + surcharge);

    //Display output.
    let message = (`Car rental: $${carRentalCost.toFixed(2)} `);
    let message2 = (`Options: $${extraPerDay.toFixed(2)} `);
    let message3 = (`Under 25 surcharge: $${surcharge.toFixed(2)} `);
    let message4 = (`Total due: $${GrandTotal.toFixed(2)} `);
    //    display date in correct format.
    let message5 = `Current date is: ${date}`;

    document.getElementById('output').innerText = message;
    document.getElementById('output2').innerText = message2;
    document.getElementById('output3').innerText = message3;
    document.getElementById('output4').innerText = message4;
    document.getElementById('output5').innerText = message5;
}
