import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
// import { Feather } from '@expo/vector-icons';

import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
  );
}

// childrennに渡すデータ型を文字列として定義＆利用を必須とする
CircleButton.propTypes = {
  // children: string.isRequired,
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

// 必須としない場合は空文字列/nullを渡してESLintの警告を回避
CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,

    // shadowプロパティはIOSのみ対応
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.25,
    // shadowRadius: 8,

    // elevationはandroidのみ対応
    elevation: 12,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
    top: 4,
  },
})
