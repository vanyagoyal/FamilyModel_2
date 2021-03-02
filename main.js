Webcam.set({
    width:470 ,
    height:400 ,
    image_format:'png' ,
    png_quality:90
});
camera = document.getElementById("live");
Webcam.attach(camera);
function cap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("cap").innerHTML = "<img id='snap' src='" + data_uri + "'>";
    })
}
console.log("Ml5 Version" , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ofNo7KINq/model.json',modelloaded);

function modelloaded(){
    console.log("Model Loaded!!");
}
function music(){
    song = document.getElementById("audio");
    song.play();
}