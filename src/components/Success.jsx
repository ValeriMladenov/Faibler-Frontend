/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import {
  makeStyles,
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Link,
  Grid,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';


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
    bottom: theme.spacing(1),
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
            <Box className={classes.fab}>
              <Typography variant="body2" color="textSecondary" align="center">
                {'© '}

                <Link color="inherit" href="https://valeri.ml/">
                  Faibler
                </Link>
                {' '}
                {new Date().getFullYear()}
                . Всички права запазени!
                {' '}
                <br />
                Faiber не носи отговорност за невярна и грешно подадена информация.
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>

    </>
  );
};

export default Success;
