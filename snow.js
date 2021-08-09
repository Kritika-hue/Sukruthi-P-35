class Snowfall{
    constructor(x, y){
        var options = {
            restitution:0.04,
            friction:1.0,
            densiy:1.0,
            visibility:255
        }

        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        if(pos.y>300){
            this.body.visibility = 0;
        }

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
    }
}