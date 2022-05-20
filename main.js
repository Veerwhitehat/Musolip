nosex=0
nosey=0


function preload() {
    nose= loadImage("https://i.postimg.cc/Y0Lc7wqr/mus.png");
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
    image(nose,nosex,nosey,70,70);
  

}

function take_snapshot() {

save("Musolip.jpeg");
    
}
function gotPoses(results) {

    if (results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x-170;
        nosey=results[0].pose.nose.y-70;
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
                
    }

    
}