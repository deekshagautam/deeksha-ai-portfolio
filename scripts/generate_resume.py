from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "Deeksha_Gautam_AI_Resume.pdf"
PAGE_W, PAGE_H = A4
INK = HexColor("#111329")
VIOLET = HexColor("#7057FF")
MUTED = HexColor("#555766")
LINE = HexColor("#D8D6D0")


def wrap(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_lines(pdf: canvas.Canvas, lines: list[str], x: float, y: float, size: float = 8.2, leading: float = 10.5, color=MUTED, font: str = "Helvetica") -> float:
    pdf.setFont(font, size)
    pdf.setFillColor(color)
    for line in lines:
        pdf.drawString(x, y, line)
        y -= leading
    return y


def draw_bullet(pdf: canvas.Canvas, text: str, x: float, y: float, width: float) -> float:
    lines = wrap(text, "Helvetica", 8.6, width - 12)
    pdf.setFillColor(VIOLET)
    pdf.circle(x + 2.2, y + 2.5, 1.4, fill=1, stroke=0)
    return draw_lines(pdf, lines, x + 10, y, size=8.6, leading=11.2)


def section(pdf: canvas.Canvas, number: str, title: str, y: float) -> float:
    pdf.setStrokeColor(LINE)
    pdf.line(36, y + 7, PAGE_W - 36, y + 7)
    pdf.setFillColor(VIOLET)
    pdf.setFont("Helvetica-Bold", 7.2)
    pdf.drawString(36, y - 4, number)
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 11)
    pdf.drawString(58, y - 4, title.upper())
    return y - 21


def role(pdf: canvas.Canvas, title: str, org: str, dates: str, y: float) -> float:
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 9.8)
    pdf.drawString(36, y, title)
    title_w = stringWidth(title, "Helvetica-Bold", 9.8)
    pdf.setFillColor(VIOLET)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(42 + title_w, y, f"|  {org}")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica-Oblique", 8.4)
    pdf.drawRightString(PAGE_W - 36, y, dates)
    return y - 15


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Deeksha Gautam - AI Engineering Resume")
    pdf.setAuthor("Deeksha Gautam")

    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(36, PAGE_H - 48, "DEEKSHA GAUTAM")
    pdf.setFillColor(VIOLET)
    pdf.setFont("Helvetica-Bold", 9.4)
    pdf.drawString(36, PAGE_H - 65, "SOFTWARE ENGINEER - APPLIED AI & LLM INTEGRATIONS")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 8.1)
    pdf.drawRightString(PAGE_W - 36, PAGE_H - 47, "Pune, India  |  (+91) 9971077462")
    pdf.drawRightString(PAGE_W - 36, PAGE_H - 60, "gautamdeeksha7098@gmail.com")
    pdf.drawRightString(PAGE_W - 36, PAGE_H - 73, "github.com/deekshagautam")
    pdf.setStrokeColor(VIOLET)
    pdf.setLineWidth(2)
    pdf.line(36, PAGE_H - 84, PAGE_W - 36, PAGE_H - 84)

    y = PAGE_H - 102
    summary = (
        "Software engineer with 3+ years of enterprise experience, now focused on turning existing language models into reliable AI solutions. "
        "Experienced in LLM routing, evaluation, privacy controls, backend APIs, workflow automation, CI/CD, and production delivery."
    )
    y = draw_lines(pdf, wrap(summary, "Helvetica", 9.1, PAGE_W - 72), 36, y, size=9.1, leading=12.2, color=INK)
    y -= 9

    y = section(pdf, "01", "Experience", y)
    y = role(pdf, "Technology Analyst II", "Citi", "2023 - Present", y)
    bullets = [
        "Built and modernized investment-platform services used across North America, including a Kafka-powered direct-placement platform that increased client growth by 47% and activation by 30%.",
        "Automated a rules-driven three-level approval workflow using Salesforce data, reducing end-to-end processing time by 78% across the NAM region.",
        "Raised automated test coverage from 32% to 95%, above the 80% engineering standard, and helped modernize approximately 35 Spring Boot services.",
        "Migrated delivery workflows from Jenkins and Bitbucket to GitHub and Harness with Maven, SonarQube, and OpenShift; recognized with Citi's Platinum Award.",
    ]
    for item in bullets:
        y = draw_bullet(pdf, item, 40, y, PAGE_W - 80) - 2
    y -= 2
    y = role(pdf, "Technology Analyst", "Citi", "2022 - 2023", y)
    y = draw_bullet(pdf, "Delivered the TradeLink reporting suite for 50+ users, reducing manual effort by 65% and earning a Silver Award.", 40, y, PAGE_W - 80)
    y -= 9

    y = section(pdf, "02", "Applied AI Projects", y)
    y = role(pdf, "Hybrid AI Gateway", "Personal Project", "2026", y)
    y = draw_bullet(pdf, "Built a privacy-aware local/cloud LLM router using Gemma 3 through Ollama and GPT-OSS through GroqCloud, with structured routing, fallbacks, evaluation suites, Docker, and GitHub Actions.", 40, y, PAGE_W - 80)
    y = draw_bullet(pdf, "Validated 106 automated tests and 7/7 end-to-end evaluation cases, including privacy hard-gate behavior and live model execution.", 40, y - 1, PAGE_W - 80)
    y -= 2
    y = role(pdf, "Pet Thought Generator", "Personal Project", "2026", y)
    y = draw_bullet(pdf, "Created a working Streamlit GenAI application using Python, structured user inputs, prompt construction, Gemini API integration, and environment-based secret handling.", 40, y, PAGE_W - 80)
    y -= 8

    y = section(pdf, "03", "Education", y)
    y = role(pdf, "MS in Analytics", "Georgia Institute of Technology", "2025 - 2027 (expected)", y)
    y = draw_lines(pdf, ["Applied computing, analytics modeling, statistical learning, and business."], 36, y, size=8.5, leading=10.5)
    y -= 2
    y = role(pdf, "B.Tech in Computer Science", "IGDTUW", "2018 - 2022", y)
    y -= 7

    y = section(pdf, "04", "Technical Toolkit", y)
    skill_lines = [
        "AI & LLM: OpenAI/GPT, Gemini API, Ollama, Llama, Gemma, Mistral, GroqCloud, prompt design, LLM evaluation",
        "Engineering: Python, Java, SQL, Spring Boot, REST APIs, Kafka, PySpark, MongoDB, Salesforce",
        "Delivery: GitHub, Git, Bitbucket, Jenkins, Harness, Maven, SonarQube, Docker, OpenShift, JUnit",
    ]
    wrapped_skills = [line for item in skill_lines for line in wrap(item, "Helvetica", 8.4, PAGE_W - 72)]
    y = draw_lines(pdf, wrapped_skills, 36, y, size=8.4, leading=11.2, color=INK)

    pdf.setStrokeColor(LINE)
    pdf.line(36, 30, PAGE_W - 36, 30)
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 6.8)
    pdf.drawString(36, 18, "Portfolio: deekshagautam.github.io/deeksha-ai-portfolio")
    pdf.drawRightString(PAGE_W - 36, 18, "GitHub: github.com/deekshagautam")
    pdf.save()


if __name__ == "__main__":
    build()
