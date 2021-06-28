class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 40;
        this.height = 40;
        this.image=loadImage("can2.png")
        World.add(world, this.body);
      }
      display(){
        push();
        var pos =this.body.position;
        imageMode(CENTER);
        fill(rgb(240,128,128));
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
  }