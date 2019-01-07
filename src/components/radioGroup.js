import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function (props) {
  const { label, name, value, onChange, items } = props;
  return (
    <RadioGroup
      aria-label={label}
      name={name}
      value={value}
      onChange={onChange}
    >
      {items.map((item, id) => (
        <FormControlLabel
          key={id}
          value={item.value}
          control={<Radio color="primary"/>}
          label={item.label}
          disabled={item.disabled}
        />
      ))}
    </RadioGroup>
  );
}