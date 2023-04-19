import EnemyController from "./enemyController.js";
import player from "./player.js";
import shootController from "./shootController.js";

//  document.addEventListener('DOMContentLoaded',setInterval(),false)

// // function openGame(){
// //     startGame();

// // }
// const vr=document.getElementById("startGbtn")
// vr.addEventListener("click",startGame,false);
document.getElementById("btn2").addEventListener("click", startGame);
function startGame(){
	document.getElementById("section-welcome").style.display = "none";
	document.getElementById("section-login").style.display = "none";
    document.getElementById("section-register").style.display = "none";
    document.getElementById("game-over").style.display = "none";


	// document.getElementById("header").style.display = "block";

    document.getElementById("section-PlayGame").style.display = "block";

}

document.getElementById("quit").addEventListener("click", onclickQuit);
function onclickQuit(){
	document.getElementById("section-login").style.display = "none";
    document.getElementById("game-over").style.display = "none";

    document.getElementById("section-register").style.display = "none";
    document.getElementById("section-PlayGame").style.display = "none";
	document.getElementById("section-welcome").style.display = "block";

}
    
document.getElementById("play-again").addEventListener("click", onclickPlayAgain);
function onclickPlayAgain(){
	document.getElementById("section-login").style.display = "none";
    document.getElementById("game-over").style.display = "none";

    document.getElementById("section-register").style.display = "none";
	document.getElementById("section-welcome").style.display = "none";
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


let isGameOver=false;
let lifeCounter=3;
let didWin = false;



function resertGame(){
    
    player_=new player(canvas,3);
    didWin = false;

isGameOver=false;
lifeCounter=3;

}


function displayGameOver() {
    if (isGameOver) {

        document.getElementById("section-login").style.display = "none";
        document.getElementById("section-register").style.display = "none";
        document.getElementById("section-PlayGame").style.display = "none";
        document.getElementById("section-welcome").style.display = "none";

        document.getElementById("game-over").style.display = "block";

    //   let text = didWin ? "You Win" : "Game Over";
    //   let textOffset = didWin ? 3.5 : 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   ctx2.fillStyle = "white";
    //   ctx2.font = "70px Arial";
    //   ctx2.fillText("text", canvas.width / 12, canvas.height / 2);
    }
  }
  


function game(){
    window.addEventListener("beforeunload", function(event) {
        resertGame();
    });
    // window.addEventListener("click", {
    //     resertGame(); 
    // להוסיף שזה יתאפס על כל לחיצה על תפריט
    // });


    fisGameOver();
    displayGameOver()

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
    }else if(lifeCounter==0 ){
        isGameOver=true;
    }
    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
      }
    
}



//call to game func 60 times per sec
setInterval(game,1000/60);



