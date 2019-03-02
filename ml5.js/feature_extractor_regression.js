let mobilenet;
let predictor;
let video;
let value = 0;
let trainButton;
let addButton;
let slider;

function modelReady() {
  console.log('Model is ready!!!');
  //mobilenet.predict(gotResults);
}

function videoReady() {
  console.log("Video is ready");
}

function isTraining(loss) {
    if(loss == null) {
      console.log("Training complete");
      predictor.predict(gotResults);
    } else {
      console.log(loss);
    }
  }



function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    value = result;
    //label = results[0].className;
    predictor.predict(gotResults);
  }
}

// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);


  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(200 , 540);
  //slider.input(function() {
    //predictor.addImage(slider.value());
    //console.log(slider.value());
  //});


  addButton = createButton('add example image');
  addButton.position(50, 548);
  addButton.mousePressed(function() {
      predictor.addImage(slider.value());
  });


  trainButton = createButton('train');
  trainButton.position(400, 550);
  trainButton.mousePressed(function() {
    predictor.train(isTraining);

  });

}

function draw() {
  background(0);
  image(video, 0, 0);
  rectMode(CENTER);
  fill(204, 102, 0);
  rect(value*width, height/2, 50, 50);

  fill(255);
  textSize(32);
  text(value, 10, height - 20);
}
