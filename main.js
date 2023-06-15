nosex=0;
nosey=0;
rwristx=0;
lwristx=0;
difference=0;

function setup(){
    v=createCapture(VIDEO);
    v.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    p=ml5.poseNet(v,l);
    p.on('pose',a);
}
function l(){
    console.log("poseNet is loaded");
}
function a(result){
if (result.length>0) {
    console.log(result);
    lwristx=result[0].pose.leftWrist.x;
    rwristx=result[0].pose.rightWrist.x;
    difference=floor(lwristx-rwristx);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
}
}
function draw(){
    background("black");
    document.getElementById("d").innerHTML="the font size of the text will be "+difference+"px";
    textSize(difference);
    fill("maroon");
    stroke("maroon");
    text('i boop you',50,400);
}