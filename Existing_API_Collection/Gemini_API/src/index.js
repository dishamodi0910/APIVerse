import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace 'YOUR_API_KEY' with your actual API key
const genAI = new GoogleGenerativeAI('YOUR_API_KEY');

document.getElementById('campaign-form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateCampaign();
});

async function generateCampaign() {
    try {
        const product = document.getElementById('product').value;
        const audience = document.getElementById('audience').value;
        const message = document.getElementById('message').value;

        const prompt = `Create a marketing campaign for a product named ${product}, targeted at ${audience}, with the key message: "${message}".`;
        console.log(prompt);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        if (result && result.response && result.response.text) {
            const text = result.response.text();
            console.log(text);
            document.getElementById('campaign-output').innerText = text;
        } else {
            throw new Error('No text content in the response');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('campaign-output').innerText = 'Error generating campaign. Please try again.';
    }
}
