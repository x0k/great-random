import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = {
  button: {
    width: '100%',
    marginBottom: 10,
  }
};

export default withStyles(styles)(function (props) {
  const { classes, children, primary, onClick } = props;
  return (
    <Button
      color={primary ? 'primary' : 'default'}
      className={classes.button}
      onClick={onClick}
      variant="outlined"
    >
      {children}
    </Button>
  );
});