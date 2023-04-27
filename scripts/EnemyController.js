import Enemy from "./enemy.js";
import moving from "./moving.js";


export default class EnemyController{


    enemyRows=[];


currDiraction=moving.right;
xValocity=0;
//yValocity=0;
defaultXValocity=1;
//defaultYValocity=1;
fireDefaultTime=115;
fireTimer=this.fireDefaultTime;
speed = 1;
state = 0;
stateCounter = 0;


    constructor(canvas,enemyBulletController,playerShootController){
        this.canvas = canvas;
        this.enemyBulletController=enemyBulletController;
        this.playerShootController=playerShootController;
        this.enemyDeathSound=new Audio("sounds/playerShot.wav");
        this.enemyDeathSound.volume=0.5;
        this.createEnemies();

    }





    draw(ctx){
        this.updateValocityAndDiraction();
        this.collisionDetection();
        this.drawEnemies(ctx);
        this.fireBullet();
        // var time = 1;

        // var interval = setInterval(function() { 
        // if (time <= 3) { 
        //     this.speed += 1;
        //     console.log(this.speed);
        //     time++;
        // }
        // else { 
        //     clearInterval(interval);
        // }
        // }, 5000);
        if (this.state < 4) {
          
                if (this.stateCounter++ > 300) {
                    this.state++;
                    this.speed += 0.5;
                    this.stateCounter = 0;
                }
           
                // if (this.stateCounter++ > 100) {
                //     this.state++;
                //     this.stateCounter = 0;
                // }
                
                console.log(this.speed);
            
        }
        // setInterval(() => {
        //     if (this.state < 5) {
        //       this.state++;
        //       this.speed += 0.1;
        //     }
        //    }, 5000);
          
    

    }
    collisionDetection(){
        for(let i=0;i<this.enemyRows.length;i++){
            this.enemyRows[i].forEach((enemy,enemyIndex)=>{
                if(this.playerShootController.collidateWith(enemy)){
                    this.enemyDeathSound.currentTime=0;
                    this.enemyDeathSound.play();
                    this.enemyRows[i].splice(enemyIndex,1);
                    if(i==3){
                        score+=5;
                    }else if(i==2){
                        score+=10;
                    }
                    else if(i==1){
                        score+=15;
                    }else if(i==0){
                        score+=20;
                    }
                }
            })
        }
        // this.enemyRows.forEach(enemyRow=>{
        //     enemyRow.forEach((enemy,enemyIndex)=>{
        //         if(this.playerShootController.collidateWith(enemy)){
        //             this.enemyDeathSound.currentTime=0;
        //             this.enemyDeathSound.play();
        //             enemyRow.splice(enemyIndex,1);
        //             console.log(enemyRow);
        //             score+=(enemyRow+1*5);
        //         }
        //     })

        // })
        this.enemyRows=this.enemyRows.filter((enemyRow)=>enemyRow.length)
    }

    fireBullet(){
        this.fireTimer--;
       if(this.fireTimer<=0){
        this.fireTimer=this.fireDefaultTime;
        const all=this.enemyRows.flat();
        const enemyIndex=Math.floor(Math.random()*(all.length-1));
        const enemy=all[enemyIndex];
        this.enemyBulletController.shoot(enemy.x+enemy.width/2,enemy.y+enemy.height/2,-3);

        }
    }
    //moving enemies
updateValocityAndDiraction() {
    for(const enemyRow of this.enemyRows){
        if(this.currDiraction==moving.right){
            this.xValocity=this.defaultXValocity;
            //this.yValocity=0;
            const mostRight=enemyRow[enemyRow.length-1];
            //if enemies tuch wall -change diraction
            if(mostRight.x +mostRight.width>= this.canvas.width){
                this.currDiraction=moving.left;
                break;
            }

        }
        else if(this.currDiraction==moving.left){
            this.xValocity=-this.defaultXValocity;
            //this.yValocity=0;
            const moshLeft=enemyRow[0];
            //if enemies tuch wall -change diraction
            if(moshLeft.x <=0){
                this.currDiraction=moving.right;
                break;

            }
            
    }
    
} }

    //convert numbers in enemy map to images
    createEnemies(){
        // updateEnemyMap();
        //for each row in enemy map
        enemyMap.forEach((row,rowIndex)=>{

            this.enemyRows[rowIndex]=[];
            //for each enemy in the row
            row.forEach((enemyNum,enemyIndex)=>{
                if(enemyNum>=0){
                    //if the enemy exist-create obj and add to the enemy list
                    this.enemyRows[rowIndex].push(new Enemy(enemyIndex*110,rowIndex*40,enemyNum));
                    // console.log("enemy nummmms");
                    // console.log(enemyNum);
            
                }
            });
        });

    }

    drawEnemies(ctx){
        this.enemyRows.flat().forEach((enemy)=>{
            enemy.move(this.xValocity* this.speed);
            enemy.draw(ctx);
        });
    }
} 