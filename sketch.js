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

let permission = false;
let amp;
let vol;
let r, g, b;


function setup() {
  createCanvas(720, 300);
  background(255, 0, 0);
 
  wave1 = new p5.Oscillator();
  wave1.setType('sine');
  
  wave2 = new p5.Oscillator();
  wave2.setType('sine');
  
  wave3 = new p5.Oscillator();
  wave3.setType('sine');
  
  wave4 = new p5.Oscillator();
  wave4.setType('sine');
  
  wave5 = new p5.Oscillator();
  wave5.setType('sine');
  
  wave6 = new p5.Oscillator();
  wave6.setType('sine');
 
  wave7 = new p5.Oscillator();
  wave7.setType('sine');
  
  wave8 = new p5.Oscillator();
  wave8.setType('sine');
  
  wave9 = new p5.Oscillator();
  wave9.setType('sine');
  
  wave10 = new p5.Oscillator();
  wave10.setType('sine');
  
  wave11 = new p5.Oscillator();
  wave11.setType('sine');
  
  wave12 = new p5.Oscillator();
  wave12.setType('sine');
 
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
  button13 = createButton('Volume Up');
  button14 = createButton('Volume Down');
  
  button1.touchStarted(toggle1);
  button2.touchStarted(toggle2);
  button3.touchStarted(toggle3);
  button4.touchStarted(toggle4);
  button5.touchStarted(toggle5);
  button6.touchStarted(toggle6);
  button7.touchStarted(toggle7);
  button8.touchStarted(toggle8);
  button9.touchStarted(toggle9);
  button10.touchStarted(toggle10);
  button11.touchStarted(toggle11);
  button12.touchStarted(toggle12);
  button13.touchStarted(toggle13);
  button14.touchStarted(toggle14);
  
  button1.position(0, 40);
  button1.size(50, 30);
  
  button2.position(50, 0);
  button2.size(50, 30);
  
  button3.position(100, 40);
  button3.size(50, 30);
  
  button4.position(150, 0);
  button4.size(50, 30);
  
  button5.position(200, 40);
  button5.size(50, 30);
  
  button6.position(250, 40);
  button6.size(50, 30);
  
  button7.position(300, 0);
  button7.size(50, 30);
  
  button8.position(350, 40);
  button8.size(50, 30);
  
  button9.position(400, 0);
  button9.size(50, 30);
  
  button10.position(450, 40);
  button10.size(50, 30);
  
  button11.position(500, 0);
  button11.size(50, 30);
  
  button12.position(550, 40);
  button12.size(50, 30);
  
  amp = new p5.Oscillator();
  vol = 0.5;
  
  if(typeof DeviceMotionEvent.requestPermission === "function") {
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccess);
  }
  else{
    background(0, 255, 0);
    text("is not a ios", 150, 150);
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
  
  if (!permission) {
    return;
  }
  
  background(r, g, b);
  textSize(72);
  text(rotationX, 100, 100);
  r = map(rotationX, -90, 90, 100, 175);  
}

function iosAccess(){
  DeviceOrientationEvent.requestPermission().then((response) => {
    if(response === "granted"){
      permission = true;
    }
  })
  .catch(console.error);
}

function toggle1(){
  wave1.freq(261.6256);
 
  if(!playing1) {
    wave1.start();
    playing1 = true;
  } 
  else {
    wave1.stop();
    playing1 = false;
  }
}

function toggle2(){
  wave2.freq(277.1826);
 
  if(!playing2){
    wave2.start();
    playing2 = true;
  } 
  else {
    wave2.stop();
    playing2 = false;
  }
}

function toggle3(){
  wave3.freq(293.6648);
 
  if(!playing3) {
    wave3.start();
    playing3 = true;
  } 
  else {
    wave3.stop();
    playing3 = false;
  }
}

function toggle4(){
  wave4.freq(311.1270);
 
  if(!playing4) {
    wave4.start();
    playing4 = true;
  } 
  else {
    wave4.stop();
    playing4 = false;
  }
}

function toggle5(){
  wave5.freq(329.6276);
 
  if(!playing5) {
    wave5.start();
    playing5 = true;
  } 
  else {
    wave5.stop();
    playing5 = false;
  }
}

function toggle6(){
  wave6.freq(349.2282);
 
  if(!playing6) {
    wave6.start();
    playing6 = true;
  } 
  else {
    wave6.stop();
    playing6 = false;
  }
}

function toggle7(){
  wave7.freq(369.9944);
 
  if(!playing7) {
    wave7.start();
    playing7 = true;
  } 
  else {
    wave7.stop();
    playing7 = false;
  }
}

function toggle8(){
  wave8.freq(391.9954);
 
  if(!playing8) {
    wave8.start();
    playing8 = true;
  } 
  else {
    wave8.stop();
    playing8 = false;
  }
}

function toggle9(){
  wave9.freq(415.3047);
 
  if(!playing9) {
    wave9.start();
    playing9 = true;
  } 
  else {
    wave9.stop();
    playing9 = false;
  }
}

function toggle10(){
  wave10.freq(440);
 
  if(!playing10) {
    wave10.start();
    playing10 = true;
  } 
  else {
    wave10.stop();
    playing10 = false;
  }
}

function toggle11(){
  wave11.freq(466.1638);
 
  if(!playing11) {
    wave11.start();
    playing11 = true;
  } 
  else {
    wave11.stop();
    playing11 = false;
  }
}

function toggle12(){
  wave12.freq(493.8833);
 
  if(!playing12) {
    wave12.start();
    playing12 = true;
  } 
  else {
    wave12.stop();
    playing12 = false;
  }
}

function toggle13() {
    vol = vol + 0.1;
  
    if(vol >= 1) {
        vol = 1;
    }
}

function toggle14() {
    vol = vol - 0.1;
  
    if(vol <= 0) {
        vol = 0;
    }
}