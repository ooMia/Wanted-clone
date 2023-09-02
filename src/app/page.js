'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomizedSnackbars from "../components/CustomizedSnackbars";
import CustomDialogsDemo from "../components/CustomDialogsDemo";


export default function Home() {

    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="a" sx={{flexGrow: 1}} href="/">
                    Home
                </Typography>
                <Button color="inherit" href="/login">Login</Button>
            </Toolbar>
        </AppBar>

        <Box style={{display: "flex", flexDirection: "column"}}>
            <CustomizedSnackbars/>
            <CustomDialogsDemo/>
        </Box>

    </Box>);
}