import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ taskText, setTaskText, addTask }) {
  return (
    <View>
      <TextInput 
        value={taskText}
        onChangeText={setTaskText} 
        placeholder="Introduzca una tarea" 
        style={styles.input}
      />
      <Button 
        title="Anotar" 
        onPress={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'white',
  },
});