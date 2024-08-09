# 🧠 TextRazor API

## Overview

The **TextRazor API** provides powerful text analysis capabilities, allowing developers to extract insights and data from text. This API enables users to perform tasks such as entity extraction, sentiment analysis, and language detection, making it a valuable tool for applications that need to understand and process textual data.

## Features

- **Entity Extraction**: Identify and extract entities such as people, places, organizations, and more from text.
- **Topic Extraction**: Automatically categorize and label text based on topics and themes.
- **Sentiment Analysis**: Analyze the sentiment expressed in the text, determining whether it is positive, negative, or neutral.
- **Language Detection**: Detect the language of the input text.
- **Customizable**: Tailor the extraction and analysis to specific needs using custom configurations.

## Getting Started

### Prerequisites

- **API Key**: You will need an API key to access the TextRazor API. You can obtain an API key by [signing up](https://www.textrazor.com/) on the TextRazor website.

### Installation

To use the TextRazor API in a web application, you can make HTTP requests to the API endpoint directly. Here’s an example of how to set it up in a basic HTML/JavaScript application:

1. **Obtain Your API Key**: After signing up, you will receive an API key.

2. **Make API Requests**: Use the API key to authenticate your requests to the TextRazor API endpoint (`https://api.textrazor.com/`). 

3. **Sample Request**:
   ```bash
   curl -X POST https://api.textrazor.com/ \
        -H 'x-textrazor-key: YOUR_API_KEY' \
        -d 'text=Your sample text here&extractors=entities,topics'
### Contributor
### Amrutha Pariprolu