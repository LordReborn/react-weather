import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { Link as LinkRouter } from "react-router-dom";
import { WiDaySunny } from "react-icons/wi";
import ErrorBoundary from "./../../generic/ErrorBoundary";
import {
  AppBar,
  IconButton,
  Grid,
  Link,
  Typography,
  Toolbar,
} from "@material-ui/core/";

const AppFrame = ({ children }) => {
  const iconContextSize = useMemo(() => ({ size: "2em" }), []);
  return (
    <Grid container justify="center" spacing={1}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              component={LinkRouter}
              to="/main"
              color="inherit"
              aria-label="menu"
            >
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
