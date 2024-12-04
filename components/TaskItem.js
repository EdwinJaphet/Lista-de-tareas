import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const TaskItem = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  const handleToggle = () => toggleTaskCompletion(index);
  const handleDelete = () => deleteTask(index);

  return (
    <View style={styles.taskRow}>
      <Pressable onPress={handleToggle} style={styles.icon}>
        <Text>{task.completed ? '⭐' : '⬜'}</Text>
      </Pressable>

      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.text}
      </Text>

      {task.completed && (
        <Pressable onPress={handleDelete} style={styles.deleteIcon}>
          <Text style={styles.deleteText}>❌</Text>
        </Pressable>
      )}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteIcon: {
    padding: 5,
    marginLeft: 10,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
