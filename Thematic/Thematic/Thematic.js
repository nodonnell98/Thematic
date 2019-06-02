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

var themes = ["accent-outcome", "accent-action", "accent-salsa", "accent-pusher"];

var selected = "accent-action"

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

    let main = document.querySelectorAll('.main');
    let accent = document.querySelectorAll('.accent');


    main.forEach(
        function (currentValue, currentIndex, listObj) {

            var remove = currentValue.classList[1];
            currentValue.classList.remove(remove);
            currentValue.classList.add("main-action");
        });


    accent.forEach(
        function (currentValue, currentIndex, listObj) {

            var classList = currentValue.className.split(/\s+/);
            alert("currentIndex:    " + currentIndex + classList);
            for (var i = 0; i < classList.length; i++) {
                for (var j = 0; j < themes.length; j++) {
                    if (classList[i] === themes[j]) {
                        alert("Match found!:   " + classList[i] + " = " + themes[j])
                        var toRemove = classList[i];
                        alert("toRemove = " + toRemove)
                        currentValue.classList.remove(toRemove);
                        alert(currentValue.classList);
                        currentValue.classList.add("accent-action");
                        alert(currentValue.classList);
                    }
                }
            }
           
        });

    modal.style.display = "none";
}

outcome.onclick = function outcomeTheme() {

    let main = document.querySelectorAll('.main');
    let accent = document.querySelectorAll('.accent');


    main.forEach(
        function (currentValue, currentIndex, listObj) {

            var remove = currentValue.classList[1];
            currentValue.classList.remove(remove);
            currentValue.classList.add("main-outcome");
        });


    accent.forEach(
        function (currentValue, currentIndex, listObj) {
            var listobj = listObj
            
           
            /*var removeAccent = currentValue.classList[1];
            currentValue.classList.remove(removeAccent);
            currentValue.classList.add("accent-outcome");*/

            var classList = currentValue.className.split(/\s+/);
            alert("currentIndex:    " + currentIndex + classList);
            for (var i = 0; i < classList.length; i++) {
                for (var j = 0; j < themes.length; j++) {
                    if (classList[i] === themes[j]) {
                        alert("Match found!:   " + classList[i] + " = " + themes[j])
                        var toRemove = classList[i];
                        alert("toRemove = " + toRemove)
                        currentValue.classList.remove(toRemove);
                        alert(currentValue.classList);
                        currentValue.classList.add("accent-outcome");
                        alert(currentValue.classList);
                    }
                }
            }
        }
    );

    modal.style.display = "none";
}

pusher.onclick = function pusherTheme() {

    let main = document.querySelectorAll('.main');
    let accent = document.querySelectorAll('.accent');


    main.forEach(
        function (currentValue, currentIndex, listObj) {

            var remove = currentValue.classList[1];
            currentValue.classList.remove(remove);
            currentValue.classList.add("main-pusher");
        });


    accent.forEach(
        function (currentValue, currentIndex, listObj) {


            var classList = currentValue.className.split(/\s+/);
            alert("currentIndex:    " + currentIndex + classList);
            for (var i = 0; i < classList.length; i++) {
                for (var j = 0; j < themes.length; j++) {
                    if (classList[i] === themes[j]) {
                        alert("Match found!:   " + classList[i] + " = " + themes[j])
                        var toRemove = classList[i];
                        alert("toRemove = " + toRemove)
                        currentValue.classList.remove(toRemove);
                        alert(currentValue.classList);
                        currentValue.classList.add("accent-pusher");
                        alert(currentValue.classList);
                    }
                }
            }
        });

    modal.style.display = "none";
}

salsa.onclick = function salsaTheme() {

    let main = document.querySelectorAll('.main');
    let accent = document.querySelectorAll('.accent');


    main.forEach(
        function (currentValue, currentIndex, listObj) {

            var remove = currentValue.classList[1];
            currentValue.classList.remove(remove);
            currentValue.classList.add("main-salsa");
        });


    accent.forEach(
        function (currentValue, currentIndex, listObj) {

            var classes = currentValue.classList;
            var classList = currentValue.className.split(/\s+/);
            alert(classes)
            alert("currentIndex:    " + currentIndex + classList);
            for (var i = 0; i < classList.length; i++) {
                for (var j = 0; j < themes.length; j++) {
                    if (classList[i] === themes[j]) {
                        alert("Match found!:   " + classList[i] + " = " + themes[j])
                        var toRemove = classList[i];
                        alert("toRemove = " + toRemove)
                        currentValue.classList.remove(toRemove);
                        alert(currentValue.classList);
                        currentValue.classList.add("accent-salsa");
                        alert(currentValue.classList);
                    }
                }
            }
        });

    modal.style.display = "none";
}


