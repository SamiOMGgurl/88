x = 0;
y = 0;
screen_width = "";
screen_height = "";
draw_strawberry = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number = Number(content);
if (Number.isInteger(to_number))
{
  document.getElementById("status").innerHTML = "Strawberry has intialised drawing process";
  draw_strawberry = "set";
}
else 
{
document.getElementById("status").innerHTML = "Number is requested";
}
}

function setup() 
{
canvas = createCanvas (600, 400);
canvas.position ();
}

function draw() {
  if(draw_strawberry == "set")
  {
    for(var i = 1 ; i <= to_number; i++)
     { x = Math.floor(Math.random()*10);
       y = Math.floor(Math.random()*100);
       image(img, x, y, 50, 50); }
    
    document.getElementById("status").innerHTML = to_number + "Strawberries drawn";
    draw_strawberry = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload()
{
  img = loadImage ("Strawberry.png");
}

