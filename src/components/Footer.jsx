/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  Typography,
} from '@material-ui/core';


const Footer = ({ cookie, privacy, howItWorks }) => (
  <>

    <Typography variant="body2" color="textSecondary" align="center">
      <Button onClick={cookie}>Бисквитки</Button>
      <Button onClick={privacy}>Лични данни</Button>
      <Button onClick={howItWorks}>Как работи?</Button>
      <br />
      {'© '}

      <Link color="inherit" href="https://valeri.ml/">
        Faibler
      </Link>
      {' '}
      {new Date().getFullYear()}
      . Всички права запазени!
      <br />
      Faibler не носи отговорност за невярна и грешно подадена информация.
      <br />
    </Typography>
  </>
);

export default Footer;

Footer.propTypes = {
  cookie: PropTypes.func.isRequired,
  privacy: PropTypes.func.isRequired,
  howItWorks: PropTypes.func.isRequired,
};
