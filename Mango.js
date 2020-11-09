class Mango {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Pluckingmangoes/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //rect(0,0,this.width, this.height)
      fill("white");
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };