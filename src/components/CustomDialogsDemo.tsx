import Button from "@mui/material/Button";
import AlertDialog from "./AlertDialog";
import {DialogContext, DialogDispatchContext} from "../contexts/DialogContext";
import {useContext} from "react";
const CustomDialogsDemo = () => {

    const dialogState = useContext(DialogContext)
    const dialogsDispatch = useContext(DialogDispatchContext)


    return (<>
        <Button onClick={() => {
            dialogsDispatch({
                type: "edit", dialogName: "myDialog", dialog: {
                    title: "bcc", description: "asaad", buttons: [{
                        name: "Confirm", callback: () => alert("confirmed")
                    }, {
                        name: "Cancel", callback: () => alert("cancelled")
                    }],
                },
            })
            console.log(dialogState)
        }}>Add Dialog</Button>

        <Button onClick={() => {
            dialogsDispatch({type: "setTarget", target: dialogState.nDialogs - 1})
            dialogsDispatch({type: "on"});
            console.log(dialogState)
        }}>Open Last Dialog</Button>

        <Button onClick={() => {
            dialogsDispatch({type: "setTarget", target: dialogState.dialogMap["myDialog"]})
            dialogsDispatch({type: "on"});
            console.log(dialogState)
        }}>Open Dialog By dialogName</Button>

        {/*<Button onClick={() => {*/}
        {/*    dialogsDispatch({type: "remove", target: dialogState.dialogMap["myDialog"]})*/}
        {/*    console.log(dialogState)*/}
        {/*}}>Remove Dialog By dialogName</Button>*/}

        {/*<Button onClick={() => {*/}
        {/*    dialogsDispatch({type: "remove", target: dialogState.nDialogs - 1})*/}
        {/*    console.log(dialogState)*/}
        {/*}}>Remove Last Dialog</Button>*/}

        <AlertDialog/>
    </>);
};

export default CustomDialogsDemo;