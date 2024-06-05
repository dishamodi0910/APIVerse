import express, { json } from 'express';
import { readFileSync } from 'fs';
import pkg from 'natural';
const { WordTokenizer, BayesClassifier } = pkg;
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

console.log("Model Training begin");

// Load intents
const intents = JSON.parse(readFileSync('intents.json'));

// Tokenizer and classifier
const tokenizer = new WordTokenizer();
const classifier = new BayesClassifier();

// Train the classifier with the dataset
intents.intents.forEach(intent => {
  intent.patterns.forEach(pattern => {
    classifier.addDocument(pattern, intent.tag);
  });
});

classifier.train();

// Function to get a random response
function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

app.post('/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const tokenizedMessage = tokenizer.tokenize(message.toLowerCase());
  const classification = classifier.classify(tokenizedMessage.join(' '));

  const intent = intents.intents.find(intent => intent.tag === classification);

  if (intent) {
    const response = getRandomResponse(intent.responses);
    res.json({ response });
  } else {
    res.json({ response: "I'm sorry, I don't understand that." });
  }
});

app.listen(PORT, () => {
  console.log("Model Trained");
  console.log(`Server is running on port ${PORT}`);
});