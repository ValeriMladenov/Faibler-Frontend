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
  Button,
  Avatar,
  CssBaseline,
  Typography,
  Container,
} from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
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
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  desc: {
    marginTop: theme.spacing(4),
  },
}));
const Start = ({
  nextStep, cookie, privacy, howItWorks,
}) => {
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ReportProblemIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Подаване на сигнал за извършено нарушение по време на Извънредното положение в РБ
            {' '}
          </Typography>
          <Typography className={classes.desc} variant="body2" align="center">
            Тази платформа позволява изпращането на сигнали за нередности като: Работещи барове и ресторанти, заведения за бързо обслужване,
            питейни заведения, кафе сладкарници, Молове включително и провеждането на Масови мероприятия и др. упоменати в Заповед № РД-01-124/13.03.2020 г. на Министъра на Здравеопазването. По време на Извънредно положение за България.
            {' '}
            <br />
            {' '}
            При получаване на сигнал Faibler ще извърши автоматизирана обработка и ще го изпрати
            директно до Регионалата Здравна Инспекция според избраната област.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={nextStep}
            className={classes.button}
          >
            Подай сигнал
          </Button>
        </div>
        <Footer cookie={cookie} privacy={privacy} howItWorks={howItWorks} />
      </Container>
    </>
  );
};

export default Start;

Start.propTypes = {
  nextStep: PropTypes.func.isRequired,
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
};
