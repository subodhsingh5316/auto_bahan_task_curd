import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBarShared from "./side-bar";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import ListItemLink from "../../containers/components/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    textDecoration: "none",
  },
  buttonLinks: {
    margin: theme.spacing(1, 1.5),
  },
  link: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: "none",
    border: "none",
    color: "white",
  },

  borderless: {
    border: "none",
  },
}));
const Links = [
  { primary: "Comments", to: "/comments" },
  { primary: "Posts", to: "/posts" }
];
export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ background: "rgb(18,29,51)" }}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" color="inherit" component={RouterLink}>
            AutoBahn
          </Link>
        </Typography>
        <Hidden smDown>
          {Links.map((link, index) => (
            <Paper className={classes.link} elevation={0} key={index}>
              <ListItemLink primary={link.primary} to={link.to} />
            </Paper>
          ))}
        </Hidden>
        <Hidden mdUp>
          <SideBarShared />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
