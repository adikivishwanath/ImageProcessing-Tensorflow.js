let mobilenet;
let classifier;
let video;
let label = 'loading the model';
let trainButton;
let sadButton;
let happyButton;
let saveButton;

function modelReady() {
  console.log('Model is ready!!!');
  classifier.load('model.json', customModelReady);
  //mobilenet.predict(gotResults);
}

function customModelReady() {
  console.log('custom model is ready');
  label = 'model is ready';
  classifier.classify(gotResults);
}

function videoReady() {
  console.log("Video is ready");
}

// function isTraining(loss) {
//     if(loss == null) {
//       console.log("Training complete");
//       classifier.classify(gotResults);
//     } else {
//       console.log(loss);
//     }
//   }



function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    //label = results[0].className;
    classifier.classify(gotResults);
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
  classifier = mobilenet.classification(video, videoReady);


  //slider = createSlider(0, 1, 0.5, 0.01);
  //slider.position(200 , 540);
  //slider.input(function() {
    //predictor.addImage(slider.value());
    //console.log(slider.value());
  //});


  //addButton = createButton('add example image');
  //addButton.mousePressed(function() {
      //predictor.addImage(slider.value());
  //});

  // sadButton = createButton('sad');
  // sadButton.position(300, 550);
  // sadButton.mousePressed(function() {
  //   classifier.addImage('sad');
  //
  // });

  // happyButton = createButton('happy');
  // happyButton.position(200, 550);
  // happyButton.mousePressed(function() {
  //   classifier.addImage('happy');
  //
  // });


  // trainButton = createButton('train');
  // trainButton.position(500, 550);
  // trainButton.mousePressed(function() {
  //   classifier.train(isTraining);
  //
  // });

  // saveButton = createButton('save');
  // saveButton.position(400, 550);
  // saveButton.mousePressed(function() {
  //   classifier.save();
  //
  // });

}

function draw() {
  background(0);
  image(video, 0, 0);
  //rectMode(CENTER);
  //fill(204, 102, 0);
  //rect(value*width, height/2, 50, 50);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
