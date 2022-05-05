// form validation function
function validate() {
    // declaring form variables 
    var fname = document.forms["myForm"]["name"].value;
    var other_names = document.forms["myForm"]["other_names"].value;
    var email = document.forms["myForm"]["email"].value;
    var comments = document.forms["myForm"]["comments"].value;
    // checking if variables are empty
    if (fname == 0) {
        document.getElementById("name").style.borderColor ="red";
        document.getElementById("name").style.borderWidth = "2px";
    } else if(other_names === ""){
        document.getElementById("other_names").style.borderColor ="red";
        document.getElementById("other_names").style.borderWidth = "2px";
    }else if(email === ""){
        document.getElementById("email").style.borderColor ="red";
        document.getElementById("email").style.borderWidth = "2px";
    }
    else if(comments === ""){
        document.getElementById("comments").style.borderColor ="red";
        document.getElementById("comments").style.borderWidth = "2px";
    }
}

