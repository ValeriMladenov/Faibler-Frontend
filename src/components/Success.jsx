/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#72B452',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit,
  },

}));

const Success = () => {
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
              <CheckIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Сигналът е изпратен
            </Typography>
          </div>
          <Box className={classes.fab}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'© '}

              <Link color="inherit" href="https://valeri.ml/">
                Faibler
              </Link>
              {' '}
              {new Date().getFullYear()}
              . Всички права запазени!
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </>
  );
};

export default Success;
