
import styled, { css } from 'styled-components/native';

type LabelProps = {
  type: 'created' | 'completed';
}

export const Container = styled.View`
  margin-top: 32px;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<LabelProps>`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  margin-right: 8px;
  
  ${({ type }) => type === 'created' && css` 
    color: #4EA8DE;
  `}

  ${({ type }) => type === 'completed' && css` 
    color: #8284FA;
  `}
`;

export const Counter = styled.View`
  width: 25px;
  height: 20px;
  background-color: #333333;

  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CounterLabel = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #D9D9D9;
`;