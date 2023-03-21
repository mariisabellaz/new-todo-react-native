
import styled, { css } from 'styled-components/native';

type CheckboxProps = {
  done: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 64px;
  flex-direction: row;

  background-color: #262626;
  border: 1px solid #333333;
  border-radius: 8px;
  
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  padding: 0 12px;
`;

export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})<CheckboxProps>`
  flex: 1;
  margin-left: 10px;

  font-size: 16px;
  color: #FFF;

  ${({ done }) => done && css` 
    color: #808080;
    text-decoration-line: line-through;
  `}
`;

export const Checkbox = styled.TouchableOpacity.attrs({
  activeOpacity:0.7,
})<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 12px;

  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 2px solid #4EA8DE;

  ${({ done }) => done && css` 
    background-color: #5E60CE;
    border: 0.5px solid #4EA8DE;
    opacity: 0.9;
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;
`;