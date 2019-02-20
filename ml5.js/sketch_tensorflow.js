
  //frameRate(1);

function draw() {
  const values = [];
  for (let i = 0; i < 150000; i++) {
    values[i] = Math.floor(Math.random() * 1000 + 1);

  }
const shape = [300, 500];

const test = tf.tensor2d(values , shape);
test.dispose();
tf.tidy(() => {
  //const shapeB = [5,3];
  const a = tf.tensor(values , shape);
  const b = tf.tensor(values , shape);
  const b_t = b.transpose();
  //const c = a.matMul(b_t);
  //console.log('hello');
  //console.log(c.print());
});

//a.dispose();
//b.dispose();
//c.dispose();
//b_t.dispose();

//console.log(tf.memory().numTensors);
console.log(tf.memory().numTensors);

//a.print();
//b.print();
//c.print();
}

//const vtense = tf.variable(tense);

//console.log(vtense);

//const data = tf.tensor([1,2,3,4,120,100.78,50,80] , [2,2,2] , 'int32')
//tense.print();
//console.log(tense.dataSync());
//console.log(tense.get(0,1,4));
//console.log(data);
