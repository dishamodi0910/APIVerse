const tags = {
    technology: [
        "javascript", "nodejs", "programming", "software", "hardware", "computers", "internet", "AI", "machine learning", "cybersecurity", "coding", "data", "cloud", "blockchain", "robotics", "automation", "gadgets", "VR", "AR", "IoT",
        "tech", "devices", "IT", "apps", "network", "digital", "online", "web", "systems", "innovation", "tools", "smartphones", "tablets", "wearables", "developers", "coding languages", "artificial intelligence", "5G", "nanotechnology", "virtual reality"
      ],
      sports: [
        "football", "soccer", "basketball", "tennis", "cricket", "baseball", "hockey", "golf", "athletics", "swimming", "olympics", "workout", "training", "rugby", "marathon", "cycling", "boxing", "wrestling", "skating", "surfing",
        "exercise", "competition", "team", "game", "match", "athlete", "sport", "league", "score", "coach", "tournament", "fitness", "gym", "outdoor activities", "indoor sports", "championship", "physical education", "extreme sports", "paralympics", "recreational sports"
      ],
      health: [
        "fitness", "nutrition", "wellness", "exercise", "diet", "mental health", "healthcare", "medicine", "workout", "yoga", "meditation", "vitamins", "therapy", "disease", "treatment", "hospital", "clinic", "doctor", "surgery", "recovery",
        "health", "care", "wellbeing", "physical", "medical", "healthy", "body", "mind", "lifestyle", "patient", "prevention", "public health", "nurses", "pharmacy", "health insurance", "nutritionist", "alternative medicine", "homeopathy", "physiotherapy", "health trends"
      ],
      entertainment: [
        "movies", "music", "games", "tv", "celebrities", "shows", "concerts", "festivals", "comedy", "theater", "drama", "albums", "streaming", "acting", "dancing", "singing", "awards", "cinema", "binge-watching", "reality tv",
        "fun", "entertain", "showbiz", "media", "series", "video", "film", "perform", "event", "stars", "celebration", "entertainment industry", "pop culture", "blockbusters", "independent films", "musical genres", "video games", "talent shows", "social media influencers", "documentaries", "animation"
      ],
      politics: [
        "election", "government", "policy", "vote", "democracy", "law", "senate", "congress", "president", "parliament", "campaign", "rights", "justice", "diplomacy", "political parties", "legislation", "debate", "minister", "reform",
        "politics", "govern", "leader", "authority", "public", "citizen", "state", "nation", "issue", "policy", "decision", "political debate", "elections", "public policy", "government affairs", "international relations", "political movements", "activism", "political scandals", "policy making", "voter education"
      ],
      science: [
        "research", "biology", "physics", "chemistry", "astronomy", "experiments", "discoveries", "space", "genetics", "environment", "geology", "innovation", "nature", "evolution", "ecology", "scientist", "laboratory", "theory", "quantum", "climate",
        "science", "study", "knowledge", "technology", "earth", "universe", "matter", "life", "test", "analysis", "fact", "scientific method", "breakthroughs", "scientific community", "space exploration", "natural sciences", "physical sciences", "biotechnology", "scientific research", "scientific publications", "research funding"
      ],
      education: [
        "learning", "teaching", "school", "university", "college", "courses", "students", "teachers", "classroom", "online learning", "homework", "exams", "scholarship", "curriculum", "education policy", "degree", "diploma", "kindergarten", "tutoring", "study",
        "education", "knowledge", "training", "lesson", "instruct", "skill", "academic", "institution", "book", "teach", "learn", "higher education", "e-learning", "adult education", "educational technology", "student life", "extracurricular activities", "educational psychology", "special education", "vocational training", "learning management systems"
      ],
      business: [
        "marketing", "finance", "investment", "economy", "startup", "entrepreneur", "sales", "corporate", "stocks", "revenue", "strategy", "management", "leadership", "commerce", "e-commerce", "merger", "acquisition", "business plan", "branding", "consulting",
        "business", "trade", "industry", "market", "company", "enterprise", "deal", "profit", "customer", "service", "commercial", "business development", "market research", "business analytics", "small business", "business growth", "financial markets", "corporate strategy", "business operations", "risk management", "business ethics"
      ],
      travel: [
        "vacation", "tourism", "flight", "hotel", "destination", "beach", "adventure", "cruise", "explore", "culture", "landmarks", "itinerary", "backpacking", "road trip", "expedition", "hiking", "camping", "sightseeing", "tour", "passport",
        "travel", "trip", "journey", "holiday", "tourist", "visit", "explore", "discover", "experience", "tourist", "getaway", "travel planning", "travel tips", "travel guides", "local cuisine", "travel agencies", "tourist attractions", "cultural experiences", "travel blogs", "international travel", "domestic travel"
      ],
      food: [
        "recipes", "cooking", "cuisine", "restaurant", "dining", "baking", "ingredients", "chef", "meal", "dessert", "gourmet", "nutrition", "diet", "vegan", "vegetarian", "snacks", "breakfast", "lunch", "dinner", "beverages",
        "food", "eat", "drink", "kitchen", "dish", "taste", "flavor", "cook", "menu", "recipe", "cater", "food trends", "culinary arts", "food culture", "home cooking", "food presentation", "cooking techniques", "food festivals", "street food", "health food", "organic food"
      ],
      fashion: [
        "clothing", "style", "trends", "designer", "runway", "outfits", "accessories", "beauty", "makeup", "models", "shopping", "wearable", "brand", "couture", "vintage", "fashion week", "skincare", "haircare", "jewelry", "footwear",
        "fashion", "wear", "apparel", "look", "design", "chic", "trend", "boutique", "glamour", "ensemble", "attire", "fashion industry", "fashion shows", "fashion blogs", "fashion designers", "fashion magazines", "seasonal fashion", "fashion trends", "personal style", "fashion accessories", "sustainable fashion"
      ],
      finance: [
        "investment", "stocks", "banking", "savings", "economy", "wealth", "portfolio", "cryptocurrency", "taxes", "budget", "loans", "interest", "market", "financial planning", "insurance", "real estate", "pension", "dividend", "bond", "fund",
        "finance", "money", "capital", "bank", "currency", "fund", "economy", "financial", "invest", "income", "cash", "financial markets", "personal finance", "financial advice", "wealth management", "investment banking", "financial services", "financial literacy", "financial technology", "financial security", "economic trends"
      ],
      literature: [
        "books", "novels", "authors", "poetry", "fiction", "non-fiction", "writing", "publishing", "literary", "readers", "stories", "prose", "manuscripts", "literary criticism", "biography", "autobiography", "classic", "short stories", "essay", "magazine",
        "literature", "read", "write", "text", "chapter", "genre", "narrative", "plot", "character", "story", "literary", "literary genres", "literary analysis", "reading habits", "literary awards", "book reviews", "writing styles", "literary festivals", "historical fiction", "contemporary literature", "literary trends"
      ],
      history: [
        "ancient", "medieval", "modern", "wars", "revolutions", "historical figures", "artifacts", "archeology", "civilizations", "colonial", "independence", "documents", "biographies", "historical events", "heritage", "museum", "renaissance", "medieval", "empire", "historian",
        "history", "past", "era", "period", "event", "chronicle", "antiquity", "historic", "memoir", "record", "timeline", "historical research", "historical documents", "historical analysis", "world history", "cultural history", "military history", "historical landmarks", "oral history", "historical preservation", "history education"
      ],
      art: [
        "painting", "sculpture", "drawing", "digital art", "photography", "exhibition", "gallery", "artist", "canvas", "illustration", "crafts", "ceramics", "mosaic", "street art", "performance art", "installation", "graphic design", "art history", "portrait", "abstract",
        "art", "create", "visual", "design", "craft", "masterpiece", "expression", "aesthetic", "sketch", "exhibit", "artwork", "fine arts", "contemporary art", "art movements", "art exhibitions", "art installations", "art techniques", "art education", "art criticism", "art therapy", "public art"
      ],
      environment: [
        "sustainability", "conservation", "climate change", "recycling", "pollution", "wildlife", "biodiversity", "renewable energy", "forestry", "ecology", "carbon footprint", "natural resources", "environmental policy", "green technology", "habitat", "ocean", "atmosphere", "earth", "environmental protection", "eco-friendly",
        "environment", "nature", "planet", "earth", "ecosystem", "green", "habitat", "conserve", "resource", "sustain", "ecological", "environmental conservation", "environmental sustainability", "green energy", "environmental activism", "environmental education", "environmental science", "environmental impact", "environmental law", "climate action", "environmental organizations"
      ]
}

module.exports = {
    tags
}