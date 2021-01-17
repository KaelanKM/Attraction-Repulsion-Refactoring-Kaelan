function Particle(x, y) {
  //The Vector Variables: 
  this.pos = createVector(x, y);
  this.prev = createVector(x,y);
  this.vel =  p5.Vector.random2D();
  this.acc = createVector();
  
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); 
  }
  
  this.show = function(){
    stroke(255, 15);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y); 
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
  
  this.attracted = function(target, j){
    
  
    var force = p5.Vector.sub(target, this.pos); 
    var dsquared = force.magSq();  
    dsquared = constrain(dsquared, 5 , 50); 
    

    var G = 1 * counter;   //CHANGE
    var strength = G / dsquared; 
    
    force.setMag(strength);  //This function takes a vector of any length, and sets the magnitude(distance) to any value that you want, while keeping the direction constant.
  
    this.acc.add(force); //look up force accumilation for this one.
  }
}
