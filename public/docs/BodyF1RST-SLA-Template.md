# SERVICE LEVEL AGREEMENT

**Between:**

**BodyF1RST, Inc.**
("Provider")

**And:**

**[CUSTOMER NAME]**
("Customer")

**Effective Date:** [DATE]

---

## 1. OVERVIEW

This Service Level Agreement ("SLA") is part of the Master Service Agreement between BodyF1RST and Customer. This SLA applies to the corporate wellness platform services ("Services") provided by BodyF1RST.

---

## 2. SERVICE AVAILABILITY

### 2.1 Uptime Commitment

| Service Tier | Monthly Uptime SLA | Annual Uptime |
|-------------|-------------------|---------------|
| Basic | 99.5% | 99.5% |
| Standard | 99.9% | 99.9% |
| Premium | 99.95% | 99.95% |

### 2.2 Uptime Calculation

**Uptime Percentage** = ((Total Minutes - Downtime Minutes) / Total Minutes) × 100

### 2.3 Exclusions

The following are excluded from Downtime calculations:
- Scheduled maintenance (with 48 hours' notice)
- Emergency maintenance (security patches, critical fixes)
- Downtime caused by Customer or third parties
- Force majeure events
- Features in beta or preview
- Issues with Customer's equipment, network, or integrations

### 2.4 Scheduled Maintenance Windows

- **Regular Maintenance:** Sundays, 2:00 AM - 6:00 AM Central Time
- **Notice:** 48 hours minimum for scheduled maintenance
- **Duration:** Maximum 4 hours per maintenance window

---

## 3. SERVICE CREDITS

### 3.1 Credit Schedule

If BodyF1RST fails to meet the Uptime SLA, Customer is eligible for service credits:

| Monthly Uptime | Service Credit |
|---------------|----------------|
| 99.0% - 99.5% | 10% of monthly fee |
| 98.0% - 99.0% | 25% of monthly fee |
| 95.0% - 98.0% | 50% of monthly fee |
| < 95.0% | 100% of monthly fee |

### 3.2 Credit Request Process

1. Customer must request credits within 30 days of the incident
2. Request must include dates, times, and description of the outage
3. BodyF1RST will validate the claim within 10 business days
4. Approved credits applied to next invoice

### 3.3 Credit Limitations

- Maximum credit per month: 100% of monthly fee
- Credits are not refundable as cash
- Credits expire if not used within 12 months
- Credits do not apply to unpaid invoices

---

## 4. INCIDENT MANAGEMENT

### 4.1 Incident Priority Levels

| Priority | Definition | Examples |
|----------|------------|----------|
| **P1 - Critical** | Complete service outage affecting all users | Platform completely unavailable |
| **P2 - High** | Major feature unavailable or significant degradation | AI coaching not working, login issues |
| **P3 - Medium** | Feature partially impaired | Slow performance, intermittent errors |
| **P4 - Low** | Minor issue, workaround available | Cosmetic bugs, non-critical features |

### 4.2 Response Times

| Priority | Initial Response | Status Updates | Target Resolution |
|----------|-----------------|----------------|-------------------|
| P1 - Critical | 15 minutes | Every 30 minutes | 4 hours |
| P2 - High | 1 hour | Every 2 hours | 8 hours |
| P3 - Medium | 4 hours | Daily | 5 business days |
| P4 - Low | 24 hours | Weekly | 30 business days |

### 4.3 Escalation Path

| Escalation Level | Timeframe | Contact |
|-----------------|-----------|---------|
| Level 1 | Immediate | Support Team |
| Level 2 | After 2 hours (P1) / 4 hours (P2) | Engineering Manager |
| Level 3 | After 4 hours (P1) / 8 hours (P2) | VP Engineering |
| Level 4 | After 8 hours (P1) / 24 hours (P2) | CEO |

---

## 5. SUPPORT SERVICES

### 5.1 Support Channels

| Tier | Channels | Availability |
|------|----------|--------------|
| Basic | Email, Help Center | Business hours (9 AM - 5 PM CT) |
| Standard | Email, Chat, Help Center | Extended hours (7 AM - 9 PM CT) |
| Premium | Email, Chat, Phone, Dedicated Slack | 24/7 |

### 5.2 Support Hours

- **Business Hours:** Monday - Friday, 9:00 AM - 5:00 PM Central Time
- **Extended Hours:** Monday - Friday, 7:00 AM - 9:00 PM Central Time
- **24/7:** Available for Premium tier customers

### 5.3 Support Contact

- **Email:** support@bodyf1rst.com
- **Phone (Premium):** [Provided upon contract signing]
- **Help Center:** help.bodyf1rst.com

---

## 6. CUSTOMER SUCCESS

### 6.1 Account Management

| Tier | Account Management |
|------|-------------------|
| Basic | Self-service with email support |
| Standard | Shared Success Manager |
| Premium | Dedicated Account Manager |

### 6.2 Premium Account Benefits

- Dedicated Account Manager
- Quarterly Business Reviews
- Custom training sessions
- Priority feature requests
- Early access to new features
- Direct engineering escalation path

---

## 7. PERFORMANCE BENCHMARKS

### 7.1 Application Performance

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 3 seconds |
| Mobile App Launch | < 2 seconds |
| Search Response | < 500ms |

### 7.2 Capacity

| Metric | Commitment |
|--------|------------|
| Concurrent Users | Unlimited (within license) |
| Data Storage | Per agreement |
| API Rate Limits | 1,000 requests/minute per user |

---

## 8. DATA BACKUP AND RECOVERY

### 8.1 Backup Schedule

| Backup Type | Frequency | Retention |
|------------|-----------|-----------|
| Continuous | Real-time | 24 hours |
| Daily | Every 24 hours | 30 days |
| Weekly | Every 7 days | 90 days |
| Monthly | First of month | 1 year |

### 8.2 Recovery Objectives

| Metric | Standard | Premium |
|--------|----------|---------|
| Recovery Time Objective (RTO) | 4 hours | 1 hour |
| Recovery Point Objective (RPO) | 24 hours | 1 hour |

### 8.3 Disaster Recovery

- Multi-region deployment with automatic failover
- Annual disaster recovery testing
- Documented recovery procedures
- Customer notification within 1 hour of DR activation

---

## 9. SECURITY COMMITMENTS

### 9.1 Security Standards

- SOC 2 Type II certified
- HIPAA compliant (with BAA)
- GDPR compliant
- Annual penetration testing
- Continuous vulnerability scanning

### 9.2 Security Incident Response

| Severity | Notification |
|----------|--------------|
| Critical (data breach) | Within 24 hours |
| High (potential exposure) | Within 48 hours |
| Medium (vulnerability) | Within 72 hours |
| Low (informational) | Monthly report |

---

## 10. REPORTING

### 10.1 Standard Reports

| Report | Frequency | Delivery |
|--------|-----------|----------|
| Uptime Report | Monthly | Dashboard + Email |
| Incident Summary | Monthly | Dashboard + Email |
| Usage Analytics | Real-time | Dashboard |
| Security Summary | Quarterly | Email |

### 10.2 Premium Reports

- Custom analytics dashboards
- API access to metrics
- Real-time alerting
- Executive summary reports

---

## 11. SLA REVIEW

### 11.1 Review Process

- This SLA is reviewed annually
- Changes communicated 30 days in advance
- Customer feedback incorporated

### 11.2 Continuous Improvement

BodyF1RST commits to:
- Quarterly service quality reviews
- Root cause analysis for P1/P2 incidents
- Preventive measures implementation
- Transparency in incident post-mortems

---

## 12. CONTACT INFORMATION

**Technical Support:**
- Email: support@bodyf1rst.com
- Phone (Premium): [Provided upon signing]
- Help Center: help.bodyf1rst.com

**Billing Inquiries:**
- Email: billing@bodyf1rst.com

**Security Concerns:**
- Email: security@bodyf1rst.com

**Account Management:**
- Email: success@bodyf1rst.com

---

## SIGNATURES

**BodyF1RST, Inc.**

Signature: ________________________

Name: ________________________

Title: ________________________

Date: ________________________


**[CUSTOMER NAME]**

Signature: ________________________

Name: ________________________

Title: ________________________

Date: ________________________

---

*This SLA is part of the Master Service Agreement. For questions, contact support@bodyf1rst.com.*
