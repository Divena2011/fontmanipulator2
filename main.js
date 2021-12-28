function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(450,450);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#4886C9')
    document.getElementById("square_side").innerHTML= "Width and height of a square will be="+difference+"px";
  fill ('#36ebd9');
  stroke('#966ee6');
  square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('poseNet is Initialzed');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX="+ noseX+"noseY"+noseY);
leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor (leftWristX- rightWristX);
console.log("leftWristX="+ leftWristX+"rightWristX="+ rightWristX+"difference="+difference);
    }
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

