"""
BodyF1RST Corporate Wellness Proposal PDF Generator
Creates a professional multi-page proposal document
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black, gray
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, Image
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.pdfgen import canvas
from datetime import datetime
import os

# BodyF1RST Brand Colors
ORANGE = HexColor("#EA580C")
DARK_GRAY = HexColor("#1e293b")
LIGHT_GRAY = HexColor("#f8fafc")
MEDIUM_GRAY = HexColor("#64748b")

# Output path
OUTPUT_PATH = "c:/SafeWorkspace/repos/bodyf1rst-corporate-wellness/public/docs/BodyF1RST-Corporate-Wellness-Proposal.pdf"

def create_styles():
    """Create custom paragraph styles"""
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='CoverTitle',
        parent=styles['Title'],
        fontSize=36,
        textColor=DARK_GRAY,
        alignment=TA_CENTER,
        spaceAfter=20,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='CoverSubtitle',
        parent=styles['Normal'],
        fontSize=18,
        textColor=ORANGE,
        alignment=TA_CENTER,
        spaceAfter=40,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=ORANGE,
        spaceBefore=20,
        spaceAfter=20,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='SubsectionTitle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=DARK_GRAY,
        spaceBefore=15,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='Body',
        parent=styles['Normal'],
        fontSize=11,
        textColor=DARK_GRAY,
        spaceBefore=6,
        spaceAfter=6,
        leading=16,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='BulletText',
        parent=styles['Normal'],
        fontSize=11,
        textColor=DARK_GRAY,
        leftIndent=20,
        spaceBefore=4,
        spaceAfter=4,
        bulletIndent=10,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='StatNumber',
        parent=styles['Normal'],
        fontSize=28,
        textColor=ORANGE,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='StatLabel',
        parent=styles['Normal'],
        fontSize=10,
        textColor=MEDIUM_GRAY,
        alignment=TA_CENTER,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Footer',
        parent=styles['Normal'],
        fontSize=9,
        textColor=MEDIUM_GRAY,
        alignment=TA_CENTER,
        fontName='Helvetica'
    ))

    return styles

def add_page_header_footer(canvas, doc):
    """Add header and footer to each page"""
    canvas.saveState()

    # Header line
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(2)
    canvas.line(0.75*inch, 10.5*inch, 7.75*inch, 10.5*inch)

    # Footer
    canvas.setFont('Helvetica', 9)
    canvas.setFillColor(MEDIUM_GRAY)
    canvas.drawCentredString(4.25*inch, 0.5*inch, f"BodyF1RST Corporate Wellness | Page {doc.page}")

    canvas.restoreState()

def create_cover_page(styles):
    """Create the cover page content"""
    content = []

    content.append(Spacer(1, 2*inch))

    # Logo placeholder (orange circle with B1)
    logo_table = Table([[Paragraph("<font color='#EA580C' size='48'><b>B1</b></font>", styles['Body'])]],
                       colWidths=[1.5*inch], rowHeights=[1.5*inch])
    logo_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_GRAY),
        ('ROUNDEDCORNERS', [20, 20, 20, 20]),
    ]))
    content.append(logo_table)

    content.append(Spacer(1, 0.5*inch))

    content.append(Paragraph("Corporate Wellness Program", styles['CoverTitle']))
    content.append(Paragraph("PROPOSAL", styles['CoverTitle']))

    content.append(Spacer(1, 0.3*inch))

    content.append(Paragraph("Transform Your Workforce with AI-Powered Wellness", styles['CoverSubtitle']))

    content.append(Spacer(1, 1*inch))

    content.append(Paragraph("<b>Prepared for:</b>", styles['Body']))
    content.append(Paragraph("<font color='#EA580C' size='18'><b>[COMPANY NAME]</b></font>", styles['Body']))

    content.append(Spacer(1, 0.5*inch))

    content.append(Paragraph(f"<b>Date:</b> {datetime.now().strftime('%B %d, %Y')}", styles['Body']))

    content.append(PageBreak())
    return content

def create_executive_summary(styles):
    """Create executive summary page"""
    content = []

    content.append(Paragraph("Executive Summary", styles['SectionTitle']))

    content.append(Paragraph("The Wellness Crisis in Modern Workplaces", styles['SubsectionTitle']))
    content.append(Paragraph(
        "Today's workforce faces unprecedented health challenges. Rising healthcare costs, "
        "increasing burnout rates, and the ongoing struggle for work-life balance have made "
        "employee wellness a critical business priority—not just a nice-to-have benefit.",
        styles['Body']
    ))

    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("The BodyF1RST Solution", styles['SubsectionTitle']))
    content.append(Paragraph(
        "BodyF1RST delivers a comprehensive corporate wellness platform that combines "
        "AI-powered personalization, certified coaching, and measurable outcomes—all at "
        "40-70% below typical industry rates. Our mobile-first approach meets employees "
        "where they are, making wellness accessible, engaging, and effective.",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    content.append(Paragraph("Key Benefits", styles['SubsectionTitle']))

    # Benefits table
    benefits_data = [
        ["40-70%", "Below Industry Rates"],
        ["AI-Powered", "Personalized Coaching"],
        ["2 Weeks", "Full Implementation"],
        ["$1.50", "Return per $1 Invested"],
    ]

    benefits_table = Table(benefits_data, colWidths=[1.5*inch, 4*inch])
    benefits_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (0, -1), 20),
        ('TEXTCOLOR', (0, 0), (0, -1), ORANGE),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (1, 0), (1, -1), 12),
        ('TEXTCOLOR', (1, 0), (1, -1), DARK_GRAY),
        ('ALIGN', (0, 0), (0, -1), 'RIGHT'),
        ('ALIGN', (1, 0), (1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    content.append(benefits_table)

    content.append(PageBreak())
    return content

def create_problem_page(styles):
    """Create the problem statement page"""
    content = []

    content.append(Paragraph("The Problem", styles['SectionTitle']))

    content.append(Paragraph(
        "American businesses are facing a wellness crisis that directly impacts their bottom line. "
        "The data paints a stark picture:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    # Stats in boxes
    stats = [
        ("6%", "Annual increase in healthcare costs"),
        ("$575B", "Lost annually to absenteeism in the U.S."),
        ("77%", "Of employees experience workplace burnout"),
        ("50-200%", "Of salary cost to replace an employee"),
    ]

    for stat, label in stats:
        stat_table = Table(
            [[Paragraph(f"<font size='24'><b>{stat}</b></font>", styles['Body']),
              Paragraph(label, styles['Body'])]],
            colWidths=[1.5*inch, 5*inch]
        )
        stat_table.setStyle(TableStyle([
            ('TEXTCOLOR', (0, 0), (0, 0), ORANGE),
            ('ALIGN', (0, 0), (0, 0), 'CENTER'),
            ('ALIGN', (1, 0), (1, 0), 'LEFT'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('BACKGROUND', (0, 0), (0, 0), LIGHT_GRAY),
            ('TOPPADDING', (0, 0), (-1, -1), 15),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
            ('LEFTPADDING', (0, 0), (0, 0), 10),
            ('RIGHTPADDING', (0, 0), (0, 0), 10),
        ]))
        content.append(stat_table)
        content.append(Spacer(1, 0.15*inch))

    content.append(Spacer(1, 0.3*inch))

    content.append(Paragraph(
        "These aren't just statistics—they represent real costs to your organization and real "
        "struggles for your employees. A strategic wellness program can transform these challenges "
        "into opportunities for growth, engagement, and competitive advantage.",
        styles['Body']
    ))

    content.append(PageBreak())
    return content

def create_solution_page(styles):
    """Create our solution page"""
    content = []

    content.append(Paragraph("Our Solution", styles['SectionTitle']))

    content.append(Paragraph(
        "BodyF1RST provides a complete wellness ecosystem designed for the modern workplace:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.2*inch))

    features = [
        ("AI-Powered Mobile App",
         "Personalized workouts, nutrition tracking, and 24/7 AI coaching that adapts to each employee's goals, preferences, and progress."),
        ("Team Challenges & Gamification",
         "Engaging competitions that build camaraderie, boost participation, and make wellness fun."),
        ("HR Analytics Dashboard",
         "Real-time insights into program adoption, engagement metrics, and health outcomes—proving ROI to leadership."),
        ("Certified Coaches",
         "On-demand access to certified fitness and nutrition professionals for personalized guidance."),
        ("Holistic Wellness",
         "Complete coverage including fitness, nutrition, mental health, stress management, and sleep optimization."),
    ]

    for title, desc in features:
        content.append(Paragraph(f"<b>{title}</b>", styles['SubsectionTitle']))
        content.append(Paragraph(desc, styles['Body']))
        content.append(Spacer(1, 0.1*inch))

    content.append(PageBreak())
    return content

def create_industry_page(styles):
    """Create industry-specific approach page"""
    content = []

    content.append(Paragraph("Industry-Specific Approach", styles['SectionTitle']))

    content.append(Paragraph(
        "We tailor our wellness programs to address the unique challenges of your industry:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    industries = [
        ("Entertainment & Media", [
            "Desk ergonomics and posture correction",
            "Eye strain exercises (20-20-20 rule)",
            "Creative burnout prevention",
            "Flexible scheduling for creative hours",
            "Quick 10-minute desk workouts",
        ]),
        ("Manufacturing & Engineering", [
            "Safety-integrated wellness programs",
            "Hearing protection awareness",
            "Precision work stress management",
            "Lab/factory floor ergonomics",
            "Focus and concentration techniques",
        ]),
        ("Construction", [
            "Injury prevention and mobility",
            "Jobsite-friendly workouts (no equipment)",
            "Heat/cold exposure management",
            "Mental health support (industry priority)",
            "Morning stretch routines",
        ]),
    ]

    for industry, points in industries:
        content.append(Paragraph(f"<font color='#EA580C'><b>{industry}</b></font>", styles['SubsectionTitle']))
        for point in points:
            content.append(Paragraph(f"• {point}", styles['BulletText']))
        content.append(Spacer(1, 0.2*inch))

    content.append(PageBreak())
    return content

def create_pricing_page(styles):
    """Create pricing comparison page"""
    content = []

    content.append(Paragraph("Pricing Comparison", styles['SectionTitle']))

    content.append(Paragraph(
        "See how BodyF1RST delivers superior value compared to industry leaders:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    # Pricing table
    pricing_data = [
        ["Provider", "Basic", "Standard", "Premium"],
        ["Virgin Pulse", "$72/yr", "$240/yr", "$600/yr"],
        ["Wellable", "$48/yr", "$180/yr", "$480/yr"],
        ["Limeade", "$60/yr", "$200/yr", "$500/yr"],
        ["Industry Avg", "$60/yr", "$225/yr", "$600/yr"],
        ["BodyF1RST", "$120/yr\n($10/mo)", "$180/yr\n($15/mo)", "$240/yr\n($20/mo)"],
    ]

    pricing_table = Table(pricing_data, colWidths=[2*inch, 1.5*inch, 1.5*inch, 1.5*inch])
    pricing_table.setStyle(TableStyle([
        # Header row
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 11),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),

        # Body rows
        ('FONTNAME', (0, 1), (-1, -2), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -2), 10),
        ('TEXTCOLOR', (0, 1), (-1, -2), DARK_GRAY),

        # BodyF1RST row (highlighted)
        ('BACKGROUND', (0, -1), (-1, -1), HexColor("#FFF7ED")),
        ('FONTNAME', (0, -1), (-1, -1), 'Helvetica-Bold'),
        ('TEXTCOLOR', (0, -1), (-1, -1), ORANGE),
        ('FONTSIZE', (0, -1), (-1, -1), 11),

        # All cells
        ('ALIGN', (1, 1), (-1, -1), 'CENTER'),
        ('ALIGN', (0, 1), (0, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#E5E7EB")),
    ]))
    content.append(pricing_table)

    content.append(Spacer(1, 0.3*inch))

    content.append(Paragraph(
        "<i>* Introductory pricing for first customers. Volume discounts available for 500+ employees.</i>",
        styles['Footer']
    ))

    content.append(PageBreak())
    return content

def create_investment_page(styles):
    """Create investment options page"""
    content = []

    content.append(Paragraph("Investment Options", styles['SectionTitle']))

    content.append(Paragraph(
        "Based on a 200-employee organization, here's what your investment would look like:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    # Investment table
    investment_data = [
        ["Package", "Per Employee/Mo", "Annual (200 emp)", "Key Features"],
        ["Basic", "$10", "$24,000", "App, tracking, challenges"],
        ["Standard", "$15", "$36,000", "+ AI coaching, nutrition"],
        ["Premium", "$20", "$48,000", "+ 1:1 sessions, custom programs"],
    ]

    investment_table = Table(investment_data, colWidths=[1.3*inch, 1.5*inch, 1.5*inch, 2.2*inch])
    investment_table.setStyle(TableStyle([
        # Header
        ('BACKGROUND', (0, 0), (-1, 0), ORANGE),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),

        # Body
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('TEXTCOLOR', (0, 1), (-1, -1), DARK_GRAY),

        # Recommended row highlight
        ('BACKGROUND', (0, 2), (-1, 2), HexColor("#FFF7ED")),

        # All cells
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#E5E7EB")),
    ]))
    content.append(investment_table)

    content.append(Spacer(1, 0.4*inch))

    content.append(Paragraph("<b>Recommended: Standard Package</b>", styles['SubsectionTitle']))
    content.append(Paragraph(
        "For most organizations, our Standard package offers the best balance of features and value. "
        "The AI coaching and nutrition tracking significantly boost engagement and outcomes while "
        "remaining well below industry average pricing.",
        styles['Body']
    ))

    content.append(PageBreak())
    return content

def create_timeline_page(styles):
    """Create implementation timeline page"""
    content = []

    content.append(Paragraph("Implementation Timeline", styles['SectionTitle']))

    content.append(Paragraph(
        "We pride ourselves on rapid, seamless deployment. Most organizations are fully operational within 2-4 weeks:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    timeline = [
        ("Week 1-2", "Discovery & Contract", "Identify stakeholders, document requirements, sign agreements"),
        ("Week 2-3", "Technical Setup", "Create organization, configure content, generate referral codes"),
        ("Week 3-4", "Employee Onboarding", "Launch communications, app signups, manager training"),
        ("Month 1", "Launch & Engagement", "Kickoff event, first challenge, engagement monitoring"),
        ("Ongoing", "Monthly Management", "Usage reports, QBRs, content updates, renewal support"),
    ]

    for period, phase, details in timeline:
        row_data = [[
            Paragraph(f"<font color='#EA580C' size='12'><b>{period}</b></font>", styles['Body']),
            Paragraph(f"<b>{phase}</b><br/><font size='9' color='#64748b'>{details}</font>", styles['Body']),
        ]]
        row_table = Table(row_data, colWidths=[1.2*inch, 5.3*inch])
        row_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('TOPPADDING', (0, 0), (-1, -1), 10),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
            ('LEFTPADDING', (0, 0), (0, 0), 0),
        ]))
        content.append(row_table)

    content.append(PageBreak())
    return content

def create_metrics_page(styles):
    """Create success metrics page"""
    content = []

    content.append(Paragraph("Success Metrics", styles['SectionTitle']))

    content.append(Paragraph(
        "We measure what matters and provide transparent reporting on program outcomes:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    metrics = [
        ("Participation Rates", "70%+", "Active users within first 90 days"),
        ("Engagement Scores", "4.2+/5", "Average user satisfaction rating"),
        ("Absenteeism Reduction", "25%", "Fewer sick days per employee"),
        ("Turnover Reduction", "15%", "Lower annual turnover rate"),
        ("Healthcare Savings", "3%", "Reduction in claims costs"),
    ]

    metrics_data = [["Metric", "Target", "Description"]]
    for metric, target, desc in metrics:
        metrics_data.append([metric, target, desc])

    metrics_table = Table(metrics_data, colWidths=[2*inch, 1*inch, 3.5*inch])
    metrics_table.setStyle(TableStyle([
        # Header
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),

        # Targets column
        ('FONTNAME', (1, 1), (1, -1), 'Helvetica-Bold'),
        ('TEXTCOLOR', (1, 1), (1, -1), ORANGE),
        ('FONTSIZE', (1, 1), (1, -1), 12),

        # All cells
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (1, 0), (1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, HexColor("#E5E7EB")),
    ]))
    content.append(metrics_table)

    content.append(Spacer(1, 0.4*inch))

    content.append(Paragraph("<b>Reporting Cadence</b>", styles['SubsectionTitle']))
    content.append(Paragraph("• Weekly: Signup and engagement updates", styles['BulletText']))
    content.append(Paragraph("• Monthly: Comprehensive usage report for HR", styles['BulletText']))
    content.append(Paragraph("• Quarterly: Business review with ROI analysis", styles['BulletText']))
    content.append(Paragraph("• Annually: Full program assessment and renewal discussion", styles['BulletText']))

    content.append(PageBreak())
    return content

def create_next_steps_page(styles):
    """Create next steps and contact page"""
    content = []

    content.append(Paragraph("Next Steps", styles['SectionTitle']))

    content.append(Paragraph(
        "Ready to transform your workplace? Here's what happens next:",
        styles['Body']
    ))

    content.append(Spacer(1, 0.3*inch))

    steps = [
        ("1", "Review & Approve", "Review this proposal with your team and let us know any questions"),
        ("2", "Sign Contract", "Simple Master Services Agreement with flexible terms"),
        ("3", "Schedule Kickoff", "We'll coordinate a kickoff call within 48 hours of signing"),
        ("4", "Launch in 2 Weeks", "Your employees will be on the platform within 14 days"),
    ]

    for num, title, desc in steps:
        step_data = [[
            Paragraph(f"<font color='white' size='16'><b>{num}</b></font>", styles['Body']),
            Paragraph(f"<b>{title}</b><br/><font size='10'>{desc}</font>", styles['Body']),
        ]]
        step_table = Table(step_data, colWidths=[0.6*inch, 6*inch])
        step_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (0, 0), ORANGE),
            ('ALIGN', (0, 0), (0, 0), 'CENTER'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('TOPPADDING', (0, 0), (-1, -1), 15),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
        ]))
        content.append(step_table)
        content.append(Spacer(1, 0.15*inch))

    content.append(Spacer(1, 0.5*inch))

    # Contact box
    contact_data = [[
        Paragraph(
            "<font size='14'><b>Let's Get Started</b></font><br/><br/>"
            "<font size='11'><b>Email:</b> corporate@bodyf1rst.com</font><br/>"
            "<font size='11'><b>Phone:</b> (512) 555-1234</font><br/>"
            "<font size='11'><b>Website:</b> corporate.bodyf1rst.com</font><br/><br/>"
            "<font size='10' color='#64748b'>We'll respond within 24 hours with a customized proposal.</font>",
            styles['Body']
        )
    ]]
    contact_table = Table(contact_data, colWidths=[6.5*inch])
    contact_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_GRAY),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 25),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 25),
        ('LEFTPADDING', (0, 0), (-1, -1), 25),
        ('RIGHTPADDING', (0, 0), (-1, -1), 25),
    ]))
    content.append(contact_table)

    return content

def generate_proposal_pdf():
    """Generate the complete proposal PDF"""
    # Create document
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch
    )

    # Get styles
    styles = create_styles()

    # Build content
    content = []
    content.extend(create_cover_page(styles))
    content.extend(create_executive_summary(styles))
    content.extend(create_problem_page(styles))
    content.extend(create_solution_page(styles))
    content.extend(create_industry_page(styles))
    content.extend(create_pricing_page(styles))
    content.extend(create_investment_page(styles))
    content.extend(create_timeline_page(styles))
    content.extend(create_metrics_page(styles))
    content.extend(create_next_steps_page(styles))

    # Build PDF
    doc.build(content, onFirstPage=lambda c, d: None, onLaterPages=add_page_header_footer)

    print(f"PDF generated successfully: {OUTPUT_PATH}")

if __name__ == "__main__":
    generate_proposal_pdf()
