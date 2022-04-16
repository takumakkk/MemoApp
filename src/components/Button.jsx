import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLable}>{label}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  label: string.isRequired,
  onpress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLable: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    color: '#ffffff',
  },
});
