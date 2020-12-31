class Box{

    constructor(x, y){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);


    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        stroke("red")
        fill("blue"); 
        rect( 0, 0, this.width, this.height);
        pop();
      }

}