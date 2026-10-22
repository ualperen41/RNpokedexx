import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyle } from '../../styles/uiElementsStyle';
import { ButtonProps } from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = props => {
  const { title,status } = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.85}
      style={[buttonStyle.container,status=="Filled"?buttonStyle.filledContainer:status=="Border"? buttonStyle.borderContainer:buttonStyle.outlineContainer]}
    >
      <Text style={[buttonStyle.title,status=="Filled"?buttonStyle.filledTitle:buttonStyle.outlineTitle]}>{title} </Text>
    </TouchableOpacity>
  );
};

export default Button;