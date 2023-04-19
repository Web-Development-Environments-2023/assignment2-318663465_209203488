import Bullet from "./bullet.js";
export default class shootController{
    bullets=[];
    nextShoot=0;



    constructor(canvas,image,soundEnabled){
        this.canvas=canvas;
        this.image=image;
        this.soundEnabled=soundEnabled;
        this.shootSound=new Audio("./gun.wav");
        this.volume=0.5;
    }
    shoot(x,y,valocity,nextShoot=0){
       if(this.nextShoot<=0) {
        const bullet=new Bullet(this.canvas,x,y,valocity,this.image);
        this.bullets.push(bullet);
        if(this.soundEnabled){
            this.shootSound.currentTime=0;
            this.shootSound.play();
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
}