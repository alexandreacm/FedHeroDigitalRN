import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';
import { useDispatch, useSelector } from 'react-redux';
import { globalState } from '@/store/slices';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => jest.fn),
    useRoute: () => ({
      params: {
        data: jest.fn
      }
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-redux');

useSelector.mockImplementation(fn => fn(globalState));
useDispatch.mockReturnValue(jest.fn);
