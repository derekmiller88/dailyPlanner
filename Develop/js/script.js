var today = moment().format("dddd, MMMM Do YYYY")
document.getElementById("currentDay").innerHTML = today;

/* displayDay() function designed to update color for each hourly task
based on what time of day it is */
function displayDay() {
    var now = moment().format("hh:mma");
    console.log(now);

    var element9 = document.getElementById("txt9");
    var element10 = document.getElementById("txt10");
    var element11 = document.getElementById("txt11");
    var element12 = document.getElementById("txt12");
    var element13 = document.getElementById("txt13");
    var element14 = document.getElementById("txt14");
    var element15 = document.getElementById("txt15");
    var element16 = document.getElementById("txt16");
    var element17 = document.getElementById("txt17");

    /* if else loops are used to determine what class is added to the element */
    if (now < '09:00am') {
        element9.classList.add("future");
    } else if (now > '09:00am' && now < '10:00am') {
        element9.classList.add("present");
    } else {
        element9.classList.add("past");
    }
    if (now < '10:00am') {
        element10.classList.add("future");
    } else if (now > '10:00am' && now < '11:00am') {
        element10.classList.add("present");
    } else {
        element10.classList.add("past");
    }
    if (now < '11:00am') {
        element11.classList.add("future");
    } else if (now > '11:00am' && now < '12:00pm') {
        element11.classList.add("present");
    } else {
        element11.classList.add("past");
    }
    if (now < '12:00pm') {
        element12.classList.add("future");
    } else if (now > '12:00pm' && now < '1:00pm') {
        element12.classList.add("present");
    } else {
        element12.classList.add("past");
    }
    if (now < '1:00pm') {
        element13.classList.add("future");
    } else if (now > '1:00pm' && now < '2:00pm') {
        element13.classList.add("present");
    } else {
        element13.classList.add("past");
    }
    if (now < '2:00pm') {
        element14.classList.add("future");
    } else if (now > '2:00pm' && now < '3:00pm') {
        element14.classList.add("present");
    } else {
        element14.classList.add("past");
    }
    if (now < '3:00pm') {
        element15.classList.add("future");
    } else if (now > '3:00pm' && now < '4:00pm') {
        element15.classList.add("present");
    } else {
        element15.classList.add("past");
    }
    if (now < '4:00pm') {
        element16.classList.add("future");
    } else if (now > '4:00pm' && now < '5:00pm'){
        element16.classList.add("present");
    } else {
        element16.classList.add("past");
    }
    if (now < '5:00pm') {
        element17.classList.add("future");
    } else if (now > '5:00pm' && now < '6:00pm') {
        element17.classList.add("present");
    } else {
        element17.classList.add("past");
    }
    

};

/* runs the function that changes the element's color */
displayDay();

/* runs the display day function every 1 min */
setInterval(function(){
    displayDay();
}, 1000 * 60);

/* Start section to save text input into local storage */
/* declare variables for btns  */
var btn9am = document.querySelector("#btn9am");
var btn10am = document.querySelector("#btn10am");
var btn11am = document.querySelector("#btn11am");
var btn12pm = document.querySelector("#btn12pm");
var btn1pm = document.querySelector("#btn1pm");
var btn2pm = document.querySelector("#btn2pm");
var btn3pm = document.querySelector("#btn3pm");
var btn4pm = document.querySelector("#btn4pm");
var btn5pm = document.querySelector("#btn5pm");

/* declare variables for textarea values */
var textArea9AM = document.querySelector('#txt9');
var textArea10AM = document.querySelector("#txt10");
var textArea11AM = document.querySelector("#txt11");
var textArea12PM = document.querySelector("#txt12");
var textArea1PM = document.querySelector("#txt13");
var textArea2PM = document.querySelector("#txt14");
var textArea3PM = document.querySelector("#txt15");
var textArea4PM = document.querySelector("#txt16");
var textArea5PM = document.querySelector("#txt17");

/* Renders the saved task from local storage to the textarea */
function renderSavedTask() {
    // Retrieve the last tasks from localStorage using `getItem()`
    var item9AM = localStorage.getItem('item9AM');
    var item10AM = localStorage.getItem('item10AM');
    var item11AM = localStorage.getItem('item11AM');
    var item12PM = localStorage.getItem('item12PM');
    var item1PM = localStorage.getItem('item1PM');
    var item2PM = localStorage.getItem('item2PM');
    var item3PM = localStorage.getItem('item3PM');
    var item4PM = localStorage.getItem('item4PM');
    var item5PM = localStorage.getItem('item5PM');
  
    // Set the text of the hourly tasks to the corresponding 
    //values from localStorage
    if (item9AM === null) {return;
    } else {textArea9AM.textContent = item9AM;}

    if (item10AM === null) {return;
    } else {textArea10AM.textContent = item10AM;}

    if (item11AM === null) {return;
    } else {textArea11AM.textContent = item11AM;}

    if (item12PM === null) {return;
    } else {textArea12PM.textContent = item12PM;}

    if (item1PM === null) {return;
    } else {textArea1PM.textContent = item1PM;}

    if (item2PM === null) {return;
    } else {textArea2PM.textContent = item2PM;}

    if (item3PM === null) {return;
    } else {textArea3PM.textContent = item3PM;}

    if (item4PM === null) {return;
    } else {textArea4PM.textContent = item4PM;}

    if (item5PM === null) {return;
    } else {textArea5PM.textContent = item5PM;}
    
}
  
/* initializes the render task function */
renderSavedTask();

/* the following section contains the event function 
for when you click on the save buttons */
btn9am.addEventListener('click', function(event) {
    event.preventDefault();
    var item9AM = document.querySelector("#txt9").value;
    // Save 9am task to localStorage using `setItem()`
    localStorage.setItem('item9AM', item9AM);
});
btn10am.addEventListener('click', function(event) {
    event.preventDefault();
    var item10AM = document.querySelector("#txt10").value;
    // Save 10am task to localStorage using `setItem()`
    localStorage.setItem('item10AM', item10AM);
});
btn11am.addEventListener('click', function(event) {
    event.preventDefault();
    var item11AM = document.querySelector("#txt11").value;
    // Save 11am task to localStorage using `setItem()`
    localStorage.setItem('item11AM', item11AM);
});
btn12pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item12PM = document.querySelector("#txt12").value;
    // Save 12pm task to localStorage using `setItem()`
    localStorage.setItem('item12PM', item12PM);
});
btn1pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item1PM = document.querySelector("#txt13").value;
    // Save 1pm task to localStorage using `setItem()`
    localStorage.setItem('item1PM', item1PM);
});
btn2pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item2PM = document.querySelector("#txt14").value;
    // Save 2pm task to localStorage using `setItem()`
    localStorage.setItem('item2PM', item2PM);
});
btn3pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item3PM = document.querySelector("#txt15").value;
    // Save 3pm task to localStorage using `setItem()`
    localStorage.setItem('item3PM', item3PM);
});
btn4pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item4PM = document.querySelector("#txt16").value;
    // Save 4pm task to localStorage using `setItem()`
    localStorage.setItem('item4PM', item4PM);
});
btn5pm.addEventListener('click', function(event) {
    event.preventDefault();
    var item5PM = document.querySelector("#txt17").value;
    // Save 5pm task to localStorage using `setItem()`
    localStorage.setItem('item5PM', item5PM);
});


