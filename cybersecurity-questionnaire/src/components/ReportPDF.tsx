import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Question, UserInfo } from '../types';
import cyboltLogo from '../assets/cybolt-logo.png';

interface ReportPDFProps {
  answers: number[];
  questions: Question[];
  userInfo: UserInfo;
  assessmentType: 'company' | 'quick' | 'detailed';
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  question: {
    fontSize: 12,
    marginBottom: 5,
  },
  answer: {
    fontSize: 12,
    marginBottom: 10,
    color: '#666',
  },
  score: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
  maturityLevel: {
    fontSize: 16,
    marginTop: 10,
    color: '#ff6b00',
  },
});

const ReportPDF: React.FC<ReportPDFProps> = ({ answers, questions, userInfo, assessmentType }) => {
  const score = answers.reduce((sum, answer) => sum + (answer + 1), 0);
  const maxScore = questions.length * 5;
  const percentage = (score / maxScore) * 100;
  let maturityLevel = '';

  if (percentage >= 80) {
    maturityLevel = 'Advanced';
  } else if (percentage >= 60) {
    maturityLevel = 'Intermediate';
  } else if (percentage >= 40) {
    maturityLevel = 'Basic';
  } else {
    maturityLevel = 'Initial';
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={cyboltLogo} style={styles.logo} />
          <View>
            <Text style={styles.title}>Cybersecurity Assessment Report</Text>
            <Text style={styles.subtitle}>
              {assessmentType === 'quick' ? 'Quick Assessment' : 
               assessmentType === 'detailed' ? 'Detailed Assessment' : 
               'Company Assessment'}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text>Name: {userInfo.name}</Text>
          <Text>Company: {userInfo.company}</Text>
        </View>

        <View style={styles.section}>
          {questions.map((question, index) => (
            <View key={question.id}>
              <Text style={styles.question}>
                {index + 1}. {question.text}
              </Text>
              <Text style={styles.answer}>
                Answer: {question.options[answers[index]].text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.score}>
            Score: {score} out of {maxScore} ({percentage.toFixed(1)}%)
          </Text>
          <Text style={styles.maturityLevel}>
            Maturity Level: {maturityLevel}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF; 