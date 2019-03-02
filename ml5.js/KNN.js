let mobilenet;
let video;
let features;
let knn;
let labelP;
let ready = false;

function modelReady() {
  console.log('MobileNet loaded!!!');
  knn = ml5.KNNClassifier();
  knn.load("someModel.json", function() {
    console.log("KNN Data Loaded");
    goClassify();
  });
  //mobilenet.predict(gotResults);
}

// function gotResults(error, results) {
//   if (error) {
//     console.error(error);
//   } else {
//     //console.log(results);
//     label = results[0].className;
//     mobilenet.predict(gotResults);
//   }
// }

// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320,240);
  video.hide();
  features = ml5.featureExtractor('MobileNet', modelReady);

  labelP = createP("need training data");
  labelP.style('font-size','32pt');
}

function goClassify() {
  const logits = features.infer(video);
  knn.classify(logits, function (error, result) {
    if(error) {
      console.error(error);
    } else {
      labelP.html(result.label);
      goClassify();

    }
  });
}

function keyPressed() {
   const logits = features.infer(video);
   if (key == "l") {
     knn.addExample(logits, "left");
     console.log("left");
   }
   else if (key == "r") {
     knn.addExample(logits, "right");
     console.log("right");
   }
   //console.log(logits.dataSync())

   else if (key == "u") {
     knn.addExample(logits, "up");
     console.log("up");
   }

  else if (key == "d") {
     knn.addExample(logits, "down");
     console.log("down");
   }
 else if (key == "s") {
   save(knn, 'someModel.json');
   //knn.load('someModel.json');
   console.log("s");
 }

}

// function mousePressed() {
//   const logits = features.infer(video);




function draw() {
  //background(0);
     image(video, 0, 0);
     // if (!ready && knn.labelP() > 0) {
     // goClassify();
     // ready = true;
 }


// // Temporary save code until ml5 version 0.2.2
// const save = (knn, name) => {
//   const dataset = knn.knnClassifier.getClassifierDataset();
//   if (knn.mapStringToIndex.length > 0) {
//     Object.keys(dataset).forEach(key => {
//       if (knn.mapStringToIndex[key]) {
//         dataset[key].label = knn.mapStringToIndex[key];
//       }
//     });
//   }
//   const tensors = Object.keys(dataset).map(key => {
//     const t = dataset[key];
//     if (t) {
//       return t.dataSync();
//     }
//     return null;
//   });
//   let fileName = 'someModel.json';
//   if (name) {
//     fileName = name.endsWith('.json') ? name : `${name}.json`;
//   }
//   saveFile(fileName, JSON.stringify({ dataset, tensors }));
// };
//
// const saveFile = (name, data) => {
//   const downloadElt = document.createElement('a');
//   const blob = new Blob([data], { type: 'octet/stream' });
//   const url = URL.createObjectURL(blob);
//   downloadElt.setAttribute('href', url);
//   downloadElt.setAttribute('download', name);
//   downloadElt.style.display = 'none';
//   document.body.appendChild(downloadElt);
//   downloadElt.click();
//   document.body.removeChild(downloadElt);
//   URL.revokeObjectURL(url);
// };
