/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  makeStyles,
  Button,
  Avatar,
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as yup from 'yup';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Името е задължително')
    .max(20),
  lastName: yup
    .string()
    .required('Фамилията е задължителна')
    .max(20),
  email: yup
    .string()
    .email('Невалиден имейл')
    .required('Имейла е задължителен'),
  phone: yup
    .string().matches(phoneRegExp, 'Телефонния номер не е валиден')
    .max(13)
    .required('Телефона е задължителен'),
});
const UserDetails = ({ formData, setFormData, nextStep }) => {
  const [snackBar, setSnackBar] = useState(true);
  const handleClose = () => { setSnackBar(false); };
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
            (Лична информация)
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      label="Име"
                      margin="normal"
                      as={TextField}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      label="Фамилия"
                      margin="normal"
                      as={TextField}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Field
                  type="email"
                  name="email"
                  label="Имейл"
                  margin="normal"
                  as={TextField}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  type="phone"
                  name="phone"
                  label="Телефон"
                  margin="normal"
                  as={TextField}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.submit}
                >
                  Продължи
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={snackBar}
          autoHideDuration={30000}
          onClose={handleClose}
        >
          <MuiAlert
            variant="filled"
            key="top right"
            onClose={handleClose}
            severity="success"
          >
            Faibler позволява изпращането на сигнали до областните РЗИ
            {' '}
          </MuiAlert>

        </Snackbar>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}

            <Link color="inherit" href="https://valeri.ml/">
              Faibler
            </Link>
            {' '}
            {new Date().getFullYear()}
            . Всички права запазени!
            <br />
            Faibler не носи отговорност за невярна и грешно подадена информация.
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
  nextStep: PropTypes.func.isRequired,
};
