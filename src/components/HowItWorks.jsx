/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import {
  Button,
  Box,
  Typography,
  makeStyles,
  Container,
  CssBaseline,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(1),
  },
}));

const HowItWorks = ({
  backHome, cookie, privacy, howItWorks,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Как работи?
          </Typography>
          <Typography variant="body2" gutterBottom>
            След като попълните формата за сигнал на сайта ни,
            това задейства стриктен автоматизиран проект, ще подготвим сигнала Ви
            ще го изпратим до Регионалната Здравна Инспекция на областа, която се
            избрали при подаването на сигнала!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={backHome}
            className={classes.button}
          >
            Към Началото
          </Button>
          <Box className={classes.fab}>
            <Footer cookie={cookie} privacy={privacy} howItWorks={howItWorks} />
          </Box>
        </Container>
      </div>
    </>
  );
};

export default HowItWorks;
HowItWorks.propTypes = {
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
  backHome: PropTypes.func.isRequired,
};
