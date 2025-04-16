export interface QuizQuestion {
  id: string;
  text: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  certification: 'Security+' | 'CISSP';
  isMultipleChoice: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'sec-1',
    text: 'Which of the following is the BEST description of a man-in-the-middle attack?',
    options: [
      { text: 'An attack where malicious code is injected into a vulnerable web application', isCorrect: false },
      { text: 'An attack where an attacker positions themselves between two communicating parties to intercept and modify traffic', isCorrect: true },
      { text: 'An attack that floods a network with excessive traffic to cause a denial of service', isCorrect: false },
      { text: 'An attack that exploits buffer overflow vulnerabilities in software', isCorrect: false },
      { text: 'An attack that attempts to crack passwords using dictionary words', isCorrect: false }
    ],
    certification: 'Security+',
    isMultipleChoice: false
  },
  {
    id: 'sec-2',
    text: 'Which encryption protocol was developed to replace WEP in wireless networks?',
    options: [
      { text: 'SSL', isCorrect: false },
      { text: 'TLS', isCorrect: false },
      { text: 'WPA', isCorrect: true },
      { text: 'IPsec', isCorrect: false },
      { text: 'SSH', isCorrect: false }
    ],
    certification: 'Security+',
    isMultipleChoice: false
  },
  {
    id: 'sec-3',
    text: 'What is the primary purpose of network segmentation in cybersecurity?',
    options: [
      { text: 'To increase network bandwidth and performance', isCorrect: false },
      { text: 'To reduce the attack surface and contain security breaches', isCorrect: true },
      { text: 'To eliminate the need for firewalls and other security controls', isCorrect: false },
      { text: 'To simplify network management and troubleshooting', isCorrect: false },
      { text: 'To enable compatibility between different network protocols', isCorrect: false }
    ],
    certification: 'Security+',
    isMultipleChoice: false
  },
  {
    id: 'cissp-1',
    text: 'Which of the following are components of the CIA triad?',
    options: [
      { text: 'Confidentiality', isCorrect: true },
      { text: 'Concurrency', isCorrect: false },
      { text: 'Integrity', isCorrect: true },
      { text: 'Authentication', isCorrect: false },
      { text: 'Availability', isCorrect: true }
    ],
    certification: 'CISSP',
    isMultipleChoice: true
  },
  {
    id: 'cissp-2',
    text: 'Which of the following are valid categories in the NIST Risk Management Framework?',
    options: [
      { text: 'Categorize', isCorrect: true },
      { text: 'Authenticate', isCorrect: false },
      { text: 'Implement', isCorrect: false },
      { text: 'Monitor', isCorrect: true },
      { text: 'Distribute', isCorrect: false }
    ],
    certification: 'CISSP',
    isMultipleChoice: true
  }
  // Add more questions following the same pattern
]; 