function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  ambientLight(200);
  directionalLight(255, 255, 0, -1, -1, 0);
  pointLight(0, 0, 255, 70,50, 250);
  normalMaterial();


  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.09);
  fill(255,255,0);
  torus(70, 30);
  pop();
  
  translate(110, 2, -100);
  push();
  rotateZ(frameCount * 0.11);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.051);
  fill(0,255,255);
  torus(40, 25);
  pop();
  let j;
  for( j=0;j<15;j++){
  translate(-10*j,-110*j, 110*j);
  push();
  rotateZ(frameCount * 0.2);
  rotateX(frameCount * 0.2);
  rotateY(frameCount * 0.01);
  fill(255,78,0);
  torus(5*j, 3*j);
  pop();}
  
  let i;
  for( i=0;i<23;i++){
    translate(0,0, 50);
    push();
    rotateZ(frameCount * 0.11);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.051);
    fill(88,76,255);
    torus(5*i, 25);
    pop();
  }
 

}
