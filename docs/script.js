
function myFunction() {
    var x = document.getElementById("navigation");
        if (x.className === "topbar") {
            x.className += " responsive";
        } 
        else {
            x.className = "topbar";
        }
}
