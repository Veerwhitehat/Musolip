function preload() {
    
}
function setup() {
 
    canvas=createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,Modelloaded)
    poseNet.on('pose', gotPoses);

    
    
}
function Modelloaded() {
    
    console.log("poseNet is Initialized");

}
function draw() {
    
    image(video,0,0,400,400);
  

}

function take_snapshot() {

save("Hatoclown.jpeg");
    
}
function gotPoses(results) {

    if (results.length>0) {
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
                
    }

    
}