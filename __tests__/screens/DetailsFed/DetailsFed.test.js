import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import DetailsFed from '@/screens/DetailsFed';

describe('tests in DetailsFed Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<DetailsFed />);
  });

  test('renders correctly', () => {
    renderWithTheme(<DetailsFed />);
  });
});
