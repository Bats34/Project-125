leftWRISTx=0;
rightWRISTx=0;
difference=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(570,500);
    canvas=createCanvas(450,400);
    canvas.position(595,150);
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses );
}
function ModelLoaded() {
    console.log("Model Loaded!");
}
function gotPoses(results){
if(results>0) {
console.log(results);
leftWRISTx=results[0].pose.leftWrist.x;
rightWRISTx=results[0].pose.rightWrist.x;
difference=floor(leftWRISTx-rightWRISTx);
console.log("Left wrist x = "+leftWRISTx+" ,Right wrist x = "+rightWRISTx+" and Difference = "+difference);

}
}
function draw() {
    background('#03c2fc');
    textSize(difference);
    fill('#91048d');
    text('Sanvi',200,400);
}