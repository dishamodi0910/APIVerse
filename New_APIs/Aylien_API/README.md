# 🧠 AYLIEN Text Analysis API

## Overview

The **AYLIEN Text Analysis API** provides advanced text analysis capabilities, including entity extraction, sentiment analysis, and language detection. This API helps developers build applications that understand and interpret text data efficiently.

## Features

- **Entity Extraction**: Identify and extract entities such as people, places, and organizations from text.
- **Sentiment Analysis**: Analyze the sentiment of text to determine whether it's positive, negative, or neutral.
- **Language Detection**: Detect the language of the input text.
- **Text Classification**: Classify text into predefined categories.

## Getting Started

### Prerequisites

- **API Key**: You will need an API key to access the AYLIEN Text Analysis API. You can obtain an API key by [signing up](https://aylien.com/) on the AYLIEN website.

### Installation

To use the AYLIEN Text Analysis API in a web application, you can make HTTP requests to the API endpoint directly. Here’s an example setup:

1. **Obtain Your API Key**: After signing up, you will receive an API key.

2. **Make API Requests**: Use the API key to authenticate your requests to the AYLIEN API endpoint (`https://api.aylien.com/api/v1/`).

3. **Sample Request**:
   ```bash
   curl -X POST https://api.aylien.com/api/v1/sentiment \
        -H 'Content-Type: application/json' \
        -H 'X-AYLIEN-TextAPI-Application-Key: YOUR_API_KEY' \
        -H 'X-AYLIEN-TextAPI-Application-ID: YOUR_APP_ID' \
        -d '{"text": "Your sample text here"}'
### contributor
### Amrutha Pariprolu