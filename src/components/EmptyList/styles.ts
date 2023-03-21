import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  border-top-color: #333333;
  border-top-width: 1px;
  padding-top: 48px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #808080;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #808080;
`;

export const Clipboard = styled.Image.attrs({
  resizeMode: 'stretch',
  source: require('../../assets/clipboard.png')
})`
  width: 56px;
  height: 56px;

  align-self: center;
  margin-bottom: 16px;
`; 