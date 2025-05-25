const viewEl = document.getElementById("view-work");

viewEl.addEventListener('click',()=>{
    document.getElementById('projects').scrollIntoView();
})

const navbar = document.getElementById("navbar");
const nameHeading = document.getElementById("name");

/* Toggle between adding and removing the "responsive" class when icon is clicked*/
function toggle(){
    if(navbar.className == ""){
        navbar.className = "responsive";
        nameHeading.style.display = "none";
    }else{
        navbar.className = "";
        nameHeading.style.display = "block";
    }
    
}

