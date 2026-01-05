"""
BodyF1RST Contract Templates PDF Generator
Creates professional PDF versions of MSA, BAA, DPA, and SLA contracts
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from datetime import datetime
import os

# BodyF1RST Brand Colors
ORANGE = HexColor("#EA580C")
DARK_GRAY = HexColor("#1e293b")
LIGHT_GRAY = HexColor("#f8fafc")
MEDIUM_GRAY = HexColor("#64748b")

# Output directory
OUTPUT_DIR = "c:/SafeWorkspace/repos/bodyf1rst-corporate-wellness/public/docs/"

def create_styles():
    """Create custom paragraph styles for contracts"""
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='DocTitle',
        parent=styles['Title'],
        fontSize=24,
        textColor=DARK_GRAY,
        alignment=TA_CENTER,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='DocSubtitle',
        parent=styles['Normal'],
        fontSize=12,
        textColor=ORANGE,
        alignment=TA_CENTER,
        spaceAfter=30,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading1'],
        fontSize=14,
        textColor=ORANGE,
        spaceBefore=20,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    ))

    styles.add(ParagraphStyle(
        name='SubsectionTitle',
        parent=styles['Heading2'],
        fontSize=11,
        textColor=DARK_GRAY,
        spaceBefore=12,
        spaceAfter=6,
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
        name='BulletText',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_GRAY,
        leftIndent=20,
        spaceBefore=2,
        spaceAfter=2,
        bulletIndent=10,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Footer',
        parent=styles['Normal'],
        fontSize=8,
        textColor=MEDIUM_GRAY,
        alignment=TA_CENTER,
        fontName='Helvetica'
    ))

    styles.add(ParagraphStyle(
        name='Disclaimer',
        parent=styles['Normal'],
        fontSize=9,
        textColor=MEDIUM_GRAY,
        alignment=TA_CENTER,
        fontName='Helvetica-Oblique',
        spaceBefore=20
    ))

    return styles

def add_header_footer(canvas, doc, title):
    """Add header and footer to each page"""
    canvas.saveState()

    # Header - orange line with logo
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(2)
    canvas.line(0.75*inch, 10.3*inch, 7.75*inch, 10.3*inch)

    # Logo text
    canvas.setFont('Helvetica-Bold', 12)
    canvas.setFillColor(ORANGE)
    canvas.drawString(0.75*inch, 10.45*inch, "BodyF1RST")

    # Document title in header
    canvas.setFont('Helvetica', 9)
    canvas.setFillColor(MEDIUM_GRAY)
    canvas.drawRightString(7.75*inch, 10.45*inch, title)

    # Footer
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(MEDIUM_GRAY)
    canvas.drawCentredString(4.25*inch, 0.5*inch, f"Page {doc.page} | Confidential")

    canvas.restoreState()

def create_parties_section(styles, processor_name, controller_name):
    """Create the parties section for contracts"""
    content = []

    content.append(Paragraph("<b>Between:</b>", styles['Body']))
    content.append(Spacer(1, 0.1*inch))
    content.append(Paragraph(f"<b>BodyF1RST, Inc.</b><br/>(\"{processor_name}\")", styles['Body']))
    content.append(Spacer(1, 0.15*inch))
    content.append(Paragraph("<b>And:</b>", styles['Body']))
    content.append(Spacer(1, 0.1*inch))
    content.append(Paragraph(f"<b>[CUSTOMER NAME]</b><br/>(\"{controller_name}\")", styles['Body']))
    content.append(Spacer(1, 0.15*inch))
    content.append(Paragraph("<b>Effective Date:</b> [DATE]", styles['Body']))
    content.append(Spacer(1, 0.3*inch))

    return content

def create_signature_block(styles):
    """Create signature blocks for contracts"""
    content = []

    content.append(Paragraph("SIGNATURES", styles['SectionTitle']))
    content.append(Spacer(1, 0.2*inch))

    sig_data = [
        ["BodyF1RST, Inc.", "[CUSTOMER NAME]"],
        ["", ""],
        ["Signature: _______________________", "Signature: _______________________"],
        ["", ""],
        ["Name: ___________________________", "Name: ___________________________"],
        ["", ""],
        ["Title: ___________________________", "Title: ___________________________"],
        ["", ""],
        ["Date: ___________________________", "Date: ___________________________"],
    ]

    sig_table = Table(sig_data, colWidths=[3.25*inch, 3.25*inch])
    sig_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (-1, -1), DARK_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    content.append(sig_table)

    return content

# ============================================
# MASTER SERVICE AGREEMENT (MSA)
# ============================================

def generate_msa_pdf(styles):
    """Generate Master Service Agreement PDF"""
    output_path = os.path.join(OUTPUT_DIR, "BodyF1RST-MSA-Template.pdf")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=0.75*inch
    )

    content = []

    # Title
    content.append(Paragraph("MASTER SERVICE AGREEMENT", styles['DocTitle']))
    content.append(Paragraph("Corporate Wellness Platform Services", styles['DocSubtitle']))

    # Parties
    content.extend(create_parties_section(styles, "Provider", "Customer"))

    # Recitals
    content.append(Paragraph("RECITALS", styles['SectionTitle']))
    content.append(Paragraph(
        "WHEREAS, BodyF1RST provides corporate wellness platform services including fitness coaching, "
        "nutrition tracking, mental health resources, and employee engagement tools; and",
        styles['Body']
    ))
    content.append(Paragraph(
        "WHEREAS, Customer desires to engage BodyF1RST to provide such services for Customer's employees;",
        styles['Body']
    ))
    content.append(Paragraph(
        "NOW, THEREFORE, in consideration of the mutual covenants hereinafter set forth, the parties agree as follows:",
        styles['Body']
    ))

    # Section 1: Definitions
    content.append(Paragraph("1. DEFINITIONS", styles['SectionTitle']))
    definitions = [
        ('"Services"', 'means the corporate wellness platform, mobile applications, AI coaching, content library, analytics dashboard, and related services as described in the applicable Order Form.'),
        ('"Users"', "means Customer's employees, contractors, and other individuals authorized by Customer to access the Services."),
        ('"User Data"', 'means all data submitted to the Services by or on behalf of Users, including health, fitness, and wellness information.'),
        ('"Order Form"', "means the ordering document specifying the Services, pricing, and terms for Customer's subscription."),
    ]
    for term, defn in definitions:
        content.append(Paragraph(f"<b>{term}</b> {defn}", styles['Body']))

    # Section 2: Services
    content.append(Paragraph("2. SERVICES", styles['SectionTitle']))

    content.append(Paragraph("<b>2.1 Service Tiers</b>", styles['SubsectionTitle']))

    tier_data = [
        ["Tier", "Price/Employee/Month", "Features"],
        ["Basic", "$10", "Mobile app, activity tracking, team challenges, basic analytics"],
        ["Standard", "$15", "All Basic + AI coaching, nutrition tracking, mental health, advanced analytics"],
        ["Premium", "$20", "All Standard + 1:1 coaching, custom programs, API access, dedicated manager"],
    ]

    tier_table = Table(tier_data, colWidths=[1*inch, 1.5*inch, 4*inch])
    tier_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(tier_table)
    content.append(Spacer(1, 0.2*inch))

    content.append(Paragraph("<b>2.2 Volume Discounts</b>", styles['SubsectionTitle']))

    discount_data = [
        ["Employee Count", "Discount"],
        ["1-99", "0%"],
        ["100-249", "5%"],
        ["250-499", "10%"],
        ["500-999", "15%"],
        ["1,000+", "20%"],
    ]

    discount_table = Table(discount_data, colWidths=[2*inch, 1.5*inch])
    discount_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(discount_table)

    # Section 3: Customer Obligations
    content.append(Paragraph("3. CUSTOMER OBLIGATIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>3.1 User Access.</b> Customer shall provide accurate employee information, ensure Users comply with Terms of Service, and promptly notify BodyF1RST of unauthorized access.", styles['Body']))
    content.append(Paragraph("<b>3.2 Use Restrictions.</b> Customer shall not sublicense, resell, use for competitive analysis, reverse engineer, or share credentials between Users.", styles['Body']))

    # Section 4: Fees and Payment
    content.append(Paragraph("4. FEES AND PAYMENT", styles['SectionTitle']))
    content.append(Paragraph("<b>4.1 Fees.</b> Customer shall pay the fees specified in the Order Form.", styles['Body']))
    content.append(Paragraph("<b>4.2 Payment Terms.</b> Annual subscriptions invoiced annually in advance. Monthly subscriptions invoiced monthly in advance. Payment due within thirty (30) days.", styles['Body']))
    content.append(Paragraph("<b>4.3 Taxes.</b> Fees exclude applicable taxes. Customer responsible for all taxes except BodyF1RST's income taxes.", styles['Body']))
    content.append(Paragraph("<b>4.4 Late Payment.</b> Overdue amounts accrue interest at 1.5% per month or maximum legal rate.", styles['Body']))

    # Section 5: Term and Termination
    content.append(Paragraph("5. TERM AND TERMINATION", styles['SectionTitle']))
    content.append(Paragraph("<b>5.1 Initial Term.</b> Twelve (12) months from the Effective Date, unless otherwise specified.", styles['Body']))
    content.append(Paragraph("<b>5.2 Renewal.</b> Automatically renews for successive one-year periods unless either party provides 30 days' written notice.", styles['Body']))
    content.append(Paragraph("<b>5.3 Termination for Cause.</b> Either party may terminate immediately if other party materially breaches and fails to cure within 30 days.", styles['Body']))

    content.append(PageBreak())

    # Section 6: Data Protection
    content.append(Paragraph("6. DATA PROTECTION", styles['SectionTitle']))
    content.append(Paragraph("<b>6.1 Data Processing.</b> BodyF1RST shall process User Data only as necessary to provide Services and in accordance with Privacy Policy.", styles['Body']))
    content.append(Paragraph("<b>6.2 Data Security.</b> BodyF1RST maintains: AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II certification, regular security assessments.", styles['Body']))
    content.append(Paragraph("<b>6.3 HIPAA.</b> If Customer is a Covered Entity, parties shall execute a Business Associate Agreement (BAA).", styles['Body']))
    content.append(Paragraph("<b>6.4 GDPR.</b> If User Data includes EU/UK personal data, parties shall execute a Data Processing Agreement (DPA).", styles['Body']))

    # Section 7: Confidentiality
    content.append(Paragraph("7. CONFIDENTIALITY", styles['SectionTitle']))
    content.append(Paragraph("Each party agrees to protect the other's Confidential Information using at least the same degree of care used for its own confidential information.", styles['Body']))

    # Section 8: IP
    content.append(Paragraph("8. INTELLECTUAL PROPERTY", styles['SectionTitle']))
    content.append(Paragraph("<b>8.1 BodyF1RST IP.</b> BodyF1RST retains all rights in the Services. No rights granted except as expressly set forth.", styles['Body']))
    content.append(Paragraph("<b>8.2 Customer Data.</b> Customer retains all rights in User Data. Customer grants BodyF1RST license to use User Data solely to provide Services.", styles['Body']))

    # Section 9: Warranties
    content.append(Paragraph("9. WARRANTIES AND DISCLAIMERS", styles['SectionTitle']))
    content.append(Paragraph("<b>9.1 BodyF1RST Warranties.</b> Services will perform materially as documented, comply with applicable laws, and BodyF1RST has right to provide Services.", styles['Body']))
    content.append(Paragraph("<b>9.2 Disclaimer.</b> EXCEPT AS EXPRESSLY SET FORTH, SERVICES PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND.", styles['Body']))
    content.append(Paragraph("<b>9.3 Not Medical Advice.</b> Services are for general wellness only and do not constitute medical advice, diagnosis, or treatment.", styles['Body']))

    # Section 10: Liability
    content.append(Paragraph("10. LIMITATION OF LIABILITY", styles['SectionTitle']))
    content.append(Paragraph("<b>10.1</b> NEITHER PARTY LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.", styles['Body']))
    content.append(Paragraph("<b>10.2</b> BODYF1RST'S TOTAL LIABILITY SHALL NOT EXCEED FEES PAID IN THE 12 MONTHS PRECEDING THE CLAIM.", styles['Body']))

    # Section 11: Indemnification
    content.append(Paragraph("11. INDEMNIFICATION", styles['SectionTitle']))
    content.append(Paragraph("<b>11.1 By BodyF1RST.</b> BodyF1RST shall indemnify Customer against IP infringement claims.", styles['Body']))
    content.append(Paragraph("<b>11.2 By Customer.</b> Customer shall indemnify BodyF1RST against claims from Customer's breach, User Data violations, or violation of law.", styles['Body']))

    # Section 12: General
    content.append(Paragraph("12. GENERAL PROVISIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>12.1 Governing Law.</b> State of Texas, without regard to conflict of law principles.", styles['Body']))
    content.append(Paragraph("<b>12.2 Dispute Resolution.</b> Binding arbitration administered by AAA in Austin, Texas.", styles['Body']))
    content.append(Paragraph("<b>12.3 Entire Agreement.</b> This Agreement and all Order Forms constitute the entire agreement.", styles['Body']))
    content.append(Paragraph("<b>12.4 Amendment.</b> May only be amended in writing signed by both parties.", styles['Body']))

    content.append(PageBreak())

    # Signatures
    content.extend(create_signature_block(styles))

    # Disclaimer
    content.append(Paragraph(
        "This document template is for informational purposes. Contact sales@bodyf1rst.com for a customized agreement.",
        styles['Disclaimer']
    ))

    # Build PDF
    def add_msa_header(canvas, doc):
        add_header_footer(canvas, doc, "Master Service Agreement")

    doc.build(content, onFirstPage=add_msa_header, onLaterPages=add_msa_header)
    print(f"Generated: {output_path}")
    return output_path

# ============================================
# BUSINESS ASSOCIATE AGREEMENT (BAA)
# ============================================

def generate_baa_pdf(styles):
    """Generate Business Associate Agreement PDF"""
    output_path = os.path.join(OUTPUT_DIR, "BodyF1RST-BAA-Template.pdf")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=0.75*inch
    )

    content = []

    # Title
    content.append(Paragraph("BUSINESS ASSOCIATE AGREEMENT", styles['DocTitle']))
    content.append(Paragraph("HIPAA Compliance for Protected Health Information", styles['DocSubtitle']))

    # Parties
    content.extend(create_parties_section(styles, "Business Associate", "Covered Entity"))

    # Recitals
    content.append(Paragraph("RECITALS", styles['SectionTitle']))
    content.append(Paragraph(
        "WHEREAS, Business Associate provides corporate wellness services that may involve the creation, "
        "receipt, maintenance, or transmission of Protected Health Information (PHI) on behalf of Covered Entity;",
        styles['Body']
    ))
    content.append(Paragraph(
        "WHEREAS, the parties desire to comply with HIPAA and HITECH;",
        styles['Body']
    ))
    content.append(Paragraph("NOW, THEREFORE, the parties agree as follows:", styles['Body']))

    # Section 1: Definitions
    content.append(Paragraph("1. DEFINITIONS", styles['SectionTitle']))
    content.append(Paragraph("Terms used in this Agreement have the same meaning as those in 45 C.F.R. Parts 160, 162, and 164.", styles['Body']))
    content.append(Paragraph('<b>"Protected Health Information" or "PHI"</b> means individually identifiable health information as defined in 45 C.F.R. 160.103.', styles['Body']))
    content.append(Paragraph('<b>"Electronic PHI" or "ePHI"</b> means PHI transmitted or maintained in electronic media.', styles['Body']))
    content.append(Paragraph('<b>"Security Incident"</b> means attempted or successful unauthorized access, use, disclosure, modification, or destruction of information.', styles['Body']))
    content.append(Paragraph('<b>"Breach"</b> means acquisition, access, use, or disclosure of PHI in violation of the Privacy Rule as defined in 45 C.F.R. 164.402.', styles['Body']))

    # Section 2: Permitted Uses
    content.append(Paragraph("2. PERMITTED USES AND DISCLOSURES", styles['SectionTitle']))
    content.append(Paragraph("<b>2.1 Service Performance.</b> Business Associate may use or disclose PHI only as necessary to perform services specified in the Master Service Agreement.", styles['Body']))
    content.append(Paragraph("<b>2.2 Management and Administration.</b> Business Associate may use PHI for proper management and administration if required by law or with reasonable confidentiality assurances.", styles['Body']))
    content.append(Paragraph("<b>2.3 De-Identification.</b> Business Associate may de-identify PHI in accordance with 45 C.F.R. 164.514.", styles['Body']))

    # Section 3: Obligations
    content.append(Paragraph("3. OBLIGATIONS OF BUSINESS ASSOCIATE", styles['SectionTitle']))
    content.append(Paragraph("<b>3.1</b> Not use or disclose PHI other than as permitted by this Agreement or required by law.", styles['Body']))
    content.append(Paragraph("<b>3.2</b> Implement administrative, physical, and technical safeguards to protect ePHI.", styles['Body']))
    content.append(Paragraph("<b>3.3</b> Limit PHI use, disclosure, or request to minimum necessary.", styles['Body']))
    content.append(Paragraph("<b>3.4</b> Report unauthorized use/disclosure, Security Incidents, and Breaches to Covered Entity.", styles['Body']))
    content.append(Paragraph("<b>3.5 Breach Notification.</b> Notify Covered Entity of any Breach within <b>twenty-four (24) hours</b> of discovery.", styles['Body']))
    content.append(Paragraph("<b>3.6</b> Ensure subcontractors agree to same restrictions.", styles['Body']))
    content.append(Paragraph("<b>3.7</b> Make PHI available for individual access requests.", styles['Body']))
    content.append(Paragraph("<b>3.8</b> Incorporate amendments to PHI as directed.", styles['Body']))
    content.append(Paragraph("<b>3.9</b> Maintain accounting of disclosures.", styles['Body']))
    content.append(Paragraph("<b>3.10</b> Comply with HIPAA Security Rule.", styles['Body']))
    content.append(Paragraph("<b>3.11</b> Make records available to HHS for compliance determination.", styles['Body']))

    # Section 4: Security Safeguards
    content.append(Paragraph("4. SECURITY SAFEGUARDS", styles['SectionTitle']))

    content.append(Paragraph("<b>4.1 Administrative Safeguards:</b>", styles['SubsectionTitle']))
    for item in ["Designated Security and Privacy Officers", "Workforce security training", "Access management policies", "Incident response procedures", "Risk assessments"]:
        content.append(Paragraph(f"   {item}", styles['BulletText']))

    content.append(Paragraph("<b>4.2 Physical Safeguards:</b>", styles['SubsectionTitle']))
    for item in ["SOC 2 certified data center access controls", "Workstation security policies", "Device and media controls"]:
        content.append(Paragraph(f"   {item}", styles['BulletText']))

    content.append(Paragraph("<b>4.3 Technical Safeguards:</b>", styles['SubsectionTitle']))
    for item in ["AES-256 encryption at rest", "TLS 1.3 encryption in transit", "Unique user identification", "Automatic logoff", "Audit controls", "Multi-factor authentication"]:
        content.append(Paragraph(f"   {item}", styles['BulletText']))

    content.append(PageBreak())

    # Section 5: Subcontractors
    content.append(Paragraph("5. SUBCONTRACTORS", styles['SectionTitle']))

    sub_data = [
        ["Subcontractor", "Service", "Compliance"],
        ["Google Cloud Platform", "Hosting & Storage", "HIPAA BAA executed"],
        ["Stripe", "Payment Processing", "HIPAA BAA executed"],
        ["SendGrid", "Email Communications", "HIPAA BAA executed"],
    ]

    sub_table = Table(sub_data, colWidths=[2.2*inch, 2*inch, 2.3*inch])
    sub_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(sub_table)

    # Section 6: Term and Termination
    content.append(Paragraph("6. TERM AND TERMINATION", styles['SectionTitle']))
    content.append(Paragraph("<b>6.1</b> This Agreement is effective upon the Effective Date and continues until MSA terminates.", styles['Body']))
    content.append(Paragraph("<b>6.2</b> Either party may terminate if other party materially breaches and fails to cure within 30 days.", styles['Body']))
    content.append(Paragraph("<b>6.3</b> Upon termination, Business Associate shall return or destroy all PHI, retain no copies unless legally required.", styles['Body']))
    content.append(Paragraph("<b>6.4</b> PHI obligations survive termination.", styles['Body']))

    # Section 7: General
    content.append(Paragraph("7. GENERAL PROVISIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>7.1</b> This Agreement may be amended only in writing. Parties shall amend as necessary to comply with HIPAA changes.", styles['Body']))
    content.append(Paragraph("<b>7.2</b> This Agreement shall be interpreted consistently with HIPAA regulations.", styles['Body']))
    content.append(Paragraph("<b>7.3</b> Governed by federal law (HIPAA) and, to the extent not preempted, the laws of Texas.", styles['Body']))

    # Signatures
    content.extend(create_signature_block(styles))

    # Disclaimer
    content.append(Paragraph(
        "This BAA is compliant with 45 CFR 164.504(e). Contact privacy@bodyf1rst.com for execution.",
        styles['Disclaimer']
    ))

    # Build PDF
    def add_baa_header(canvas, doc):
        add_header_footer(canvas, doc, "Business Associate Agreement")

    doc.build(content, onFirstPage=add_baa_header, onLaterPages=add_baa_header)
    print(f"Generated: {output_path}")
    return output_path

# ============================================
# DATA PROCESSING AGREEMENT (DPA)
# ============================================

def generate_dpa_pdf(styles):
    """Generate Data Processing Agreement PDF"""
    output_path = os.path.join(OUTPUT_DIR, "BodyF1RST-DPA-Template.pdf")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=0.75*inch
    )

    content = []

    # Title
    content.append(Paragraph("DATA PROCESSING AGREEMENT", styles['DocTitle']))
    content.append(Paragraph("GDPR Article 28 Compliant with Standard Contractual Clauses", styles['DocSubtitle']))

    # Parties
    content.extend(create_parties_section(styles, "Processor / Data Importer", "Controller / Data Exporter"))

    # Recitals
    content.append(Paragraph("RECITALS", styles['SectionTitle']))
    content.append(Paragraph(
        "This Data Processing Agreement (\"DPA\") forms part of the Master Service Agreement between "
        "BodyF1RST, Inc. and Customer. This DPA applies when Personal Data of Data Subjects in the EEA, UK, "
        "or Switzerland is processed by BodyF1RST as Processor on behalf of Customer as Controller.",
        styles['Body']
    ))

    # Section 1: Definitions
    content.append(Paragraph("1. DEFINITIONS", styles['SectionTitle']))
    definitions = [
        ('"GDPR"', 'Regulation (EU) 2016/679 (General Data Protection Regulation).'),
        ('"UK GDPR"', 'GDPR as incorporated into UK law by the Data Protection Act 2018.'),
        ('"Personal Data"', 'Any information relating to an identified or identifiable natural person.'),
        ('"Special Category Data"', 'Personal Data revealing racial/ethnic origin, health data, biometric data, etc.'),
        ('"Data Subject"', 'The identified or identifiable natural person to whom Personal Data relates.'),
        ('"Processing"', 'Any operation performed on Personal Data.'),
        ('"Sub-processor"', 'Any third party engaged by Processor to process Personal Data.'),
        ('"SCCs"', 'Standard Contractual Clauses approved by EC Decision 2021/914.'),
    ]
    for term, defn in definitions:
        content.append(Paragraph(f"<b>{term}</b> {defn}", styles['Body']))

    # Section 2: Scope
    content.append(Paragraph("2. SCOPE OF PROCESSING", styles['SectionTitle']))
    content.append(Paragraph("<b>2.1 Subject Matter.</b> Processor processes Personal Data to provide corporate wellness services.", styles['Body']))
    content.append(Paragraph("<b>2.2 Nature and Purpose:</b> Account management, personalized wellness content, activity/nutrition/health tracking, team challenges, analytics.", styles['Body']))
    content.append(Paragraph("<b>2.3 Duration.</b> Processing continues for Agreement duration plus data retention period.", styles['Body']))
    content.append(Paragraph("<b>2.4 Data Subjects:</b> Customer's employees, contractors, authorized individuals.", styles['Body']))
    content.append(Paragraph("<b>2.5 Categories of Data:</b> Identification data, account data, health/fitness data, device/usage data, coach communications.", styles['Body']))
    content.append(Paragraph("<b>2.6 Special Category Data.</b> Health and fitness data constitutes Special Category Data under Article 9. Processed based on explicit consent (Art. 9(2)(a)) or occupational medicine (Art. 9(2)(h)).", styles['Body']))

    # Section 3: Processor Obligations
    content.append(Paragraph("3. PROCESSOR OBLIGATIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>3.1</b> Process Personal Data only on documented Controller instructions or as required by law.", styles['Body']))
    content.append(Paragraph("<b>3.2</b> Ensure authorized persons are bound by confidentiality obligations.", styles['Body']))
    content.append(Paragraph("<b>3.3</b> Implement appropriate technical and organizational security measures.", styles['Body']))
    content.append(Paragraph("<b>3.4</b> Not engage Sub-processors without prior authorization; notify of changes with 30 days' notice.", styles['Body']))
    content.append(Paragraph("<b>3.5</b> Assist Controller with Data Subject requests (Articles 15-21).", styles['Body']))
    content.append(Paragraph("<b>3.6</b> Notify Controller without undue delay of any Personal Data Breach.", styles['Body']))
    content.append(Paragraph("<b>3.7</b> Provide assistance for DPIAs when required.", styles['Body']))
    content.append(Paragraph("<b>3.8</b> Make information available for audits; provide SOC 2 Type II reports.", styles['Body']))
    content.append(Paragraph("<b>3.9</b> Return or delete Personal Data upon termination; provide deletion certification.", styles['Body']))

    content.append(PageBreak())

    # Section 4: Controller Obligations
    content.append(Paragraph("4. CONTROLLER OBLIGATIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>4.1</b> Provide lawful and complete processing instructions.", styles['Body']))
    content.append(Paragraph("<b>4.2</b> Ensure valid legal basis for Processing.", styles['Body']))
    content.append(Paragraph("<b>4.3</b> Obtain valid explicit consent for Special Category Data.", styles['Body']))
    content.append(Paragraph("<b>4.4</b> Ensure Personal Data provided is accurate and up to date.", styles['Body']))

    # Section 5: International Transfers
    content.append(Paragraph("5. INTERNATIONAL TRANSFERS", styles['SectionTitle']))
    content.append(Paragraph("<b>5.1 Transfer Mechanism.</b> Personal Data transfers from EEA/UK to US are governed by Standard Contractual Clauses (Module 2: Controller to Processor).", styles['Body']))
    content.append(Paragraph("<b>5.2 UK Transfers.</b> International Data Transfer Addendum to EU SCCs is incorporated.", styles['Body']))
    content.append(Paragraph("<b>5.3 Additional Safeguards:</b> End-to-end encryption, strict access controls, data minimization, regular security assessments.", styles['Body']))

    # Section 6: Annexes Summary
    content.append(Paragraph("6. ANNEXES", styles['SectionTitle']))

    content.append(Paragraph("<b>ANNEX I - Standard Contractual Clauses</b>", styles['SubsectionTitle']))
    content.append(Paragraph("SCCs (Module 2) approved by EC Decision 2021/914 incorporated by reference. Clause 17: Governing Law - Ireland. Clause 18(b): Forum - Courts of Ireland.", styles['Body']))

    content.append(Paragraph("<b>ANNEX II - Technical and Organizational Measures</b>", styles['SubsectionTitle']))
    measures = ["AES-256 encryption at rest, TLS 1.3 in transit", "Role-based access control, MFA, quarterly access reviews",
                "SOC 2 Type II certified infrastructure (Google Cloud)", "24/7 security monitoring, intrusion detection",
                "Documented incident response, 24hr breach notification", "Data minimization, retention enforcement, automated deletion"]
    for m in measures:
        content.append(Paragraph(f"   {m}", styles['BulletText']))

    content.append(Paragraph("<b>ANNEX III - Authorized Sub-processors</b>", styles['SubsectionTitle']))

    subp_data = [
        ["Sub-processor", "Location", "Service", "Safeguards"],
        ["Google Cloud Platform", "USA", "Hosting, Storage", "SCCs, SOC 2, ISO 27001"],
        ["Stripe", "USA", "Payments", "SCCs, PCI-DSS"],
        ["SendGrid (Twilio)", "USA", "Email", "SCCs, SOC 2"],
        ["OneSignal", "USA", "Push Notifications", "SCCs"],
    ]

    subp_table = Table(subp_data, colWidths=[1.6*inch, 0.8*inch, 1.4*inch, 2.7*inch])
    subp_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(subp_table)

    # Section 7: General
    content.append(Paragraph("7. GENERAL PROVISIONS", styles['SectionTitle']))
    content.append(Paragraph("<b>7.1</b> Governed by Controller's jurisdiction for EEA matters / UK for UK matters.", styles['Body']))
    content.append(Paragraph("<b>7.2</b> In case of conflict, this DPA prevails for data protection matters.", styles['Body']))
    content.append(Paragraph("<b>7.3</b> Amendments must be in writing signed by both parties.", styles['Body']))
    content.append(Paragraph("<b>7.4</b> Liability governed by Agreement, subject to GDPR Article 82.", styles['Body']))

    # Signatures
    content.extend(create_signature_block(styles))

    # Disclaimer
    content.append(Paragraph(
        "This DPA is compliant with GDPR Article 28. Contact privacy@bodyf1rst.com for questions.",
        styles['Disclaimer']
    ))

    # Build PDF
    def add_dpa_header(canvas, doc):
        add_header_footer(canvas, doc, "Data Processing Agreement")

    doc.build(content, onFirstPage=add_dpa_header, onLaterPages=add_dpa_header)
    print(f"Generated: {output_path}")
    return output_path

# ============================================
# SERVICE LEVEL AGREEMENT (SLA)
# ============================================

def generate_sla_pdf(styles):
    """Generate Service Level Agreement PDF"""
    output_path = os.path.join(OUTPUT_DIR, "BodyF1RST-SLA-Template.pdf")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=1*inch,
        bottomMargin=0.75*inch
    )

    content = []

    # Title
    content.append(Paragraph("SERVICE LEVEL AGREEMENT", styles['DocTitle']))
    content.append(Paragraph("Uptime, Support, and Performance Commitments", styles['DocSubtitle']))

    # Parties
    content.extend(create_parties_section(styles, "Provider", "Customer"))

    # Section 1: Overview
    content.append(Paragraph("1. OVERVIEW", styles['SectionTitle']))
    content.append(Paragraph(
        "This Service Level Agreement (\"SLA\") is part of the Master Service Agreement between BodyF1RST and Customer. "
        "This SLA applies to the corporate wellness platform services (\"Services\") provided by BodyF1RST.",
        styles['Body']
    ))

    # Section 2: Service Availability
    content.append(Paragraph("2. SERVICE AVAILABILITY", styles['SectionTitle']))

    content.append(Paragraph("<b>2.1 Uptime Commitment</b>", styles['SubsectionTitle']))

    uptime_data = [
        ["Service Tier", "Monthly Uptime SLA", "Annual Uptime"],
        ["Basic", "99.5%", "99.5%"],
        ["Standard", "99.9%", "99.9%"],
        ["Premium", "99.95%", "99.95%"],
    ]

    uptime_table = Table(uptime_data, colWidths=[2*inch, 2*inch, 2.5*inch])
    uptime_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(uptime_table)
    content.append(Spacer(1, 0.15*inch))

    content.append(Paragraph("<b>2.2 Uptime Calculation:</b> ((Total Minutes - Downtime Minutes) / Total Minutes) x 100", styles['Body']))
    content.append(Paragraph("<b>2.3 Exclusions:</b> Scheduled maintenance (48hr notice), emergency maintenance, Customer/third-party caused downtime, force majeure, beta features.", styles['Body']))
    content.append(Paragraph("<b>2.4 Maintenance Windows:</b> Sundays 2:00-6:00 AM Central Time, max 4 hours.", styles['Body']))

    # Section 3: Service Credits
    content.append(Paragraph("3. SERVICE CREDITS", styles['SectionTitle']))

    credit_data = [
        ["Monthly Uptime", "Service Credit"],
        ["99.0% - 99.5%", "10% of monthly fee"],
        ["98.0% - 99.0%", "25% of monthly fee"],
        ["95.0% - 98.0%", "50% of monthly fee"],
        ["< 95.0%", "100% of monthly fee"],
    ]

    credit_table = Table(credit_data, colWidths=[2.5*inch, 4*inch])
    credit_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(credit_table)
    content.append(Spacer(1, 0.1*inch))
    content.append(Paragraph("Credits must be requested within 30 days. Max credit: 100% monthly fee. Credits not refundable as cash.", styles['Body']))

    # Section 4: Incident Management
    content.append(Paragraph("4. INCIDENT MANAGEMENT", styles['SectionTitle']))

    content.append(Paragraph("<b>4.1 Priority Levels and Response Times</b>", styles['SubsectionTitle']))

    incident_data = [
        ["Priority", "Definition", "Initial Response", "Target Resolution"],
        ["P1 Critical", "Complete service outage", "15 minutes", "4 hours"],
        ["P2 High", "Major feature unavailable", "1 hour", "8 hours"],
        ["P3 Medium", "Feature partially impaired", "4 hours", "5 business days"],
        ["P4 Low", "Minor issue, workaround exists", "24 hours", "30 business days"],
    ]

    incident_table = Table(incident_data, colWidths=[1.2*inch, 2*inch, 1.4*inch, 1.9*inch])
    incident_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
        ('BACKGROUND', (2, 1), (2, 1), HexColor("#FFF7ED")),
        ('TEXTCOLOR', (2, 1), (2, 1), ORANGE),
        ('FONTNAME', (2, 1), (2, 1), 'Helvetica-Bold'),
    ]))
    content.append(incident_table)

    content.append(PageBreak())

    # Section 5: Support Services
    content.append(Paragraph("5. SUPPORT SERVICES", styles['SectionTitle']))

    support_data = [
        ["Tier", "Channels", "Availability"],
        ["Basic", "Email, Help Center", "Business hours (9AM-5PM CT)"],
        ["Standard", "Email, Chat, Help Center", "Extended (7AM-9PM CT)"],
        ["Premium", "Email, Chat, Phone, Dedicated Slack", "24/7"],
    ]

    support_table = Table(support_data, colWidths=[1.2*inch, 2.8*inch, 2.5*inch])
    support_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
        ('BACKGROUND', (2, 3), (2, 3), HexColor("#FFF7ED")),
        ('TEXTCOLOR', (2, 3), (2, 3), ORANGE),
        ('FONTNAME', (2, 3), (2, 3), 'Helvetica-Bold'),
    ]))
    content.append(support_table)
    content.append(Spacer(1, 0.1*inch))
    content.append(Paragraph("<b>Support Contact:</b> support@bodyf1rst.com | help.bodyf1rst.com", styles['Body']))

    # Section 6: Performance Benchmarks
    content.append(Paragraph("6. PERFORMANCE BENCHMARKS", styles['SectionTitle']))

    perf_data = [
        ["Metric", "Target"],
        ["API Response Time (p95)", "< 200ms"],
        ["Page Load Time", "< 3 seconds"],
        ["Mobile App Launch", "< 2 seconds"],
        ["Search Response", "< 500ms"],
    ]

    perf_table = Table(perf_data, colWidths=[3*inch, 3.5*inch])
    perf_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(perf_table)

    # Section 7: Backup and Recovery
    content.append(Paragraph("7. DATA BACKUP AND RECOVERY", styles['SectionTitle']))

    backup_data = [
        ["Backup Type", "Frequency", "Retention"],
        ["Continuous", "Real-time", "24 hours"],
        ["Daily", "Every 24 hours", "30 days"],
        ["Weekly", "Every 7 days", "90 days"],
        ["Monthly", "First of month", "1 year"],
    ]

    backup_table = Table(backup_data, colWidths=[2*inch, 2.25*inch, 2.25*inch])
    backup_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), DARK_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
    ]))
    content.append(backup_table)
    content.append(Spacer(1, 0.1*inch))
    content.append(Paragraph("<b>Recovery Objectives:</b> Standard RTO 4hr/RPO 24hr | Premium RTO 1hr/RPO 1hr", styles['Body']))

    # Section 8: Security
    content.append(Paragraph("8. SECURITY COMMITMENTS", styles['SectionTitle']))
    content.append(Paragraph("SOC 2 Type II certified | HIPAA compliant (with BAA) | GDPR compliant | Annual penetration testing | Continuous vulnerability scanning", styles['Body']))
    content.append(Paragraph("<b>Security Incident Notification:</b> Critical (breach) within 24hr | High within 48hr | Medium within 72hr | Low in monthly report", styles['Body']))

    # Section 9: Contact
    content.append(Paragraph("9. CONTACT INFORMATION", styles['SectionTitle']))
    content.append(Paragraph("<b>Technical Support:</b> support@bodyf1rst.com | help.bodyf1rst.com", styles['Body']))
    content.append(Paragraph("<b>Billing:</b> billing@bodyf1rst.com", styles['Body']))
    content.append(Paragraph("<b>Security:</b> security@bodyf1rst.com", styles['Body']))
    content.append(Paragraph("<b>Account Management:</b> success@bodyf1rst.com", styles['Body']))

    # Signatures
    content.extend(create_signature_block(styles))

    # Disclaimer
    content.append(Paragraph(
        "This SLA is part of the Master Service Agreement. Contact support@bodyf1rst.com for questions.",
        styles['Disclaimer']
    ))

    # Build PDF
    def add_sla_header(canvas, doc):
        add_header_footer(canvas, doc, "Service Level Agreement")

    doc.build(content, onFirstPage=add_sla_header, onLaterPages=add_sla_header)
    print(f"Generated: {output_path}")
    return output_path

# ============================================
# MAIN EXECUTION
# ============================================

def main():
    """Generate all contract PDFs"""
    print("=" * 60)
    print("BodyF1RST Contract PDF Generator")
    print("=" * 60)
    print()

    # Create output directory if needed
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Create styles
    styles = create_styles()

    # Generate all PDFs
    pdfs = []

    print("Generating Master Service Agreement (MSA)...")
    pdfs.append(generate_msa_pdf(styles))

    print("Generating Business Associate Agreement (BAA)...")
    pdfs.append(generate_baa_pdf(styles))

    print("Generating Data Processing Agreement (DPA)...")
    pdfs.append(generate_dpa_pdf(styles))

    print("Generating Service Level Agreement (SLA)...")
    pdfs.append(generate_sla_pdf(styles))

    print()
    print("=" * 60)
    print(f"Successfully generated {len(pdfs)} contract PDFs!")
    print("=" * 60)

    for pdf in pdfs:
        print(f"  - {os.path.basename(pdf)}")

    print()
    print("Files saved to:", OUTPUT_DIR)

if __name__ == "__main__":
    main()
