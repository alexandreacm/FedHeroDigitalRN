import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  LOADING_FED,
  LOADING_TAGS,
  LOADING_FILTER_FED
} from '@/store/slices/fedSlice';

import colors from '@/theme/colors';
import FedList from '@/components/FedList';

import PickerTag from '@/components/PickerTag';

import {
  StyledBackground,
  StyledLabel as Label,
  StyledNoInternetView,
  StyledNoInternetText
} from './styles';

import useConnection from '@/hooks/useConnection';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState(null);
  const { connected } = useConnection();
  const checkConnection = !connected && connected != null;
  const dispatch = useDispatch();
  const { isLoading, fedData, tags, hasError, errorMessage } = useSelector(
    ({ feds }) => feds
  );

  useEffect(() => {
    if (selectedValue == 'All tags') {
      dispatch(LOADING_FED());
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selectedValue !== 'All tags') {
      dispatch(LOADING_FILTER_FED({ selectedValue }));
    }
  }, [selectedValue]);

  useEffect(() => {
    dispatch(LOADING_FED());
    dispatch(LOADING_TAGS());
  }, []);

  return (
    <StyledBackground>
      <PickerTag
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
        items={tags}
      />

      {checkConnection && (
        <StyledNoInternetView>
          <StyledNoInternetText>OffLine</StyledNoInternetText>
        </StyledNoInternetView>
      )}

      {hasError && (
        <Label
          fontWeight={500}
          lineHeight={25}
          fontSize={15}
          marginBottom={15}
          padding={10}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      )}

      <FedList fedData={fedData && fedData} isLoading={isLoading} />
    </StyledBackground>
  );
}
