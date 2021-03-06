
// This is the model
const model = tf.sequential();

// Create the hidden layer
// dense is a "fully connected layer"
const hidden = tf.layers.dense({
  units: 4, //number of nodes
  inputShape: [2], // input shape
  activation: 'sigmoid'
});
// Add the layer
model.add(hidden);

// create another layer
const output = tf.layers.dense({
  units: 1,
  //inputShape: [4], // here the input shape is"inferred from the previous layer"
  activation: 'sigmoid'
});
model.add(output);

//an optimizer using gradient descent
const sgdOpt = tf.train.sgd(0.1);

// I'm done coniguring the mode so compile it
model.compile({
  optimizer: sgdOpt,
  loss: tf.losses.meanSquaredError
});


const xs = tf.tensor2d([
  [0, 0],
  [0.5, 0.5],
  [1, 1]
]);

const ys = tf.tensor2d([
  [0],
  [0.5],
  [1]

]);

train().then(() => {
  console.log('training complete');
  let outputs = model.predict(xs);
  outputs.print();

});

async function train() {
  for(let i = 0; i < 1000; i++) {
const config = {
  shuffle: true,
  epochs: 10
}
    const response = await model.fit(xs, ys, config);
    console.log(response.history.loss[0]);
 }
}



//const  xs = tf.tensor2d([
  //[0.25, 0.92],
  //[0.12, 0.9],
  //[0.30, 0.96],
  //[0.86, 0.11]
//]);
