import React from 'react';

import TextField from '@material-ui/core/TextField';

export default function (props) {
  const { label, value, onChange } = props;
  return (<TextField
    fullWidth
    label={label}
    value={value}
    multiline
    rows="28"
    margin="normal"
    variant="outlined"
    onChange={onChange}
  />);
}