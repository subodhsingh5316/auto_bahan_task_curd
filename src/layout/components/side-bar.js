import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItemLink from "../../containers/components/link";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  AllInbox,
  Comment,
  People,
  Photo,
  PhotoLibrary,
  PlaylistAddCheck,
} from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },

  buttonLinks: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    padding: "2vh 5px",
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  link: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));
const Links = [
  { primary: "Posts", to: "/posts", icon: <AllInbox color={"primary"} /> }
];

export default function SideBarShared() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: true });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" color="inherit" component={RouterLink}>
            AutoBahn
          </Link>
        </Typography>
        <Divider />
        {Links.map((link) => (
          <div key={link.to}>
            <ListItemLink
              type={"list"}
              to={link.to}
              primary={link.primary}
              icon={link.icon}
            />
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("left", true)}
          edge={false}
          color={"inherit"}
          aria-label={"menu"}
        >
          <Menu />
        </IconButton>

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
