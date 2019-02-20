let mobilenet;
let classifier;
let video;
let label = '';
let vishyButton;
let yaswanthButton;
let phoneButton;
let trainButton;

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
      classifier.classify(gotResults);
    } else {
      console.log(loss);
    }
  }



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

  vishyButton = createButton('vishy');
  vishyButton.position(100, 550);
  vishyButton.mousePressed(function() {
    classifier.addImage('vishwanath');
  });

  yaswanthButton = createButton('yaswanth');
  yaswanthButton.position(150, 550);
  yaswanthButton.mousePressed(function() {
    classifier.addImage('yaswanth');
  });

  phoneButton = createButton('smartphone');
  phoneButton.position(230, 550);
  phoneButton.mousePressed(function() {
    classifier.addImage('smartphone');

  });

  trainButton = createButton('train');
  trainButton.position(400, 550);
  trainButton.mousePressed(function() {
    classifier.train(isTraining);

  });





}



function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
