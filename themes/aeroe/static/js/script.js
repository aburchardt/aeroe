console.log("Godmorgen");

window.addEventListener("load", sideLoadet);

function sideLoadet() {
  TweenMax.staggerFrom(".column_and_name_container p", 1, {opacity:"0"},-.1);
  TweenMax.staggerFrom(".column_and_name_container svg", 1, {width:"0"},.1);

}

function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-170px";
}

/*Ajax contact form*/
$("#kontaktmig").submit(function(event) {
           // cancels the form submission
           event.preventDefault();
           submitForm();
       });

       function submitForm() {
           // Initiate Variables With Form Content
           var navn = $("#navn").val();
           var email = $("#email").val();
           var henvendelse = $("#henvendelse").val();
           var besked = $("#besked").val();

           $.ajax({
               type: "POST",
               url: "formhandler.php",
               data: "navn=" + navn + "&email=" + email + "&henvendelse=" + henvendelse + "&besked=" + besked,
               success: function(text) {
                   if (text == "success") {
                       formSuccess();
                   } else{
                       formFailure(text);
                   }
               }
           });
       }

       function formSuccess() {
           $("#formfeedback").removeClass("hidden");
           $("#kontaktmig").addClass("hidden");
           $("#formfailure").addClass("hidden");
       }
       function formFailure(text) {
           $("#formfailure").removeClass("hidden");
           $("#formfailure").html(text);
       }
