import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { questions } from '../data/questions';
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
    color: '#1976d2',
    flex: 1
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
    color: '#1976d2'
  },
  summaryText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333333'
  }
});

interface ReportPDFProps {
  answers: number[];
  score: number;
  maturityLevel: string;
}

const ReportPDF: React.FC<ReportPDFProps> = ({ answers, score, maturityLevel }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={cyboltLogo} style={styles.logo} />
        </View>
        
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
          <Text style={styles.summaryText}>Total Score: {score} / 35</Text>
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