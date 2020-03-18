/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  makeStyles,
  Button,
  Avatar,
  CssBaseline,
  Grid,
  Typography,
  Container,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';
import * as yup from 'yup';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { useQuery } from '@apollo/react-hooks';
import { GETALLREGIONS } from '../utils/graphql/queries';
import Footer from './Footer';

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
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const validationSchema = yup.object({
  address: yup
    .string()
    .required('Адреса е задължителен')
    .max(100),
  scname: yup
    .string()
    .required('Името е задължително')
    .max(50),
  desc: yup
    .string()
    .required('Описанието е задължително')
    .max(30, 'Описанието трябва да е максимум 30 символа'),
  region: yup
    .string()
    .required('Изберете област'),
});
const ReportDetails = ({
  formData, setFormData, prevStep, nextStep, cookie, privacy, howItWorks,
}) => {
  const { data, loading } = useQuery(GETALLREGIONS);
  const classes = useStyles();
  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }
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
            {({
              values,
              touched,
              errors,
              handleChange,
            }) => (
              <Form className={classes.form}>
                <TextField
                  select
                  id="region"
                  margin="normal"
                  error={touched.region && Boolean(errors.region)}
                  helperText={touched.region && errors.region}
                  label="Изберете регион"
                  variant="outlined"
                  value={values.region}
                  onChange={handleChange('region')}
                  fullWidth
                >
                  {data.getAllRegions.map((regionItem) => (
                    <MenuItem
                      key={regionItem
                        .id}
                      value={regionItem
                        .name}
                    >
                      {regionItem.name}

                    </MenuItem>
                  ))}
                </TextField>
                <Field
                  name="scname"
                  label="Име на търговския обект"
                  margin="normal"
                  as={TextField}
                  error={touched.scname && Boolean(errors.scname)}
                  helperText={touched.scname && errors.scname}
                  variant="outlined"
                  fullWidth
                />
                <Typography variant="body2" color="textSecondary" align="center">Позволено е посочването на псевдоним</Typography>
                <Field
                  name="address"
                  label="Град и адрес на търговския обект"
                  margin="normal"
                  as={TextField}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  name="desc"
                  label="Нарушение (пр. Работещо заведение)"
                  margin="normal"
                  as={TextField}
                  error={touched.desc && Boolean(errors.desc)}
                  helperText={touched.desc && errors.desc}
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
            )}
          </Formik>
        </div>
        <Footer cookie={cookie} privacy={privacy} howItWorks={howItWorks} />
      </Container>
    </>
  );
};

export default ReportDetails;

ReportDetails.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
};
