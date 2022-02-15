import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyledViewBackground,
  StyledTitle,
  StyledDescription,
  StyledImage,
  StyledViewContent,
  StyledViewFeatured
} from './styles';

export default function FedCard({ data }) {
  const { navigate } = useNavigation();
  return (
    <StyledViewBackground onPress={() => navigate('DetailsFed', { data })}>
      <StyledViewFeatured>
        <StyledImage source={{ uri: data?.image }} resizeMode='contain' />
      </StyledViewFeatured>

      <StyledViewContent>
        <StyledTitle>{data?.title}</StyledTitle>
      </StyledViewContent>
      <StyledDescription>{data?.title}</StyledDescription>
    </StyledViewBackground>
  );
}
