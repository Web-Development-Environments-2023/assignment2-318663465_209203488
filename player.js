export default class player{
    rightPressed=false;
    leftPressed=false;
    upPressed=false;
    downPressed=false;

    constructor(canvas,valocity){
        this.canvas=canvas;
        this.valocity=valocity;
        this.x=canvas.width/2-100;
        this.y=canvas.height -165;
        this.width=200;
        this.height=180;
        this.image=new Image();
        this.image.src="images/uni.png";

        document.addEventListener('keydown',this.keydown);
        document.addEventListener('keyup',this.keyup);

    }

    

draw(ctx){
    this.move();
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

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
}

}