"use strict";
window.onload = function () {

    let box1 = document.getElementByid("toll-tag");
    box1.onclick = calculateCheckboxes;




    //grab button estimate total cost from html using id.
    const btn = document.getElementById("estimate-total-cost");
    //run specific functions when i click button.
    btn.onclick = TotalCost;
};



function calculateCheckboxes() {
    let extrePerDay = 0;

    let extraPerDay = 0;
    if (document.getElementById("toll-tag").checked) {
        extraPerDay += 3.95;
    }
    if (document.getElementById("GPS").checked) {
        extraPerDay += 2.95;
    }
    if (document.getElementById("roadside-assistance").checked) {
        extraPerDay += 4.95;
    }

}

function TotalCost() {
    //    const date = document.getElementById('pickup-date').value;
    //    display date in correct format later.


    let message = (`Car rental: }`);
    document.getElementById('output').innerText = message;
}
