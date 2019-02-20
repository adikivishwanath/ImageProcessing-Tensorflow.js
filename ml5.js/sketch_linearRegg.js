let nn;
let model;

let training_data = [{
    inputs: [0, 0],
    outputs: [0]
},

{
    inputs: [1, 0],
    outputs: [1]
},

{
      inputs: [1, 0],
      outputs: [1]
},
{
      inputs: [1, 0],
      outputs: [1]
},

];

function setup() {
  createCanvas(400, 400);
  nn = new NeuralNetworks(2, 4, 1);

  model = tf.sequential();
  let hidden = tf.layers.dense({
    inputshape: [2],
    units: 2,
    activation: 'sigmoid'
  });

  model.add(hidden);
  model.add(output);

}
