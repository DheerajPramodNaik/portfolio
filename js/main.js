function handleChange(checkbox) {
	var buttons = document.getElementById("links-light");
    var mode = document.querySelector(".mode-info h6");
    var title = document.getElementById("portfolio");
    var educationCards = document.querySelectorAll("[id='education-card-body']");
    var educationCards2 = document.querySelectorAll("[id='education-card-body-2']");

    if(checkbox.checked == true){
        // document.getElementById("submit").removeAttribute("disabled");
        buttons.setAttribute("id", "links-dark");
        // educationCards.setAttribute("id", "education-cardbody2");
        // document.getElementById("education-card-body").setAttribute("id", "education-card-body-2");
        educationCards.forEach(eduDark);
        document.body.style.background = "#292C35";
        document.body.style.color = "#FFFFFF";
        title.style.color = "#FFFFFF";
        document.body.style.transition = "background 0.2s linear";
        mode.innerHTML = "Dark Mode";

    }else{
        document.getElementById("links-dark").setAttribute("id", "links-light");
        // document.getElementById("education-cardbody2").setAttribute("id", "education-cardbody");
        educationCards2.forEach(eduLight);
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "#000000";
        title.style.color = "#000000";
        document.body.style.transition = "background 0.2s linear";
        mode.innerHTML = "Light Mode";
   }

   function eduDark(item){
       item.setAttribute("id", "education-card-body-2");
   }

   function eduLight(item){
    item.setAttribute("id", "education-card-body");
}
}




$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});