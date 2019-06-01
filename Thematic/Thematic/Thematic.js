// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var action = document.getElementById("action");

var outcome = document.getElementById("outcome");

var pusher = document.getElementById("pusher");

var salsa = document.getElementById("salsa");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



action.onclick = function ActionTheme() {

   /* var header = document.getElementById("headerBar");
    header.classList.toggle("main-action");

    var accent1 = document.getElementById("accent1")
    accent1.classList.toggle("accent-action");
    var accent2 = document.getElementById("accent2")
    accent2.classList.toggle("accent-action");
    var accent3 = document.getElementById("accent3")
    accent3.classList.toggle("accent-action");
    var accent4 = document.getElementById("accent4")
    accent4.classList.toggle("accent-action");


    var text = document.getElementById("text")
    text.classList.toggle("text-container-action"); */

    let actionTest = document.querySelector('.main');
    let accentTest = document.querySelectorAll('.accent');
    alert(accentTest[0].classList);

    for (var i = 0, i < accentTest.length, i++){

    }


    var removeMain = actionTest.classList[1];
    var removeAccent = accentTest[0].classList[1];

    actionTest.classList.remove(removeMain);
    accentTest[0].classList.remove(removeAccent);

    alert(accentTest[0].classList);
    actionTest.classList.add("main-action");
    accentTest[0].classList.add("accent-action");

    alert(accentTest[0].classList);
    modal.style.display = "none";
}

outcome.onclick = function outcomeTheme() {

    var header = document.getElementById("headerBar");
    header.classList.toggle("main-outcome");

    var accent1 = document.getElementById("accent1")
    accent1.classList.toggle("accent-outcome");
    var accent2 = document.getElementById("accent2")
    accent2.classList.toggle("accent-outcome");
    var accent3 = document.getElementById("accent3")
    accent3.classList.toggle("accent-outcome");
    var accent4 = document.getElementById("accent4")
    accent4.classList.toggle("accent-outcome");


    var text = document.getElementById("text")
    text.classList.toggle("text-container-outcome");

    modal.style.display = "none";
}

pusher.onclick = function pusherTheme() {

    var header = document.getElementById("headerBar");
    
    header.classList.toggle("main-pusher");

    var accent1 = document.getElementById("accent1")
    accent1.classList.toggle("accent-pusher");
    var accent2 = document.getElementById("accent2")
    accent2.classList.toggle("accent-pusher");
    var accent3 = document.getElementById("accent3")
    accent3.classList.toggle("accent-pusher");
    var accent4 = document.getElementById("accent4")
    accent4.classList.toggle("accent-pusher");


    var text = document.getElementById("text")
    text.classList.toggle("text-container-pusher");

    modal.style.display = "none";
}

salsa.onclick = function salsaTheme() {

    var header = document.getElementById("headerBar");
    header.classList.toggle("main-salsa");

    var accent1 = document.getElementById("accent1")
    accent1.classList.toggle("accent-salsa");
    var accent2 = document.getElementById("accent2")
    accent2.classList.toggle("accent-salsa");
    var accent3 = document.getElementById("accent3")
    accent3.classList.toggle("accent-salsa");
    var accent4 = document.getElementById("accent4")
    accent4.classList.toggle("accent-salsa");


    var text = document.getElementById("text")
    text.classList.toggle("text-container-salsa");

    modal.style.display = "none";
}

/*$(document).ready(function () {
    $('#action').click(function () {
        $('main').toggleClass('main-outcome main-action');
    });
}) */
