noseX=0
noseY=0
 function preload(){
Clown=loadImage("Mustache.png")
}
function setup(){
    
   canvas=createCanvas(300,300)
   canvas.center()
   video=createCapture(VIDEO);
  video.size(300,300)
  video.hide()

   posenet=ml5.poseNet(video,modelLoad)
posenet.on("pose",gotpose)

}


function modelLoad(){
    console.log("my name is vishwesh")

}
function gotpose(result){
    //console.log(result);
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
    console.log(noseX)
    console.log(noseY)
}
 function draw(){
     image(video,0,0,300,300)
     image(Clown,noseX-34,noseY-15,70,70)
 }