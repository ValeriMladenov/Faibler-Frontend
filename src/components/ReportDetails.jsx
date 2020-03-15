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
import * as yup from 'yup';
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

const validationSchema = yup.object({
  city: yup
    .string()
    .required('Населеното място е задължително')
    .max(20),
  scname: yup
    .string()
    .required('Името на търговския обект е задължително')
    .max(20),
  address: yup
    .string()
    .required('Адреса е задължителен')
    .max(100),
  desc: yup
    .string()
    .required('Описанието е задължително')
    .max(20),
});
const UserDetails = ({
  formData, setFormData, prevStep, nextStep,
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
            (Информация за сигнала)
          </Typography>
          <Formik
            initialValues={formData}
            onSubmit={(values) => {
              setFormData(values);
              nextStep();
            }}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form className={classes.form}>
                <Field
                  name="city"
                  label="Населено място на търговския обект"
                  margin="normal"
                  as={TextField}
                  error={touched.city && errors.city}
                  helperText={touched.city && errors.city}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  name="scname"
                  label="Име на търговския обект"
                  margin="normal"
                  as={TextField}
                  error={touched.scname && errors.scname}
                  helperText={touched.scname && errors.scname}
                  variant="outlined"
                  fullWidth
                />
                <Typography variant="body2" color="textSecondary" align="center">Позволено е посочването на псевдоним</Typography>
                <Field
                  name="address"
                  label="Адрес на търговския обект"
                  margin="normal"
                  as={TextField}
                  error={touched.address && errors.address}
                  helperText={touched.address && errors.address}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  name="desc"
                  label="Нарушение (пр. Работещо заведение)"
                  margin="normal"
                  as={TextField}
                  error={touched.desc && errors.desc}
                  helperText={touched.desc && errors.desc}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  type="file"
                  name="photo"
                  margin="normal"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                />
                <Typography variant="body2" color="textSecondary" align="center">Снимката не е задълнителна</Typography>
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
            )}
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

export default UserDetails;

UserDetails.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
