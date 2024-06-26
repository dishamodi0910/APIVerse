const textSpace = document.getElementById("textInput");
const display = document.getElementById("dispay"); 

const submit = async () => {
  try {
    const valued = textSpace.value.trim(); 

    if (!valued) {
      throw new Error("Please enter a date!");
    }

    const APIKEY = "QPdfK0kd66Tlar9ouHVyl7sYUgrLoYw2nUKnPeZ6";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${valued}`);
   

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    document.getElementById("apodTitle").textContent = data.title;
    document.getElementById("apodExplanation").textContent = data.explanation;
    document.getElementById("image").setAttribute("src", data.url);
  } catch (err) {
    console.error("Error:", err.message); 
    document.getElementById("apodTitle").textContent = "Invalid input"; 
    document.getElementById("apodExplanation").textContent = "";
    document.getElementById("image").setAttribute("src", "");
  }
};