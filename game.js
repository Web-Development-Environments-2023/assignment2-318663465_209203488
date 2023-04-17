import EnemyController from "./enemyController.js";
import player from "./player.js";

//  document.addEventListener('DOMContentLoaded',setInterval(),false)

// // function openGame(){
// //     startGame();

// // }
// const vr=document.getElementById("startGbtn")
// vr.addEventListener("click",startGame,false);
function startGame(){
	document.getElementById("section-welcome").style.display = "none";
	document.getElementById("section-login").style.display = "none";
    document.getElementById("section-register").style.display = "none";

	// document.getElementById("header").style.display = "block";

    document.getElementById("section-PlayGame").style.display = "block";

}
    

const canvas  = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");
canvas.width = "1000";
canvas.height = "600";
// const background = new Image();
// background.src = "images/back2.jpg";

const enemyController = new EnemyController(canvas);
const player_=new player(canvas,3);
function game(){
    console.log("gamae");
    // ctx.drawImage(url(images/back2.jpg),0,0,canvas.width,canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx);
    player_.draw(ctx);

}



//call to game func 60 times per sec
setInterval(game,1000/60);

document.getElementById("btn2").addEventListener("click", startGame);


