"use strict";
window.onload = function () {

    // let box1 = document.getElementByid("toll-tag");
    // box1.onclick = calculateCheckboxes;




    //grab button estimate total cost from html using id.
    const btn = document.getElementById("calculate");
    //run specific functions when i click button.
    btn.onclick = TotalCost;
};



// function calculateCheckboxes() {

//     if (document.getElementById("GPS").checked) {
//         extraPerDay += 2.95;
//     }
//     if (document.getElementById("roadside-assistance").checked) {
//         extraPerDay += 4.95;
//     }

// }

function TotalCost() {
    //    const date = document.getElementById('pickup-date').value;
    //    display date in correct format later.

    //get input from user(input) in days. and store here.
    let numOfDays = document.getElementById('number-of-days').value;

    //get

    //calculation.
    let totalCost = numOfDays * 10;

    //calculate prica for optional services.
    let extraPerDay = 0;

    let tollTag = document.getElementById("toll-tag").checked;
    if (tollTag) {
        extraPerDay += 3.95;
    }


    let grandTotal = totalCost + extraPerDay;

    //display output.
    let message = (`Car rental for ${numOfDays} days cost: $${totalCost}`);
    document.getElementById('output').innerText = message;
}
