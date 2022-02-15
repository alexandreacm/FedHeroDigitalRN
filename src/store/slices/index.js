import { combineReducers } from '@reduxjs/toolkit';

import fedSlice, { fedState } from '@/store/slices/fedSlice';

export const globalState = {
  fed: fedState
};

export default combineReducers({
  feds: fedSlice
});
