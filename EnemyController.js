import Enemy from "./enemy.js";
import moving from "./moving.js";

export default class EnemyController{

    enemyMap = [
        [1,2,3,4,5],
        [5,6,9,8,9],
        [9,10,3,4,1],
        [1,2,3,4,8],
    ];

    enemyRows=[];


currDiraction=moving.right;
xValocity=0;
//yValocity=0;
defaultXValocity=1;
//defaultYValocity=1;

    constructor(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx){
        this.updateValocityAndDiraction();
        this.drawEnemies(ctx);
    

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
        //for each row in enemy map
        this.enemyMap.forEach((row,rowIndex)=>{
            this.enemyRows[rowIndex]=[];
            //for each enemy in the row
            row.forEach((enemyNum,enemyIndex)=>{
                if(enemyNum>0){
                    //if the enemy exist-create obj and add to the enemy list
                    this.enemyRows[rowIndex].push(new Enemy(enemyIndex*130,rowIndex*50,enemyNum));
                }
            });
        });

    }

    drawEnemies(ctx){
        this.enemyRows.flat().forEach((enemy)=>{
            enemy.move(this.xValocity);
            enemy.draw(ctx);
        });
    }
} 