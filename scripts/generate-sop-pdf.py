"""
BodyF1RST Corporate Wellness Internal SOP PDF Generator
Creates a step-by-step onboarding process document for the team
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, ListFlowable, ListItem
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from datetime import datetime

# BodyF1RST Brand Colors
ORANGE = HexColor("#EA580C")
DARK_GRAY = HexColor("#1e293b")
LIGHT_GRAY = HexColor("#f8fafc")
MEDIUM_GRAY = HexColor("#64748b")
GREEN = HexColor("#16a34a")

# Output path
OUTPUT_PATH = "c:/SafeWorkspace/repos/bodyf1rst-corporate-wellness/public/docs/BodyF1RST-Corporate-Onboarding-SOP.pdf"

def create_styles():
    """Create custom paragraph styles"""
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='DocTitle',
        parent=styles['Title'],
        fontSize=28,
        textColor=DARK_GRAY,
        alignment=TA_CENTER,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='DocSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        textColor=ORANGE,
        alignment=TA_CENTER,
        spaceAfter=30,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Section',
        parent=styles['Heading1'],
        fontSize=20,
        textColor=ORANGE,
        spaceBefore=25,
        spaceAfter=15,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='Subsection',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=DARK_GRAY,
        spaceBefore=15,
        spaceAfter=8,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='Body',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_GRAY,
        spaceBefore=4,
        spaceAfter=4,
        leading=14,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Checklist',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_GRAY,
        leftIndent=25,
        spaceBefore=3,
        spaceAfter=3,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Script',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_GRAY,
        leftIndent=15,
        rightIndent=15,
        spaceBefore=4,
        spaceAfter=4,
        fontName='Helvetica-Oblique',
        backColor=LIGHT_GRAY,
    ))

    styles.add(ParagraphStyle(
        name='Note',
        parent=styles['Normal'],
        fontSize=9,
        textColor=MEDIUM_GRAY,
        spaceBefore=8,
        spaceAfter=8,
        fontName='Helvetica-Oblique'
    ))

    styles.add(ParagraphStyle(
        name='TOCEntry',
        parent=styles['Normal'],
        fontSize=11,
        textColor=DARK_GRAY,
        spaceBefore=6,
        spaceAfter=6,
        fontName='Helvetica'
    ))

    return styles

def add_header_footer(canvas, doc):
    """Add header and footer"""
    canvas.saveState()

    # Header
    canvas.setFont('Helvetica-Bold', 9)
    canvas.setFillColor(ORANGE)
    canvas.drawString(0.75*inch, 10.7*inch, "INTERNAL DOCUMENT")
    canvas.setFont('Helvetica', 9)
    canvas.setFillColor(MEDIUM_GRAY)
    canvas.drawRightString(7.75*inch, 10.7*inch, "BodyF1RST Corporate Wellness SOP")

    # Header line
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(1)
    canvas.line(0.75*inch, 10.6*inch, 7.75*inch, 10.6*inch)

    # Footer
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MEDIUM_GRAY)
    canvas.drawCentredString(4.25*inch, 0.5*inch, f"Confidential | Page {doc.page} | Last Updated: {datetime.now().strftime('%B %Y')}")

    canvas.restoreState()

def create_cover(styles):
    """Create cover page"""
    content = []

    content.append(Spacer(1, 1.5*inch))

    # Logo
    logo_table = Table([[Paragraph("<font color='#EA580C' size='36'><b>B1</b></font>", styles['Body'])]],
                       colWidths=[1.2*inch], rowHeights=[1.2*inch])
    logo_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_GRAY),
    ]))
    content.append(logo_table)

    content.append(Spacer(1, 0.5*inch))

    content.append(Paragraph("Corporate Wellness", styles['DocTitle']))
    content.append(Paragraph("ONBOARDING SOP", styles['DocTitle']))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("Internal Standard Operating Procedures", styles['DocSubtitle']))

    content.append(Spacer(1, 1*inch))

    # Document info box
    info_data = [
        ["Document Type:", "Standard Operating Procedure"],
        ["Department:", "Sales & Customer Success"],
        ["Version:", "1.0"],
        ["Effective Date:", datetime.now().strftime("%B %d, %Y")],
        ["Classification:", "Internal / Confidential"],
    ]

    info_table = Table(info_data, colWidths=[1.8*inch, 3.5*inch])
    info_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (0, -1), DARK_GRAY),
        ('TEXTCOLOR', (1, 0), (1, -1), MEDIUM_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('ALIGN', (0, 0), (0, -1), 'RIGHT'),
        ('ALIGN', (1, 0), (1, -1), 'LEFT'),
    ]))
    content.append(info_table)

    content.append(PageBreak())
    return content

def create_toc(styles):
    """Create table of contents"""
    content = []

    content.append(Paragraph("Table of Contents", styles['Section']))

    toc_items = [
        ("1. Pre-Sales Checklist", "3"),
        ("2. Discovery Call Script", "4"),
        ("3. Proposal Presentation Guide", "6"),
        ("4. Contract Execution", "8"),
        ("5. Technical Setup", "10"),
        ("6. Launch Coordination", "12"),
        ("7. Ongoing Management", "14"),
        ("Appendix A: Email Templates", "16"),
        ("Appendix B: Contract Templates", "18"),
        ("Appendix C: FAQ for HR", "19"),
    ]

    for item, page in toc_items:
        row = Table(
            [[Paragraph(item, styles['TOCEntry']), Paragraph(page, styles['TOCEntry'])]],
            colWidths=[5.5*inch, 1*inch]
        )
        row.setStyle(TableStyle([
            ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
            ('LINEBELOW', (0, 0), (-1, 0), 0.5, HexColor("#E5E7EB")),
        ]))
        content.append(row)

    content.append(PageBreak())
    return content

def create_presales_section(styles):
    """Create pre-sales checklist section"""
    content = []

    content.append(Paragraph("1. Pre-Sales Checklist", styles['Section']))

    content.append(Paragraph(
        "Complete these steps before your first meeting with a prospect:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Company Research</b>", styles['Subsection']))
    checklist1 = [
        "Review company website and About page",
        "Check LinkedIn for employee count and demographics",
        "Search recent news/press releases",
        "Identify industry and wellness challenges",
        "Note any existing wellness programs mentioned",
    ]
    for item in checklist1:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Stakeholder Identification</b>", styles['Subsection']))
    checklist2 = [
        "Find HR Director / VP of HR name and contact",
        "Identify Benefits Manager (if separate)",
        "Note CFO/CEO for final approval discussions",
        "Check for Wellness Committee or Champion",
    ]
    for item in checklist2:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Materials Preparation</b>", styles['Subsection']))
    checklist3 = [
        "Customize proposal template with company name",
        "Prepare industry-specific talking points",
        "Calculate preliminary pricing based on employee count",
        "Prepare ROI projections using their estimated data",
        "Have case studies ready (if available)",
    ]
    for item in checklist3:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph(
        "<i>TIP: Spend at least 30 minutes researching before any call. Knowledge of their business builds credibility.</i>",
        styles['Note']
    ))

    content.append(PageBreak())
    return content

def create_discovery_section(styles):
    """Create discovery call script section"""
    content = []

    content.append(Paragraph("2. Discovery Call Script", styles['Section']))

    content.append(Paragraph(
        "Use this framework for initial discovery calls. Adapt tone and questions based on the conversation.",
        styles['Body']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Opening (2-3 minutes)</b>", styles['Subsection']))
    content.append(Paragraph(
        '"Thank you for taking the time to meet with me today. Before we dive in, I\'d love to learn more about [Company] and what prompted you to explore corporate wellness options. What\'s happening in your organization right now?"',
        styles['Script']
    ))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Pain Point Questions (10-15 minutes)</b>", styles['Subsection']))
    questions = [
        "What wellness initiatives do you currently have in place, if any?",
        "What's working well? What's not meeting expectations?",
        "What are your biggest concerns about employee health and wellbeing?",
        "How is absenteeism or turnover affecting your organization?",
        "What would success look like for a wellness program at [Company]?",
        "Who else would be involved in this decision?",
        "What's your timeline for implementing a solution?",
    ]
    for q in questions:
        content.append(Paragraph(f"• {q}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Budget Discussion (5 minutes)</b>", styles['Subsection']))
    content.append(Paragraph(
        '"Many companies we work with invest between $10-20 per employee per month for comprehensive wellness. Have you allocated budget for wellness initiatives? What range would be comfortable for your organization?"',
        styles['Script']
    ))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Solution Overview (10 minutes)</b>", styles['Subsection']))
    content.append(Paragraph(
        "Briefly explain BodyF1RST based on their stated needs. Focus on features that address their specific pain points. Don't overwhelm with every feature.",
        styles['Body']
    ))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Next Steps Close (2-3 minutes)</b>", styles['Subsection']))
    content.append(Paragraph(
        '"Based on what you\'ve shared, I think BodyF1RST could be a great fit for [Company]. My next step would be to put together a customized proposal showing exactly how we\'d approach this for your team. Would [date] work for a follow-up call to review that together?"',
        styles['Script']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph(
        "<i>IMPORTANT: Listen more than you talk. The discovery call is about understanding their needs, not selling features.</i>",
        styles['Note']
    ))

    content.append(PageBreak())
    return content

def create_proposal_section(styles):
    """Create proposal presentation section"""
    content = []

    content.append(Paragraph("3. Proposal Presentation Guide", styles['Section']))

    content.append(Paragraph("<b>Before the Call</b>", styles['Subsection']))
    checklist = [
        "Customize proposal PDF with company name and employee count",
        "Prepare screen share with proposal document",
        "Review notes from discovery call",
        "Have pricing calculator open for live adjustments",
    ]
    for item in checklist:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Presentation Flow</b>", styles['Subsection']))

    flow_data = [
        ["Slide/Section", "Time", "Key Points"],
        ["Recap Discovery", "2 min", "Summarize their goals and challenges"],
        ["The Problem", "3 min", "Industry stats that resonate with their situation"],
        ["Our Solution", "5 min", "Focus on features matching their needs"],
        ["Industry Approach", "3 min", "Show you understand their specific industry"],
        ["Pricing", "5 min", "Show comparison, explain value"],
        ["Timeline", "2 min", "Emphasize quick implementation"],
        ["Q&A", "10 min", "Answer questions, handle objections"],
    ]

    flow_table = Table(flow_data, colWidths=[1.5*inch, 0.8*inch, 4.2*inch])
    flow_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (1, 0), (1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(flow_table)

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Common Objections & Responses</b>", styles['Subsection']))

    objections = [
        ("\"It's too expensive\"",
         "\"I understand budget is a concern. Let me show you how this compares to industry rates—we're actually 40-70% below average. Plus, with the ROI from reduced absenteeism and turnover, most companies see this pay for itself.\""),
        ("\"We need to think about it\"",
         "\"Of course. What specific concerns would you like to discuss with your team? I'm happy to provide additional information or even join a call with other stakeholders.\""),
        ("\"We're not ready right now\"",
         "\"I understand. Many companies start with a pilot program of just 50-100 employees. Would that be more manageable as a starting point?\""),
        ("\"We tried wellness before and it didn't work\"",
         "\"That's valuable context. What specifically didn't work? Our platform is designed differently, with AI personalization and gamification that drives 85%+ engagement.\""),
    ]

    for objection, response in objections:
        content.append(Paragraph(f"<b>{objection}</b>", styles['Body']))
        content.append(Paragraph(response, styles['Script']))
        content.append(Spacer(1, 0.1*inch))

    content.append(PageBreak())
    return content

def create_contract_section(styles):
    """Create contract execution section"""
    content = []

    content.append(Paragraph("4. Contract Execution", styles['Section']))

    content.append(Paragraph("<b>Required Documents</b>", styles['Subsection']))

    docs_data = [
        ["Document", "Required?", "Notes"],
        ["Master Services Agreement (MSA)", "Always", "Standard terms, 12-month minimum"],
        ["Business Associate Agreement (BAA)", "If HIPAA data", "Required for health metrics"],
        ["Data Processing Agreement (DPA)", "If EU employees", "GDPR compliance"],
        ["Purchase Order", "Some companies", "Their internal requirement"],
    ]

    docs_table = Table(docs_data, colWidths=[2.5*inch, 1.2*inch, 2.8*inch])
    docs_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ORANGE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(docs_table)

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Pricing Negotiation Boundaries</b>", styles['Subsection']))
    content.append(Paragraph(
        "Use your judgment, but here are general guidelines:",
        styles['Body']
    ))

    pricing_data = [
        ["Employees", "Standard Rate", "Max Discount", "Floor Price"],
        ["1-99", "$15/mo Standard", "5%", "$14.25/mo"],
        ["100-249", "$15/mo Standard", "10%", "$13.50/mo"],
        ["250-499", "$15/mo Standard", "15%", "$12.75/mo"],
        ["500-999", "$15/mo Standard", "20%", "$12.00/mo"],
        ["1000+", "Custom Quote", "25%", "Contact leadership"],
    ]

    pricing_table = Table(pricing_data, colWidths=[1.3*inch, 1.5*inch, 1.3*inch, 1.5*inch])
    pricing_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (1, 1), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(pricing_table)

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Signature Process</b>", styles['Subsection']))
    steps = [
        "Send contract via DocuSign to primary contact",
        "CC their legal/procurement if they request",
        "Follow up within 48 hours if not signed",
        "Once signed, send welcome email within 2 hours",
        "Schedule kickoff call within 48 hours of signature",
    ]
    for i, step in enumerate(steps, 1):
        content.append(Paragraph(f"{i}. {step}", styles['Checklist']))

    content.append(PageBreak())
    return content

def create_technical_section(styles):
    """Create technical setup section"""
    content = []

    content.append(Paragraph("5. Technical Setup", styles['Section']))

    content.append(Paragraph(
        "Complete these steps in the backend after contract signing:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Organization Setup</b>", styles['Subsection']))
    org_steps = [
        "Create new Organization in admin dashboard",
        "Set organization name, logo, and branding colors",
        "Configure subscription tier and employee limit",
        "Generate organization referral code",
        "Set contract start and end dates",
    ]
    for i, step in enumerate(org_steps, 1):
        content.append(Paragraph(f"{i}. {step}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Coach Assignment</b>", styles['Subsection']))
    coach_steps = [
        "Assign primary coach based on industry expertise",
        "Brief coach on company profile and goals",
        "Ensure coach availability for launch period",
        "Set up coach introduction in welcome flow",
    ]
    for step in coach_steps:
        content.append(Paragraph(f"☐ {step}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Content Configuration</b>", styles['Subsection']))
    content_config = [
        ("Entertainment/Media", "Desk-friendly workouts, eye strain exercises, meditation"),
        ("Manufacturing/Engineering", "Safety stretches, lab ergonomics, focus techniques"),
        ("Construction", "Jobsite workouts, injury prevention, mental health"),
        ("General Office", "Standard library with desk-based options"),
    ]
    content.append(Paragraph("Select content library based on industry:", styles['Body']))
    for industry, focus in content_config:
        content.append(Paragraph(f"• <b>{industry}:</b> {focus}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Referral Code Generation</b>", styles['Subsection']))
    content.append(Paragraph(
        "Generate bulk referral codes for employee signup. Format: COMPANY-XXXX (e.g., CATFACE-2024). "
        "Provide codes to HR for distribution via their preferred channel.",
        styles['Body']
    ))

    content.append(PageBreak())
    return content

def create_launch_section(styles):
    """Create launch coordination section"""
    content = []

    content.append(Paragraph("6. Launch Coordination", styles['Section']))

    content.append(Paragraph("<b>Pre-Launch Communications</b>", styles['Subsection']))
    content.append(Paragraph(
        "Work with HR to prepare employee communications:",
        styles['Body']
    ))

    comms = [
        "Announcement email (send 1 week before launch)",
        "App download instructions (iOS/Android links)",
        "Referral code and signup process",
        "FAQ document for common questions",
        "Lunch-and-learn scheduling (if requested)",
    ]
    for item in comms:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Launch Day Checklist</b>", styles['Subsection']))
    launch = [
        "Verify all employee codes are active",
        "Test signup flow end-to-end",
        "Confirm coach is available for questions",
        "Monitor signup rates throughout the day",
        "Send end-of-day summary to HR",
    ]
    for item in launch:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>First Week Activities</b>", styles['Subsection']))
    week1 = [
        ("Day 1", "Launch announcement, initial signups"),
        ("Day 2", "Follow-up email to non-signups"),
        ("Day 3", "First team challenge begins"),
        ("Day 4", "Check engagement metrics"),
        ("Day 5", "Weekly summary to HR"),
    ]
    for day, activity in week1:
        content.append(Paragraph(f"<b>{day}:</b> {activity}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Target Metrics (First 30 Days)</b>", styles['Subsection']))
    metrics = [
        ("Signup Rate", "50%+ of employees within first week"),
        ("App Opens", "3+ per user per week"),
        ("Challenge Participation", "40%+ of signed users"),
        ("Coach Interactions", "20%+ booking intro session (Premium)"),
    ]
    for metric, target in metrics:
        content.append(Paragraph(f"• <b>{metric}:</b> {target}", styles['Checklist']))

    content.append(PageBreak())
    return content

def create_ongoing_section(styles):
    """Create ongoing management section"""
    content = []

    content.append(Paragraph("7. Ongoing Management", styles['Section']))

    content.append(Paragraph("<b>Weekly Tasks</b>", styles['Subsection']))
    weekly = [
        "Monitor engagement dashboard",
        "Address support tickets within 24 hours",
        "Check challenge participation",
        "Update internal CRM with account notes",
    ]
    for item in weekly:
        content.append(Paragraph(f"☐ {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Monthly Reports</b>", styles['Subsection']))
    content.append(Paragraph(
        "Send monthly usage report to HR contact by the 5th of each month. Include:",
        styles['Body']
    ))
    monthly = [
        "Active users vs total enrolled",
        "Engagement metrics (sessions, duration, completion)",
        "Challenge participation and winners",
        "Coach session bookings",
        "Recommendations for improving engagement",
    ]
    for item in monthly:
        content.append(Paragraph(f"• {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Quarterly Business Reviews (QBRs)</b>", styles['Subsection']))
    content.append(Paragraph(
        "Schedule 30-minute QBR with HR stakeholders each quarter:",
        styles['Body']
    ))
    qbr = [
        "Review metrics vs goals",
        "Discuss ROI and health outcomes",
        "Gather feedback and suggestions",
        "Preview upcoming features/content",
        "Discuss expansion opportunities",
    ]
    for item in qbr:
        content.append(Paragraph(f"• {item}", styles['Checklist']))

    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>Renewal Process (Start 90 Days Out)</b>", styles['Subsection']))
    renewal = [
        ("90 days out", "Send renewal reminder, schedule review meeting"),
        ("60 days out", "Present renewal proposal with updated pricing"),
        ("30 days out", "Final follow-up, escalate if needed"),
        ("Contract end", "Auto-renew or process termination"),
    ]
    for timing, action in renewal:
        content.append(Paragraph(f"<b>{timing}:</b> {action}", styles['Checklist']))

    content.append(PageBreak())
    return content

def create_appendix_a(styles):
    """Create email templates appendix"""
    content = []

    content.append(Paragraph("Appendix A: Email Templates", styles['Section']))

    content.append(Paragraph("<b>Initial Outreach Email</b>", styles['Subsection']))
    content.append(Paragraph(
        "Subject: Employee Wellness at [Company] - Quick Question\n\n"
        "Hi [Name],\n\n"
        "I noticed [Company] is growing quickly—congratulations! I'm reaching out because we help "
        "companies like yours boost employee engagement and reduce healthcare costs through "
        "AI-powered wellness programs.\n\n"
        "Companies using BodyF1RST typically see:\n"
        "• 25% reduction in absenteeism\n"
        "• 15% improvement in retention\n"
        "• 85%+ employee engagement\n\n"
        "Would you be open to a 15-minute call to see if this might be a fit for [Company]?\n\n"
        "Best,\n[Your Name]",
        styles['Script']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Post-Discovery Follow-Up</b>", styles['Subsection']))
    content.append(Paragraph(
        "Subject: BodyF1RST Proposal for [Company]\n\n"
        "Hi [Name],\n\n"
        "Thank you for the great conversation today. As promised, I've attached a customized "
        "proposal based on our discussion.\n\n"
        "Key highlights:\n"
        "• [Address their specific pain point]\n"
        "• [Mention relevant feature]\n"
        "• Investment: $[X]/employee/month\n\n"
        "I'm available [date/time] to walk through this together. Does that work for you?\n\n"
        "Best,\n[Your Name]",
        styles['Script']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>Launch Announcement (for HR to send)</b>", styles['Subsection']))
    content.append(Paragraph(
        "Subject: Introducing BodyF1RST - Your New Wellness Benefit!\n\n"
        "Team,\n\n"
        "We're excited to announce our new partnership with BodyF1RST, a comprehensive wellness "
        "platform designed to help you live healthier, happier lives.\n\n"
        "Here's what you get:\n"
        "• Personalized workout plans\n"
        "• AI coaching available 24/7\n"
        "• Team challenges and leaderboards\n"
        "• Nutrition tracking and guidance\n\n"
        "Getting started is easy:\n"
        "1. Download the BodyF1RST app (iOS/Android)\n"
        "2. Enter code: [COMPANY-CODE]\n"
        "3. Complete your profile\n"
        "4. Start your wellness journey!\n\n"
        "Questions? Contact [HR Name] or reach out to our coach at [email].\n\n"
        "[Company] Leadership",
        styles['Script']
    ))

    content.append(PageBreak())
    return content

def create_appendix_bc(styles):
    """Create contract templates and FAQ appendix"""
    content = []

    content.append(Paragraph("Appendix B: Contract Templates", styles['Section']))

    content.append(Paragraph(
        "The following contract templates are available in the shared drive:",
        styles['Body']
    ))

    templates = [
        ("MSA_Template_v1.0.docx", "Standard Master Services Agreement"),
        ("BAA_Template_v1.0.docx", "Business Associate Agreement (HIPAA)"),
        ("DPA_Template_v1.0.docx", "Data Processing Agreement (GDPR)"),
        ("Pilot_Agreement_v1.0.docx", "30-60 Day Pilot Program Agreement"),
    ]
    for filename, desc in templates:
        content.append(Paragraph(f"• <b>{filename}</b> - {desc}", styles['Checklist']))

    content.append(Spacer(1, 0.3*inch))

    content.append(Paragraph("Appendix C: FAQ for HR", styles['Section']))

    faqs = [
        ("How do employees sign up?",
         "Download the BodyF1RST app, enter the company referral code, and complete the profile setup."),
        ("What data do you collect?",
         "Basic profile info, workout activity, and optional health metrics. All data is encrypted and HIPAA-compliant."),
        ("Can employees use this outside work?",
         "Yes! The app is available 24/7 and can be used anywhere."),
        ("How do we track participation?",
         "HR admins get access to an analytics dashboard showing signup rates, engagement metrics, and program ROI."),
        ("What if an employee leaves the company?",
         "Their account is deactivated when removed from the employee roster. Personal data is handled per our privacy policy."),
        ("Is there a minimum contract length?",
         "Yes, 12 months minimum. After that, month-to-month with 30 days notice."),
    ]

    for q, a in faqs:
        content.append(Paragraph(f"<b>Q: {q}</b>", styles['Body']))
        content.append(Paragraph(f"A: {a}", styles['Checklist']))
        content.append(Spacer(1, 0.1*inch))

    return content

def generate_sop_pdf():
    """Generate the complete SOP PDF"""
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=0.75*inch
    )

    styles = create_styles()

    content = []
    content.extend(create_cover(styles))
    content.extend(create_toc(styles))
    content.extend(create_presales_section(styles))
    content.extend(create_discovery_section(styles))
    content.extend(create_proposal_section(styles))
    content.extend(create_contract_section(styles))
    content.extend(create_technical_section(styles))
    content.extend(create_launch_section(styles))
    content.extend(create_ongoing_section(styles))
    content.extend(create_appendix_a(styles))
    content.extend(create_appendix_bc(styles))

    doc.build(content, onFirstPage=lambda c, d: None, onLaterPages=add_header_footer)

    print(f"SOP PDF generated successfully: {OUTPUT_PATH}")

if __name__ == "__main__":
    generate_sop_pdf()
