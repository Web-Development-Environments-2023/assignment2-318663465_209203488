export default class Bullet{
    constructor(canvas,x,y,valocity,image){
        this.canvas=canvas;
        this.image=new Image();
        this.image.src=image;
        this.x=x;
        this.y=y;
        this.valocity=valocity;
        this.width=20;
        this.height=60;

    }

    draw(ctx){
        this.y-=this.valocity;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    }