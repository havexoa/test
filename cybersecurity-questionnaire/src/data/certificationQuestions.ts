import { Question } from '../types';

export const securityPlusQuestions: Question[] = [
  {
    id: 1,
    text: "Which of the following is the BEST description of a man-in-the-middle attack?",
    options: [
      { text: "An attack where malicious code is injected into a vulnerable web application", isCorrect: false, score: 0 },
      { text: "An attack where an attacker positions themselves between two communicating parties to intercept and modify traffic", isCorrect: true, score: 1 },
      { text: "An attack that floods a network with excessive traffic to cause a denial of service", isCorrect: false, score: 0 },
      { text: "An attack that exploits buffer overflow vulnerabilities in software", isCorrect: false, score: 0 },
      { text: "An attack that attempts to crack passwords using dictionary words", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 2,
    text: "Which encryption protocol was developed to replace WEP in wireless networks?",
    options: [
      { text: "SSL", isCorrect: false, score: 0 },
      { text: "TLS", isCorrect: false, score: 0 },
      { text: "WPA", isCorrect: true, score: 1 },
      { text: "IPsec", isCorrect: false, score: 0 },
      { text: "SSH", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 3,
    text: "What is the primary purpose of network segmentation in cybersecurity?",
    options: [
      { text: "To increase network bandwidth and performance", isCorrect: false, score: 0 },
      { text: "To reduce the attack surface and contain security breaches", isCorrect: true, score: 1 },
      { text: "To eliminate the need for firewalls and other security controls", isCorrect: false, score: 0 },
      { text: "To simplify network management and troubleshooting", isCorrect: false, score: 0 },
      { text: "To enable compatibility between different network protocols", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 4,
    text: "Which of the following authentication factors is considered 'something you are'?",
    options: [
      { text: "Password", isCorrect: false, score: 0 },
      { text: "Security token", isCorrect: false, score: 0 },
      { text: "PIN number", isCorrect: false, score: 0 },
      { text: "Fingerprint scan", isCorrect: true, score: 1 },
      { text: "Security questions", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 5,
    text: "What is a security control that restricts physical access to a server room?",
    options: [
      { text: "Firewall", isCorrect: false, score: 0 },
      { text: "Intrusion Detection System", isCorrect: false, score: 0 },
      { text: "Mantrap", isCorrect: true, score: 1 },
      { text: "Virtual Private Network", isCorrect: false, score: 0 },
      { text: "Data Loss Prevention", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 6,
    text: "Which attack involves sending specially crafted requests to determine if a web application is vulnerable to code injection?",
    options: [
      { text: "Phishing", isCorrect: false, score: 0 },
      { text: "Cross-site scripting", isCorrect: false, score: 0 },
      { text: "SQL injection", isCorrect: false, score: 0 },
      { text: "Session hijacking", isCorrect: false, score: 0 },
      { text: "Fuzzing", isCorrect: true, score: 1 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 7,
    text: "Which of the following is a form of social engineering that uses urgency to manipulate victims?",
    options: [
      { text: "Vishing", isCorrect: true, score: 1 },
      { text: "Shoulder surfing", isCorrect: false, score: 0 },
      { text: "Tailgating", isCorrect: false, score: 0 },
      { text: "Pretexting", isCorrect: false, score: 0 },
      { text: "Baiting", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 8,
    text: "Which of the following protocols operates at Layer 2 of the OSI model and is used to create secure connections between network devices?",
    options: [
      { text: "HTTPS", isCorrect: false, score: 0 },
      { text: "IPsec", isCorrect: false, score: 0 },
      { text: "SSH", isCorrect: false, score: 0 },
      { text: "PPP", isCorrect: false, score: 0 },
      { text: "L2TP", isCorrect: true, score: 1 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 9,
    text: "A security administrator needs to implement a solution that will protect sensitive data while it's stored on disk. Which of the following would BEST meet this requirement?",
    options: [
      { text: "Transport Layer Security", isCorrect: false, score: 0 },
      { text: "Full-disk encryption", isCorrect: true, score: 1 },
      { text: "Secure File Transfer Protocol", isCorrect: false, score: 0 },
      { text: "Virtual Private Network", isCorrect: false, score: 0 },
      { text: "Firewall filtering", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  },
  {
    id: 10,
    text: "Which of the following describes the process of converting plaintext into ciphertext?",
    options: [
      { text: "Hashing", isCorrect: false, score: 0 },
      { text: "Encoding", isCorrect: false, score: 0 },
      { text: "Encryption", isCorrect: true, score: 1 },
      { text: "Obfuscation", isCorrect: false, score: 0 },
      { text: "Steganography", isCorrect: false, score: 0 }
    ],
    certification: "CompTIA Security+",
    isMultipleChoice: false
  }
];

export const cisspQuestions: Question[] = [
  {
    id: 1,
    text: "Which of the following are components of the CIA triad?",
    options: [
      { text: "Confidentiality", isCorrect: true, score: 1 },
      { text: "Concurrency", isCorrect: false, score: 0 },
      { text: "Integrity", isCorrect: true, score: 1 },
      { text: "Authentication", isCorrect: false, score: 0 },
      { text: "Availability", isCorrect: true, score: 1 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 2,
    text: "Which of the following are valid categories in the NIST Risk Management Framework?",
    options: [
      { text: "Categorize", isCorrect: true, score: 1 },
      { text: "Authenticate", isCorrect: false, score: 0 },
      { text: "Implement", isCorrect: false, score: 0 },
      { text: "Monitor", isCorrect: true, score: 1 },
      { text: "Distribute", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 3,
    text: "Which of the following are considered administrative security controls?",
    options: [
      { text: "Firewall", isCorrect: false, score: 0 },
      { text: "Security awareness training", isCorrect: true, score: 1 },
      { text: "Biometric authentication", isCorrect: false, score: 0 },
      { text: "Security policies", isCorrect: true, score: 1 },
      { text: "Encryption", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 4,
    text: "Which access control models enforce rules based on the roles assigned to users?",
    options: [
      { text: "Discretionary Access Control (DAC)", isCorrect: false, score: 0 },
      { text: "Mandatory Access Control (MAC)", isCorrect: false, score: 0 },
      { text: "Role-Based Access Control (RBAC)", isCorrect: true, score: 1 },
      { text: "Rule-Based Access Control", isCorrect: true, score: 1 },
      { text: "Attribute-Based Access Control (ABAC)", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 5,
    text: "Which of the following are correct pairs of business continuity planning metrics?",
    options: [
      { text: "RTO - Recovery Time Objective", isCorrect: true, score: 1 },
      { text: "RPO - Recovery Point Operation", isCorrect: false, score: 0 },
      { text: "MTBF - Mean Time Between Failures", isCorrect: false, score: 0 },
      { text: "MTTD - Mean Time To Discovery", isCorrect: false, score: 0 },
      { text: "MTD - Maximum Tolerable Duration", isCorrect: true, score: 1 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 6,
    text: "According to the Bell-LaPadula security model, which of the following actions are allowed?",
    options: [
      { text: "A subject may read an object at a higher security level", isCorrect: false, score: 0 },
      { text: "A subject may read an object at a lower security level", isCorrect: true, score: 1 },
      { text: "A subject may write to an object at a higher security level", isCorrect: false, score: 0 },
      { text: "A subject may write to an object at a lower security level", isCorrect: false, score: 0 },
      { text: "A subject may read or write to an object at the same security level", isCorrect: true, score: 1 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 7,
    text: "Which of the following are characteristics of asymmetric encryption?",
    options: [
      { text: "Uses a single key for both encryption and decryption", isCorrect: false, score: 0 },
      { text: "Computationally more intensive than symmetric encryption", isCorrect: true, score: 1 },
      { text: "Provides non-repudiation", isCorrect: true, score: 1 },
      { text: "Typically used for encrypting large amounts of data", isCorrect: false, score: 0 },
      { text: "Uses mathematically related key pairs", isCorrect: true, score: 1 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 8,
    text: "Which of the following cryptographic attacks attempt to derive the key without knowledge of the algorithm?",
    options: [
      { text: "Side-channel attack", isCorrect: true, score: 1 },
      { text: "Birthday attack", isCorrect: false, score: 0 },
      { text: "Meet-in-the-middle attack", isCorrect: false, score: 0 },
      { text: "Known plaintext attack", isCorrect: true, score: 1 },
      { text: "Chosen ciphertext attack", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 9,
    text: "Which of the following are valid components of a security architecture framework?",
    options: [
      { text: "Security domains", isCorrect: true, score: 1 },
      { text: "Trust relationships", isCorrect: true, score: 1 },
      { text: "Security protocols", isCorrect: false, score: 0 },
      { text: "Security perimeters", isCorrect: true, score: 1 },
      { text: "Security applications", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  },
  {
    id: 10,
    text: "Which of the following are valid disaster recovery strategies?",
    options: [
      { text: "Cold site", isCorrect: true, score: 1 },
      { text: "Hybrid site", isCorrect: false, score: 0 },
      { text: "Hot site", isCorrect: true, score: 1 },
      { text: "Warm site", isCorrect: true, score: 1 },
      { text: "Virtual site", isCorrect: false, score: 0 }
    ],
    certification: "CISSP",
    isMultipleChoice: true
  }
]; 