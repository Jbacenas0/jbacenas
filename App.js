import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoList from './TODOLIST/TodoList';

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <TodoList/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
