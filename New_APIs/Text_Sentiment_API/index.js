const {dataset} = require('./data.js');
const express = require('express');
const app = express();
app.use(express.json());

console.log("Server will start running once the model gets trained");

function preprocessText(text) {
    if (typeof text !== 'string') {
        text = String(text);
    }
    return text
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z\s]/g, '') // Remove punctuation
        .split(' ') // Split into words
        .filter(word => word.length > 0); // Remove empty words
}

// Function to create vocabulary
function createVocabulary(dataset) {
    const vocabulary = new Set();
    dataset.forEach(item => {
        const words = preprocessText(item.text);
        words.forEach(word => vocabulary.add(word));
    });
    return Array.from(vocabulary);
}

// Function to convert text to vector
function textToVector(text, vocabulary) {
    const vector = new Array(vocabulary.length).fill(0);
    const words = preprocessText(text);
    words.forEach(word => {
        const index = vocabulary.indexOf(word);
        if (index !== -1) {
            vector[index] += 1;
        }
    });
    return vector;
}

const vocabulary = createVocabulary(dataset);

// Function to train Naive Bayes model
function trainNaiveBayes(dataset, vocabulary) {
    const wordCounts = {};
    const classCounts = {};
    const totalWords = {};

    // Initialize counts for each unique emotion
    dataset.forEach(item => {
        if (!wordCounts[item.emotion]) {
            wordCounts[item.emotion] = new Array(vocabulary.length).fill(0);
            classCounts[item.emotion] = 0;
            totalWords[item.emotion] = 0;
        }
    });

    dataset.forEach(item => {
        const vector = textToVector(item.text, vocabulary);
        classCounts[item.emotion]++;
        vector.forEach((count, index) => {
            wordCounts[item.emotion][index] += count;
        });
    });

    for (const emotion in wordCounts) {
        totalWords[emotion] = wordCounts[emotion].reduce((sum, count) => sum + count, 0);
    }

    return { wordCounts, classCounts, totalWords };
}

const model = trainNaiveBayes(dataset, vocabulary);

// Function to predict emotion of text
function predict(text, model, vocabulary) {
    const vector = textToVector(text, vocabulary);
    const totalDocs = Object.values(model.classCounts).reduce((sum, count) => sum + count, 0);

    const logProbabilities = {};
    for (const emotion in model.classCounts) {
        logProbabilities[emotion] = Math.log(model.classCounts[emotion] / totalDocs);
    }

    vocabulary.forEach((word, index) => {
        if (vector[index] > 0) {
            for (const emotion in model.wordCounts) {
                logProbabilities[emotion] += Math.log((model.wordCounts[emotion][index] + 1) / (model.totalWords[emotion] + vocabulary.length));
            }
        }
    });

    return Object.keys(logProbabilities).reduce((a, b) => logProbabilities[a] > logProbabilities[b] ? a : b);
}

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Running on port "+PORT);
})

app.post('/predict',(request,response)=>{
    const {body} = request;
    if(!body){
        return response.status(400).send("Data body is required");
    }else{
        const text = body.text;
        if(!text){
            return response.status(400).send("text field is required");
        }else{
            const sentiment = predict(text, model, vocabulary);
            console.log(`The sentiment of the text is: ${sentiment}`);
            return response.status(200).send({sentiment:sentiment});
        }
    }
})