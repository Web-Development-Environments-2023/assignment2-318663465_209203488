$(document).ready(function () {
    // $("div.section-welcome").show();
    // $("div.section-register").hide();
    let displayNow = document.getElementsByClassName('section-welcome');
    displayNow.style.display="block";
    let regScreen = document.getElementsByClassName('section-register');
        regScreen.style.display = "none";
});


function onClinkRegister(){
    openRegister();
}

function openRegister(){
    let displayNow = document.getElementsByClassName('section-welcome');
    displayNow.style.display="none";
    let regScreen = document.getElementsByClassName('section-register');
        regScreen.style.display = "block";
}
     





