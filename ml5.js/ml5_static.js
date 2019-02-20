let mobilenet = ml5.imageClassifier('MobileNet', modelReady);
let img;

function setup() {
  var c = createCanvas(600, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  c.position(x, y);
  background(20);

  //background(20);
  //image = createImg(img, imageReady);
  //image.hide();
  c.drop(gotFile);

  //devicePixelScaling(false);
  textSize(30);
  //text("DRAG AND DROP FILES HERE", 15, 150); // changed

  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas. ' , width / 2, height / 2); // changed
}

function modelReady() {
   console.log('Model is ready!!!');
   //mobilenet.predict(img, gotResults);
   //puffin.elt.crossOrigin = "Anonymous";
}

function gotFile(file) {
  if(file.type === 'image') {
     img = createImg(file.data, imageReady).hide();
    //image(img, 0, 0, width, height);
    }else {
    console.log('Not an image file');
  }
}

function imageReady() {
  mobilenet.predict(img, gotResults);
  background(0);
  console.log('Image is ready');
  image(img, 0, 0, width, height);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    createP(results[0].className)
    createP(results[0].probability)

    //let label = results[0].className;
    //let prob = results[0].probability;
    //fill(0);
    //textSize(64);
    //text(label, 10, height - 100);
    //textSize(30);
    //text(prob, 5, height - 50);
  }

}
