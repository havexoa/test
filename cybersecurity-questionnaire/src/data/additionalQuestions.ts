import { Question } from '../types';

export const additionalSecurityPlusQuestions: Question[] = [
  {
    id: 101,
    text: "Which of the following malware types is designed to encrypt files and demand payment for the decryption key?",
    options: [
      { text: "Trojan horse", isCorrect: false, score: 0 },
      { text: "Worm", isCorrect: false, score: 0 },
      { text: "Spyware", isCorrect: false, score: 0 },
      { text: "Ransomware", isCorrect: true, score: 1 },
      { text: "Adware", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 102,
    text: "Which of the following is the BEST defense against a dictionary attack?",
    options: [
      { text: "Complex password requirements", isCorrect: false, score: 0 },
      { text: "Account lockout policies", isCorrect: false, score: 0 },
      { text: "Salted password hashes", isCorrect: true, score: 1 },
      { text: "Regular password rotation", isCorrect: false, score: 0 },
      { text: "Two-factor authentication", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 103,
    text: "What is the primary purpose of a DMZ in network architecture?",
    options: [
      { text: "To prevent unauthorized access to internal networks", isCorrect: false, score: 0 },
      { text: "To host public-facing services while protecting the internal network", isCorrect: true, score: 1 },
      { text: "To encrypt traffic between network segments", isCorrect: false, score: 0 },
      { text: "To improve network performance by reducing latency", isCorrect: false, score: 0 },
      { text: "To filter malicious traffic before it reaches any network assets", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 104,
    text: "Which security control would be classified as a detective control?",
    options: [
      { text: "Firewall", isCorrect: false, score: 0 },
      { text: "Intrusion Detection System", isCorrect: true, score: 1 },
      { text: "Encryption", isCorrect: false, score: 0 },
      { text: "Access control list", isCorrect: false, score: 0 },
      { text: "Security awareness training", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 105,
    text: "What is the primary security concern with BYOD (Bring Your Own Device) policies?",
    options: [
      { text: "Increased hardware costs", isCorrect: false, score: 0 },
      { text: "Lack of standardization", isCorrect: false, score: 0 },
      { text: "Data leakage and loss of control", isCorrect: true, score: 1 },
      { text: "Software compatibility issues", isCorrect: false, score: 0 },
      { text: "Reduced employee productivity", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 106,
    text: "Which of the following describes the process of proving that a message has not been altered in transit?",
    options: [
      { text: "Authentication", isCorrect: false, score: 0 },
      { text: "Authorization", isCorrect: false, score: 0 },
      { text: "Confidentiality", isCorrect: false, score: 0 },
      { text: "Integrity", isCorrect: true, score: 1 },
      { text: "Availability", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 107,
    text: "Which type of attack attempts to exploit the trust relationship between a user and a legitimate website?",
    options: [
      { text: "Cross-site scripting (XSS)", isCorrect: false, score: 0 },
      { text: "SQL injection", isCorrect: false, score: 0 },
      { text: "Cross-site request forgery (CSRF)", isCorrect: true, score: 1 },
      { text: "Directory traversal", isCorrect: false, score: 0 },
      { text: "Command injection", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 108,
    text: "Which of the following is the BEST approach to mitigate zero-day vulnerabilities?",
    options: [
      { text: "Regular patching", isCorrect: false, score: 0 },
      { text: "Defense-in-depth strategy", isCorrect: true, score: 1 },
      { text: "Antivirus software", isCorrect: false, score: 0 },
      { text: "Web application firewall", isCorrect: false, score: 0 },
      { text: "User training", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 109,
    text: "Which of the following wireless encryption standards is considered the most secure?",
    options: [
      { text: "WEP", isCorrect: false, score: 0 },
      { text: "WPA", isCorrect: false, score: 0 },
      { text: "WPA2", isCorrect: false, score: 0 },
      { text: "WPA3", isCorrect: true, score: 1 },
      { text: "TKIP", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  },
  {
    id: 110,
    text: "Which of the following is NOT a common penetration testing phase?",
    options: [
      { text: "Reconnaissance", isCorrect: false, score: 0 },
      { text: "Scanning", isCorrect: false, score: 0 },
      { text: "Gaining access", isCorrect: false, score: 0 },
      { text: "Vulnerability remediation", isCorrect: true, score: 1 },
      { text: "Maintaining access", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: false,
    certification: "security-plus"
  }
];

export const additionalCISSPQuestions: Question[] = [
  {
    id: 201,
    text: "Which of the following are key elements of a security governance framework?",
    options: [
      { text: "Strategic alignment", isCorrect: true, score: 1 },
      { text: "Risk management", isCorrect: true, score: 1 },
      { text: "Technical implementation", isCorrect: false, score: 0 },
      { text: "Resource management", isCorrect: false, score: 0 },
      { text: "Performance measurement", isCorrect: true, score: 1 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 202,
    text: "According to the Biba integrity model, which of the following rules are enforced?",
    options: [
      { text: "No read up", isCorrect: false, score: 0 },
      { text: "No read down", isCorrect: true, score: 1 },
      { text: "No write up", isCorrect: true, score: 1 },
      { text: "No write down", isCorrect: false, score: 0 },
      { text: "Read equals", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 203,
    text: "Which of the following are valid types of evidence that might be collected during a digital forensics investigation?",
    options: [
      { text: "Real evidence", isCorrect: true, score: 1 },
      { text: "Documentary evidence", isCorrect: true, score: 1 },
      { text: "Testimonial evidence", isCorrect: false, score: 0 },
      { text: "Circumstantial evidence", isCorrect: true, score: 1 },
      { text: "Irrelevant evidence", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 204,
    text: "Which of the following are valid controls in the SDLC (Software Development Life Cycle) security?",
    options: [
      { text: "Secure code review", isCorrect: true, score: 1 },
      { text: "Secure design principles", isCorrect: false, score: 0 },
      { text: "User acceptance testing", isCorrect: false, score: 0 },
      { text: "Dynamic application security testing", isCorrect: true, score: 1 },
      { text: "Production monitoring", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 205,
    text: "Which of the following are components of security architecture models?",
    options: [
      { text: "Security mechanisms", isCorrect: true, score: 1 },
      { text: "Security services", isCorrect: true, score: 1 },
      { text: "Security posture", isCorrect: false, score: 0 },
      { text: "Security layers", isCorrect: true, score: 1 },
      { text: "Security management", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 206,
    text: "Which security principles are fundamental to implementing least privilege?",
    options: [
      { text: "Separation of duties", isCorrect: true, score: 1 },
      { text: "Job rotation", isCorrect: false, score: 0 },
      { text: "Need to know", isCorrect: true, score: 1 },
      { text: "Defense in depth", isCorrect: false, score: 0 },
      { text: "Single point of failure", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 207,
    text: "Which of the following are valid security testing methodologies?",
    options: [
      { text: "Black box testing", isCorrect: true, score: 1 },
      { text: "White box testing", isCorrect: true, score: 1 },
      { text: "Blue box testing", isCorrect: false, score: 0 },
      { text: "Gray box testing", isCorrect: true, score: 1 },
      { text: "Purple box testing", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 208,
    text: "Which of the following are valid control types in the ISO 27001 framework?",
    options: [
      { text: "Administrative controls", isCorrect: true, score: 1 },
      { text: "Technical controls", isCorrect: true, score: 1 },
      { text: "Physical controls", isCorrect: true, score: 1 },
      { text: "Compensating controls", isCorrect: false, score: 0 },
      { text: "Corrective controls", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 209,
    text: "Which of the following are valid business continuity plan testing methods?",
    options: [
      { text: "Tabletop exercise", isCorrect: true, score: 1 },
      { text: "Parallel test", isCorrect: true, score: 1 },
      { text: "Full interruption test", isCorrect: true, score: 1 },
      { text: "Automated test", isCorrect: false, score: 0 },
      { text: "Regression test", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  },
  {
    id: 210,
    text: "Which of the following cryptographic algorithms are considered asymmetric?",
    options: [
      { text: "AES", isCorrect: false, score: 0 },
      { text: "RSA", isCorrect: true, score: 1 },
      { text: "3DES", isCorrect: false, score: 0 },
      { text: "ECC", isCorrect: true, score: 1 },
      { text: "Blowfish", isCorrect: false, score: 0 }
    ],
    isMultipleChoice: true,
    certification: "cissp"
  }
]; 