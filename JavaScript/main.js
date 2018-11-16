function openMenu(){
    document.getElementById('sidebar').style.width = '250px';
}
function closeMenu(){
    document.getElementById('sidebar').style.width = '0px';
}

var details = document.getElementsByClassName('project-details');
var basics = document.getElementsByClassName('project-basics');
var img = document.getElementsByClassName('project-image');

function openProjectDetails(){
    details[0].style.display = "block";
    basics[0].style.display = "none";
    img[0].style.display = "none";
}

function closeProjectDetails() {
    details[0].style.display = "none";
    basics[0].style.display = "block";
    img[0].style.display = "block";
}