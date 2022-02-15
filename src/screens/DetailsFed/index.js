import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import GestureFlipView from 'react-native-gesture-flip-card';

import {
  StyledContainer,
  StyledTitle,
  StyledImage,
  StyledViewBackground,
  StyledViewTitle,
  StyledViewTag,
  StyledTextTag,
  StyledFlatList,
  StyledViewContainerTitle,
  StyledViewContainerFlat,
  StyledViewContainerFooter,
  StyledTextFooter,
  StyledViewFooter,
  StyledViewContainerDescription,
  StyledViewTitleDescription,
  StyledDescription,
  StyledFeatured,
  StyledFeaturedText,
  StyledImageTransform
} from './styles';

export default function DetailsFed() {
  const {
    params: { data }
  } = useRoute();
  const [tags] = useState(data?.tags);

  function renderBack() {
    return (
      <StyledViewBackground>
        {data?.featured ? (
          <StyledFeatured>
            <StyledFeaturedText>FEATURED</StyledFeaturedText>
          </StyledFeatured>
        ) : (
          <></>
        )}

        <StyledImageTransform
          source={{ uri: data?.image }}
          width='100%'
          height='auto'
          resizeMode='cover'
        />

        <StyledViewContainerTitle>
          <StyledViewTitle>
            <StyledTitle>{data?.title}</StyledTitle>
          </StyledViewTitle>
        </StyledViewContainerTitle>

        <StyledViewContainerFlat>
          <StyledFlatList
            data={tags}
            renderItem={({ item }) => (
              <StyledViewTag>
                <StyledTextTag>{item}</StyledTextTag>
              </StyledViewTag>
            )}
            horizontal={false}
            numColumns={2}
          />
        </StyledViewContainerFlat>
        <StyledViewContainerFooter>
          <StyledViewFooter>
            <StyledTextFooter>LEARN MORE</StyledTextFooter>
          </StyledViewFooter>
        </StyledViewContainerFooter>
      </StyledViewBackground>
    );
  }

  function renderFront() {
    return (
      <StyledViewBackground>
        {data?.featured ? (
          <StyledFeatured>
            <StyledFeaturedText>FEATURED</StyledFeaturedText>
          </StyledFeatured>
        ) : (
          <></>
        )}

        <StyledImage
          source={{ uri: data.image }}
          width='100%'
          height='auto'
          resizeMode='cover'
        />

        <StyledViewContainerTitle>
          <StyledViewTitle>
            <StyledTitle>{data?.title}</StyledTitle>
          </StyledViewTitle>
        </StyledViewContainerTitle>

        <StyledViewContainerDescription>
          <StyledViewTitleDescription>
            <StyledDescription>{data?.description}</StyledDescription>
          </StyledViewTitleDescription>
        </StyledViewContainerDescription>
      </StyledViewBackground>
    );
  }

  return (
    <StyledContainer>
      <GestureFlipView width={440} height={550}>
        {renderFront()}
        {renderBack()}
      </GestureFlipView>
    </StyledContainer>
  );
}
