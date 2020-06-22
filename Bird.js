class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,80,60);
    this.image = loadImage("sprites/magicBall.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
