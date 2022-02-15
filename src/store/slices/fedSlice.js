import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fedData: [],
  tags: [],
  isLoading: false,
  hasError: false,
  errorMessage: null
};

const fedSlice = createSlice({
  name: 'feds',
  initialState,
  reducers: {
    LOADING_FED: state => ({ ...state, isLoading: true }),
    FED_SUCCESS: (state, { payload: { fedData } }) => ({
      ...state,
      isLoading: false,
      fedData
    }),
    FED_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    }),
    LOADING_TAGS: state => ({ ...state, isLoading: true }),
    TAGS_SUCCESS: (state, { payload: { tags } }) => ({
      ...state,
      isLoading: false,
      tags
    }),
    TAGS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    }),
    LOADING_FILTER_FED: state => ({ ...state, isLoading: true }),
    FILTER_FED_SUCCESS: (state, { payload: { fedData } }) => ({
      ...state,
      isLoading: false,
      fedData
    }),
    FILTER_FED_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    })
  }
});

const { actions, reducer } = fedSlice;

export const fedState = initialState;

export const {
  LOADING_FED,
  FED_SUCCESS,
  FED_FAILURE,
  LOADING_FILTER_FED,
  FILTER_FED_SUCCESS,
  FILTER_FED_FAILURE,
  LOADING_TAGS,
  TAGS_SUCCESS,
  TAGS_FAILURE
} = actions;

export default reducer;
