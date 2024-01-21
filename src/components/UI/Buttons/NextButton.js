import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/styles';

const NextButton = ({ ...props }) => (
  <View style={styles.nextContainer}>
    <TouchableOpacity style={styles.nextButton} {...props}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

export default NextButton;
