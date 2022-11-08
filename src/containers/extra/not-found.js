import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import notFound from "../../static/404.svg";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  not: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid item xs={12} md={8} className={classes.not}>
        <Paper component={"img"} src={notFound} width={"100%"} />
        <Tooltip title={"Can we go Home now? 😖"}>
          <Button
            variant={"outlined"}
            color={"primary"}
            component={RouterLink}
            to={"/"}
          >
            Go Home
          </Button>
        </Tooltip>
      </Grid>
    </Box>
  );
}

export default NotFound;
