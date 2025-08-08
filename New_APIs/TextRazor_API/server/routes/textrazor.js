const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// TextRazor API configuration
const TEXTRAZOR_API_URL = "https://api.textrazor.com/";
const API_KEY = process.env.TEXTRAZOR_API_KEY;

// Middleware to check API key
const checkApiKey = (req, res, next) => {
    if (!API_KEY) {
        return res.status(500).json({
            success: false,
            message: "TextRazor API key not configured",
        });
    }
    next();
};

// Helper function to make TextRazor API calls
const callTextRazorAPI = async (
    text,
    extractors = ["entities", "sentiment", "topics"]
) => {
    try {
        // Create form-encoded data
        const formData = new URLSearchParams();
        formData.append("text", text);
        formData.append("extractors", extractors.join(","));

        const response = await axios.post(TEXTRAZOR_API_URL, formData, {
            headers: {
                "X-TextRazor-Key": API_KEY,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(
            `TextRazor API error: ${
                error.response?.data?.error || error.message
            }`
        );
    }
};

// Comprehensive text analysis
router.post("/analyze", checkApiKey, async (req, res) => {
    try {
        const { text, extractors } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        if (text.length > 200000) {
            return res.status(400).json({
                success: false,
                message:
                    "Text is too long. Maximum 200,000 characters allowed.",
            });
        }

        const defaultExtractors = [
            "entities",
            "sentiment",
            "topics",
            "relations",
        ];
        const selectedExtractors = extractors || defaultExtractors;

        const result = await callTextRazorAPI(text, selectedExtractors);

        res.json({
            success: true,
            data: {
                entities: result.response?.entities || [],
                sentiment: result.response?.sentiment || null,
                topics: result.response?.topics || [],
                relations: result.response?.relations || [],
                language: result.response?.language || "unknown",
                languageIsReliable:
                    result.response?.languageIsReliable || false,
            },
            metadata: {
                textLength: text.length,
                processingTime: result.response?.processingTime || 0,
                extractors: selectedExtractors,
            },
        });
    } catch (error) {
        console.error("Analysis error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Entity extraction only
router.post("/entities", checkApiKey, async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        const result = await callTextRazorAPI(text, ["entities"]);

        res.json({
            success: true,
            entities: result.response?.entities || [],
            metadata: {
                textLength: text.length,
                entityCount: result.response?.entities?.length || 0,
            },
        });
    } catch (error) {
        console.error("Entity extraction error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Sentiment analysis only
router.post("/sentiment", checkApiKey, async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        const result = await callTextRazorAPI(text, ["sentiment"]);

        const sentiment = result.response?.sentiment || {};

        res.json({
            success: true,
            sentiment: {
                score: sentiment.score || 0,
                label:
                    sentiment.score > 0.1
                        ? "positive"
                        : sentiment.score < -0.1
                        ? "negative"
                        : "neutral",
                confidence: Math.abs(sentiment.score || 0),
            },
            metadata: {
                textLength: text.length,
            },
        });
    } catch (error) {
        console.error("Sentiment analysis error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Topic classification only
router.post("/topics", checkApiKey, async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        const result = await callTextRazorAPI(text, ["topics"]);

        res.json({
            success: true,
            topics: result.response?.topics || [],
            metadata: {
                textLength: text.length,
                topicCount: result.response?.topics?.length || 0,
            },
        });
    } catch (error) {
        console.error("Topic classification error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Relationship extraction
router.post("/relations", checkApiKey, async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        const result = await callTextRazorAPI(text, ["relations"]);

        res.json({
            success: true,
            relations: result.response?.relations || [],
            metadata: {
                textLength: text.length,
                relationCount: result.response?.relations?.length || 0,
            },
        });
    } catch (error) {
        console.error("Relationship extraction error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Language detection
router.post("/language", checkApiKey, async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }

        const result = await callTextRazorAPI(text, []);

        res.json({
            success: true,
            language: {
                code: result.response?.language || "unknown",
                isReliable: result.response?.languageIsReliable || false,
            },
            metadata: {
                textLength: text.length,
            },
        });
    } catch (error) {
        console.error("Language detection error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
