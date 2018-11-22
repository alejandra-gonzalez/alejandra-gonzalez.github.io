function openMenu(){
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('overlay').style.display = "block";
    document.getElementById('overlay').style.zIndex = '1';
}
function closeMenu(){
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('overlay').style.display = "none";
    document.getElementById('overlay').style.zIndex = '-1';
}

var details = document.getElementsByClassName('project-details');
var basics = document.getElementsByClassName('project-basics');
var img = document.getElementsByClassName('project-image');

function openProjectDetails(){
    getClassInstanceIndex ("project-card", function showProjectDetails(index){
        details[index].style.display = "block";
        basics[index].style.display = "none";
        img[index].style.display = "none";
    });
}

function closeProjectDetails() {
    getClassInstanceIndex ("project-card", function showProjectDetails(index){
        details[index].style.display = "none";
        basics[index].style.display = "block";
        img[index].style.display = "block";
    });
}

function getClassInstanceIndex(name,callback) {
    var allElements = document.body.getElementsByTagName("*");
    for(var x = 0, len = allElements.length; x < len; x++) {
        if(allElements[x].className == name) {
            allElements[x].onclick = getInstanceClicked;
        }
    }
    function getInstanceClicked() {
        var elementParent = this.parentNode;
        var parentChildren = elementParent.childNodes;
        var index = 0;
        for(var x = 0; x < parentChildren.length; x++) {
            if(parentChildren[x] == this) {
                break;
            }
            if(parentChildren[x].className == name) {
                index++;
            }
        }
        callback.call(this,index);
    }
}