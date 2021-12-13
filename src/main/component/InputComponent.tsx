/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const InputComponent = function InputComponent(props: any) {
  return (
    <div className="input-class">
      <input {...props} />
    </div>
  );
};
export default InputComponent;
