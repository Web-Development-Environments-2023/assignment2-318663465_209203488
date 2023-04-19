import EnemyController from "./enemyController.js";
import player from "./player.js";
import shootController from "./shootController.js";

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

const playerShootController = new shootController(canvas,"images/ba3.png",true);
const enemyShootController = new shootController(canvas,"images/ba3.png",false);  

const enemyController=  new EnemyController(canvas,enemyShootController,playerShootController);
var player_=new player(canvas,3,playerShootController);
function resertGame(){
    
    player_=new player(canvas,3);
   
}

let isGameOver=false;
let lifeCounter=3;

function game(){
    window.addEventListener("beforeunload", function(event) {
        resertGame();
    });
    fisGameOver();
    if(!isGameOver){
            // ctx.drawImage(url(images/back2.jpg),0,0,canvas.width,canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx);
    player_.draw(ctx);
    playerShootController.draw(ctx);
    enemyShootController.draw(ctx);
    }
   

}

function fisGameOver(){
    if(isGameOver){
        return;
    }else if(enemyShootController.collidateWith(player_) && lifeCounter>0){
        lifeCounter--;
        console.log(lifeCounter);
        return;
    }else if (enemyShootController.collidateWith(player_) && lifeCounter==0){
        isGameOver=true;
        return;

    }
}



//call to game func 60 times per sec
setInterval(game,1000/60);

document.getElementById("btn2").addEventListener("click", startGame);


