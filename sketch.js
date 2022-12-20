let wave1;
let wave2;
let wave3;
let wave4;
let wave5;
let wave6;
let wave7;
let wave8;
let wave9;
let wave10;
let wave11;
let wave12;
let button;
let permission = false;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let button12;
let button13;
let button14;
let playing1 = false;
let playing2 = false;
let playing3 = false;
let playing4 = false;
let playing5 = false;
let playing6 = false;
let playing7 = false;
let playing8 = false;
let playing9 = false;
let playing10 = false;
let playing11 = false;
let playing12 = false;
let amp;
let vol;
let r, g, b;


function setup() {
  createCanvas(720, 256);
  background(255, 0, 0);
 
  wave1 = new p5.Oscillator();
  wave1.setType('sine');
  // wave1.amp(vol);
  
  
  wave2 = new p5.Oscillator();
  wave2.setType('sine');
  // wave2.amp(vol);
  
  
  wave3 = new p5.Oscillator();
  wave3.setType('sine');
  // wave3.amp(0);
  
  
  wave4 = new p5.Oscillator();
  wave4.setType('sine');
  // wave4.amp(0);
  
  
  wave5 = new p5.Oscillator();
  wave5.setType('sine');
  // wave5.amp(0);
  
  
  wave6 = new p5.Oscillator();
  wave6.setType('sine');
  // wave6.amp(0);
 
  
  wave7 = new p5.Oscillator();
  wave7.setType('sine');
  // wave7.amp(0);
  
  
  wave8 = new p5.Oscillator();
  wave8.setType('sine');
  // wave8.amp(0);
  
  
  wave9 = new p5.Oscillator();
  wave9.setType('sine');
  // wave9.amp(0);
  
  
  wave10 = new p5.Oscillator();
  wave10.setType('sine');
  // wave10.amp(0);
  
  
  wave11 = new p5.Oscillator();
  wave11.setType('sine');
  // wave11.amp(0);
  
  
  wave12 = new p5.Oscillator();
  wave12.setType('sine');
  // wave12.amp(0);
  
  
  
  button1 = createButton('C(도)');
  button2 = createButton('C#');
  button3 = createButton('D(레)');
  button4 = createButton('D#');
  button5 = createButton('E(미)');
  button6 = createButton('F(파)');
  button7 = createButton('F#');
  button8 = createButton('G(솔)');
  button9 = createButton('G#');
  button10 = createButton('A(라)');
  button11 = createButton('A#');
  button12 = createButton('B(시)');
  button13 = createButton("Volume Up");
  button14 = createButton("Volume Down");
  button1.mousePressed(toggle1);
  button2.mousePressed(toggle2);
  button3.mousePressed(toggle3);
  button4.mousePressed(toggle4);
  button5.mousePressed(toggle5);
  button6.mousePressed(toggle6);
  button7.mousePressed(toggle7);
  button8.mousePressed(toggle8);
  button9.mousePressed(toggle9);
  button10.mousePressed(toggle10);
  button11.mousePressed(toggle11);
  button12.mousePressed(toggle12);
  button13.mousePressed(toggle13);
  button14.mousePressed(toggle14);
  
  amp = new p5.Oscillator();
  vol = 0.5;
  
  if(typeof DeviceMotionEvent.requestPermission === "function"){
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccess);
  }else{
    background(0, 255, 0);
    text("is not a ios", 100, 100);
  }
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
}


function draw() {
    wave1.amp(vol, 1);
    wave2.amp(vol, 1);
    wave3.amp(vol, 1);
    wave4.amp(vol, 1);
    wave5.amp(vol, 1);
    wave6.amp(vol, 1);
    wave7.amp(vol, 1);
    wave8.amp(vol, 1);
    wave9.amp(vol, 1);
    wave10.amp(vol, 1);
    wave11.amp(vol, 1);
    wave12.amp(vol, 1);
  
  
  if (!permission) return;
  background(r, g, b);
  textSize(72);
  text(rotationX, 100, 100);
  r = map(rotationX, -90, 90, 100, 175);
  
  // g = map(rotationY, -90, 90, 100, 200);
  // b = map(rotationZ, -90, 90, 100, 200);
  
}

function iosAccess(){
  DeviceOrientationEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  })
  .catch(console.error);
  
  
}


function touchStarted(){
  
}
function toggle1(){
  wave1.freq(261.6256);
 
  if (!playing1){
    wave1.start();
    // wave1.amp(vol, 1);
    playing1 = true;
  } else{
    wave1.stop();
    // wave1.amp(0, 1);
    playing1 = false;
  }
}
function toggle2(){
  wave2.freq(277.1826);
 
  if (!playing2){
    wave2.start();
    // wave2.amp(vol, 1);
    playing2 = true;
  } else{
    wave2.stop();
    // wave2.amp(0, 1);
    playing2 = false;
  }
}
function toggle3(){
  wave3.freq(293.6648);
 
  if (!playing3){
    wave3.start();
    // wave3.amp(vol, 1);
    playing3 = tru3;
  } else{
    wave3.stop();
    // wave3.amp(0, 1);
    playing3 = false;
  }
}
function toggle4(){
  wave4.freq(311.1270);
 
  if (!playing4){
    wave4.start();
    // wave4.amp(vol, 1);
    playing4 = true;
  } else{
    wave4.stop();
    // wave4.amp(0, 1);
    playing4 = false;
  }
}
function toggle5(){
  wave5.freq(329.6276);
 
  if (!playing5){
    wave5.start();
    // wave5.amp(vol, 1);
    playing5 = true;
  } else{
    wave5.stop();
    // wave5.amp(0, 1);
    playing5 = false;
  }
}
function toggle6(){
  wave6.freq(349.2282);
 
  if (!playing6){
    wave6.start();
    // wave6.amp(vol, 1);
    playing6 = true;
  } else{
    wave6.stop();
    // wave6.amp(0, 1);
    playing6 = false;
  }
}
function toggle7(){
  wave7.freq(369.9944);
 
  if (!playing7){
    wave7.start();
    // wave7.amp(vol, 1);
    playing7 = true;
  } else{
    wave7.stop();
    // wave7.amp(0, 1);
    playing7 = false;
  }
}
function toggle8(){
  
  wave8.freq(391.9954);
 
  if (!playing8){
    wave8.start();
    // wave8.amp(vol, 1);
    playing8 = true;
  } else{
    wave8.stop();
    // wave8.amp(0, 1);
    playing8 = false;
  }
}
function toggle9(){
  wave9.freq(415.3047);
 
  if (!playing9){
    wave9.start();
    // wave9.amp(vol, 1);
    playing9 = true;
  } else{
    wave9.stop();
    // wave9.amp(0, 1);
    playing9 = false;
  }
}
function toggle10(){
  wave10.freq(440);
 
  if (!playing10){
    wave10.start();
    // wave10.amp(vol, 1);
    playing10 = true;
  } else{
    wave10.stop();
    // wave10.amp(0, 1);
    playing10 = false;
  }
}
function toggle11(){
  wave11.freq(466.1638);
 
  if (!playing11){
    wave11.start();
    // wave11.amp(vol, 1);
    playing11 = true;
  } else{
    wave11.stop();
    // wave11.amp(0, 1);
    playing11 = false;
  }
}
function toggle12(){
  wave12.freq(493.8833);
 
  if (!playing12){
    wave12.start();
    // wave12.amp(vol, 1);
    playing12 = true;
  } else{
    wave12.stop();
    // wave12.amp(0, 1);
    playing12 = false;
  }
}
function toggle13(){
    vol = vol + 0.1;
    if(vol >= 1){
        vol = 1;
    }
    // wave1.amp(vol);
    // wave2.amp(vol);
    // wave3.amp(vol);
    // wave4.amp(vol);
    // wave5.amp(vol);
    // wave6.amp(vol);
    // wave7.amp(vol);
    // wave8.amp(vol);
    // wave9.amp(vol);
    // wave10.amp(vol);
    // wave11.amp(vol);
    // wave12.amp(vol);
 }
function toggle14(){
    vol = vol - 0.1;
    if(vol <= 0){
        vol = 0;
    }
    // wave1.amp(vol);
    // wave2.amp(vol);
    // wave3.amp(vol);
    // wave4.amp(vol);
    // wave5.amp(vol);
    // wave6.amp(vol);
    // wave7.amp(vol);
    // wave8.amp(vol);
    // wave9.amp(vol);
    // wave10.amp(vol);
    // wave11.amp(vol);
    // wave12.amp(vol);
 }