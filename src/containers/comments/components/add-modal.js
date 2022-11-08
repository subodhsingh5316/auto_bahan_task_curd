import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { addCommentStart } from "../../../redux/comments/comments.actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "250px",
  },
  add: {
    height: "50px",
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    zIndex: "1000",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function AddCommentModal({ addCommentStart }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    body: "",
    name: "",
    email: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handlePost = (event) => {
    const { name, email, body } = state;
    event.preventDefault();
    const data = { postId: 1, email, name, body };
    addCommentStart(data);
    handleClose();
    setState({
      body: "",
      name: "",
      email: "",
    });
  };

  return (
    <div>
      {/* <Button
        onClick={handleOpen}
        variant={'contained'}
        color={'secondary'}
        className={classes.add}
      >
        Add <Add color={'primary'} fontSize={'small'} />
      </Button> */}
      <Fab
        onClick={handleOpen}
        color={"secondary"}
        className={classes.add}
        aria-label="add"
      >
        <AddIcon />
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant={"h5"} component={"h6"}>
              Add New Comment
            </Typography>
            <form onSubmit={handlePost}>
              <TextField
                label={"Name"}
                name={"name"}
                value={state.name}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label={"Email"}
                name={"email"}
                value={state.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label={"Body"}
                name={"body"}
                value={state.body}
                onChange={handleChange}
                fullWidth
              />

              <Button
                onClick={handlePost}
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
              >
                Create
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCommentStart: (data) => dispatch(addCommentStart(data)),
});

export default connect(null, mapDispatchToProps)(AddCommentModal);
