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

const Privacy = ({
  backHome, cookie, privacy, howItWorks,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Лични данни
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            Посещавайки Уебсайта, Вие можете да предоставите лични данни,
            като вашето име, фамилия, телефон и имейл за да използвате предлаганите услуги.

            В частност, ние може да събираме личните Ви данни с цел външни
            комуникации, като например да отговорим на Вашите заявки за
            информация, както и за да разберем по-добре Вашите очаквания.
            В нашите онлайн формуляри задължителните полета са маркирани със
            звездичка. Ако не отговорите на задължителните въпроси, ние няма
            да сме в състояние да предоставим исканата от вас услуга.

            Вашите лични данни не се обработват впоследствие по какъвто и
            да е начин, който е  несъвместим с описаните по-горе или в събираните
            формуляри цели. Те се съхраняват единствено за период от време необходим
            за постигане на тези цели.
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

export default Privacy;
Privacy.propTypes = {
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
  backHome: PropTypes.func.isRequired,
};
