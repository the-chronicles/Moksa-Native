import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/styles';

const DoneButton = ({ ...props }) => (
  <View style={styles.doneContainer}>
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.doneButtonText}>Log In</Text>
    </TouchableOpacity>
  </View>
);

export default DoneButton;
