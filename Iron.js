class Iron {
    constructor(x, y) {
      var options2 = {
        density:30,
        friction: 3,
        restitution:0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options2);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };