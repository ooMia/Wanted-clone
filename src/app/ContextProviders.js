import React from 'react';
import {DialogProvider} from "../contexts/DialogContext";

const ContextProviders = ({children}) => {
    return (
        <DialogProvider>
            {children}
        </DialogProvider>
    );
};

export default ContextProviders;