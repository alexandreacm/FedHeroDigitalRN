import { put, call, takeLatest } from 'redux-saga/effects';
import {
  LOADING_FED,
  FED_SUCCESS,
  FED_FAILURE,
  LOADING_FILTER_FED,
  FILTER_FED_SUCCESS,
  FILTER_FED_FAILURE,
  LOADING_TAGS,
  TAGS_SUCCESS,
  TAGS_FAILURE
} from '@/store/slices/fedSlice';

import { BASE_URL } from '@env';

export function* loadingFed() {
  try {
    const response = yield call(
      fetch,
      `${BASE_URL}/hero-engineering-public/interview/fe-code-challenge.json`
    );

    const { cards } = yield response.json();
    const fedData = cards;

    yield put(FED_SUCCESS({ fedData }));
  } catch (error) {
    yield put(FED_FAILURE({ errorMessage: error.response.data.message }));
  }
}

export function* loadingTags() {
  try {
    let tags = ['All tags'];

    const response = yield call(
      fetch,
      `${BASE_URL}/hero-engineering-public/interview/fe-code-challenge.json`
    );

    const { cards } = yield response.json();
    const fedData = cards;

    fedData.forEach(element => {
      element?.tags.map(tag => {
        if (!tags.includes(String(tag))) {
          tags.push(String(tag));
        }
      });
    });

    yield put(TAGS_SUCCESS({ tags }));
  } catch (error) {
    yield put(TAGS_FAILURE({ errorMessage: error.response.data.message }));
  }
}

export function* filterFeds({ payload: { selectedValue } }) {
  try {
    const response = yield call(
      fetch,
      `${BASE_URL}/hero-engineering-public/interview/fe-code-challenge.json`
    );
    const { cards } = yield response.json();

    const feds = cards.filter(item => item.tags.includes(selectedValue));

    yield put(FILTER_FED_SUCCESS({ fedData: feds }));
  } catch (error) {
    yield put(
      FILTER_FED_FAILURE({ errorMessage: error.response.data.message })
    );
  }
}

export default function* watcher() {
  yield takeLatest(LOADING_FED, loadingFed);
  yield takeLatest(LOADING_TAGS, loadingTags);
  yield takeLatest(LOADING_FILTER_FED, filterFeds);
}
