// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

net.train(trainingData, [
    log: (error) => console.log(error)
   // pgPeroid: 100
]);


//this part not  needed for training
//console.log(net.run([0, 0]));
//console.log(net.run([0, 0]));
//console.log(net.run([0, 0]));
//console.log(net.run([0, 0]));




// activate((inputWeights * inputs) + biases)

// bonus https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L233
// https://github.com/BrainJS/brain.js#options