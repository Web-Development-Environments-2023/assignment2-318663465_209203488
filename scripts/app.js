
import EnemyController from "./EnemyController.js";
import player from "./player.js";
import shootController from "./shootController.js";
    

const canvas  = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width=window.innerWidth*0.8;
ctx.canvas.height=window.innerHeight*0.72;



// canvas.width = "900";
// canvas.height = "425";
// const background = new Image();
// background.src = "images/back2.jpg";


var playerShootController = new shootController(canvas,"images/ba3.png",true);
var enemyShootController = new shootController(canvas,"images/ba3.png",false);  
var time_elapsed=0;
var enemyController=  new EnemyController(canvas,enemyShootController,playerShootController);
var player_=new player(canvas,3,playerShootController);

var isGameOver=false;
var lifeCounter=3;
var LifeImagesArray = loadLifeImagesArray();
function resertGame(){
  // gameSound.currentTime=0; 
  // gameSound.play();
score=0;
  isGameOver=false;
  // isWin=false;
  lifeCounter=3;
  document.getElementById("life").src = LifeImagesArray[3].src;
  enemyController.speed=1;
    
    playerShootController = new shootController(canvas,"images/ba3.png",true);
    enemyShootController = new shootController(canvas,"images/ba3.png",false);  
    time_elapsed=0;
    enemyController=  new EnemyController(canvas,enemyShootController,playerShootController);
    player_=new player(canvas,3,playerShootController);

   
}


lblTime.value = howMuchTimeIWantInTheGame - time_elapsed;
lblScore.value=0;

 function game(){

    window.addEventListener("beforeunload", function(event) {
        resertGame();
    });
    
    fisGameOver();
    if(!isGameOver){
      lblTime.value = howMuchTimeIWantInTheGame - time_elapsed;
      lblScore.value=score;
            // ctx.drawImage(url(images/back2.jpg),0,0,canvas.width,canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    LifeImagesArray = loadLifeImagesArray();
    enemyController.draw(ctx);
    player_.draw(ctx);
    playerShootController.draw(ctx);
    enemyShootController.draw(ctx);
   

}else{
  // records[]
 
  const tableBody = document.getElementById('myTable');
  tableBody.innerHTML = '';
							
  for (const [key, value] of Object.entries(records)) {
    console.log([key, value]);
    const row = tableBody.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();
    keyCell.innerText = key;
    valueCell.innerText = value;
  }
  console.log(tableBody);
  changeScreen("score-record");
  resertGame();
  console.log(enemyMap);
}
 }

 var LostSound = new Audio("sounds/playerLost.wav");


function fisGameOver(){
  var currentTime = new Date();
  time_elapsed = (currentTime - start_time) / 1000;
    if(isGameOver){
      records[gameNum]=score;
      gameNum++;
        return;
    }else if(enemyShootController.collidateWith(player_) && lifeCounter>=0){
        lifeCounter--;
        player_.playerDeathSound.play();
        player_=new player(canvas,3,playerShootController);
        changeLife();
        return;
    }else if (lifeCounter<0){
        isGameOver=true;
        records[gameNum]=score;
        gameNum++;
        window.clearInterval(gameInterval);
        WinSound.currentTime = 0;
        gameSound.pause();
        window.alert("you Lost!");
        setTimeout(function() {
         LostSound.play();
          WinSound.play();
          $("#footer").show();
          changeScreen("score-record");
        }, 500); // Delay the alert by 0.5 seconds
        changeLife();
        return;
    }
     else if(time_elapsed >= howMuchTimeIWantInTheGame){
      if (score < 100) {
        isGameOver=true;
        // window.clearInterval(cherieInterval);
        // gameOverIcyTowerSound.play();
        records[gameNum]=score;
        gameNum++;
        message = "You are better than " + score + " points!";
        window.clearInterval(gameInterval);
        WinSound.currentTime = 0;
        gameSound.pause();

        WinSound.play();
        setTimeout(function() {
          window.alert(message);
          $("#footer").show();
          changeScreen("score-record");
        }, 500);
        
        // window.clearInterval(gameInterval);

        changeScreen("score-record");
      } else {
        isGameOver=true;
        // window.clearInterval(cherieInterval);
        // queens.play();
        records[gameNum]=score;
        gameNum++;
        window.clearInterval(gameInterval);
        WinSound.currentTime = 0;
        gameSound.pause();
        WinSound.play();
        setTimeout(function() {
          window.alert("Winner!!!");
          $("#footer").show();
        changeScreen("score-record");
        }, 500);
        
      }
    }else if(time_elapsed < howMuchTimeIWantInTheGame ){
      if(enemyController.enemyRows.length==0){
        isGameOver=true;
        records[gameNum]=score;
        gameNum++;
        window.clearInterval(gameInterval);
        WinSound.currentTime = 0;
        gameSound.pause();
        WinSound.play();
        setTimeout(function() {
          window.alert("Champion!");
          $("#footer").show();
          changeScreen("score-record");
        }, 500); // Delay the alert by 0.5 seconds
        
      }
    
    }

    }



function changeLife() {
  
  console.log(lifeCounter);
  if(lifeCounter<0){
    document.getElementById("life").src = LifeImagesArray[0].src;

  }else{
    document.getElementById("life").src = LifeImagesArray[lifeCounter].src;
  }
}


function loadLifeImagesArray() {
  const life5 = new Image();
  life5.src = "images/life5.png";
  // life5.width="3";
  // life5.height="1";


  const life3 = new Image();
  life3.src = "images/life3.png";
  // life3.width="3";
  // life3.height="1";


  const life2 = new Image();
  life2.src = "images/life2.png";
  // life2.width="3";
  // life2.height="1";


  const life0 = new Image();
  life0.src = "images/life0.png";
  // life0.width="3";
  // life0.height="1";


  const lifeImages = [life0, life2, life3, life5];
  return lifeImages;
}
function changeScreen(id){
  hideAllScreens();
  $('#'+id).show();
  $('#'+id).focus();
  if (id === 'game-screen' && !gameInterval && gameFunc) {
      start_time = new Date();
      score=0;
      resetFunc();
      gameInterval = setInterval(gameFunc,1000/60)}
};

function hideAllScreens(){
  if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
  }
  $(".screen").hide();
}
setGameFunc(game,resertGame); 

