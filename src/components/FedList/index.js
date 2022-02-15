import React from 'react';
import {
  StyledBackground,
  StyledFlatList,
  StyledEmptyListContainer,
  StyledEmptyTitle,
  StyledLottie
} from './styles';

import Loading from '@/components/Loading';
import FedCard from '@/components/FedCard';

import emptyList from '@/assets/animations/empty-list.json';

export default function FedList({ fedData, isLoading }) {
  function renderEmptyList() {
    return (
      <StyledEmptyListContainer>
        <StyledLottie source={emptyList} autoPlay loop />
        <StyledEmptyTitle>There are not feds</StyledEmptyTitle>
      </StyledEmptyListContainer>
    );
  }

  return (
    <StyledBackground>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFlatList
          data={fedData}
          renderItem={({ item }) => <FedCard data={item} />}
          ListEmptyComponent={renderEmptyList}
          horizontal={false}
          numColumns={2}
        />
      )}
    </StyledBackground>
  );
}
