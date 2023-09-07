'use client'

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {DialogActions, DialogContent, DialogContentText} from "@mui/material";
import Button from "@mui/material/Button";
import {DialogContext, DialogDispatchContext} from "../contexts/DialogContext";
import {useContext} from "react";

export default function AlertDialog() {

    const dialogState = useContext(DialogContext)
    const dialogsDispatch = useContext(DialogDispatchContext)
    const targetDialog = dialogState.dialogs[dialogState.target]

    const handleClose = (e, callback) => {
        dialogsDispatch({type: "off"})
        if (typeof callback === 'function') callback()
        console.log(callback)
    };


    return (
        <div>
            <Dialog
                open={dialogState.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {targetDialog.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {targetDialog.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {targetDialog.buttons.map((button) =>
                        (<Button onClick={(e) => handleClose(e, button.callback)}
                                 key={button.name}>{button.name}</Button>))}
                </DialogActions>
            </Dialog>
        </div>
    );
}