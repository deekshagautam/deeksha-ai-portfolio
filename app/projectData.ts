export type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  problem: string;
  build: string;
  result: string;
  stack: string[];
  pipeline: string[];
  evidence: { value: string; label: string }[];
  repo?: string;
  access: "Public repository" | "Portfolio demo" | "Enterprise case study" | "Academic analysis";
};

export const projects: Project[] = [
  {
    id: "hybrid-ai-gateway",
    number: "01",
    title: "Hybrid AI Gateway",
    type: "LLM systems engineering",
    year: "2026",
    summary: "A privacy-aware gateway that routes requests between a local model and a cloud model using sensitivity, task type, complexity, and cloud-permission signals.",
    problem: "Cloud-only AI can expose sensitive context; local-only AI can struggle with demanding reasoning. The system needed to select the right execution path without making privacy a soft preference.",
    build: "A deterministic routing layer, privacy hard gate, local Gemma 3 execution through Ollama, cloud GPT-OSS execution through GroqCloud, structured outputs, fallback handling, Docker support, and automated evaluation.",
    result: "106 automated tests passing, 7/7 end-to-end evaluation cases passing, Docker verified, GitHub Actions CI green, and privacy routing validated.",
    stack: ["Python", "FastAPI", "Ollama", "Gemma 3", "Groq", "GPT-OSS", "Pytest", "Docker", "GitHub Actions"],
    pipeline: ["Classify request", "Apply privacy gate", "Select model path", "Validate or fall back"],
    evidence: [{ value: "106", label: "automated tests" }, { value: "7 / 7", label: "end-to-end cases" }, { value: "CI", label: "passing" }],
    repo: "https://github.com/deekshagautam/Hybrid-AI-Gateway",
    access: "Public repository",
  },
  {
    id: "local-vs-cloud-ai-lab",
    number: "02",
    title: "Local vs Cloud AI Lab",
    type: "LLM benchmarking",
    year: "2026",
    summary: "A practical benchmark comparing Gemma 3 4B running locally through Ollama with GPT-OSS 120B running through GroqCloud.",
    problem: "Determine when a small local model is sufficient and when a larger cloud model is worth using across privacy, cost, internet dependency, output reliability, reasoning, and latency.",
    build: "A V1 benchmark of 34 model requests across instruction following and structured extraction, grounded QA and abstention, and reasoning, with JSON test cases, custom automated graders, cost analysis, and combined result reporting.",
    result: "V1 complete. Gemma 3 4B reached 90% grounded-QA accuracy and 80% reasoning correctness; GPT-OSS 120B reached 100% on both. Median latency was 0.92 seconds locally and 0.48 seconds in the cloud environment tested.",
    stack: ["Python", "Ollama", "Gemma 3 4B", "GroqCloud", "GPT-OSS 120B", "CSV", "JSON", "Automated graders"],
    pipeline: ["Load JSON cases", "Run local + cloud models", "Grade outputs", "Aggregate results"],
    evidence: [{ value: "34", label: "model requests" }, { value: "90%", label: "local grounded QA" }, { value: "100%", label: "cloud grounded QA" }],
    repo: "https://github.com/deekshagautam/Local-vs-cloud-AI-lab",
    access: "Public repository",
  },
  {
    id: "pet-thought-generator",
    number: "03",
    title: "Pet Thought Generator",
    type: "Generative AI application",
    year: "2026",
    summary: "An interactive GenAI application that converts pet context and a configurable chaos score into a generated inner monologue.",
    problem: "Turn a direct model call into a usable product flow with structured user controls, prompt construction, response rendering, and protected credentials.",
    build: "A Streamlit interface, dynamic prompt orchestration, Google Gemini API integration, controllable generation through a chaos score, and environment-based secret management.",
    result: "A working end-to-end LLM application that connects structured UI input to model inference and presents the response in a browser.",
    stack: ["Python", "Streamlit", "Google Gemini API", "Prompt orchestration", "Environment variables"],
    pipeline: ["Collect pet context", "Apply chaos control", "Construct prompt", "Render model response"],
    evidence: [{ value: "Gemini", label: "model API" }, { value: "Streamlit", label: "interactive UI" }, { value: ".env", label: "secret isolation" }],
    repo: "https://github.com/deekshagautam/Pet-thought-generator",
    access: "Public repository",
  },
  {
    id: "mental-health-analysis",
    number: "04",
    title: "Youth Mental Health Analysis",
    type: "Statistical learning",
    year: "Georgia Tech",
    summary: "An adjusted logistic-regression study of screen behavior, physical activity, and mental-health risk using the 2023 National YRBS.",
    problem: "Estimate whether frequent social-media use was associated with mental-health risk after accounting for multiple behavioral and demographic predictors.",
    build: "Complete-case data preparation, exploratory analysis, adjusted logistic regression, odds ratios, confidence intervals, ROC/AUC, confusion matrix, VIF, and calibration assessment.",
    result: "Analyzed 9,648 records. Mental-health risk was 24.0% among non-frequent social-media users and 32.6% among frequent users; the unadjusted association was not statistically significant (OR 1.1118, 95% CI 0.9811–1.2599, p=0.0969).",
    stack: ["Python", "Statistical learning", "Logistic regression", "ROC/AUC", "VIF", "Calibration", "Data visualization"],
    pipeline: ["Prepare complete cases", "Define exposure + outcome", "Fit logistic model", "Diagnose + interpret"],
    evidence: [{ value: "9,648", label: "analysis records" }, { value: "1.1118", label: "unadjusted odds ratio" }, { value: "0.0969", label: "p-value" }],
    access: "Academic analysis",
  },
];
