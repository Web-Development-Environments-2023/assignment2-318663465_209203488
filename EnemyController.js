import Enemy from "./Enemy.js";
export default class EnemyController{

    enemyMap = [
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
        [1,2,3,4,5,6,7,8,9,10],
    ];

    enemyRows=[];





    constructor(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx){
        this.drawEnemies(ctx);

    }

    //convert numbers in enemy map to images
    createEnemies(){
        //for each row in enemy map
        this.enemyMap.forEach((row,rowIndex)=>{
            this.enemyRows[rowIndex]=[];
            //for each enemy in the row
            row.forEach((enemyNum,enemyIndex)=>{
                if(enemyNum>0){
                    //if the enemy exist-create obj and add to the enemy list
                    this.enemyRows[rowIndex].push(new Enemy(enemyIndex*50,rowIndex*35,enemyNum));
                }
            });
        });

    }

    drawEnemies(ctx){
        this.enemyRows.flat().forEach((enemy)=>{
            enemy.draw(ctx);
        });
    }
} 