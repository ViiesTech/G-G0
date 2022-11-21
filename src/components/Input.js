import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({placeholder, secureTextEntry, keyboardType='default'}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="grey"
        secureTextEntry={secureTextEntry}
        style={styles.input}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '5%',
    borderRadius: 15,
    paddingHorizontal: 15,
    overflow: 'hidden',
    color: 'black'
  },
});
