var attractors =[];
var particles = [];

var counter = 1;
//counter = counter.toFixed(1);


function setup() { 
  createCanvas(400, 400);

  for(var i =0; i < 250; i++){
    particles.push(new Particle(random(width), random(height))); 

  }
  
  //creating the attractors... loop runs each time a attractor is creating. if i<10, 10 made.
      for(var i =0; i < 10; i++){
      attractors.push(createVector(random(width), random(height)));   }
       
  
  background(51);  
}



//CHANGING THE FORCE
 function mousePressed() {
      counter = counter + 1;
       //text(counter, 200,200);
    }


function draw() {
  stroke(255);
  strokeWeight(4);
 
  
  //drawing in the attractors
  for(var i =0; i < attractors.length; i++){
   point(attractors[i].x, attractors[i].y); 
        stroke(100, 255, 1000);
    
  }

  for(var i =0; i < particles.length; i++){
    var particle = particles[i];
       for(var j =0; j < attractors.length; j++){
        particle.attracted(attractors[j]);
     }
      if(counter <= 1 ){
  stroke(0,200,200);
        strokeWeight(4);
  textSize(10);
        var output = "Press the mouse to increase the attractor force!";
  text(output, 100, 20);
  }
    
    stroke(100);
    textSize(15);
    text("Force strength = ", 200, 375);
    stroke(255, 0, 0);
      text(counter*0.1, 325,375);
  
    particle.update();
    particle.show();
  }
}
