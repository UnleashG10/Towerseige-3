class Pentagon{
    constructor(x, y){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);


    }

    display(){

        push();
        
        stroke("green")
        fill("250"); 
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y, 20);

        
        pop();
      }

}



