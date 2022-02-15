import { all } from 'redux-saga/effects';
import fedSaga from '@/store/sagas/fedSaga';

export default function* rootSaga() {
  yield all([fedSaga()]);
}
