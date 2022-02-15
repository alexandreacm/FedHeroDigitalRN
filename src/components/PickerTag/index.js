import React from 'react';
import { Picker } from '@react-native-picker/picker';

import { StyledSelect } from './styles';

export default function PickerTag({ setSelectedValue, selectedValue, items }) {
  return (
    <StyledSelect>
      <Picker onValueChange={setSelectedValue} selectedValue={selectedValue}>
        {items.map((item, index) => {
          return <Picker.Item key={index} label={item} value={item} />;
        })}
      </Picker>
    </StyledSelect>
  );
}
