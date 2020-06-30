class Paper{
    constructor(x,y,options){
        var options ={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x ,y , 10, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
    }
}