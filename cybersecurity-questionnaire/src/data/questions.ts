import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Do you maintain a real-time or regularly updated inventory of all enterprise assets, such as laptops, servers, mobile devices, and cloud workloads?",
    options: [
      { text: "Yes, real-time updates with automated discovery", score: 5, isCorrect: true },
      { text: "Partially, we update it manually or on a schedule", score: 3, isCorrect: true },
      { text: "We have an informal or incomplete list", score: 1, isCorrect: true },
      { text: "We don't have an asset inventory at all", score: 0, isCorrect: true },
    ],
    isQuickAssessment: true,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 2,
    text: "Does your inventory cover only on-prem assets, or also include cloud and remote devices?",
    options: [
      { text: "All devices, everywhere", score: 5, isCorrect: true },
      { text: "On-prem and corporate-managed only", score: 3, isCorrect: true },
      { text: "Only some — remote/cloud are missed", score: 2, isCorrect: true },
      { text: "Not sure", score: 1, isCorrect: true },
    ],
    isQuickAssessment: true,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 3,
    text: "A shadow server was spun up in AWS with default credentials. Six months later, it's compromised. Could this happen in your kingdom?",
    options: [
      { text: "No, we would catch it", score: 5, isCorrect: true },
      { text: "Possibly, if it wasn't registered", score: 3, isCorrect: true },
      { text: "Definitely — that sounds familiar", score: 1, isCorrect: true },
      { text: "Not sure, but now I'm worried", score: 2, isCorrect: true },
    ],
    isQuickAssessment: false,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 4,
    text: "Do you use a firewall to segment internal networks and control traffic between them?",
    options: [
      { text: "Yes, fully segmented with rules", score: 5, isCorrect: true },
      { text: "Partially segmented", score: 3, isCorrect: true },
      { text: "Flat network, basic firewall", score: 2, isCorrect: true },
      { text: "No segmentation", score: 0, isCorrect: true },
    ],
    isQuickAssessment: true,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 5,
    text: "Are your security patches applied automatically and within 24–48 hours of release?",
    options: [
      { text: "Yes, auto patching within 24h", score: 5, isCorrect: true },
      { text: "Patching is manual but within 48h", score: 3, isCorrect: true },
      { text: "Only monthly or irregularly", score: 2, isCorrect: true },
      { text: "Rarely or never patch", score: 0, isCorrect: true },
    ],
    isQuickAssessment: true,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 6,
    text: "Do you use endpoint detection and response (EDR) tools on all critical systems?",
    options: [
      { text: "Yes, on all endpoints", score: 5, isCorrect: true },
      { text: "Only on servers or critical endpoints", score: 3, isCorrect: true },
      { text: "Basic antivirus only", score: 1, isCorrect: true },
      { text: "No endpoint protection", score: 0, isCorrect: true },
    ],
    isQuickAssessment: true,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  },
  {
    id: 7,
    text: "Do you have centralized log collection and SIEM alerts configured?",
    options: [
      { text: "Yes, logs ingested and alerts in place", score: 5, isCorrect: true },
      { text: "Logs collected but no alerts", score: 3, isCorrect: true },
      { text: "Some logs collected manually", score: 1, isCorrect: true },
      { text: "No central log collection", score: 0, isCorrect: true },
    ],
    isQuickAssessment: false,
    certification: "Cybersecurity Assessment",
    isMultipleChoice: false
  }
]; 