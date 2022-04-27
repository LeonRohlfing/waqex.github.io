function OpenMenue() {
    /*Display of the nav elements */
    var navHeader = document.getElementById("navigation");
    navHeader.style.display = "flex";
    /*Display of teh button*/
    var buttonToggle = document.getElementById("toggleMenue");
    buttonToggle.style.display = "none";

    /*Display of the close Button*/
    var closeButton = document.getElementById("menueSchließen");
    closeButton.style.display = "block";
}
function closeMenue() {
    if (window.innerWidth < 969) {
        /*Display of the nav elements */
        var navHeader = document.getElementById("navigation");
        navHeader.style.display = "none";
        /*Display of teh button*/
        var buttonToggle = document.getElementById("toggleMenue");
        buttonToggle.style.display = "flex";        
    }else{
        /**
         * RESET IF WINDOW SIZE HAS CHANGED WHILE USING WEBSITE
         */
        /*Display of the nav elements */
        var navHeader = document.getElementById("navigation");
        navHeader.style.display = "";
        /*Display of teh button*/
        var buttonToggle = document.getElementById("toggleMenue");
        buttonToggle.style.display = "";        
    }
    /*Display of the close Button*/
    var closeButton = document.getElementById("menueSchließen");
    closeButton.style.display = "none";
}