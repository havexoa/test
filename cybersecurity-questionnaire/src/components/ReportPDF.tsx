import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Question } from '../types';
import cyboltLogo from '../assets/cybolt-logo.png';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 40,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    color: '#ff6b00',
    marginBottom: 20
  },
  userInfo: {
    fontSize: 14,
    marginBottom: 30
  },
  section: {
    marginBottom: 20
  },
  question: {
    fontSize: 12,
    marginBottom: 10,
    color: '#333333'
  },
  answer: {
    fontSize: 10,
    marginLeft: 20,
    marginBottom: 5,
    color: '#666666'
  },
  summary: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  summaryTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#ff6b00'
  },
  summaryText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333333'
  }
});

interface ReportPDFProps {
  answers: number[];
  questions: Question[];
  userInfo: {
    name: string;
    company: string;
  };
  score: number;
  maturityLevel: string;
}

const ReportPDF: React.FC<ReportPDFProps> = ({ answers, questions, userInfo, score, maturityLevel }) => {
  const maxScore = questions.length * 5;
  const percentage = (score / maxScore) * 100;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={cyboltLogo} style={styles.logo} />
        </View>
        <Text style={styles.title}>Cybersecurity Maturity Assessment Report</Text>
        <Text style={styles.userInfo}>
          Name: {userInfo.name}
          {'\n'}
          Company: {userInfo.company}
        </Text>
        
        <View style={styles.section}>
          {questions.map((question, index) => (
            <View key={question.id}>
              <Text style={styles.question}>
                {index + 1}. {question.text}
              </Text>
              <Text style={styles.answer}>
                Answer: {question.options[answers[index]]?.text || 'Not answered'}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Assessment Summary</Text>
          <Text style={styles.summaryText}>Total Score: {score} / {maxScore} ({percentage.toFixed(1)}%)</Text>
          <Text style={styles.summaryText}>Maturity Level: {maturityLevel}</Text>
          <Text style={styles.summaryText}>
            Recommendation: Review your gaps and prioritize quick wins for visibility and control.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF; 