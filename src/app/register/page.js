'use client'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useContext, useRef} from "react";
import {DialogContext, DialogDispatchContext} from "../../contexts/DialogContext";
import AlertDialog from "../../components/AlertDialog";

function Copyright(props) {
    return (<Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>);
}

const defaultTheme = createTheme();

export default function SignUp() {

    const refForm = useRef()
    const refPassword = useRef();

    const dialogState = useContext(DialogContext)
    const dialogsDispatch = useContext(DialogDispatchContext)

    const errorDialog = (message) => {
        dialogsDispatch({
            type: "edit", dialogName: "FormError", dialog: {
                title: "경고", description: message, buttons: [{
                    // should assign callback
                    name: "Confirm", callback: ()=>{},
                }],
            },
        })
        dialogsDispatch({type: "setTarget", target: dialogState.dialogMap["FormError"]})
        dialogsDispatch({type: "on"});
    }

    const validateForm= (form) => {
        // console.log("validateForm")

        const isValid = form.password.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=]).{8,}") !== null
        if (!isValid) errorDialog("영소/대문자와 특수기호 1개 포함, 8자 이상")

        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(refForm.current);
        const dataObject = {
            firstname: data.get('firstName'),
            lastname: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }

        if (validateForm(dataObject)) {
            // TODO: send data
            console.log(dataObject)
            // dispatchEvent(new Event('submit'))
        }
    };

    return (<ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={{
                marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <Box component="form" ref={refForm} onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                autoComplete="given-name"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                autoComplete="family-name"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email Address"
                                autoComplete="off"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                ref={refPassword}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                required
                                fullWidth
                                // inputProps={{
                                //     pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=]).{8,}`
                                // }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/src/app/login/page" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{mt: 5}}/>
        </Container>
        {/* Dialog Component */}
        <AlertDialog/>
    </ThemeProvider>);
}