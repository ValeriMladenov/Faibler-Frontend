/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

const Loading = () => (
  <>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <CircularProgress />
    </Grid>
  </>
);

export default Loading;
