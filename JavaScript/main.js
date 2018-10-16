var btn = document.getElementsByClassName("menu-button");
var closeBtn = document.getElementsByClassName("close-menu");
var menu = document.getElementsByClassName("sidebar");

function showMenu() {
    if (btn[0].style.display === "none") {
        btn[0].style.display = "block";
    } else {
        btn[0].style.display = "none";
        menu[0].style.display = "block";
        closeBtn[0].style.display = "block";
    }
}

function hideMenu() {
    if (closeBtn[0].style.display === "none") {
        closeBtn[0].style.display = "block";
    } else {
        btn[0].style.display = "block";
        menu[0].style.display = "none";
        closeBtn[0].style.display = "none";
    }
}