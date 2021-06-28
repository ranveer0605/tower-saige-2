class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("can.png")
        World.add(world, this.body);
      }
      display(){
        push();
        var pos =this.body.position;
        imageMode(CENTER);
        fill(rgb(3, 252, 194));
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
  }