import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function (props) {
  let { items, onChange } = props;
  let keys = Object.keys(items);
  return (
    <FormGroup>
      {keys.map(key => (
        <FormControlLabel
          key={key}
          control={<Checkbox
            checked={items[key].value}
            onChange={onChange(key)}
            value={key}
            color="primary"
          />}
          label={items[key].label}
        />
      ))}
    </FormGroup>
  );
}