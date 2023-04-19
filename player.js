export default class player{
    rightPressed=false;
    leftPressed=false;
    upPressed=false;
    downPressed=false;
    shootPressed=false;
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    constructor(canvas,valocity,shootController){
        this.canvas=canvas;
        this.valocity=valocity;
        this.shootController=shootController;
        this.width=200;
        this.height=180;
        this.x=Math.floor(Math.random() * (this.canvas.width - 0 + 1) + 0);
        this.y=this.canvas.height-this.height*(5/6);
        this.image=new Image();
        this.image.src="images/uni.png";

        document.addEventListener('keydown',this.keydown);
        document.addEventListener('keyup',this.keyup);

    }

    

draw(ctx){
    if(this.shootPressed==true){
        this.shootController.shoot(this.x+this.width/2,this.y,4,10);                                                                                                                      
    }
    this.move();
    this.checkWalls();
    // let x=Math.floor(Math.random() * (this.canvas.width - 0 + 1) + 0);
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);


}

checkWalls(){
    //left
    if(this.x+this.width/4<0){
        this.x=0-this.width/4
    }
    //right
    if(this.x+this.width*(3/4)>this.canvas.width){
        this.x=this.canvas.width-(3/4)*this.width;
    }
    //down
    if(this.y+this.height*(5/6)>this.canvas.height){
        this.y=this.canvas.height-this.height*(5/6);
    }
    //up-460 is 4 rows *enemy.height
    if(this.y<this.canvas.height-460+this.height){
        this.y=this.canvas.height-460+this.height
    }
}
move(){
    if(this.rightPressed){
        this.x+=this.valocity;
    }
    else if(this.leftPressed){
        this.x-=this.valocity;

    }else if(this.upPressed){
        this.y-=this.valocity;

    }else if(this.downPressed){
        this.y+=this.valocity;

    }
}


keydown=event=>{if(event.code=='ArrowRight'){
    this.rightPressed=true;
}
if(event.code=='ArrowLeft'){
    this.leftPressed=true;
}
if(event.code=='ArrowUp'){
    this.upPressed=true;
}
if(event.code=='ArrowDown'){
    this.downPressed=true;
}
if(event.code=='Space'){
    this.shootPressed=true;
}
}

keyup=event=>{if(event.code=='ArrowRight'){
    this.rightPressed=false;
}
if(event.code=='ArrowLeft'){
    this.leftPressed=false;
}if(event.code=='ArrowUp'){
    this.upPressed=false;
}
if(event.code=='ArrowDown'){
    this.downPressed=false;
}
if(event.code=='Space'){
    this.shootPressed=false;
}
}

}