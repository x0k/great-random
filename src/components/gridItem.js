import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    padding: 20,
  }
};

export default withStyles(styles)(function (props) {
  const { classes, size, children } = props;
  return (
    <Grid item xs={size}>
      <div className={classes.container}>
        {children}
      </div>
    </Grid>
  );
});