import styled from 'styled-components/native';
import colors from '@/theme/colors';
import useFontFamily from '@/hooks/useFontFamily';

const StyledViewBackground = styled.TouchableOpacity`
  width: 165px;
  height: 220px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${colors.TEXT};
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  margin-bottom: 10px;
  margin-left: 10px;
`;

const StyledTitle = styled.Text`
  color: ${colors.TEXT};
  font-size: 12px;
  text-align: center;
  font-family: ${useFontFamily('bold')};
`;

const StyledDescription = styled.Text`
  color: ${colors.TEXT};
  font-size: 12px;
  text-align: center;
  font-family: ${useFontFamily(400)};
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 75px;
`;

const StyledViewContent = styled.View`
  padding: 5px;
`;

const StyledViewFeatured = styled.View`
  width: 100%;
  height: 75px;
`;

export {
  StyledViewBackground,
  StyledTitle,
  StyledDescription,
  StyledImage,
  StyledViewContent,
  StyledViewFeatured
};
