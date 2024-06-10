const express = require('express')
const { sampleData } = require('./data.js');

console.log("Server will start running once the model gets train");

const app = express()
app.use(express.json())

class LinearRegression {
    constructor(learningRate = 0.01, epochs = 1000) {
      this.learningRate = learningRate;
      this.epochs = epochs;
      this.weights = null;
      this.bias = 0;
    }
  
    train(X, y) {
      const m = X.length;
      const n = X[0].length;
      this.weights = new Array(n).fill(0);
      
      for (let epoch = 0; epoch < this.epochs; epoch++) {
        let predictions = X.map((row, i) => this.predictSingle(row));
        let errors = predictions.map((pred, i) => pred - y[i]);
  
        // Update weights and bias
        for (let j = 0; j < n; j++) {
          let gradient = errors.reduce((sum, err, i) => sum + err * X[i][j], 0) / m;
          this.weights[j] -= this.learningRate * gradient;
        }
  
        let biasGradient = errors.reduce((sum, err) => sum + err, 0) / m;
        this.bias -= this.learningRate * biasGradient;
      }
    }
  
    predictSingle(row) {
      let prediction = row.reduce((sum, value, i) => sum + value * this.weights[i], this.bias);
      return prediction;
    }
  
    predict(X) {
      return X.map(row => this.predictSingle(row));
    }
  }
  
  function preprocessData(data) {
    // Normalize numerical data (this is a simple example, real preprocessing would be more complex)
    return data.map(record => ([
      record.Age / 100,
      record.Gender === 'Male' ? 1 : 0,
      record.Tumor_Size_mm / 100,
      record.Stage === 'Stage III' ? 1 : 0,
      record.Comorbidity_Diabetes === 'Yes' ? 1 : 0,
      record.Comorbidity_Hypertension === 'Yes' ? 1 : 0,
      record.Comorbidity_Heart_Disease === 'Yes' ? 1 : 0,
      record.Performance_Status / 10,
      record.Blood_Pressure_Systolic / 200,
      record.Blood_Pressure_Diastolic / 120,
      record.Glucose_Level / 200,
      record.Smoking_Pack_Years / 50
    ]));
  }
  
  // Function to split data into training and test sets
  function splitData(data, target, testRatio) {
    const testSize = Math.floor(data.length * testRatio);
    const indices = Array.from({ length: data.length }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);
    
    const trainData = indices.slice(testSize).map(i => data[i]);
    const testData = indices.slice(0, testSize).map(i => data[i]);
    const trainTarget = indices.slice(testSize).map(i => target[i]);
    const testTarget = indices.slice(0, testSize).map(i => target[i]);
    
    return { trainData, testData, trainTarget, testTarget };
  }
  
  // Target variable
  const target = sampleData.map(record => record.Survival_Months / 100);
  
  // Preprocess the sample data
  const processedData = preprocessData(sampleData);
  
  // Split the data into training and test sets
  const { trainData, testData, trainTarget, testTarget } = splitData(processedData, target, 0.2);
  
  // Train the model
  const model = new LinearRegression();
  model.train(trainData, trainTarget);
  
  // Evaluate the model on the test set
  const testPredictions = model.predict(testData);
  const testErrors = testPredictions.map((pred, i) => pred - testTarget[i]);
  const mse = testErrors.reduce((sum, err) => sum + err * err, 0) / testErrors.length;
  console.log('Mean Squared Error on Test Set:', mse);

  const PORT = process.env.PORT||3000;

  app.listen(PORT,()=>{
    console.log("Server is running");
  })

  app.post('/predict',(request,response)=>{
    const {body} = request;
    if(!body){
      return response.status(400).send({
        msg:"Data body is required",
        sampleDataBody:{
          "age": 68,
          "gender": "Male",
          "tumorSizeMM": 81.67867748,
          "stage": "Stage III",
          "isDiabities": "Yes",
          "isHyperTension": "Yes",
          "isHeartDisease": "Yes",
          "performanceStatus": 3,
          "bloodPressureSystolic": 161,
          "bloodPressureDiastolic": 99,
          "glucoseLevel": 113.9192425,
          "smockingPacksPerYear": 17.00695611
        }
      });
    }else{
      const {
        age,
        gender,
        tumorSizeMM,
        stage,
        isDiabities,
        isHyperTension,
        isHeartDisease,
        performanceStatus,
        bloodPressureSystolic,
        bloodPressureDiastolic,
        glucoseLevel,
        smockingPacksPerYear
      } = body;
      const newSample = {
        "Age": age,
        "Gender": gender,
        "Tumor_Size_mm": tumorSizeMM,
        "Stage": stage,
        "Comorbidity_Diabetes": isDiabities,
        "Comorbidity_Hypertension": isHyperTension,
        "Comorbidity_Heart_Disease": isHeartDisease,
        "Performance_Status": performanceStatus,
        "Blood_Pressure_Systolic": bloodPressureSystolic,
        "Blood_Pressure_Diastolic": bloodPressureDiastolic,
        "Glucose_Level": glucoseLevel,
        "Smoking_Pack_Years": smockingPacksPerYear
      };
      
      const newProcessedData = preprocessData([newSample]);
      const prediction = model.predict(newProcessedData);
      console.log('Prediction (Survival Months, denormalized):', prediction[0]*100);
      return response.status(200).send({survivalMonths:prediction[0]*100});
    }
  })