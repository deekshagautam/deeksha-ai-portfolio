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
    stack: ["Python", "Ollama", "Gemma 3", "GroqCloud", "GPT-OSS", "Docker", "GitHub Actions"],
    repo: "https://github.com/deekshagautam/local-vs-cloud-ai-lab",
    access: "Public repository",
  },
  {
    id: "pet-thought-generator",
    number: "02",
    title: "Pet Thought Generator",
    type: "Generative AI application",
    year: "2026",
    summary: "A small, playful product that turns a pet's mood and situation into an expressive inner monologue.",
    problem: "Learn the complete loop of turning user input into a simple, usable LLM experience—not merely calling an API from a script.",
    build: "A Streamlit interface, structured inputs, prompt construction, Gemini API integration, response presentation, and environment-based secret handling.",
    result: "A working end-to-end GenAI app and a reusable baseline for larger agentic interfaces.",
    stack: ["Python", "Streamlit", "Gemini API", "Prompt design"],
    access: "Portfolio demo",
  },
  {
    id: "approval-engine",
    number: "03",
    title: "Multi-level Approval Engine",
    type: "Enterprise workflow automation",
    year: "Citi",
    summary: "A rules-driven approval workflow that moves a North American fund-discount request through three dynamically selected approvers.",
    problem: "Banker requests moved through a slow manual approval process, with the next approver determined by business matrices and Salesforce data.",
    build: "Automated approver retrieval, matrix-based decision logic, staged hand-offs, and integration with the existing enterprise service landscape.",
    result: "Reduced end-to-end processing time by 78% across the NAM region.",
    stack: ["Java", "Spring Boot", "Salesforce", "REST APIs", "Enterprise workflows"],
    access: "Enterprise case study",
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
    result: "A reproducible analysis on 9,648 records with model diagnostics and a careful interpretation of statistical significance versus practical risk.",
    stack: ["Python", "Statistics", "Logistic regression", "ROC/AUC", "Data visualization"],
    access: "Academic analysis",
  },
];
