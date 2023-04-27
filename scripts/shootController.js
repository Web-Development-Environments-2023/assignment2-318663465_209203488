import Bullet from "./bullet.js";
export default class shootController{
    bullets=[];
    nextShoot=0;



    constructor(canvas,image,soundEnabled){
        this.canvas=canvas;
        this.image=image;
        // this.soundEnabled=soundEnabled;
        // this.shootSound=new Audio("sounds/playerShot.wav");
        this.volume=0.5;
    }
    shoot(x,y,valocity,nextShoot=0){
       if(this.nextShoot<=0) {
        const bullet=new Bullet(this.canvas,x,y,valocity,this.image);
        this.bullets.push(bullet);
        if(this.soundEnabled){
            // this.shootSound.currentTime=0;
            // this.shootSound.play();
        }
        this.nextShoot=nextShoot;


       }



    }

    draw(ctx){
        this.bullets.forEach((bullet) => bullet.draw(ctx))
        if(this.nextShoot>0){
            this.nextShoot--;
        }
    }

    collidateWith(sprite){
        const bulletThatHitSpriteIndex=this.bullets.findIndex(bullet=>bullet.collidateWith(sprite));
        if(bulletThatHitSpriteIndex>=0){
            this.bullets.splice(bulletThatHitSpriteIndex,1);
            return true;
        }
        return false;

    }
}