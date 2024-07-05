leftWristX = 0;
rightWirstX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,450);
    canvas.position(560,130);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#9cf0ce");
    
    
    difference =Math.abs(rightWirstX- leftWristX);
   textsizeValue = Math.floor(difference);
    textSize(textsizeValue);
    textSize(23);
    fill("#000000");
    text('Monish', 30,300 );
}
function modelLoaded(){
    console.log("PoseNet has been intialized. ");
    

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX =  results[0].pose.leftWrist.x;
        rightWirstX =  results[0].pose.rightWrist.x;
        console.log(leftWristX, rightWirstX);
        
        

    }

}
