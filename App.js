import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#dca53a" />
        <Text style={styles.text}>جاري تحميل التطبيق...</Text>
        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>مجلس المنشاوي</Text>
      <Text style={styles.subtitle}>ديوان التلاوات</Text>
      <Text style={styles.version}>الإصدار 1.0.63</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1410',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#dca53a',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fced9d',
    marginTop: 10,
  },
  version: {
    fontSize: 14,
    color: '#8d620c',
    marginTop: 20,
  },
  text: {
    color: '#dca53a',
    marginTop: 20,
    fontSize: 16,
  },
});
