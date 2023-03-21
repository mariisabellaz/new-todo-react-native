import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1A1A1A;
`;

export const Header = styled.View`
  height: 173px;
  width: 100%;
  background-color: #0D0D0D;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
  source: require('../../assets/logo.png')
})`
  width: 112px;
  height: 32px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 24px;
  position: absolute;
  bottom: -25px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 54px;
  font-size: 16px;
  background-color: #1f1e25;
  border-radius: 5px;
  color: #fdfcfe;
  padding: 16px;
  margin-right: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  width: 52px;
  background-color: #1E6F9F;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  margin: 24px;
`;