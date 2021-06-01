class Stone {
    constructor(x, y) {
      var opt = {
        density:12,
        friction: 0.9,
        restitution:0.8
      };
      this.body = Bodies.rectangle(x, y, 20, 30, opt);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      strokeWeight(3);
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };