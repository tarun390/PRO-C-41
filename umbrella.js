class Umbrella {
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 1.2,
            friction: 0.4,
            density: 3
        }
        this.r = r;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill("black");

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop()
    }
    
}