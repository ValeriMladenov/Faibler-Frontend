/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Confirm = ({
  formData, prevStep, sendDataProcess,
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
            Подаване на сигнал
            {' '}
            <br />
            {' '}
            (Проверка на попълнените данни)
          </Typography>
          <Formik
            initialValues={formData}
            onSubmit={() => {
              sendDataProcess();
            }}
          >
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    disabled
                    name="firstName"
                    label="Име"
                    margin="normal"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    disabled
                    name="lastName"
                    label="Фамилия"
                    margin="normal"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Field
                disabled
                type="email"
                name="email"
                label="Имейл"
                margin="normal"
                as={TextField}

                variant="outlined"
                fullWidth
              />
              <Field
                disabled
                type="phone"
                name="phone"
                label="Телефон"
                margin="normal"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <Field
                disabled
                name="region"
                label="Област"
                margin="normal"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <Typography variant="body2" color="textSecondary" align="center">
                За сигнала
              </Typography>
              <Field
                disabled
                name="scname"
                label="Име на търговския обект"
                margin="normal"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <Field
                disabled
                name="address"
                label="Адрес"
                margin="normal"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <Field
                disabled
                name="desc"
                label="Описание пр. Работещо заведение"
                margin="normal"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={prevStep}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.submit}
                  >
                    Назад
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.submit}
                  >
                    Продължи
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
        <Box mt={8}>
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
      </Container>
    </>
  );
};

export default Confirm;

Confirm.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  prevStep: PropTypes.func.isRequired,
  sendDataProcess: PropTypes.func.isRequired,
};
