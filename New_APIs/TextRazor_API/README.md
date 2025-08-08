# TextRazor API Integration

## Description

This API integration provides natural language processing capabilities using TextRazor's powerful NLP service. It offers entity extraction, sentiment analysis, topic classification, and relationship extraction from text documents. The application features a clean HTML/CSS/JavaScript frontend for interactive text analysis and a Node.js backend for API integration.

## Features

1. **Entity Extraction** - Identify and extract entities (people, places, organizations, etc.) from text
2. **Sentiment Analysis** - Analyze the emotional tone and sentiment of text content
3. **Topic Classification** - Automatically categorize text into relevant topics
4. **Relationship Extraction** - Discover relationships between entities in the text
5. **Language Detection** - Automatically detect the language of input text
6. **Interactive Web Interface** - User-friendly HTML/CSS/JavaScript frontend for text analysis

## Requirements

-   Node.js (v14 or higher)
-   npm or yarn
-   TextRazor API key (free tier available)
-   Modern web browser

## Installation

### 1. Clone the Repository:

```bash
git clone <repository-url>
cd TextRazor_API
```

### 2. Install Server Dependencies:

```bash
cd server
npm install
```

### 3. Setup Environment Variables:

Create a `.env` file in the server directory:

```env
TEXTRAZOR_API_KEY=your_textrazor_api_key_here
PORT=5000
```

### 4. Get TextRazor API Key:

1. Visit [TextRazor](https://www.textrazor.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env` file

## Usage

### Start the Server:

```bash
cd server
npm start
```

### Access the Application:

The server serves both the API and the web interface:

-   **Web Interface**: Open your browser and go to `http://localhost:5000`
-   **API Endpoints**: Available at `http://localhost:5000/api/`

Alternatively, you can directly open the HTML file:

```bash
# Navigate to server/public and open index.html in your browser
cd server/public
# Open index.html in your default browser (double-click or right-click -> Open with -> Browser)
```

## API Endpoints

### 1. Analyze Text

```http
POST /api/analyze
Content-Type: application/json

{
  "text": "Your text to analyze here",
  "extractors": ["entities", "sentiment", "topics", "relations", "language"]
}
```

### 2. Extract Entities Only

```http
POST /api/entities
Content-Type: application/json

{
  "text": "Your text here"
}
```

### 3. Sentiment Analysis Only

```http
POST /api/sentiment
Content-Type: application/json

{
  "text": "Your text here"
}
```

### 4. Topic Classification

```http
POST /api/topics
Content-Type: application/json

{
  "text": "Your text here"
}
```

### 5. Language Detection

```http
POST /api/language
Content-Type: application/json

{
  "text": "Your text here"
}
```

## Example Response

### Entity Extraction Response:

```json
{
    "success": true,
    "entities": [
        {
            "id": "Apple Inc.",
            "type": "Company",
            "confidence": 0.95,
            "relevanceScore": 0.8,
            "matchedText": "Apple"
        }
    ],
    "sentiment": {
        "score": 0.2,
        "label": "positive"
    },
    "topics": [
        {
            "id": "Technology",
            "score": 0.85
        }
    ]
}
```

### Language Detection Response:

```json
{
    "success": true,
    "language": {
        "code": "eng",
        "isReliable": true
    },
    "metadata": {
        "textLength": 150
    }
}
```

## Technology Stack

-   **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
-   **Backend**: Node.js, Express.js
-   **API**: TextRazor NLP API
-   **HTTP Client**: Fetch API (built-in)

## Features Demo

1. **Text Input**: Large textarea for entering text to analyze with auto-resize functionality
2. **Analysis Options**: Checkboxes to select which analysis to perform (entities, sentiment, topics, relations, language)
3. **Results Display**: Organized sections showing entities, sentiment, topics, relationships, and language detection
4. **Visual Indicators**: Color-coded sentiment results and confidence scores
5. **Export Results**: Download analysis results as JSON file
6. **Responsive Design**: Works on desktop, tablet, and mobile devices
7. **Real-time Feedback**: Loading states and error handling
8. **Sample Texts**: Pre-loaded example texts for quick testing

## Notes

-   Free TextRazor account includes 500 requests per day
-   Ensure your API key is kept secure and not committed to version control
-   The application handles various text formats and languages
-   Error handling is implemented for API failures and network issues
-   The server serves both API endpoints and the web interface on the same port

## Contributing

Please follow the project's contributing guidelines and ensure all code is properly tested before submitting pull requests.

## License

This project is licensed under the MIT License.

## Project Structure

```
TextRazor_API/
├── README.md
├── PROJECT_SUMMARY.md
└── server/
    ├── package.json
    ├── package-lock.json
    ├── server.js
    ├── .env.example
    ├── .env
    ├── node_modules/
    ├── routes/
    │   └── textrazor.js
    └── public/
        ├── index.html
        ├── styles.css
        └── script.js
```
