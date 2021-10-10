import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import Icon from './components/Icon';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>
        Making changes here
        <Icon/>
      </Text>
      <View style={styles.item}>
     
        <Task text="New Item"/>

      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom:15,
  },
  items:{
    marginTop:30,
  }
});
