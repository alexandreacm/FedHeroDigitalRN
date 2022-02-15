import styled from 'styled-components/native';
import colors from '@/theme/colors';
import Lottie from 'lottie-react-native';

const StyledBackground = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const StyledFlatList = styled.FlatList`
  margin-top: 10px;
`;

const StyledEmptyListContainer = styled.View`
  flex: 1;
  margin-top: 100px;
`;

const StyledLottie = styled(Lottie)`
  height: 200px;
  width: 200px;
  align-self: center;
`;

const StyledEmptyTitle = styled.Text`
  color: ${colors.TEXT};
  font-size: 20px;
  text-align: center;
`;

export {
  StyledBackground,
  StyledFlatList,
  StyledEmptyListContainer,
  StyledEmptyTitle,
  StyledLottie
};
