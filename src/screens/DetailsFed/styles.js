import styled from 'styled-components/native';
import colors from '@/theme/colors';
import useFontFamily from '@/hooks/useFontFamily';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledViewBackground = styled.View`
  width: 500px;
  height: 510px;
`;

const StyledTitle = styled.Text`
  color: ${colors.TEXT};
  font-size: 14px;
  text-align: center;
  font-family: ${useFontFamily('bold')};
`;

const StyledViewContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const StyledViewContainerTitle = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const StyledViewTitle = styled.View`
  width: 250px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const StyledViewTag = styled.View`
  width: 165px;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${colors.TEXT};
  background-color: ${colors.TEXT};
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const StyledTextTag = styled.Text`
  color: ${colors.WHITE};
  font-size: 12px;
  text-align: center;
  font-family: ${useFontFamily('bold')};
  text-align: center;
`;

const StyledViewContainerFlat = styled.View`
  width: 100%;
  height: 220px;
  justify-content: center;
  align-items: center;
`;

const StyledViewContainerFooter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const StyledViewFooter = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
  margin-right: 65px;
`;

const StyledTextFooter = styled.Text`
  color: ${colors.TEXT};
  font-size: 12px;
  text-align: center;
  font-family: ${useFontFamily(600)};
`;

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    marginVertical: 10
  }
})``;

const StyledViewContainerDescription = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledViewTitleDescription = styled.View`
  flex: 1;
  margin-left: 60px;
  margin-right: 50px;
  padding: 20px;
`;

const StyledDescription = styled.Text`
  color: ${colors.TEXT};
  font-size: 12px;
  text-align: left;
  font-family: ${useFontFamily(400)};
`;

const StyledFeatured = styled.View`
  width: 160px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.TEXT};
  transform: rotate(50deg);
  position: absolute;
  z-index: 1;
  margin-top: 25px;
  margin-left: 314px;
  padding: 5px;
`;

const StyledFeaturedText = styled.Text`
  color: ${colors.WHITE};
  font-size: 16px;
  text-align: center;
  font-family: ${useFontFamily(600)};
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 180px;
`;

const StyledImageTransform = styled.Image`
  width: 100%;
  height: 180px;
  transform: scaleX(-1);
`;

export {
  StyledContainer,
  StyledTitle,
  StyledImage,
  StyledViewContent,
  StyledViewBackground,
  StyledViewTitle,
  StyledViewTag,
  StyledTextTag,
  StyledFlatList,
  StyledViewContainerFlat,
  StyledViewContainerTitle,
  StyledViewContainerFooter,
  StyledTextFooter,
  StyledViewFooter,
  StyledViewContainerDescription,
  StyledViewTitleDescription,
  StyledDescription,
  StyledFeatured,
  StyledFeaturedText,
  StyledImageTransform
};
