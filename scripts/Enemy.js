export default class Enemy{
    constructor(x,y,imageNumber){
        this.x=x;
        this.y=y;
        this.width = 100;
        this.height = 70;
        

        this.image = new Image();
        this.image.src = `images/bad${imageNumber}.png`;


    }
    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    move(xValocity){
        this.x+=xValocity;
    }

}