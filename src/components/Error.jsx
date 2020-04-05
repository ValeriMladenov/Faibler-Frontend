/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(1),
    alignItems: 'center',
  },

}));

const Error = ({ cookie, privacy, howItWorks }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BugReportIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Възникна грешка, моля опитайте отново по-късно
            </Typography>
            <Box className={classes.fab}>
              <Footer cookie={cookie} privacy={privacy} howItWorks={howItWorks} />
            </Box>
          </div>
        </Grid>
      </Grid>

    </>
  );
};

export default Error;

Error.propTypes = {
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
};
