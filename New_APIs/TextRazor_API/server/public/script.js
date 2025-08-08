// TextRazor NLP Analyzer - JavaScript
class TextRazorAnalyzer {
    constructor() {
        this.apiBaseUrl = "http://localhost:5000/api";
        this.currentResults = null;
        this.initializeEventListeners();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Button event listeners
        document
            .getElementById("analyzeBtn")
            .addEventListener("click", () => this.analyzeText());
        document
            .getElementById("clearBtn")
            .addEventListener("click", () => this.clearAll());
        document
            .getElementById("exportBtn")
            .addEventListener("click", () => this.exportResults());

        // Enter key support for textarea
        document
            .getElementById("textInput")
            .addEventListener("keydown", (e) => {
                if (e.ctrlKey && e.key === "Enter") {
                    this.analyzeText();
                }
            });

        // Auto-resize textarea
        const textarea = document.getElementById("textInput");
        textarea.addEventListener("input", () => {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        });
    }

    // Main analysis function
    async analyzeText() {
        const text = document.getElementById("textInput").value.trim();

        if (!text) {
            this.showError("Please enter some text to analyze.");
            return;
        }

        if (text.length > 200000) {
            this.showError(
                "Text is too long. Maximum 200,000 characters allowed."
            );
            return;
        }

        // Get selected extractors
        const extractors = this.getSelectedExtractors();
        if (extractors.length === 0) {
            this.showError("Please select at least one analysis option.");
            return;
        }

        try {
            this.showLoading();
            this.setButtonState(true);

            const response = await fetch(`${this.apiBaseUrl}/analyze`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: text,
                    extractors: extractors,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Analysis failed");
            }

            if (result.success) {
                this.currentResults = result;
                this.displayResults(result);
            } else {
                throw new Error(result.message || "Analysis failed");
            }
        } catch (error) {
            console.error("Analysis error:", error);
            this.showError(
                error.message || "Failed to analyze text. Please try again."
            );
        } finally {
            this.setButtonState(false);
        }
    }

    // Get selected analysis extractors
    getSelectedExtractors() {
        const extractors = [];
        if (document.getElementById("entities").checked)
            extractors.push("entities");
        if (document.getElementById("sentiment").checked)
            extractors.push("sentiment");
        if (document.getElementById("topics").checked)
            extractors.push("topics");
        if (document.getElementById("relations").checked)
            extractors.push("relations");
        if (document.getElementById("language").checked)
            extractors.push("language");
        return extractors;
    }

    // Display analysis results
    displayResults(result) {
        this.hideAllStates();
        document.getElementById("resultsDisplay").classList.remove("hidden");

        const { data, metadata } = result;

        // Display sentiment analysis
        if (data.sentiment && document.getElementById("sentiment").checked) {
            this.displaySentiment(data.sentiment);
            document
                .getElementById("sentimentResults")
                .classList.remove("hidden");
        } else {
            document.getElementById("sentimentResults").classList.add("hidden");
        }

        // Display entities
        if (data.entities && document.getElementById("entities").checked) {
            this.displayEntities(data.entities);
            document.getElementById("entityResults").classList.remove("hidden");
        } else {
            document.getElementById("entityResults").classList.add("hidden");
        }

        // Display topics
        if (data.topics && document.getElementById("topics").checked) {
            this.displayTopics(data.topics);
            document.getElementById("topicResults").classList.remove("hidden");
        } else {
            document.getElementById("topicResults").classList.add("hidden");
        }

        // Display relations
        if (data.relations && document.getElementById("relations").checked) {
            this.displayRelations(data.relations);
            document
                .getElementById("relationResults")
                .classList.remove("hidden");
        } else {
            document.getElementById("relationResults").classList.add("hidden");
        }

        // Display language detection
        if (data.language && document.getElementById("language").checked) {
            this.displayLanguage(data.language, data.languageIsReliable);
            document
                .getElementById("languageResults")
                .classList.remove("hidden");
        } else {
            document.getElementById("languageResults").classList.add("hidden");
        }

        // Display metadata
        this.displayMetadata(metadata, data);
    }

    // Display sentiment analysis results
    displaySentiment(sentiment) {
        const content = document.getElementById("sentimentContent");
        const score = sentiment.score || 0;
        const label =
            score > 0.1 ? "positive" : score < -0.1 ? "negative" : "neutral";
        const confidence = Math.abs(score).toFixed(2);

        const emoji =
            label === "positive" ? "😊" : label === "negative" ? "😞" : "😐";
        const color =
            label === "positive"
                ? "sentiment-positive"
                : label === "negative"
                ? "sentiment-negative"
                : "sentiment-neutral";

        content.innerHTML = `
            <div class="sentiment-display ${color}">
                <div class="sentiment-score">${emoji}</div>
                <div>
                    <div><strong>Sentiment: ${
                        label.charAt(0).toUpperCase() + label.slice(1)
                    }</strong></div>
                    <div>Score: ${score.toFixed(
                        2
                    )} | Confidence: ${confidence}</div>
                </div>
            </div>
        `;
    }

    // Display entity extraction results
    displayEntities(entities) {
        const content = document.getElementById("entityContent");

        if (!entities || entities.length === 0) {
            content.innerHTML =
                '<p class="text-muted">No entities found in the text.</p>';
            return;
        }

        // Limit to top 10 entities
        const topEntities = entities.slice(0, 10);
        const totalEntities = entities.length;

        const entityHtml = topEntities
            .map((entity) => {
                // Handle entity.type safely - it could be a string, array, or object
                let entityType = "other";
                if (entity.type) {
                    if (typeof entity.type === "string") {
                        entityType = entity.type.toLowerCase();
                    } else if (
                        Array.isArray(entity.type) &&
                        entity.type.length > 0
                    ) {
                        entityType = String(entity.type[0]).toLowerCase();
                    } else {
                        entityType = String(entity.type).toLowerCase();
                    }
                }
                const typeClass = this.getEntityTypeClass(entityType);
                const confidence = entity.confidenceScore
                    ? (entity.confidenceScore * 100).toFixed(1)
                    : "N/A";

                return `
                <div class="entity-tag ${typeClass}" title="Type: ${
                    entity.type
                        ? typeof entity.type === "string"
                            ? entity.type
                            : Array.isArray(entity.type)
                            ? entity.type[0]
                            : String(entity.type)
                        : "Unknown"
                } | Confidence: ${confidence}%">
                    <div><strong>${
                        entity.entityId || entity.matchedText || "Unknown"
                    }</strong></div>
                    <div style="font-size: 0.8em; opacity: 0.8;">${
                        entity.type
                            ? typeof entity.type === "string"
                                ? entity.type
                                : Array.isArray(entity.type)
                                ? entity.type[0]
                                : String(entity.type)
                            : "Unknown"
                    }</div>
                </div>
            `;
            })
            .join("");

        content.innerHTML = `
            <div class="entity-grid">
                ${entityHtml}
            </div>
            <p style="font-size: 0.9em; color: #6c757d; margin-top: 10px;">
                Showing top ${topEntities.length} of ${totalEntities} ${
            totalEntities === 1 ? "entity" : "entities"
        }${totalEntities > 10 ? " (top 10 displayed)" : ""}
            </p>
        `;
    }

    // Display topic classification results
    displayTopics(topics) {
        const content = document.getElementById("topicContent");

        if (!topics || topics.length === 0) {
            content.innerHTML =
                '<p class="text-muted">No topics identified in the text.</p>';
            return;
        }

        // Limit to top 10 topics
        const topTopics = topics.slice(0, 10);
        const totalTopics = topics.length;

        const topicHtml = topTopics
            .map((topic) => {
                const score = topic.score
                    ? (topic.score * 100).toFixed(1)
                    : "N/A";
                return `
                <div class="topic-tag" title="Relevance: ${score}%">
                    ${topic.label || topic.id || "Unknown Topic"} (${score}%)
                </div>
            `;
            })
            .join("");

        content.innerHTML = `
            <div class="topic-list">
                ${topicHtml}
            </div>
            <p style="font-size: 0.9em; color: #6c757d; margin-top: 10px;">
                Showing top ${topTopics.length} of ${totalTopics} ${
            totalTopics === 1 ? "topic" : "topics"
        }${totalTopics > 10 ? " (top 10 displayed)" : ""}
            </p>
        `;
    }

    // Display relationship extraction results
    displayRelations(relations) {
        const content = document.getElementById("relationContent");

        if (!relations || relations.length === 0) {
            content.innerHTML =
                '<p class="text-muted">No relationships found in the text.</p>';
            return;
        }

        // Limit to top 5 relationships
        const topRelations = relations.slice(0, 5);
        const totalRelations = relations.length;

        const relationHtml = topRelations
            .map((relation, index) => {
                return `
                <div style="background: #f8f9fa; padding: 10px; margin: 5px 0; border-radius: 5px; border-left: 3px solid #667eea;">
                    <strong>Relation ${index + 1}:</strong> ${
                    relation.predicate || "Unknown relation"
                }
                    <br><small>Subject: ${
                        relation.subject || "N/A"
                    } → Object: ${relation.object || "N/A"}</small>
                </div>
            `;
            })
            .join("");

        content.innerHTML = `
            ${relationHtml}
            <p style="font-size: 0.9em; color: #6c757d; margin-top: 10px;">
                Showing top ${topRelations.length} of ${totalRelations} ${
            totalRelations === 1 ? "relationship" : "relationships"
        }${totalRelations > 5 ? " (top 5 displayed)" : ""}
            </p>
        `;
    }

    // Display language detection results
    displayLanguage(language, isReliable) {
        const content = document.getElementById("languageContent");

        const languageNames = {
            eng: "English",
            spa: "Spanish",
            fra: "French",
            deu: "German",
            ita: "Italian",
            por: "Portuguese",
            rus: "Russian",
            chi: "Chinese",
            jpn: "Japanese",
            kor: "Korean",
            ara: "Arabic",
            hin: "Hindi",
        };

        const languageName = languageNames[language] || language || "Unknown";
        const reliabilityClass = isReliable
            ? "sentiment-positive"
            : "sentiment-neutral";
        const reliabilityText = isReliable
            ? "High Confidence"
            : "Low Confidence";
        const reliabilityIcon = isReliable ? "✅" : "⚠️";

        content.innerHTML = `
            <div class="sentiment-display ${reliabilityClass}">
                <div class="sentiment-score">${reliabilityIcon}</div>
                <div>
                    <div><strong>Language: ${languageName}</strong></div>
                    <div>Code: ${language} | Confidence: ${reliabilityText}</div>
                </div>
            </div>
        `;
    }

    // Display metadata information
    displayMetadata(metadata, data) {
        const content = document.getElementById("metadataContent");

        const metadataItems = [
            {
                label: "Text Length",
                value: `${metadata.textLength || 0} characters`,
            },
            {
                label: "Processing Time",
                value: `${metadata.processingTime || 0}ms`,
            },
            { label: "Language", value: data.language || "Unknown" },
            {
                label: "Language Reliable",
                value: data.languageIsReliable ? "Yes" : "No",
            },
            {
                label: "Extractors Used",
                value: (metadata.extractors || []).join(", ") || "None",
            },
        ];

        const metadataHtml = metadataItems
            .map(
                (item) => `
            <div class="metadata-item">
                <div class="metadata-label">${item.label}</div>
                <div class="metadata-value">${item.value}</div>
            </div>
        `
            )
            .join("");

        content.innerHTML = `<div class="metadata-grid">${metadataHtml}</div>`;
    }

    // Get CSS class for entity type
    getEntityTypeClass(type) {
        const typeMap = {
            person: "person",
            organization: "organization",
            location: "location",
            date: "date",
            time: "date",
            company: "organization",
            place: "location",
        };
        return typeMap[type] || "default";
    }

    // Show loading state
    showLoading() {
        this.hideAllStates();
        document.getElementById("loadingState").classList.remove("hidden");
    }

    // Show error state
    showError(message) {
        this.hideAllStates();
        document.getElementById("errorMessage").textContent = message;
        document.getElementById("errorState").classList.remove("hidden");
    }

    // Hide all display states
    hideAllStates() {
        document.getElementById("loadingState").classList.add("hidden");
        document.getElementById("errorState").classList.add("hidden");
        document.getElementById("resultsDisplay").classList.add("hidden");
        document.getElementById("emptyState").classList.add("hidden");
    }

    // Set button disabled state
    setButtonState(disabled) {
        const analyzeBtn = document.getElementById("analyzeBtn");
        analyzeBtn.disabled = disabled;

        if (disabled) {
            analyzeBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        } else {
            analyzeBtn.innerHTML = '<i class="fas fa-search"></i> Analyze Text';
        }
    }

    // Clear all inputs and results
    clearAll() {
        document.getElementById("textInput").value = "";
        document.getElementById("textInput").style.height = "auto";
        this.currentResults = null;
        this.hideAllStates();
        document.getElementById("emptyState").classList.remove("hidden");

        // Reset checkboxes to default (all checked)
        document.getElementById("entities").checked = true;
        document.getElementById("sentiment").checked = true;
        document.getElementById("topics").checked = true;
        document.getElementById("relations").checked = true;
        document.getElementById("language").checked = true;
    }

    // Export results as JSON
    exportResults() {
        if (!this.currentResults) {
            this.showError(
                "No results to export. Please analyze some text first."
            );
            return;
        }

        const dataStr = JSON.stringify(this.currentResults, null, 2);
        const dataBlob = new Blob([dataStr], { type: "application/json" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(dataBlob);
        link.download = `textrazor-analysis-${new Date()
            .toISOString()
            .slice(0, 19)
            .replace(/:/g, "-")}.json`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const analyzer = new TextRazorAnalyzer();

    // Show empty state initially
    document.getElementById("emptyState").classList.remove("hidden");

    console.log("TextRazor NLP Analyzer initialized successfully!");
});

// Add some sample text examples
const sampleTexts = [
    "Apple Inc. is planning to release a new iPhone model next year. The company, based in Cupertino, California, has been working on innovative features. CEO Tim Cook announced this during a press conference in New York on March 15th, 2024.",
    "I absolutely love this new restaurant! The food was amazing and the service was excellent. The chef really knows how to create wonderful flavors. I would definitely recommend this place to anyone looking for a great dining experience.",
    "Climate change is one of the most pressing issues of our time. Scientists around the world are working together to find solutions. The Paris Agreement, signed in 2015, represents a global effort to combat environmental challenges.",
];

// Add sample text functionality
function addSampleText(index) {
    if (sampleTexts[index]) {
        document.getElementById("textInput").value = sampleTexts[index];
        document.getElementById("textInput").style.height = "auto";
        document.getElementById("textInput").style.height =
            document.getElementById("textInput").scrollHeight + "px";
    }
}
