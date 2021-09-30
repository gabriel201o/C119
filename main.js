function setup(){
  canvas=createCanvas(400,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("modelLoaded")
}
function draw(){
  image(video,0,0,400,400);
  classifier.classfy(video,gotResult);
}

function gotResult(error,results){
if(error){
  console.error(error);
}
else{
  console.log(results);
var synth=window.speechSynthesis;
speak_data=results[0].label;
var utterThis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);

}
}




