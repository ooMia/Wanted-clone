'use client'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AlertDialog from "../../components/AlertDialog";
import {useContext} from "react";
import {DialogContext, DialogDispatchContext} from "../../contexts/DialogContext";
import {useForm} from "react-hook-form";

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

export default function SignIn() {

    const dialogState = useContext(DialogContext)
    const dialogsDispatch = useContext(DialogDispatchContext)

    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmitHandler = (data, e) => {

        const [email, pw] = ['helloworld', 'Qwer!234']

        const isValid = data.password.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=]).{8,}") !== null
        if (!isValid) errorDialog("비밀번호 규칙 오류", "영소/대문자와 특수기호 1개 포함, 8자 이상")
        else if (data.email === email && data.password === pw) {
            errorDialog("로그인 성공",`반갑습니다, ${email}`)
            console.log(data)
        } else errorDialog("로그인 실패","등록되지 않은 사용자입니다.")

        // console.log("--")
        // console.log(e)
    }


    const errorDialog = (title, message) => {

        dialogsDispatch({
            type: "edit", dialogName: "FormError", dialog: {
                title: title, description: message, buttons: [{
                    // should assign callback
                    name: "Confirm", callback: () => {

                    },
                }],
            },
        })
        dialogsDispatch({type: "setTarget", target: dialogState.dialogMap["FormError"]})
        dialogsDispatch({type: "on"});
    }

    return (<ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            fullWidth
                            autoComplete="email"
                            // type="email"
                            {...register("email",
                                {required: true})}
                            placeholder="Email"/>
                        {errors.email && <p>Email is required.</p>}

                        <TextField
                            margin="normal"
                            fullWidth
                            type="password"
                            autoComplete="current-password"

                            {...register("password", {
                                // pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=]).{8,}/,
                                minLength: 8,
                                required: true,
                            })}
                            placeholder="Password"/>
                        {/*{errors.password && errors.password.type === "pattern" &&*/}
                        {/*    <Typography>Password should contains at least one lower/upper/special letter</Typography>}*/}
                        {errors.password && errors.password.type === "minLength" &&
                            <Typography>Password is longer than 8 letters.</Typography>}
                        {errors.password && errors.password.type === "required" &&
                            <Typography>Password is required.</Typography>}


                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{mt: 5}}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <AlertDialog/>
    </ThemeProvider>);
}