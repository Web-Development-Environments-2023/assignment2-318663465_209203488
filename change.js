// $(document).ready(function () {
//     $("div.section-welcome").show();
//     $("div.section-register").hide();
//     // let displayNow = document.getElementsByClassName('section-welcome');
//     // displayNow.style.display="block";
//     // let regScreen = document.getElementsByClassName('section-register');
//     //     regScreen.style.display = "none";
// });


function onClinkRegister(){
    openRegister();
}

function openRegister(){
	document.getElementById("section-welcome").style.display = "none";
	document.getElementById("section-login").style.display = "none";

    document.getElementById("section-register").style.display = "block";
}
     
function onClinkLogIn(){
    openLogIn();
}

function openLogIn(){
	document.getElementById("section-welcome").style.display = "none";
    document.getElementById("section-register").style.display = "none";
	document.getElementById("section-login").style.display = "block";

}





