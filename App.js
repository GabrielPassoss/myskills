import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'

export default function App () {

    const [newSkill, setNewSkill] = useState()
    const [mySkills, setMySkills] = useState([])

    function handleAddSkill() {
      setMySkills(oldState => [...oldState, newSkill])
    }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-Vindo Gabriel</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova Habilidade"
        placeholderTextColor="#555"
        onChangeText= {setNewSkill}
      />

      <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddSkill}>
        <Text>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 35}]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
             {skill}
            </Text>
          </ TouchableOpacity>
        ))
      }

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
  flex: 1,
  backgroundColor: '#121015',
  paddingHorizontal: 30,
  paddingVertical: 50,
  },
  
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },

  button: {
    backgroundColor: '#A370F7',
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 15,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 20,
    borderRadius: 22,
    alignItems: 'center',
    marginBottom: 15,
  },

  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})