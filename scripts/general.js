// import { game } from "./app";

$(document).ready(function(){hideAllScreens();changeScreen("home-screen");})
// 

let gameInterval = null;
let gameFunc;
var start_time;
var score;

var WinSound = new Audio("sounds/winSound.wav");
// var BackgroundSound = document.querySelector("sounds/welcomeSound.wav");
var gameSound = new Audio("sounds/welcomeSound.wav");
// var BackgroundSound = new Audio("sounds/welcomeSound.wav");
var win=false;
var gameSoundisMuted = false;

// document.addEventListener('click', () => {
//     BackgroundSound.currentTime=0;    
//     BackgroundSound.play();
// //   });
// window.addEventListener('load', () => {
//         var BackgroundSound = new Audio("sounds/welcomeSound.wav");
//         BackgroundSound.play();
//       });
function Mute(){
        if (gameSoundisMuted) {
          gameSound.muted = false;
          document.getElementById("mute").innerHTML = "Mute";
          gameSoundisMuted = false;
        } else {
          gameSound.muted = true;
          document.getElementById("mute").innerHTML = "Unmute";
          gameSoundisMuted = true;
        }
    }

function setGameFunc(game ,reset) {
    gameFunc = game;
    resetFunc=reset;


}

function changeScreen(id){
    hideAllScreens();
    $('#'+id).show();
    $('#'+id).focus();
    gameSound.pause();
    if (id === 'game-screen' && !gameInterval && gameFunc) {  
        $("#footer").hide();
        WinSound.pause();
        gameSound.currentTime=0;    
        gameSound.play();
        start_time = new Date();
        score=0;
        resetFunc();
        gameInterval = setInterval(gameFunc,1000/60)}
    if(id=='score-record'){
        $("#footer").show();
            gameSound.pause();
            WinSound.play();
    }if(id!='game-screen'){
        $("#footer").show();
        gameSound.pause();

    }
    if(id==='home-screen'){
    
        // gameSound.pause();
        WinSound.pause();
        
    }
    if(id==='registration-screen'){
        // gameSound.pause();
        WinSound.pause();
        
    }
};

function hideAllScreens(){
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
        // gameSound.pause();
        // WinSound.pause();
    }
    $(".screen").hide();
    gameSound.pause();

}

// function openAboutWindow(){
//     // about modal script
//     let aboutBtn = document.getElementById("About_btn");
//     let modal = document.getElementById("about-screen");
//     // let closeBtn = document.getElementById("about-close-btn");
//     modal.style.display = "block"
// }

