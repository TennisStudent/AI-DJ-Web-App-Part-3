var song1 = "";
var song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}


function setup()
{
    canvas = createCanvas(550, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is Initialized!")
}
function draw()
{
    image(video, 0, 0, 550, 450);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX is "+ leftWristX + " LeftWristY is "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX is "+ rightWristX + " RightWristY is "+ rightWristY);
    }
}