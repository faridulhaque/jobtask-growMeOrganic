import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type TDialog = {
    open: boolean
    handleClose(): void;
}

const Alert = ({open, handleClose}: TDialog) => {
  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alert!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Fill out the form to continue further!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Alert;
