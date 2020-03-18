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

const Cookie = ({
  backHome, cookie, privacy, howItWorks,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Бисквитки
          </Typography>
          <Typography variant="body2" gutterBottom>
            Бисквитки
            Нашият уеб сайт използва така наречените „бисквитки“. Това са малки текстови файлове,
            които се зареждат в браузъра и се съхраняват на Вашето крайно устройство.
            Те са безобидни.
            Използваме ги, за да поддържаме сайта си лесен за употреба. Някои „бисквитки“
            остават съхранени на устройството Ви, докато не ги изтриете. Те ни позволяват да
            разпознаем Вашия браузър при следващото ви посещение в нашия сайт.
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

export default Cookie;
Cookie.propTypes = {
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
  backHome: PropTypes.func.isRequired,
};
