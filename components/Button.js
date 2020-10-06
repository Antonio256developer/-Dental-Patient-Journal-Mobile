import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ children, color, onPress }) => (
    <ButtonWrapper onPress={onPress} color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
);

Button.defaultProps = {
 color: '#2a86ff'
};

const ButtonWrapper = styled.TouchableOpacity`
 display: flex;
 border-radius: 30px;
 height: 45px;
 background: ${props => props.color};
 justify-content: center;
 align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 16px;
`;

export default Button;
