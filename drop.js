class Drop {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0.2,
            friction: 0.1,
            density: 3
        }
        this.r = r;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill ("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
    
}