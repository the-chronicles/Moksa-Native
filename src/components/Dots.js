import React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import Colors from '../constants/colors';
import NextButton from './UI/Buttons/NextButton';

const Dots = ({ selected }) => (
  <View
    style={[
      styles.dot,
      {
        backgroundColor: selected ? Colors.primary100 : Colors.primary200,
      },
    ]}
  />
);

export default Dots;
