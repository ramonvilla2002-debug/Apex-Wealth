import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

// Simulación de Auditoría de Datos en Tiempo Real (Firebase Logic)
const ApexDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState('Auditing...');

  useEffect(() => {
    // Simulamos la conexión segura a Apex Wealth
    setTimeout(() => {
      setBalance(12540.50);
      setStatus('Data Integrity Verified ✓');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🛡️ Apex Wealth</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>Total Assets (USD)</Text>
          <Text style={styles.balance}>${balance.toLocaleString()}</Text>
          <Text style={styles.statusText}>{status}</Text>
        </View>

        <View style={styles.auditSection}>
          <Text style={styles.sectionTitle}>Recent Audits</Text>
          <View style={styles.item}><Text>ID: #540399 - Verified</Text></View>
          <View style={styles.item}><Text>ID: #540401 - Verified</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7f6' },
  content: { padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1a2a6c', marginBottom: 30 },
  card: { width: '100%', backgroundColor: '#fff', padding: 25, borderRadius: 15, elevation: 5, alignItems: 'center' },
  label: { color: '#7f8c8d', fontSize: 14, marginBottom: 10 },
  balance: { fontSize: 36, fontWeight: 'bold', color: '#2ecc71' },
  statusText: { marginTop: 10, color: '#3498db', fontWeight: '500' },
  auditSection: { width: '100%', marginTop: 30 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  item: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, borderLeftWidth: 5, borderLeftColor: '#2ecc71' }
});

export default ApexDashboard;
