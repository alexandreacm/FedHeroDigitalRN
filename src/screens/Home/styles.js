import styled from 'styled-components/native';
import colors from '@/theme/colors';
import useFontFamily from '@/hooks/useFontFamily';
import { handlePixels } from '@/helpers/functions/utils';

const StyledBackground = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const StyledFlatList = styled.FlatList`
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-size: ${({ fontSize }) => handlePixels(fontSize)};
  font-family: ${({ fontWeight }) => useFontFamily(fontWeight)};
  line-height: ${({ lineHeight }) =>
    lineHeight ? handlePixels(lineHeight) : 0};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? handlePixels(marginBottom) : 0};
  padding: ${({ padding }) => (padding ? handlePixels(padding) : 0)};
`;

const StyledNoInternetView = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${colors.DANGER};
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const StyledNoInternetText = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE};
  font-family: ${useFontFamily(500)};
`;

export {
  StyledBackground,
  StyledFlatList,
  StyledLabel,
  StyledNoInternetView,
  StyledNoInternetText
};
