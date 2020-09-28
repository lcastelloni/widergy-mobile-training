import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styleForm from '../AppForm/style';

const RenderInput = props => {
  const { meta, input, ...inputProps } = props;

  return (
    <View>
      <Text style={styleForm.formLabels}>{props.label}</Text>
      <TextInput
        style={styleForm.inputBox}
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
      />
      {meta.touched &&
        ((meta.error && (
          <View style={styleForm.errorMessage}>
            <Text style={styleForm.textError}>{meta.error}</Text>
          </View>
        )) ||
          (meta.warning && <Text>{meta.warning}</Text>))}
    </View>
  );
};

export default RenderInput;
